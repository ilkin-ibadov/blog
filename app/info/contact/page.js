'use client'

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCard } from "@/components/contact/ContactCard";

export default function Contact() {

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