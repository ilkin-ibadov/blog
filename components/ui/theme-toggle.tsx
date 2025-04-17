'use client'

import { useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`w-[48px] h-[28px] ml-[36px] rounded-full p-[2px] transition-colors duration-200 ease-in-out flex items-center ${
        isDark ? 'bg-gray-600' : 'bg-gray-200'
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-[20px] h-[20px] p-[5px] rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out flex items-center justify-center ${
          isDark ? 'translate-x-[22px]' : 'translate-x-0'
        }`}
      >
        <i
          className={`text-[14px] ${
            isDark ? 'bi bi-moon text-gray-600' : 'bi bi-brightness-high-fill text-[#52535F]'
          }`}
        />
      </div>
    </button>
  )
}