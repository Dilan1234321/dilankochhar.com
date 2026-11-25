import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dilankochhar.com"),
  title: {
    default: "Dilan Kochhar | Founder of Dilly, software & web developer",
    template: "%s | Dilan Kochhar",
  },
  description:
    "Dilan Kochhar is the founder of Dilly and a software and web developer in Tampa, FL. Websites, apps, and AI systems, designed and built start to finish.",
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
    title: "Dilan Kochhar | Web, AI & Search",
    description:
      "Websites, apps, and AI agents built solo, and a monthly SEO + AEO retainer that makes sure they get found.",
    url: "https://dilankochhar.com",
    siteName: "Dilan Kochhar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilan Kochhar | Web, AI & Search",
    description:
      "Websites, apps, and AI agents built solo, and a monthly SEO + AEO retainer that makes sure they get found.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dilan Kochhar",
  url: "https://dilankochhar.com",
  image: "https://dilankochhar.com/headshot.jpg",
  email: "mailto:ceo@hellodilly.com",
  jobTitle: "Founder of Dilly",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
