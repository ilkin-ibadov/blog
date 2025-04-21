'use client'

import { useThemeStore } from '@/lib/store/theme'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <button
      onClick={toggleTheme}
      className={`w-[48px] h-[28px] ml-[36px] rounded-full p-[4px] transition-colors duration-200 ease-in-out flex items-center ${
        isDark ? 'bg-[#4B6BFB]' : 'bg-[#E5E5E5]'
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-[20px] h-[20px] rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out flex items-center justify-center ${
          isDark ? 'translate-x-[20px]' : 'translate-x-0'
        }`}
      >
        <i className="bi bi-brightness-high-fill text-[12px] text-[#3B3C4A]" />
      </div>
    </button>
  )
}