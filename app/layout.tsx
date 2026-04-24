import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

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
  title: "Dilan Kochhar — Portfolio",
  description:
    "A portfolio of websites, apps, and AI agents by Dilan Kochhar, founder of Dilly. Treated as art, because that's how they're made.",
  metadataBase: new URL("https://dilankochhar.com"),
  openGraph: {
    title: "Dilan Kochhar — Portfolio",
    description:
      "Websites, apps, and AI agents treated as art. Solo-built, shipped, signed.",
    url: "https://dilankochhar.com",
    siteName: "Dilan Kochhar",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="paper min-h-screen bg-paper text-ink antialiased">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
