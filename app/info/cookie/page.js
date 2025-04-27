'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function CookiePolicyPage() {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <>
      <Header />
      <main className={`container px-4 py-12 max-w-3xl mx-auto ${current.infoPageText}`}>
        <section className="text-center mb-10">
          <h1 className={`text-4xl font-bold mb-4 ${current.infoPageTitle}`}>Cookie Policy</h1>
          <p className={`${current.infoPageDateText}`}>Last updated: April 2025</p>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>1. What Are Cookies?</h2>
            <p>Cookies are small data files stored on your device that help websites remember information about your visit.</p>
          </div>

          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>2. How We Use Cookies</h2>
            <p>We use cookies to improve functionality, personalize content, and analyze website traffic.</p>
          </div>

          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>3. Managing Cookies</h2>
            <p>You can manage or disable cookies through your browser settings at any time.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}