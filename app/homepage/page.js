import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { blogs } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const sortedBlogs = [...blogs].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  const latestPost = sortedBlogs[0];
  const remainingPosts = sortedBlogs.slice(1);

  return (
    <>
      <Header />
      <main className="container px-4 py-12">
        <article className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
          <Link href={`/blog/${latestPost.id}`} className="block relative h-[450px]">
            <Image
              src={latestPost.thumbnail}
              alt={latestPost.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="inline-block px-[10px] py-[4px] bg-[#4B6BFB] rounded-md text-sm font-medium text-white mb-4">
              {latestPost.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 w-[720px]">{latestPost.title}</h1>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={latestPost.author.thumbnail}
                  alt={latestPost.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">{latestPost.author.name}</p>
                <p className="text-gray-300">
                  {new Date(latestPost.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-3 mt-12 gap-5">
          {remainingPosts.map((blog) => (
            <article key={blog.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
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
                    <p className="text-sm text-gray-500">
                      {new Date(blog.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}