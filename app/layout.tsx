import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dilan Kochhar — Founder, Engineer, 20",
  description:
    "Dilan Kochhar is the founder of Dilly and a self-taught engineer building the tools that should already exist. Long Island → Tampa.",
  metadataBase: new URL("https://dilankochhar.com"),
  openGraph: {
    title: "Dilan Kochhar — Founder, Engineer, 20",
    description:
      "Founder of Dilly. 5 sites shipped. 0 funding. Building the things colleges should have built years ago.",
    url: "https://dilankochhar.com",
    siteName: "Dilan Kochhar",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain min-h-screen bg-ink text-bone antialiased">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
