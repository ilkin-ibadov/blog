'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";
import LoadingSpinner from "../ui/LoadingSpinner";
import { NavLink } from "../ui/NavLink";

interface BlogDetailProps {
  id: string;
}

export default function BlogDetail({ id }: BlogDetailProps) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState("Uncategorized");
  const [authorEmail, setAuthorEmail] = useState("Unknown Author");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!blog) return;

      try {
        const [categoryRes, authorRes] = await Promise.all([
          fetch(`/api/categories/${blog.category}`),
          fetch(`/api/authors/${blog.author}`)
        ]);

        const [categoryData, authorData] = await Promise.all([
          categoryRes.json(),
          authorRes.json()
        ]);

        setCategoryName(categoryData.name || "Uncategorized");
        setAuthorEmail(authorData.email || "Unknown Author");
      } catch (err) {
        console.error("Failed to fetch category or author:", err);
      }
    };

    fetchDetails();
  }, [blog]);

  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (error || !blog) return <p>Blog not found.</p>;

  return (
    <main className={`container max-w-4xl mx-auto px-4 py-8 transition-colors`}>
      <span className={`inline-block px-[12px] py-[6px] rounded-md text-sm font-medium mb-4 ${current.blogDetailCategoryBadge} ${current.blogDetailCategoryText}`}>
        {categoryName}
      </span>

      <h1 className={`text-4xl font-bold mb-5 leading-tight ${current.blogDetailHeading}`}>
        {blog.title}
      </h1>

      <div className="flex items-center mb-8 space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src='/Profile.png'
            alt='Profile'
            fill
            className="object-cover"
          />
        </div>
        <div>
          <NavLink href={`/author/${blog.author}`}>
            <p className={`text-base font-semibold ${current.blogDetailAuthor} hover:underline cursor-pointer`}>
              {authorEmail}
            </p>
          </NavLink>
          <p className={`text-sm ${current.blogDetailDateText}`}>
            {new Date(blog.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className={`relative aspect-[16/9] rounded-xl overflow-hidden mb-8`}>
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <article className="mb-[105px]">
        <div
          className={`prose prose-lg max-w-none ${current.blogDetailProse}`}
          dangerouslySetInnerHTML={{ __html: blog.body }}
        ></div>
      </article>
    </main>
  );
}