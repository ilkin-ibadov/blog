'use client'

import { useState } from "react";
import BlogCard from "./BlogCard";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { Blog } from "@/types/blog";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, visibleCount).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {visibleCount < blogs.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </>
  );
}