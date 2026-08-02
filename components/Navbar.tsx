"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/dilly", label: "Dilly" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Over the dark home hero the nav runs light; everywhere else it's solid paper.
  const overDark = pathname === "/" && !scrolled && !open;
  const text = overDark ? "text-paper" : "text-ink";
  const muted = overDark ? "text-paper/60 hover:text-paper" : "text-ink/60 hover:text-ink";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        overDark ? "bg-transparent" : "bg-paper/90 backdrop-blur-md border-b hairline"
      }`}
    >
      <nav className="mx-auto max-w-[88rem] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className={`font-display text-lg tracking-tight transition-colors ${text}`}>Dilan Kochhar</span>
          <span className={`hidden sm:inline font-medium text-[10px] uppercase tracking-[0.2em] transition-colors ${overDark ? "text-paper/40" : "text-ink/40"}`}>
            Web · AI · Search
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm transition-colors ${active ? `${text} font-medium` : muted}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/services"
              className={`ml-2 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                overDark
                  ? "bg-paper text-ink hover:bg-accentBright hover:text-paper"
                  : "bg-ink text-paper hover:bg-accent"
              }`}
            >
              Hire me
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 transition-colors ${text}`}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t hairline bg-paper/95 backdrop-blur-md">
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block font-display text-2xl ${
                    pathname === l.href ? "text-accent" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/services"
                className="inline-flex rounded-md bg-ink text-paper px-5 py-2.5 text-sm font-medium"
              >
                Hire me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
