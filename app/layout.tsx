import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dilankochhar.com"),
  title: {
    default: "Dilan Kochhar — Web developer, AI engineer & SEO/AEO specialist",
    template: "%s — Dilan Kochhar",
  },
  description:
    "Websites, apps, and AI agents designed and built by one person — plus a $500/month SEO & AEO retainer that gets businesses found on Google and cited by AI. Founder of Dilly. Tampa, FL.",
  keywords: [
    "web developer Tampa",
    "SEO services",
    "AEO",
    "AI search optimization",
    "answer engine optimization",
    "AI agents",
    "Next.js developer",
    "Dilan Kochhar",
  ],
  openGraph: {
    title: "Dilan Kochhar — Web, AI & Search",
    description:
      "Websites, apps, and AI agents built solo — and a monthly SEO + AEO retainer that makes sure they get found.",
    url: "https://dilankochhar.com",
    siteName: "Dilan Kochhar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilan Kochhar — Web, AI & Search",
    description:
      "Websites, apps, and AI agents built solo — and a monthly SEO + AEO retainer that makes sure they get found.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dilan Kochhar",
  url: "https://dilankochhar.com",
  image: "https://dilankochhar.com/dilan.jpg",
  email: "mailto:ceo@hellodilly.com",
  jobTitle: "Web developer, AI engineer & SEO/AEO specialist",
  address: { "@type": "PostalAddress", addressLocality: "Tampa", addressRegion: "FL" },
  sameAs: ["https://github.com/dilan1234321", "https://hellodilly.com"],
  knowsAbout: [
    "Web development",
    "SEO",
    "Answer engine optimization (AEO)",
    "AI agents",
    "Next.js",
    "React Native",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
