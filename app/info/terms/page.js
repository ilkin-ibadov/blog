'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function TermsPage() {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <>
      <Header />
      <main className={`container px-4 py-12 max-w-3xl mx-auto ${current.infoPageBg} ${current.infoPageText}`}>
        <section className="text-center mb-10">
          <h1 className={`text-4xl font-bold mb-4 ${current.infoPageTitle}`}>Terms of Service</h1>
          <p className={`${current.infoPageDateText}`}>Updated April 2025</p>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>1. Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
          </div>

          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>2. User Responsibilities</h2>
            <p>You are responsible for maintaining the security of your account and for all activities that occur under your account.</p>
          </div>

          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${current.infoPageHeading}`}>3. Modification of Terms</h2>
            <p>We reserve the right to change or update these terms at any time. Continued use of the services indicates your acceptance of any changes.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}