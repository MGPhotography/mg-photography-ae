import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { firestore } from '../../utils/firebase';
import { doc, getDoc, collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import Image from 'next/image';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content?: string;
  thumbnailUrl: string;
  youtubeVideoUrl?: string;
  createdAt: string;
}

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState<BlogPost | null>(null);
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
    const fetchBlogAndFeaturedBlogs = async () => {
      if (!slug) return;

      try {
        // Fetch the specific blog post
        const blogRef = doc(firestore, 'blogPosts', slug as string);
        const blogDoc = await getDoc(blogRef);

        if (blogDoc.exists()) {
          const blogData = { id: blogDoc.id, ...blogDoc.data() } as BlogPost;
          setBlog(blogData);

          // Fetch featured blogs (excluding the current blog)
          const blogPostsRef = collection(firestore, 'blogPosts');
          const featuredQuery = query(
            blogPostsRef, 
            where('id', '!=', blogData.id),
            orderBy('createdAt', 'desc'), 
            limit(3)
          );

          const featuredSnapshot = await getDocs(featuredQuery);
          const featuredBlogsData: BlogPost[] = featuredSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as BlogPost));

          setFeaturedBlogs(featuredBlogsData);
        } else {
          console.error('Blog not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlogAndFeaturedBlogs();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="blog-post-container">
      {/* Main Blog Content */}
      <div className="blog-post">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        
        {/* Thumbnail or YouTube Video Section */}
        {blog.youtubeVideoUrl ? (
          <HeroVideoDialog
            className="w-full mb-6"
            animationStyle="top-in-bottom-out"
            videoSrc={blog.youtubeVideoUrl}
            thumbnailSrc={blog.thumbnailUrl}
            thumbnailAlt={`${blog.title} Thumbnail`}
          />
        ) : (
          <Image
            src={blog.thumbnailUrl}
            alt={`${blog.title} Thumbnail`}
            width={1200}
            height={800}
            className="w-full h-auto object-cover mb-6 rounded-lg"
          />
        )}

        {/* Blog Content */}
        <div className="blog-content">
          <p>{blog.description}</p>
          {blog.content && <div dangerouslySetInnerHTML={{ __html: blog.content }} />}
        </div>
      </div>

      {/* Featured Blogs Section */}
      <div className="featured-blogs mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((featuredBlog) => (
            <div 
              key={featuredBlog.id} 
              className="blog-card cursor-pointer"
              onClick={() => {
                const slug = createSlug(featuredBlog.title);
                router.push(`/blog/${featuredBlog.id}/${slug}`);
              }}
            >
              {featuredBlog.youtubeVideoUrl ? (
                <HeroVideoDialog
                  className="w-full"
                  animationStyle="top-in-bottom-out"
                  videoSrc={featuredBlog.youtubeVideoUrl}
                  thumbnailSrc={featuredBlog.thumbnailUrl}
                  thumbnailAlt={`${featuredBlog.title} Thumbnail`}
                />
              ) : (
                <Image
                  src={featuredBlog.thumbnailUrl}
                  alt={`${featuredBlog.title} Thumbnail`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h3 className="font-bold mb-2">{featuredBlog.title}</h3>
                <p className="text-sm line-clamp-2">{featuredBlog.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm italic">
                    {new Date(featuredBlog.createdAt).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                  <button className="text-sm text-blue-600 hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;