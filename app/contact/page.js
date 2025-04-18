import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-gradient-to-tr py-12 w-full">
        <div className="max-w-5xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-row">
          <div className="flex-1 flex flex-col justify-center items-start p-12 bg-[#4B6BFB] rounded-l-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <p className="mb-6 text-base text-white/90">You can contact us for any questions, suggestions or cooperation. We will get back to you as soon as possible.</p>
            <div className="mb-6">
              <p className="mb-2 flex items-center gap-2"><span className="font-semibold">Email:</span> <a href="mailto:info@template.net" className="hover:text-[#a5b4fc]">orkhan@stackwords.com</a></p>
              <p className="flex items-center gap-2"><span className="font-semibold">Phone:</span> <a href="tel:+880123456789" className="hover:text-[#a5b4fc]">+994 77 000 0000</a></p>
            </div>
            <div className="flex gap-5 mt-4">
              <a href="https://instagram.com/orkhnw" target="_blank" className="hover:scale-110 transition-transform text-2xl"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" className="hover:scale-110 transition-transform text-2xl"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:scale-110 transition-transform text-2xl"><FaLinkedin /></a>
              <a href="https://github.com/orkhaan007" target="_blank" className="hover:scale-110 transition-transform text-2xl"><FaGithub /></a>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center p-8 ">
            <h2 className="text-2xl font-bold text-[#141624] mb-6">Contact Form</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-[#4B6BFB] bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-[#4B6BFB] bg-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-[#4B6BFB] bg-white resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-[#4B6BFB] text-white font-semibold rounded-lg hover:opacity-90 transition">Send</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
