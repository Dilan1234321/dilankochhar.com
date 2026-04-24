"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/dilly", label: "Dilly" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overHero = onHome && !scrolled;
  const textColor = overHero ? "text-white" : "text-ink";
  const mutedColor = overHero ? "text-white/70" : "text-ink/60";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/90 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[92rem] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className={`font-display text-2xl tracking-tight transition-colors ${textColor}`}>
          Dilan Kochhar
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm transition-colors ${
                    active ? textColor : mutedColor
                  } hover:${textColor}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className={`ml-2 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm transition-colors ${
                overHero
                  ? "bg-white text-ink hover:bg-paperHi"
                  : "bg-ink text-paper hover:bg-ochre"
              }`}
            >
              Get in touch
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${textColor}`}
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
                  className={`block font-display text-3xl ${
                    pathname === l.href ? "text-ochre" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-ink text-paper px-5 py-2.5 text-sm"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
