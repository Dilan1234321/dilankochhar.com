"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import EmailLink from "@/components/EmailLink";
import { BOOKING_URL, EMAIL } from "@/lib/content";

export type MenuLink = { href: string; label: string };

const MENU_ID = "mobile-menu";

/**
 * Phone-only navigation: a hamburger button that opens a full-screen overlay with the
 * section links stacked large. Hidden from `sm` up, where the inline nav takes over.
 */
export default function MobileMenu({ siteName, links }: { siteName: string; links: MenuLink[] }) {
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  // Anchor to scroll to once the menu has closed and the body is scrollable again.
  const pendingHash = useRef<string | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll while open; restore on close or unmount.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus moves into the menu on open and back to the hamburger on close.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      closeButton.current?.focus({ preventScroll: true });
      return;
    }
    if (!wasOpen.current) return;
    wasOpen.current = false;
    openButton.current?.focus({ preventScroll: true });
    const hash = pendingHash.current;
    pendingHash.current = null;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        history.pushState(null, "", hash);
        target.scrollIntoView();
      } else {
        window.location.hash = hash;
      }
    }
  }, [open]);

  // Escape closes; Tab stays inside the overlay.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // If the viewport grows past `sm` while open, the overlay no longer applies.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => mq.matches && close();
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, close]);

  function onLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    pendingHash.current = href;
    close();
  }

  return (
    <div className="sm:hidden">
      <button
        ref={openButton}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={MENU_ID}
        onClick={() => setOpen(true)}
        className="-my-2.5 -mr-2.5 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-[#f4f4f5]"
      >
        <svg aria-hidden width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          <path d="M3 6h14M3 14h14" />
        </svg>
      </button>

      <div
        id={MENU_ID}
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 overflow-y-auto bg-white transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 motion-reduce:translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-between gap-4 py-8">
            <a href="/" className="font-medium tracking-tight">{siteName}</a>
            <button
              ref={closeButton}
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="-my-2.5 -mr-2.5 flex h-11 w-11 items-center justify-center rounded-full text-lg text-ink transition-colors hover:bg-[#f4f4f5]"
            >
              ✕
            </button>
          </div>

          <nav aria-label="Mobile" className="pt-6">
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => onLinkClick(e, link.href)}
                    className="block text-3xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 flex flex-col items-start gap-5 border-t border-line pt-8 pb-12">
            {BOOKING_URL && (
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-3d btn-navy">
                Book a call
              </a>
            )}
            <EmailLink email={EMAIL} className="text-[15px] text-soft transition-colors hover:text-ink">
              {EMAIL}
            </EmailLink>
          </div>
        </div>
      </div>
    </div>
  );
}
