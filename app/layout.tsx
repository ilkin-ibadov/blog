import { Geist } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MetaBlog",
  description: "Insights, tutorials, and thought pieces on software development, tech trends, and coding best practices.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
