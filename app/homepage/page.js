import BlogList from "@/components/blog/BlogList";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default async function Home() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Bloglar yüklenemedi.</p>
      </div>
    );
  }

  const blogs = await res.json();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p>Hiç blog yazısı bulunamadı.</p>
      </div>
    );
  }

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