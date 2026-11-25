"use client";

import { useState } from "react";

const SUBJECT = "Hey Dilan, found you on dilankochhar.com";

/**
 * A mailto link that also works when no mail app is set up: clicking copies the
 * address and shows a Gmail fallback, while still trying to open the mail app.
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
  const [shown, setShown] = useState(false);
  const subject = encodeURIComponent(SUBJECT);
  const mailto = `mailto:${email}?subject=${subject}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;

  return (
    <span className="relative inline-flex flex-col items-center">
      <a
        href={mailto}
        className={className}
        onClick={() => {
          navigator.clipboard?.writeText(email).catch(() => {});
          setShown(true);
        }}
      >
        {children}
      </a>
      {shown && (
        <span
          role="status"
          className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] text-soft shadow-[0_8px_30px_rgba(10,10,11,0.08)] z-10"
        >
          Copied {email} ·{" "}
          <a href={gmail} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">
            Open in Gmail
          </a>
        </span>
      )}
    </span>
  );
}
