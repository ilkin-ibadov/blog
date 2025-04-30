'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import InfoPage from "@/components/info/InfoPage";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <InfoPage
        title="Cookie Policy"
        updatedDate="Last updated: April 2025"
        sections={[
          {
            title: "1. What Are Cookies?",
            content: "Cookies are small data files stored on your device that help websites remember information about your visit."
          },
          {
            title: "2. How We Use Cookies",
            content: "We use cookies to improve functionality, personalize content, and analyze website traffic."
          },
          {
            title: "3. Managing Cookies",
            content: "You can manage or disable cookies through your browser settings at any time."
          }
        ]}
      />
      <Footer />
    </>
  );
}