'use client'

import Image from 'next/image'
import { NavLink } from '../ui/NavLink'
import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'

export function Footer() {
  const { isDark } = useThemeStore()
  const current = isDark ? colors.dark : colors.light

  return (
    <footer className={`${current.footerBg} mt-auto`}>
      <div className="container px-4">
        <div className="flex flex-row justify-between mt-16 gap-16">
          <div className="max-w-[280px]">
            <h3 className={`${current.footerHeading} font-semibold text-lg`}>About</h3>
            <p className={`${current.footerSubText} text-[16px] font-normal mt-3`}>
              StackWords is your premier platform for creating and sharing meaningful content. Join our community of writers, thinkers, and creators to explore ideas and connect with readers worldwide.
            </p>
            <div className="text-[16px] font-normal mt-6">
              <p className={`${current.footerSubText} mb-1 font-normal`}>
                <span className={`${current.footerContactText} font-semibold`}>Email: </span>orkhan@stackwords.com
              </p>
              <p className={`${current.footerSubText} font-normal`}>
                <span className={`${current.footerContactText} font-semibold`}>Phone: </span>+994 77 000 0000
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[80px]">
            <div>
              <h3 className={`${current.footerHeading} font-semibold text-lg mb-6`}>Quick Link</h3>
              <ul className="text-[16px] font-normal space-y-2">
                <li><NavLink href="/">Home</NavLink ></li>
                <li><NavLink href="/blog">Write a Blog</NavLink ></li>
                <li><NavLink href="/blogs">My Blogs</NavLink ></li>
                <li><NavLink href="/info/contact">Contact</NavLink ></li>
              </ul>
            </div>

            <div>
              <h3 className={`${current.footerHeading} font-semibold text-lg mb-6`}>Category</h3>
              <ul className="text-[16px] font-normal space-y-2">
                <li><NavLink href="/category/lifestyle">Lifestyle</NavLink></li>
                <li><NavLink href="/category/technology">Technology</NavLink></li>
                <li><NavLink href="/category/travel">Travel</NavLink></li>
                <li><NavLink href="/category/business">Business</NavLink></li>
                <li><NavLink href="/category/economy">Economy</NavLink></li>
                <li><NavLink href="/category/sports">Sports</NavLink></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${current.footerBorder} border-t mt-16 py-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="mr-3">
                <Image 
                  src={current.logoFooter} 
                  alt="Meta Blog Logo" 
                  width={48} 
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className={`${current.footerLogoText} font-normal text-lg`}>
                  Meta<span className="font-semibold">Blog</span>
                </h3>
                <p className={`${current.footerLogoSubText} text-[16px] font-normal`}>&copy; Orkhan 2025. All Rights Reserved.</p>
              </div>
            </div>
            <div className={`flex text-[16px] font-normal`}>
              <NavLink href="/info/terms" className={`${current.footerBorder} border-r px-4`}>Terms of Use</NavLink>
              <NavLink href="/info/privacy" className={`${current.footerBorder} border-r px-4`}>Privacy Policy</NavLink>
              <NavLink href="/info/cookie" className={`${current.footerBorder} px-4`}>Cookie Policy</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}