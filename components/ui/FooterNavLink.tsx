'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function FooterNavLink({ href, children, className = '' }: NavLinkProps) {
  const { isDark } = useThemeStore()

  const { navLinkText, navLinkHover } = isDark ? colors.dark : colors.light

  return (
    <Link href={href} className={`${navLinkText} ${navLinkHover} ${className}`}>
  {children}
</Link>
  )
}