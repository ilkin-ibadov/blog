'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";
import { NavLink } from "../ui/NavLink";
import { Trash2 } from "lucide-react";

export default function BlogCard({ blog, onDelete }: { blog: Blog; onDelete?: (id: string) => void }) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  const [categoryName, setCategoryName] = useState("Uncategorized");
  const [authorEmail, setAuthorEmail] = useState("Unknown Author");

  const username = authorEmail.split('@')[0];

  useEffect(() => {
    const fetchDetails = async () => {
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

  return (
    <article className={`rounded-xl relative overflow-hidden border shadow hover:shadow-lg transition-shadow ${current.blogCardBg} ${current.blogCardText} ${current.blogCardBorder}`}>
      <Link href={`/blogs/${blog.id}`} className="block mt-4 mx-4 relative h-[240px]">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 rounded-md transition-transform duration-300"
        />
      </Link>
      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-4 ${current.blogCardCategoryBadge} ${current.blogCardCategoryText}`}>
          {categoryName}
        </span>
        <h2 className="text-xl font-semibold mb-4 line-clamp-2 min-h-[56px]">
          {blog.title}
        </h2>
        <div className="flex items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src='/Profile.png'
              alt='Profile'
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-3">
            <NavLink href={`/author/${blog.author}`}>
              <p className={`text-sm font-medium ${current.blogCardAuthorText} hover:underline cursor-pointer`}>
                {username}
              </p>
            </NavLink>
            <p className={`text-sm ${current.blogCardDateText}`}>
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </div>
          {onDelete && (
          <button
            onClick={() => onDelete(blog.id)}
            className="group absolute top-95 right-4 p-2 rounded-full bg-transparent z-10" >
            <Trash2
              size={20}
              className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
         )}
        </div>
      </div>
    </article>
  );
}