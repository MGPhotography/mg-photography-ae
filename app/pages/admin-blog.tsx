"use client";

import React, { useState, useEffect } from "react";
import { 
  collection, 
  query, 
  orderBy, 
  getDocs, 
  doc, 
  deleteDoc, 
  updateDoc 
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { firestore, storage } from "../utils/firebase";
import { Input } from "../../components/ui/input";
import { TextArea } from "../../components/ui/textarea";
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
}

export function BlogManagement() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogPostsRef = collection(firestore, 'blogPosts');
      const q = query(blogPostsRef, orderBy('createdAt', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const blogList: BlogPost[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost));

      setBlogs(blogList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (blog: BlogPost) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      // Delete thumbnail from storage
      const thumbnailRef = ref(storage, blog.thumbnailUrl);
      await deleteObject(thumbnailRef);

      // Delete blog post from Firestore
      const blogDocRef = doc(firestore, 'blogPosts', blog.id);
      await deleteDoc(blogDocRef);

      // Refresh blog list
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingBlog) return;

    try {
      const blogDocRef = doc(firestore, 'blogPosts', editingBlog.id);
      await updateDoc(blogDocRef, {
        title: editingBlog.title,
        description: editingBlog.description
      });

      // Reset editing state and refresh blogs
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div className="container mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      
      {/* Edit Form */}
      {editingBlog && (
        <form onSubmit={handleEdit} className="mb-6 p-4 border rounded">
          <h3 className="text-xl mb-4">Edit Blog</h3>
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <Input
              value={editingBlog.title}
              onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <TextArea
              value={editingBlog.description}
              onChange={(e) => setEditingBlog({...editingBlog, description: e.target.value})}
              required
            />
          </div>
          <div className="flex space-x-2">
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Blog
            </button>
            <button 
              type="button" 
              onClick={() => setEditingBlog(null)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Blogs Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Thumbnail</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Created At</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="border p-2 text-center">
                  <Image 
                    src={blog.thumbnailUrl} 
                    alt={blog.title} 
                    className="w-24 h-24 object-cover mx-auto"
                    height={40}
                    width={40}
                  />
                </td>
                <td className="border p-2">{blog.title}</td>
                <td className="border p-2">{blog.description}</td>
                <td className="border p-2">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="border p-2">
                  <div className="flex space-x-2 justify-center">
                    <button 
                      onClick={() => setEditingBlog(blog)}
                      className="bg-dark text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(blog)}
                      className="bg-dark text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogManagement;