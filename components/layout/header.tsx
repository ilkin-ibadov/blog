import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Header() {
  return (
    <header className="py-8">
      <div className="container px-4 flex items-center justify-between">
        <Link href="/homepage">
          <Image src="/Logo.svg" alt="MetaBlog Logo" width={158} height={36} />
        </Link>

        <ul className="flex gap-[40px] text-[16px] font-normal text-gray-600">
          <li className='hover:text-black'>
            <Link href="/homepage">
              Home
            </Link>
          </li>
          <li className='hover:text-black'>
            <Link href="/write-blog">
              Write a Blog
            </Link>
          </li>
          <li className='hover:text-black'>
            <Link href="/my-blogs">
              My Blogs
            </Link>
          </li>
          <li className='hover:text-black'>
            <Link href="/info/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center">
          <div className="relative">
            <input 
              type="search"
              placeholder="Search"
              className="w-40 py-2 px-4 border border-gray-100 bg-[#F4F4F5] rounded-lg text-sm focus:outline-none focus:border-gray-400"
            />
            <i className="bi bi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-[#52525B] text-base"></i>
          </div>

          <ThemeToggle />

          <button className="ml-[36px]">
            <Link href="/sign-in" className="px-4 py-2 text-sm font-normal text-white bg-[#141624] rounded-[5px] hover:opacity-90 inline-block">
              Sign in
            </Link>
          </button>
        </div>
      </div>
    </header>
  )
}