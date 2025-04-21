'use client'

import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SearchBar } from '../ui/SearchBar';
import { NavLink } from '../ui/NavLink';
import { SignInButton } from '../ui/SignInButton';
import { useThemeStore } from '@/lib/store/theme';

export function Header() {
  const { isDark } = useThemeStore()

  return (
    <header className="py-8">
      <div className="container px-4 flex items-center justify-between">
        <NavLink href="/homepage">
          <Image src={isDark ? '/Dark_Logo.svg' : '/Logo.svg'} alt="MetaBlog Logo" width={158} height={36} />
        </NavLink>

        <ul className="flex gap-[40px] text-[16px] font-normal text-gray-600">
          <li className='hover:text-black'>
            <NavLink href="/homepage">
              Home
            </NavLink>
          </li>
          <li className='hover:text-black'>
            <NavLink href="/write-blog">
              Write a Blog
            </NavLink>
          </li>
          <li className='hover:text-black'>
            <NavLink href="/my-blogs">
              My Blogs
            </NavLink>
          </li>
          <li className='hover:text-black'>
            <NavLink href="/info/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center">
          <SearchBar />
          <ThemeToggle />
          <div className="ml-[36px]">
            <SignInButton />
          </div>
        </div>
      </div>
    </header>
  )
}