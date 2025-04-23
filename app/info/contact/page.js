'use client'

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useThemeStore } from "@/lib/store/theme";
import { ContactCard } from "@/components/contact/ContactCard";
import { colors } from "@/lib/constants/variables";

export default function Contact() {
  const { isDark } = useThemeStore();

  return (
    <>
      <Header />
      <main className={`flex flex-col items-center justify-center py-12 w-full transition-colors`}>
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}