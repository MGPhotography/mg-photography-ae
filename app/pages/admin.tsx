"use client";

import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { TextArea } from "../../components/ui/textarea";
import { cn } from "@/lib/utils";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../utils/firebase";

export function Admin() {
  const [loading, setLoading] = useState(false);
  const [uploadType, setUploadType] = useState<'thumbnail' | 'youtube'>('thumbnail');
  const [submitStatus, setSubmitStatus] = useState<{
    status: 'success' | 'error' | null;
    message: string;
  }>({ status: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ status: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const blogTitle = formData.get('blogTitle') as string;
    const description = formData.get('description') as string;
    
    let thumbnailUrl = '';

    try {
      if (uploadType === 'thumbnail') {
        const thumbnail = formData.get('thumbnail') as File;
        const thumbnailRef = ref(storage, `blog-thumbnails/${Date.now()}_${thumbnail.name}`);
        const thumbnailSnapshot = await uploadBytes(thumbnailRef, thumbnail);
        thumbnailUrl = await getDownloadURL(thumbnailSnapshot.ref);
      } else {
        const youtubeUrl = formData.get('youtubeUrl') as string;
        // Extract YouTube thumbnail
        const videoId = extractYouTubeVideoId(youtubeUrl);
        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }

      // Save blog post details to Firestore
      const blogPostRef = collection(firestore, 'blogPosts');
      await addDoc(blogPostRef, {
        title: blogTitle,
        description: description,
        thumbnailUrl: thumbnailUrl,
        uploadType: uploadType,
        youtubeUrl: uploadType === 'youtube' ? formData.get('youtubeUrl') : null,
        createdAt: new Date().toISOString()
      });

      setSubmitStatus({
        status: 'success',
        message: 'Blog uploaded successfully!',
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Upload error:', error);
      setSubmitStatus({
        status: 'error',
        message: 'Failed to upload blog. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to extract YouTube video ID
  const extractYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  return (
    <div className="container mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border contact-us-form">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Upload Your Blog
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Share your thoughts and stories with the world!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Upload Type Selection */}
        <div className="mb-4 flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="uploadType" 
              value="thumbnail"
              checked={uploadType === 'thumbnail'}
              onChange={() => setUploadType('thumbnail')}
            />
            <span>Upload Thumbnail</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="radio" 
              name="uploadType" 
              value="youtube"
              checked={uploadType === 'youtube'}
              onChange={() => setUploadType('youtube')}
            />
            <span>YouTube Video</span>
          </label>
        </div>

        {/* Blog Title */}
        <div className="mb-4">
          <Label htmlFor="blogTitle">Blog Title</Label>
          <Input
            id="blogTitle"
            name="blogTitle"
            placeholder="Enter the blog title"
            type="text"
            required
          />
        </div>

        {/* Blog Description */}
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <TextArea
            name="description"
            id="description"
            placeholder="Provide a brief description of your blog"
            required
          />
        </div>

        {/* Conditional Upload Field */}
        {uploadType === 'thumbnail' ? (
          <div className="mb-4">
            <Label htmlFor="thumbnail">Blog Thumbnail</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              type="file"
              accept="image/*"
              required
            />
          </div>
        ) : (
          <div className="mb-4">
            <Label htmlFor="youtubeUrl">YouTube Video URL</Label>
            <Input
              id="youtubeUrl"
              name="youtubeUrl"
              type="url"
              placeholder="Enter YouTube video URL"
              pattern="^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$"
              required
            />
          </div>
        )}

        {/* Submit Status Message */}
        {submitStatus.status && (
          <div
            className={`mb-4 p-3 rounded-md ${
              submitStatus.status === 'success'
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          className={cn(
            "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
            loading && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Blog"} {!loading && "→"}
        </button>
      </form>
    </div>
  );
}

export default Admin;