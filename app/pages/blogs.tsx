"use client";

import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { firestore } from '../utils/firebase';
import './blogs.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
}

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Create a URL-friendly slug from the title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const blogPostsRef = collection(firestore, 'blogPosts');
        const q = query(blogPostsRef, orderBy('createdAt', 'desc'), limit(3));
        
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
    
    fetchLatestBlogs();
  }, []);

  if (loading) {
    return (
      <div className="blogs-section h-[auto] w-full px-0 rounded-md flex items-center justify-center">
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="blogs-section h-[auto] w-full px-0 rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden">
      <div className="blogs-container container-fluid container-lg container-xxl py-5 z-100 h-100">
        <div className="row mb-5">
          <h1 className="text-center mb-3 blog-head">Explore Our Latest Blogs!</h1>
          <p className="text-center mb-0 sub-head">Stay updated with our insights, tips, and stories curated just for you!</p>
        </div>
        <div className="row blogs-grid h-100 mx-auto mt-0">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12 blog-card p-2">
              <div>
                <Image
                  src={blog.thumbnailUrl}
                  alt={`${blog.title} Thumbnail`}
                  width={400}
                  height={300}
                  className="blog-thumbnail mb-3 w-full h-auto object-cover"
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
        {blogPosts.length === 3 && (
          <div className="row mt-5 fw-semibold mb-5 text-center">
            <button
              className="mx-auto w-auto px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => router.push('/all-blogs')}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;