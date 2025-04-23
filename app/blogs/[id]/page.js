import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import BlogDetail from "@/components/blog/BlogDetail";

export default async function BlogPost({ params }) {
  return (
    <>
      <Header />
      <BlogDetail id={(await params).id} />
      <Footer />
    </>
  );
}