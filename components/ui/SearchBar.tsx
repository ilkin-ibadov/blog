'use client'

import 'bootstrap-icons/font/bootstrap-icons.css'
import { useRouter, useSearchParams } from 'next/navigation'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'
import { useState } from 'react'

export function SearchBar() {
  const { isDark } = useThemeStore()
  const current = isDark ? colors.dark : colors.light
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    const params = new URLSearchParams(window.location.search)
    if (value) {
      params.set('q', value)
    } else {
      params.delete('q')
    }
    router.replace(`?${params.toString()}`)
  }

  return (
    <div className="relative">
      <input 
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        className={`w-40 py-2 px-4 rounded-lg text-sm focus:outline-none transition-colors duration-200 ${current.searchInputBg} ${current.searchInputText} ${current.searchInputBorder} ${current.searchInputPlaceholder}`}
      />
      <i className={`bi bi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-base ${current.searchIcon}`} />
    </div>
  )
}