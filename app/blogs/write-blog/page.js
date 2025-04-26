"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function WriteBlogPage() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          category,
          thumbnail,
        }),
      });

      if (res.ok) {
        router.push("/my-blogs");
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.error || "Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header/>
    <main className="max-w-3xl mx-auto py-10">
      <h1 className={`text-5xl font-bold mb-[54px] text-center ${current.writeBlogText}`}>Write a New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6 mb-[158px]">
        <input
          type="text"
          placeholder="Add title for blog"
          className={`${current.writeBlogInput} border rounded-xs p-5 w-full`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          className={`${current.writeBlogInput} border rounded-xs p-5 w-full`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
           {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Add thumbnail image"
          className={`${current.writeBlogInput} border rounded-xs p-5 w-full`}
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />

        <textarea
          placeholder="Add blog body"
          className={`${current.writeBlogInput} border rounded-xs p-5 w-full h-[360px] resize-none`}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`${current.writeBlogBtn} w-full font-bold py-3 rounded`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </main>
    <Footer/>
    </>
  );
}