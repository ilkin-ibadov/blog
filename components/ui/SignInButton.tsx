'use client'

import Link from 'next/link'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'

export function SignInButton() {
  const { isDark } = useThemeStore()
  const current = isDark ? colors.dark : colors.light

  return (
    <Link
      href="/sign-in"
      className={`px-4 py-2 text-sm font-normal rounded-[5px] hover:opacity-90 inline-block ${current.signInBtnBg} ${current.signInBtnText}`}
    >
      Sign in
    </Link>
  )
}