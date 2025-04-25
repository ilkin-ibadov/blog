'use client'

import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";
import { SendButton } from "@/components/contact/SendButton";

export function ContactCard() {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <div className={`max-w-5xl ${current.contactCardBg} backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-row`}>
      <div className={`flex-1 flex flex-col justify-center items-start p-12 rounded-l-2xl ${current.contactLeftBg}`}>
        <h2 className="text-2xl font-bold mb-4">Contact us</h2>
        <p className="mb-6 text-base text-white/90">
          You can contact us for any questions, suggestions or cooperation. We will get back to you as soon as possible.
        </p>
        <div className="mb-6">
          <p className="mb-2 flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:orkhan@metablog.com" className="hover:text-[#a5b4fc]">orkhan@metablog.com</a>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+994770000000" className="hover:text-[#a5b4fc]">+994 77 000 0000</a>
          </p>
        </div>
        <div className="flex gap-5 mt-4 text-2xl">
          <a href="https://instagram.com/orkhnw" target="_blank" className="hover:scale-110 transition-transform"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" className="hover:scale-110 transition-transform"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:scale-110 transition-transform"><FaLinkedin /></a>
          <a href="https://github.com/orkhaan007" target="_blank" className="hover:scale-110 transition-transform"><FaGithub /></a>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-8">
        <h2 className={`text-2xl font-bold mb-6 ${current.contactTitle}`}>Contact Form</h2>
        <form className="space-y-5">
          {['Name', 'Email'].map((label, idx) => (
            <div key={idx}>
              <label className={`block text-sm font-medium mb-1 ${current.contactInputLabel}`}>{label}</label>
              <input
                type={label.toLowerCase()}
                required
                className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-[#4B6BFB] ${current.contactInput}`}
              />
            </div>
          ))}
          <div>
            <label className={`block text-sm font-medium mb-1 ${current.contactInputLabel}`}>Message</label>
            <textarea
              rows={4}
              required
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm resize-none focus:outline-none focus:border-[#4B6BFB] ${current.contactInput}`}
            ></textarea>
          </div>
          <SendButton />
        </form>
      </div>
    </div>
  );
}