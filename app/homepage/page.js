import BlogList from "@/components/blog/BlogList";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { blogs } from "@/data";

export default async function Home() {
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  const [latest, ...others] = sortedBlogs;

  return (
    <>
      <Header />
      <main className="container px-4 py-12">
        <FeaturedBlogCard blog={latest} />
        <div className="mt-12">
          <BlogList blogs={others} />
        </div>
      </main>
      <Footer />
    </>
  );
}