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
      {/* Cover */}
      <section className="relative px-6 md:px-10 pt-40 pb-24 overflow-hidden">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-baseline justify-between border-b hairline pb-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° 04 · Correspondence
            </p>
            <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              Open line. No form. No autoresponder.
            </p>
          </div>

          <h1 className="mt-14 font-display text-[22vw] md:text-[14rem] leading-[0.82] tracking-tight">
            <span className="block">Let&rsquo;s</span>
            <span className="block italic font-light text-ochre -mt-2 md:-mt-6">talk.</span>
          </h1>

          <p className="mt-12 max-w-3xl text-xl md:text-2xl text-inkSoft text-balance leading-relaxed">
            No form. No autoresponder. If you write me, I read it. If it&rsquo;s good, I write
            back fast.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <ul className="border-y hairline divide-y divide-ink/10">
            {channels.map((c, i) => (
              <motion.li
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-4 md:gap-10 py-10 items-baseline hover:bg-paperHi/60 transition-colors px-3 -mx-3"
                >
                  <span className="col-span-12 md:col-span-2 text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
                    {c.label}
                  </span>
                  <span className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl text-ink group-hover:text-ochre transition-colors break-words">
                    {c.value}
                  </span>
                  <span className="col-span-11 md:col-span-3 text-inkSoft text-sm">{c.note}</span>
                  <span className="col-span-1 text-right text-inkMuted group-hover:text-ochre transition-colors text-2xl">
                    ↗
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Small dare */}
      <section className="border-t hairline px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted mb-8">
            A small dare
          </p>
          <p className="font-display text-4xl md:text-7xl leading-[1.02] text-balance max-w-5xl">
            If you&rsquo;re building something <span className="italic text-ochre">hard</span>.
            Something nobody else thinks will work. Write me first.
          </p>
          <p className="mt-12 text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
            D.K.
          </p>
        </div>
      </section>
    </>
  );
}
