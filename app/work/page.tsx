"use client";

import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "Dilly",
    role: "Founder, Engineer, Designer",
    year: "2025 — present",
    url: "hellodilly.com",
    href: "https://hellodilly.com",
    tag: "SaaS · Stealth",
    body: "An entire SaaS platform built solo. The thesis: turn career readiness into a real-time score and give students the next move that actually matters. This is the one.",
    status: "live",
  },
  {
    n: "02",
    title: "U Tampa AKPsi",
    role: "Lead Developer",
    year: "2025",
    url: "utampaakpsi.com",
    href: "https://utampaakpsi.com",
    tag: "Org Site",
    body: "The official site for Alpha Kappa Psi at the University of Tampa. Built to outclass every other chapter site in the country. It does.",
    status: "live",
  },
  {
    n: "03",
    title: "Erickson Flooring",
    role: "Full build · Design + Code",
    year: "2024",
    url: "erickson-flooring.com",
    href: "https://erickson-flooring.com",
    tag: "Small Business",
    body: "A complete top-to-bottom marketing site for a flooring company. Real client. Real revenue. Real shipping.",
    status: "live",
  },
  {
    n: "04",
    title: "Puchalski Performance",
    role: "Full build",
    year: "2026",
    url: "—",
    href: null,
    tag: "Coming soon",
    body: "Athletic performance brand. Currently in design.",
    status: "wip",
  },
  {
    n: "05",
    title: "Taken Time to Design",
    role: "Full build",
    year: "2026",
    url: "—",
    href: null,
    tag: "Coming soon",
    body: "Studio site. In progress.",
    status: "wip",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-bone/40 font-mono">N° 004 — Selected Work</p>
          <h1 className="mt-8 font-display text-[12vw] md:text-[10rem] leading-[0.85] tracking-tight">
            Work.
          </h1>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl text-bone/65 text-balance leading-snug">
            Five sites. Three live, two on the way. Every one designed, coded, and shipped solo.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-7xl">
          <ul className="space-y-px bg-bone/5">
            {projects.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-ink"
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 p-8 md:p-14 group hover:bg-bone/[0.02] transition-colors">
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-bone/35">{p.n}</span>
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance group-hover:text-accent transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm text-bone/45 font-mono uppercase tracking-wider">{p.tag}</p>
                  </div>
                  <div className="md:col-span-6 space-y-5">
                    <p className="text-bone/70 text-lg leading-relaxed text-balance">{p.body}</p>
                    <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-bone/5 text-sm">
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.2em] text-bone/35 font-mono">Role</dt>
                        <dd className="mt-1 text-bone/80">{p.role}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.2em] text-bone/35 font-mono">Year</dt>
                        <dd className="mt-1 text-bone/80">{p.year}</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-[10px] uppercase tracking-[0.2em] text-bone/35 font-mono">URL</dt>
                        <dd className="mt-1">
                          {p.href ? (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-bone hover:text-accent transition-colors underline decoration-accent/40 underline-offset-4"
                            >
                              {p.url} ↗
                            </a>
                          ) : (
                            <span className="text-bone/50">{p.url}</span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
