import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
      <Link href={`/blog/${blog.id}`} className="block relative h-[240px]">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm font-medium mb-4">
          {blog.category}
        </span>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[56px]">{blog.title}</h2>
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
            <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(blog.timestamp).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </article>
  );
}