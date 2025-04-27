import BlogList from "@/components/blog/BlogList";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import AuthorInfo from "@/components/Author/AuthorInfo";

export default async function AuthorPage({ params }) {
  const id = params.id;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/author?userId=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const blogs = await res.json();

  const resAuthor = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/authors/${id}`, {
    cache: "no-store",
  });

  if (!resAuthor.ok) {
    notFound();
  }

  const author = await resAuthor.json();

  return (
    <>
    <Header/>
    <section className="container px-4 py-12">
      <AuthorInfo email={author.email} />
      <BlogList blogs={blogs} showFeatured={false} />
    </section>
    <Footer/>
    </>
  );
}