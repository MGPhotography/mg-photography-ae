import React from 'react';
import BlogDetail from '../../../pages/BlogDetail'; 

export default async function BlogPage({ params }: { params: Promise<{ blogId: string; slug: string }> }) {
  const resolvedParams = await params;

  const { blogId } = resolvedParams;

  return <BlogDetail params={{ blogId }} />;
}
