'use client'

import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { SearchBar } from '../ui/SearchBar'
import { NavLink } from '../ui/NavLink'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'
import { useUser } from "@/hooks/useUser";
import LogoutButton from '../ui/LogoutButton'
import SignInButton from '../ui/SignInButton'

export function Header() {
  const { isDark } = useThemeStore()
  const current = isDark ? colors.dark : colors.light
  const user = useUser();

  return (
    <header className="py-8">
      <div className="container px-4 flex items-center justify-between">
        <NavLink href="/homepage">
          <Image src={current.logo} alt="MetaBlog Logo" width={158} height={36} />
        </NavLink>

        <ul className="flex gap-[40px] text-[16px] font-normal">
          <li>
            <NavLink href="/homepage">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="blogs/write-blog">
              Write a Blog
            </NavLink>
          </li>
          <li>
            <NavLink href="/my-blogs">
              My Blogs
            </NavLink>
          </li>
          <li>
            <NavLink href="/info/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center">
          <SearchBar />
          <ThemeToggle />
          <div className="ml-[36px]">
            {user ? <LogoutButton /> : <SignInButton />}
          </div>
        </div>
      </div>
    </header>
  )
}