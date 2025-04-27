'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function PrivacyPolicyPage() {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <>
      <Header />
      <main className={`container px-4 py-12 max-w-3xl mx-auto ${current.infoPageBg} ${current.infoPageText}`}>
        <section className="text-center mb-10">
          <h1 className={`text-4xl font-bold mb-4 ${current.infoPageTitle}`}>Privacy Policy</h1>
          <p className={`${current.infoPageDateText}`}>Last updated: April 2025</p>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>1. Information We Collect</h2>
            <p>We collect personal information to provide better services. This includes name, email, and usage data.</p>
          </div>

          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>2. How We Use Information</h2>
            <p>Your information helps us improve our services, provide customer support, and personalize user experiences.</p>
          </div>

          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>3. Data Protection</h2>
            <p>We use appropriate security measures to protect your information from unauthorized access.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}