'use client';

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { blogs } from "@/data";
import Image from "next/image";
import { useThemeStore } from "@/lib/store/theme";

export default function BlogPost({ params }) {
  const { isDark } = useThemeStore();
  const blog = blogs.find((blog) => blog.id === parseInt(params.id));

  return (
    <>
      <Header />
      <main className={`container max-w-4xl mx-auto px-4 py-8 transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
        <span className="inline-block px-[12px] py-[6px] bg-[#4B6BFB] text-white rounded-md text-sm font-medium mb-4">
          {blog.category}
        </span>

        <h1 className={`text-4xl font-bold mb-5 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
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
            <p className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              {blog.author.name}
            </p>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {new Date(blog.timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-white/10">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        <article className="mb-[105px]">
          <div className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`} dangerouslySetInnerHTML={{ __html: blog.body }}></div>
        </article>
      </main>
      <Footer />
    </>
  );
}