'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useThemeStore } from '@/lib/store/theme'

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  const { isDark } = useThemeStore()

  const baseColor = isDark ? 'text-white' : 'text-[#3B3C4A]'
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-gray-900'

  return (
    <Link href={href} className={`${baseColor} ${hoverColor} ${className}`}>
      {children}
    </Link>
  )
}