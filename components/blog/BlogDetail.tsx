'use client';

import Image from "next/image";
import { blogs } from "@/data";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

interface BlogDetailProps {
  id: string;
}

export default function BlogDetail({ id }: BlogDetailProps) {
  const { isDark } = useThemeStore();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  const current = isDark ? colors.dark : colors.light;

  if (!blog) return <p>Blog not found.</p>;

  return (
    <main className={`container max-w-4xl mx-auto px-4 py-8 transition-colors`}>
      <span className={`inline-block px-[12px] py-[6px] rounded-md text-sm font-medium mb-4 ${current.blogDetailCategoryBadge} ${current.blogDetailCategoryText}`}>
        {blog.category}
      </span>

      <h1 className={`text-4xl font-bold mb-5 leading-tight ${current.blogDetailHeading}`}>
        {blog.title}
      </h1>

      <div className="flex items-center mb-8 space-x-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={blog.author.thumbnail}
            alt={blog.author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className={`text-base font-semibold ${current.blogDetailAuthor}`}>
            {blog.author.name}
          </p>
          <p className={`text-sm ${current.blogDetailDateText}`}>
            {new Date(blog.timestamp).toLocaleDateString()}
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