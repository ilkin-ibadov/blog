"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";
import LoadingSpinner from "../ui/LoadingSpinner";

interface Category {
  id: string;
  name: string;
}

export function WriteBlogForm() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          <LoadingSpinner />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}