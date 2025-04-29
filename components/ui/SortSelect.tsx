'use client';

import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";
import { ChevronDown } from "lucide-react";

interface SortSelectProps {
  sortOption: string;
  setSortOption: (value: string) => void;
}

export default function SortSelect({ sortOption, setSortOption }: SortSelectProps) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <div className="flex items-center justify-end mb-6 relative">
      <div className="relative inline-block">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={`appearance-none border px-4 py-2 pr-10 rounded-lg shadow-sm text-sm font-medium cursor-pointer transition-colors duration-200 
            ${current.searchInputBg} ${current.searchInputText} ${current.searchInputBorder}`}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}