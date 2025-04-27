'use client'

import Image from "next/image";
import { FaTwitter, FaGithub, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

interface AuthorInfoProps {
  email: string;
}

export default function AuthorInfo({ email }: AuthorInfoProps) {
    const { isDark } = useThemeStore();
    const current = isDark ? colors.dark : colors.light;
    const username = email.split('@')[0];
  
    return (
      <div className={`${current.authorPageBg} rounded-xl flex flex-col items-center text-center py-12 mb-12`}>
        <div className={`relative w-16 h-16 rounded-full overflow-hidden ${current.authorPageIcon}`}>
          <Image
            src='/Profile.png'
            alt='Profile'
            fill
            className="object-cover"
          />
        </div>
        <h1 className={`text-lg font-semibold mt-4 ${current.authorPageHeading}`}>
          {username}
        </h1>
        <p className={`text-sm mt-1 ${current.authorPageDescription}`}>Collaborator & Editor</p>
        <p className={`mt-6 max-w-[688px] text-center px-4 ${current.authorPageDescription}`}>
          Meet {username}, a passionate writer and blogger with a love for technology and travel. {username} holds a degree in Computer Science and has spent years working in the tech industry,
          gaining a deep understanding of the impact technology has on our lives.
        </p>
        <div className="flex gap-3 mt-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-2 rounded-md hover:bg-gray-500 transition">
            <FaTwitter className="w-4 h-4 text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-2 rounded-md hover:bg-gray-500 transition">
            <FaInstagram className="w-4 h-4 text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-2 rounded-md hover:bg-gray-500 transition">
            <FaGithub className="w-4 h-4 text-white" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-600 p-2 rounded-md hover:bg-gray-500 transition">
            <FaYoutube className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    );
  }