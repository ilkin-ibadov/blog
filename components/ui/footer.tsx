import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
  <div className="container px-4">
    <div className="flex flex-row justify-between mt-16 gap-16">
      <div className="max-w-[280px]">
        <h3 className="font-semibold text-lg">About</h3>
        <p className="text-gray-600 text-[16px] font-normal mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="text-[16px] font-normal mt-6">
          <p className="mb-1 font-normal text-gray-600"><span className="font-semibold text-[#181A2A]">Email: </span>info@template.net</p>
          <p className="font-normal text-gray-600"><span className="font-semibold text-[#181A2A]">Phone: </span>+880 123 456 789</p>
        </div>
      </div>

      <div className="flex flex-row gap-[80px]">
        <div>
          <h3 className="font-semibold text-lg mb-6">Quick Link</h3>
          <ul className="text-[16px] font-normal space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link href="/blog" className="hover:text-gray-900">Write a Blog</Link></li>
            <li><Link href="/blogs" className="hover:text-gray-900">My Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Category</h3>
          <ul className="text-[16px] font-normal space-y-2 text-gray-600">
            <li><Link href="/category/lifestyle" className="hover:text-gray-900">Lifestyle</Link></li>
            <li><Link href="/category/technology" className="hover:text-gray-900">Technology</Link></li>
            <li><Link href="/category/travel" className="hover:text-gray-900">Travel</Link></li>
            <li><Link href="/category/business" className="hover:text-gray-900">Business</Link></li>
            <li><Link href="/category/economy" className="hover:text-gray-900">Economy</Link></li>
            <li><Link href="/category/sports" className="hover:text-gray-900">Sports</Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-200 mt-16 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <Image 
              src="/Logo_Footer.svg" 
              alt="Meta Blog Logo" 
              width={48} 
              height={48}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-normal text-lg">Meta<span className="font-semibold">Blog</span></h3>
            <p className="text-[16px] font-normal text-gray-600">&copy; Orkhan 2025. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex text-[16px] font-normal text-gray-600">
          <Link href="/terms" className="hover:text-gray-900 border-r px-4">Terms of Use</Link>
          <Link href="/privacy" className="hover:text-gray-900 border-r px-4">Privacy Policy</Link>
          <Link href="/cookie" className="hover:text-gray-900 px-4">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}