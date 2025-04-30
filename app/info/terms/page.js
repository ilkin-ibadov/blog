'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import InfoPage from "@/components/info/InfoPage";

export default function TermsPage() {
  return (
    <>
      <Header />
      <InfoPage
        title="Terms of Service"
        updatedDate="Updated: April 2025"
        sections={[
          {
            title: "1. Acceptance of Terms",
            content: "By accessing and using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately."
          },
          {
            title: "2. User Responsibilities",
            content: "You are responsible for maintaining the security of your account and for all activities that occur under your account."
          },
          {
            title: "3. Modification of Terms",
            content: "We reserve the right to change or update these terms at any time. Continued use of the services indicates your acceptance of any changes."
          }
        ]}
      />
      <Footer />
    </>
  );
}