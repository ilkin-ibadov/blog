'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import InfoPage from "@/components/info/InfoPage";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <InfoPage
        title="Privacy Policy"
        updatedDate="Last updated: April 2025"
        sections={[
          {
            title: "1. Information We Collect",
            content: "We collect personal information to provide better services. This includes name, email, and usage data."
          },
          {
            title: "2. How We Use Information",
            content: "Your information helps us improve our services, provide customer support, and personalize user experiences."
          },
          {
            title: "3. Data Protection",
            content: "We use appropriate security measures to protect your information from unauthorized access."
          }
        ]}
      />
      <Footer />
    </>
  );
}