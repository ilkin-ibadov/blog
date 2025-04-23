'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/lib/store/theme'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDark } = useThemeStore()

  useEffect(() => {
    document.body.classList.toggle('bg-[#181A2A]', isDark)
    document.body.classList.toggle('bg-white', !isDark)
  }, [isDark])

  return <>{children}</>
}