import BlogList from "@/components/blog/BlogList";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: "no-store",
  });

  const blogs = await res.json();

  return (
    <>
      <Header />
      <main className="container px-4 py-12">
        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}