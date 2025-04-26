'use client'

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import BlogList from "@/components/blog/BlogList";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function MyBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <div className="container px-4 py-12">

        {blogs.length === 0 ? (
          <p className="text-gray-500">You have not written any blogs yet.</p>
        ) : (
          <BlogList blogs={blogs} />
        )}
      </div>
      <Footer />
    </>
  );
}