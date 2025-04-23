'use client'

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function BlogCard({ blog }: { blog: Blog }) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <article className={`rounded-xl overflow-hidden border shadow hover:shadow-lg transition-shadow ${current.blogCardBg} ${ current.blogCardText} ${current.blogCardBorder}`}>
      <Link href={`/blog/${blog.id}`} className="block mt-4 mx-4 relative h-[240px]">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 rounded-md transition-transform duration-300"
        />
      </Link>
      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-4 ${current.blogCardCategoryBadge} ${current.blogCardCategoryText}`}>
          {blog.category}
        </span>
        <h2 className="text-xl font-semibold mb-4 line-clamp-2 min-h-[56px]">
          {blog.title}
        </h2>
        <div className="flex items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={blog.author.thumbnail}
              alt={blog.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${current.blogCardAuthorText}`}>{blog.author.name}</p>
            <p className={`text-sm ${current.blogCardDateText}`}>
              {new Date(blog.timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
