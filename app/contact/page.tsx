"use client";

import { motion } from "framer-motion";

const channels = [
  {
    label: "Email",
    value: "ceo@hellodilly.com",
    href: "mailto:ceo@hellodilly.com",
    note: "Fastest. I read everything. I respond to everything that's interesting.",
  },
  {
    label: "GitHub",
    value: "@dilan1234321",
    href: "https://github.com/dilan1234321",
    note: "Where the receipts live.",
  },
  {
    label: "Dilly",
    value: "hellodilly.com",
    href: "https://hellodilly.com",
    note: "If you want to know what I'm actually doing all day.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative px-6 md:px-10 pt-40 pb-24 overflow-hidden">
        <div className="glow absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-bone/40">N° 005 · Contact</p>
          <h1 className="mt-8 font-display text-[12vw] md:text-[10rem] leading-[0.85] tracking-tight">
            Let's talk.
          </h1>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl text-bone/65 text-balance leading-snug">
            No form. No autoresponder. If you write me, I read it. If it's good, I write back fast.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-7xl">
          <ul className="divide-y divide-bone/5 border-y border-bone/5">
            {channels.map((c, i) => (
              <motion.li
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-4 md:gap-10 py-10 items-baseline hover:bg-bone/[0.02] transition-colors px-2 -mx-2 rounded"
                >
                  <span className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-bone/40">
                    {c.label}
                  </span>
                  <span className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl text-bone group-hover:text-accent transition-colors break-words">
                    {c.value}
                  </span>
                  <span className="col-span-11 md:col-span-3 text-bone/55 text-sm">{c.note}</span>
                  <span className="col-span-1 text-right text-bone/40 group-hover:text-accent transition-colors text-2xl">↗</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-bone/5 px-6 md:px-10 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/40 mb-8">A small dare</p>
          <p className="font-display text-4xl md:text-7xl leading-[1.02] text-balance max-w-5xl">
            If you're building something <span className="italic text-accent">hard</span>.
            Something nobody else thinks will work. Write me first.
          </p>
          <p className="mt-10 text-bone/40 text-sm tracking-wider">D.K.</p>
        </div>
      </section>
    </>
  );
}
