"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { EMAIL } from "@/lib/content";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const MAIL_SUBJECT = "Hey Dilan, found you on dilankochhar.com";

const NEEDS = ["Website", "CRM management", "Website care", "App or AI agent", "Not sure yet"];
const BUDGETS = ["$1,000–$2,500", "$2,500–$5,000", "$5,000+", "Monthly (CRM or care)", "Not sure"];
const TIMELINES = ["ASAP", "Within a month", "1–3 months", "Just exploring"];

type Fields = {
  name: string;
  email: string;
  need: string;
  budget: string;
  timeline: string;
  message: string;
};

const EMPTY: Fields = { name: "", email: "", need: "", budget: "", timeline: "", message: "" };

type Status = "idle" | "sending" | "sent" | "mailto";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted " +
  "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
const labelClass = "block text-sm font-medium text-ink";

function mailtoHref(f: Fields) {
  const body = [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    `What I need: ${f.need}`,
    `Budget: ${f.budget || "Not specified"}`,
    `Timeline: ${f.timeline || "Not specified"}`,
    "",
    f.message,
  ].join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function openMail() {
    setStatus("mailto");
    window.location.href = mailtoHref(fields);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    // Bots fill the hidden checkbox; pretend it worked and drop it.
    if (botcheck) {
      setStatus("sent");
      return;
    }
    track("contact_form_submit", { need: fields.need, budget: fields.budget || "none" });

    if (!WEB3FORMS_KEY) {
      openMail();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New project inquiry from dilankochhar.com",
          from_name: "dilankochhar.com",
          botcheck: false,
          name: fields.name,
          email: fields.email,
          need: fields.need,
          budget: fields.budget || "Not specified",
          timeline: fields.timeline || "Not specified",
          message: fields.message,
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error("Web3Forms request failed");
      setStatus("sent");
      setFields(EMPTY);
    } catch {
      // Keep everything they typed and hand it to their mail app instead.
      openMail();
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl bg-accent/10 px-5 py-6 text-center">
        <p className="text-[15px] font-medium text-accent">Thanks, got it. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: hidden from people and screen readers. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>What do you need?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {NEEDS.map((n, i) => (
            <label key={n} className="cursor-pointer">
              <input
                type="radio"
                name="need"
                value={n}
                required={i === 0}
                checked={fields.need === n}
                onChange={() => set("need", n)}
                className="peer sr-only"
              />
              <span
                className="inline-block rounded-full border border-line px-3.5 py-1.5 text-sm text-soft transition-colors
                  hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent
                  peer-focus-visible:ring-2 peer-focus-visible:ring-accent/30"
              >
                {n}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-budget" className={labelClass}>Budget</label>
          <select
            id="cf-budget"
            name="budget"
            value={fields.budget}
            onChange={(e) => set("budget", e.target.value)}
            className={inputClass}
          >
            <option value="">Select…</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cf-timeline" className={labelClass}>Timeline</label>
          <select
            id="cf-timeline"
            name="timeline"
            value={fields.timeline}
            onChange={(e) => set("timeline", e.target.value)}
            className={inputClass}
          >
            <option value="">Select…</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="A few lines about the project"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={sending} className="btn-3d btn-navy disabled:cursor-wait disabled:opacity-70">
          {sending ? "Sending…" : "Send"}
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {status === "mailto" && (
            <>
              Your email app should open with the details filled in.{" "}
              <a href={mailtoHref(fields)} className="text-accent underline underline-offset-2">
                Open it again
              </a>
            </>
          )}
        </p>
      </div>
    </form>
  );
}
