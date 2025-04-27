'use client';

import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

interface SortSelectProps {
  sortOption: string;
  setSortOption: (value: string) => void;
}

export default function SortSelect({ sortOption, setSortOption }: SortSelectProps) {
    const { isDark } = useThemeStore();
    const current = isDark ? colors.dark : colors.light;

  return (
    <div className="flex items-center justify-end mb-6">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className={`border px-2 py-1 rounded-md ${current.searchInputBg} ${current.searchInputText} ${current.searchInputBorder}`}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
}