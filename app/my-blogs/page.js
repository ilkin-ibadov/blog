'use client'

import BlogList from "@/components/blog/BlogList";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useState, useEffect } from "react";

export default function MyBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await fetch('/api/my-blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch my blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyBlogs();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Header />
      <div className="container px-4 py-12">
        {blogs.length === 0 ? (
          <p className="text-gray-500">You have not written any blogs yet.</p>
        ) : (
          <BlogList blogs={blogs} onDelete={handleDelete} showFeatured={false} />
        )}
      </div>
      <Footer />
    </>
  );
}