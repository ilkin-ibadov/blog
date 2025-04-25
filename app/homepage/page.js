import BlogList from "@/components/blog/BlogList";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default async function Home() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: "no-store",
  });

  const blogs = await res.json();

  const [latest, ...others] = blogs;

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