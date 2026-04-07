"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Index" },
  { href: "/dilly", label: "Dilly" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
          ? "backdrop-blur-xl bg-ink/70 border-b border-bone/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">Dilan Kochhar</span>
          <span className="hidden md:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-bone/50">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Available
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    active ? "text-bone" : "text-bone/55 hover:text-bone"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-bone text-ink px-4 py-2 text-sm font-medium hover:bg-accent hover:text-ink transition-colors"
            >
              Hire me
              <span aria-hidden>→</span>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-bone/80 p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-bone transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-6 h-px bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-bone transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
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
            className="md:hidden overflow-hidden border-t border-bone/5 bg-ink/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-6 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block font-display text-2xl ${
                      pathname === l.href ? "text-accent" : "text-bone"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-bone text-ink px-5 py-2.5 text-sm font-medium"
                >
                  Hire me →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
