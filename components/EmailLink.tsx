"use client";

import { useEffect, useRef, useState } from "react";

const SUBJECT = "Hey Dilan, found you on dilankochhar.com";
// How long to wait for a mail app to take focus before assuming it never opened.
const FALLBACK_DELAY_MS = 1500;

/**
 * A mailto link with a fallback. If no mail app opens after the click (the page
 * never loses focus), a popup shows the address and asks the sender to mention
 * the website in the subject line.
 */
export default function EmailLink({
  email,
  className,
  children,
}: {
  email: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const cleanup = useRef<() => void>();

  const subject = encodeURIComponent(SUBJECT);
  const mailto = `mailto:${email}?subject=${subject}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;

  useEffect(() => () => cleanup.current?.(), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleClick() {
    cleanup.current?.();
    let left = false;
    const markLeft = () => {
      left = true;
    };
    const onVisibility = () => document.hidden && markLeft();
    window.addEventListener("blur", markLeft);
    document.addEventListener("visibilitychange", onVisibility);
    const timer = window.setTimeout(() => {
      done();
      if (!left) setOpen(true);
    }, FALLBACK_DELAY_MS);
    function done() {
      window.clearTimeout(timer);
      window.removeEventListener("blur", markLeft);
      document.removeEventListener("visibilitychange", onVisibility);
    }
    cleanup.current = done;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked; the address is still on screen */
    }
  }

  return (
    <>
      <a href={mailto} className={className} onClick={handleClick}>
        {children}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-fallback-title"
            className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-left shadow-[0_20px_60px_rgba(10,10,11,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-[#f4f4f5] hover:text-ink"
            >
              ✕
            </button>
            <h2 id="email-fallback-title" className="text-lg font-semibold tracking-tight text-ink">
              Email didn&apos;t open?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">
              No worries. Email me at{" "}
              <span className="font-medium text-ink">{email}</span> and mention you found me through
              dilankochhar.com in the subject line.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={copy} className="btn-3d btn-navy !px-5 !py-2.5 !text-[13px]">
                {copied ? "Copied!" : "Copy email"}
              </button>
              <a
                href={gmail}
                target="_blank"
                rel="noreferrer"
                className="btn-3d btn-white !px-5 !py-2 !text-[13px]"
              >
                Open in Gmail
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
