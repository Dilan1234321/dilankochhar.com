"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Index", num: "00" },
  { href: "/work", label: "Work", num: "01" },
  { href: "/dilly", label: "Dilly", num: "02" },
  { href: "/about", label: "About", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-paper/80 border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[92rem] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight leading-none">
            Dilan <span className="italic font-light text-inkSoft">Kochhar</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-inkMuted font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-ochre" />
            Studio of one
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-0">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-mono uppercase tracking-[0.22em] transition-colors ${
                    active ? "text-ink" : "text-inkMuted hover:text-ink"
                  }`}
                >
                  <span className="text-[9px] mr-1.5 text-inkMuted/70">{l.num}</span>
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ml-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border border-ink rounded-none px-4 py-2 text-xs font-mono uppercase tracking-[0.22em] bg-ink text-paper hover:bg-ochre hover:border-ochre hover:text-paper transition-colors"
            >
              Commission
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t hairline bg-paperHi/95 backdrop-blur-md"
          >
            <ul className="px-6 py-8 space-y-4">
              {links.map((l) => (
                <li key={l.href} className="flex items-baseline gap-4">
                  <span className="text-[10px] font-mono text-inkMuted">{l.num}</span>
                  <Link
                    href={l.href}
                    className={`font-display text-3xl ${
                      pathname === l.href ? "text-ochre italic" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex border border-ink bg-ink text-paper px-5 py-2.5 text-xs font-mono uppercase tracking-[0.22em]"
                >
                  Commission →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
