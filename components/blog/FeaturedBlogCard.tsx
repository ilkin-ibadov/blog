'use client'

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { useState, useEffect } from "react";

export default function FeaturedBlogCard({ blog }: { blog: Blog }) {

    const [categoryName, setCategoryName] = useState("Uncategorized");
    const [authorEmail, setAuthorEmail] = useState("Unknown Author");

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
    <article className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
      <Link href={`/blogs/${blog.id}`} className="block relative h-[450px]">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <span className="inline-block px-[10px] py-[4px] bg-[#4B6BFB] rounded-md text-sm font-medium text-white mb-4">
          {categoryName}
        </span>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-[720px]">{blog.title}</h1>
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src='/Profile.png'
              alt='Profile'
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <p className="text-white font-medium">{authorEmail}</p>
            <p className="text-gray-300">{new Date(blog.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </article>
  );
}