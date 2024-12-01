"use client";

import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { firestore } from '../utils/firebase';
import { useRouter } from 'next/navigation';
import './blogs.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: Date;
}
import Image from 'next/image';


const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const router = useRouter();

  // Create a URL-friendly slug from the title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const blogPostsRef = collection(firestore, 'blogPosts');
        const q = query(blogPostsRef, orderBy('createdAt', 'desc'));

        const querySnapshot = await getDocs(q);
        const blogs: BlogPost[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as BlogPost));

        setBlogPosts(blogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="blogs-section h-[auto] w-full px-0 rounded-md flex items-center justify-center">
        <p>Loading blogs...</p>
      </div>
    );
  }

  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

  return (
    
    <div className="blogs-section h-[auto] w-full px-0 rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden">
      
      <button
        onClick={() => router.push('/')}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition z-[10000]"
      >
        Back to Home
      </button>
      
      <div className="blogs-container container-fluid container-lg container-xxl py-5 z-100 h-100">
        <div className="row mb-5">
          <h1 className="text-center mb-3 blog-head">All Our Blogs</h1>
          <p className="text-center mb-0 sub-head">Dive into our complete collection of insights, tips, and stories!</p>
        </div>

        <div className="row blogs-grid h-100 mx-auto mt-0">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 blog-card p-2">
              <div>
                <Image
                  src={blog.thumbnailUrl}
                  alt={`${blog.title} Thumbnail`}
                  className="blog-thumbnail mb-3"
                  width={150}    // Example fixed width (adjust as necessary)
    height={60}
                />
                <p className="blog-title mb-1 fw-semibold ps-2">{blog.title}</p>
                <p className="blog-desc ps-2">{blog.description}</p>
              </div>
              <div className="row w-100 mx-auto justify-content-between align-items-center mt-4">
                <p className="blog-desc ps-2 w-auto mb-0 fst-italic fw-light">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
                <button
                  className="read-more-btn w-auto py-2 px-4"
                  onClick={() => {
                    const slug = createSlug(blog.title);
                    router.push(`/blog/${blog.id}/${slug}`);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded ${
                currentPage === number 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
