"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WriteBlogForm } from "@/components/blog/WriteBlogForm";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function WriteBlogPage() {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto py-10">
        <h1 className={`text-5xl font-bold mb-[54px] text-center ${current.writeBlogText}`}>
          Write a New Blog
        </h1>

        <WriteBlogForm />
      </main>
      <Footer />
    </>
  );
}