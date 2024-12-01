"use client";

import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { firestore } from '../utils/firebase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { useRouter } from 'next/navigation';
import './blogs.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
  uploadType?: 'thumbnail' | 'youtube';
  youtubeUrl?: string;
  content?: string;
}

interface BlogDetailProps {
  params: {
    blogId: string;
  };
}

const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Create a URL-friendly slug from the title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    const fetchBlogDetailsAndFeaturedBlogs = async () => {
      try {
        // Fetch blog details
        const blogRef = doc(firestore, 'blogPosts', params.blogId);
        const blogSnap = await getDoc(blogRef);

        if (!blogSnap.exists()) {
          notFound();
          return;
        }

        const blogData = {
          id: blogSnap.id,
          ...blogSnap.data()
        } as BlogPost;

        setBlogPost(blogData);

        // Fetch featured blogs (excluding the current blog)
        const blogPostsRef = collection(firestore, 'blogPosts');
        const featuredQuery = query(
          blogPostsRef, 
          orderBy('createdAt', 'desc'), 
          limit(4)
        );

        const featuredSnapshot = await getDocs(featuredQuery);
        const featuredBlogsData: BlogPost[] = featuredSnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          } as BlogPost))
          .filter(blog => blog.id !== blogData.id)
          .slice(0, 3);

        setFeaturedBlogs(featuredBlogsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setLoading(false);
        notFound();
      }
    };

    fetchBlogDetailsAndFeaturedBlogs();
  }, [params.blogId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading blog details...</p>
      </div>
    );
  }

  if (!blogPost) {
    return null;
  }

  // Format date
  const formattedDate = new Date(blogPost.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Head>
        <title>{blogPost.title} | Your Blog Name</title>
        <meta name="description" content={blogPost.description} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.description} />
        <meta property="og:image" content={blogPost.thumbnailUrl} />
        <meta property="og:type" content="article" />
      </Head>

      {/* Back to Home Button */}
      <button
        onClick={() => router.push('/')}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition z-[10000]"
      >
        Back to Home
      </button>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Thumbnail or YouTube Video */}
        <div className="mb-8">
          {blogPost.uploadType === 'youtube' && blogPost.youtubeUrl ? (
            <HeroVideoDialog
              className="w-full"
              animationStyle="top-in-bottom-out"
              videoSrc={`https://www.youtube.com/embed/${blogPost.youtubeUrl.split('v=')[1].split('&')[0]}?autoplay=1`}
              thumbnailSrc={blogPost.thumbnailUrl}
              thumbnailAlt={`${blogPost.title} Thumbnail`}
            />
          ) : (
            <Image 
              src={blogPost.thumbnailUrl} 
              alt={`${blogPost.title} Thumbnail`}
              width={1200} 
              height={630} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
              priority
            />
          )}
        </div>

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {blogPost.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <time dateTime={blogPost.createdAt} className="text-sm">
              Published on {formattedDate}
            </time>
            {blogPost.uploadType === 'youtube' && blogPost.youtubeUrl && (
              <a 
                href={blogPost.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 text-sm text-blue-600 hover:underline"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        </header>

        {/* Blog Description/Content */}
        <section className="prose max-w-none">
          <p className="text-lg text-gray-800 leading-relaxed">
            {blogPost.description}
          </p>
          
          {blogPost.content && (
            <div className="mt-6">
              {blogPost.content}
            </div>
          )}
        </section>

        {/* Featured Blogs Section */}
        <section className="mt-16 mb-5">
          <h2 className="text-2xl font-semibold mb-8 mt-10">Featured Blogs</h2>
          <div className="row gap-3">
            {featuredBlogs.map((featuredBlog) => (
              <div 
                key={featuredBlog.id} 
                className="blog-card col-md-6 col-sm-12 col-lg-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden p-2"
                onClick={() => {
                  const slug = createSlug(featuredBlog.title);
                  router.push(`/blog/${featuredBlog.id}/${slug}`);
                }}
              >
                {featuredBlog.uploadType === 'youtube' && featuredBlog.youtubeUrl ? (
                  <HeroVideoDialog
                    className="w-full"
                    animationStyle="top-in-bottom-out"
                    videoSrc={featuredBlog.youtubeUrl}
                    thumbnailSrc={featuredBlog.thumbnailUrl}
                    thumbnailAlt={`${featuredBlog.title} Thumbnail`}
                  />
                ) : (
                  <Image
                    src={featuredBlog.thumbnailUrl}
                    alt={`${featuredBlog.title} Thumbnail`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                )}
                <div className="p-4 px-2">
                  <h3 className="font-semibold mb-2 text-lg">{featuredBlog.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {featuredBlog.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <time className="text-sm text-gray-500">
                      {new Date(featuredBlog.createdAt).toLocaleDateString('en-US', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </time>
                    <span className="read-more-btn w-auto py-2 px-4">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogDetail;
