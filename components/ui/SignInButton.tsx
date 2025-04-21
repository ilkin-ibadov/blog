'use client'

import Link from 'next/link'
import { useThemeStore } from '@/lib/store/theme'

export function SignInButton() {
  const { isDark } = useThemeStore()

  return (
    <Link
      href="/sign-in"
      className={`px-4 py-2 text-sm font-normal rounded-[5px] hover:opacity-90 inline-block ${
        isDark ? 'bg-white text-[#242535]' : 'bg-[#141624] text-white'
      }`}
    >
      Sign in
    </Link>
  )
}