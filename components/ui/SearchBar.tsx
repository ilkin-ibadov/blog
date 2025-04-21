'use client'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { useThemeStore } from '@/lib/store/theme'

export function SearchBar() {
  const { isDark } = useThemeStore()

  return (
    <div className="relative">
      <input 
        type="search"
        placeholder="Search"
        className={`w-40 py-2 px-4 rounded-lg text-sm focus:outline-none transition-colors duration-200 ${
          isDark
            ? 'bg-[#242535] text-white border border-[#3B3C4A] placeholder-[#A1A1AA]'
            : 'bg-[#F4F4F5] text-black border border-gray-100 placeholder-[#52525B]'
        }`}
      />
      <i className={`bi bi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-base ${
        isDark ? 'text-[#BABABF]' : 'text-[#52525B]'
      }`} />
    </div>
  )
}