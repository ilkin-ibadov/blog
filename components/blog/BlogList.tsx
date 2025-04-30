'use client'

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import BlogCard from "./BlogCard";
import FeaturedBlogCard from "./FeaturedBlogCard";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import { Blog } from "@/types/blog";
import SortSelect from "../ui/SortSelect";

export default function BlogList({ blogs, showFeatured = true, onDelete }: { blogs: Blog[]; showFeatured?: boolean; onDelete?: (id: string) => void; }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortOption, setSortOption] = useState('latest');
  const searchParams = useSearchParams();

  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category');

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesQuery = query
      ? blog.title.toLowerCase().includes(query)
      : true;

    const matchesCategory = category
      ? blog.category.toString() === category
      : true;

    return matchesQuery && matchesCategory;
  });

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortOption === 'az') {
      return a.title.localeCompare(b.title);
    }
    if (sortOption === 'za') {
      return b.title.localeCompare(a.title);
    }
    if (sortOption === 'latest') {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
    if (sortOption === 'oldest') {
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    }
    return 0;
  });

  const featuredBlog = showFeatured && sortedBlogs.length > 0 ? sortedBlogs[0] : null;
  const otherBlogs = featuredBlog ? sortedBlogs.slice(1) : sortedBlogs;

  return (
    <>  
      <SortSelect sortOption={sortOption} setSortOption={setSortOption} />

      {showFeatured && featuredBlog && (
        <div className="mb-12">
          <FeaturedBlogCard blog={featuredBlog} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBlogs.slice(0, visibleCount).map((blog) => (
          <BlogCard key={blog.id} blog={blog} onDelete={onDelete} />
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