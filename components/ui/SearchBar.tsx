'use client'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'

export function SearchBar() {
  const { isDark } = useThemeStore()
  const current = isDark ? colors.dark : colors.light

  return (
    <div className="relative">
      <input 
        type="search"
        placeholder="Search"
        className={`w-40 py-2 px-4 rounded-lg text-sm focus:outline-none transition-colors duration-200 ${current.searchInputBg} ${current.searchInputText} ${current.searchInputBorder} ${current.searchInputPlaceholder}`}
      />
      <i className={`bi bi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-base ${current.searchIcon}`} />
    </div>
  )
}