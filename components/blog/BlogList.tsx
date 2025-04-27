'use client'

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import BlogCard from "./BlogCard";
import FeaturedBlogCard from "./FeaturedBlogCard";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { Blog } from "@/types/blog";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const filteredBlogs = query
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query)
      )
    : blogs;

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const otherBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  return (
    <>
      {featuredBlog && (
        <div className="mb-12">
          <FeaturedBlogCard blog={featuredBlog} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBlogs.slice(0, visibleCount).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {visibleCount < otherBlogs.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}

      {filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          The result you were looking for was not found.
        </p>
      )}
    </>
  );
}