"use client";

import Admin from "../pages/admin";
import BlogManagement from "../pages/admin-blog";



export default function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <Admin />
      </div>
      <div>
        <BlogManagement />
      </div>
    </div>
  );
}