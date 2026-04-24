"use client";

import { motion } from "framer-motion";

type Project = {
  n: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  url: string;
  href: string | null;
  tag: string;
  discipline: string;
  body: string;
  status: "live" | "wip";
  palette: "navy" | "bone" | "ink" | "ochre" | "olive";
};

const projects: Project[] = [
  {
    n: "01",
    title: "Dilly",
    subtitle: "Career acceleration, re-imagined from scratch.",
    role: "Founder · Engineer · Designer",
    year: "2026",
    url: "hellodilly.com",
    href: "https://hellodilly.com",
    tag: "SaaS · Stealth",
    discipline: "Product · AI · SaaS",
    body:
      "An entire platform built solo. The thesis: turn career readiness into a real-time score and hand students the next move that actually matters. This is the one.",
    status: "live",
    palette: "navy",
  },
  {
    n: "02",
    title: "Kochhar Foundation",
    subtitle: "A charity built before I knew what a framework was.",
    role: "Co-founder",
    year: "2023",
    url: "kochharfoundation.com",
    href: "https://kochharfoundation.com",
    tag: "Charity · $22K+ raised",
    discipline: "Nonprofit · Brand",
    body:
      "Proof that the building instinct started long before the code did. Over $22,000 raised for the causes that matter to us.",
    status: "live",
    palette: "ochre",
  },
  {
    n: "03",
    title: "UTampa AKPSI",
    subtitle: "The best-looking chapter site in the country.",
    role: "Lead Developer",
    year: "2025",
    url: "utampaakpsi.com",
    href: "https://utampaakpsi.com",
    tag: "Org Site",
    discipline: "Identity · Web",
    body:
      "Built to outclass every other chapter site in the country. It does.",
    status: "live",
    palette: "olive",
  },
  {
    n: "04",
    title: "Erickson Flooring",
    subtitle: "Real client. Real revenue. Real shipping.",
    role: "Full build · Design + Code",
    year: "2026",
    url: "erickson-flooring.com",
    href: "https://erickson-flooring.com",
    tag: "Small Business",
    discipline: "Marketing Site",
    body:
      "A complete top-to-bottom marketing site for a flooring company. Designed, built, launched.",
    status: "live",
    palette: "bone",
  },
  {
    n: "05",
    title: "Thinkteks",
    subtitle: "A boutique AI recruiter with an autonomous outbound agent.",
    role: "Architect · Engineer",
    year: "2026",
    url: "thinkteks.vercel.app",
    href: "https://thinkteks.vercel.app",
    tag: "Recruiting · AI Outbound",
    discipline: "Brand · Agent",
    body:
      "Full brand and site rebuild, plus an autonomous outbound agent that finds companies hiring AI engineers, writes personalized 3-touch sequences, and routes replies. All without a human.",
    status: "live",
    palette: "ink",
  },
  {
    n: "06",
    title: "Taken Time to Design",
    subtitle: "A site as slow and hand-made as the work it carries.",
    role: "Full build",
    year: "2026",
    url: "takentimetodesign.com",
    href: "https://takentimetodesign.com",
    tag: "Design Studio · Art Commissions",
    discipline: "Identity · Web",
    body:
      "A bespoke portraiture studio for artist Brooke Taken. The whole site is built around slowness — hand-drawn commissions, poetic copy, an unhurried brand.",
    status: "live",
    palette: "bone",
  },
  {
    n: "07",
    title: "Puchalski Performance",
    subtitle: "Athletic performance brand. Currently on the drafting board.",
    role: "Full build",
    year: "2026",
    url: "tba",
    href: null,
    tag: "Coming soon",
    discipline: "Brand · Web",
    body: "Currently in design.",
    status: "wip",
    palette: "olive",
  },
];

const paletteMap: Record<Project["palette"], { bg: string; grid: string; label: string }> = {
  navy:  { bg: "#252B46", grid: "rgba(245, 241, 234, 0.08)", label: "text-paperHi" },
  bone:  { bg: "#E4D9C2", grid: "rgba(28, 31, 43, 0.08)",   label: "text-ink" },
  ink:   { bg: "#1C1F2B", grid: "rgba(245, 241, 234, 0.07)", label: "text-paperHi" },
  ochre: { bg: "#B86A2E", grid: "rgba(245, 241, 234, 0.1)",  label: "text-paperHi" },
  olive: { bg: "#4F533A", grid: "rgba(245, 241, 234, 0.09)", label: "text-paperHi" },
};

function Plate({ p, i }: { p: Project; i: number }) {
  const pal = paletteMap[p.palette];
  const rotate = i % 2 === 0 ? -1.2 : 1.2;
  const even = i % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative grid md:grid-cols-12 gap-10 md:gap-14 items-center"
    >
      {/* Giant side numeral */}
      <div
        aria-hidden
        className={`pointer-events-none absolute ${even ? "-left-2 md:-left-4" : "-right-2 md:-right-4"} -top-6 md:top-1/2 md:-translate-y-1/2 font-display leading-none text-[18vw] md:text-[14rem] text-ink/[0.06] select-none`}
      >
        {p.n}
      </div>

      {/* Plate (image card) */}
      <div className={`md:col-span-7 ${even ? "md:order-1" : "md:order-2"} relative`}>
        <motion.div
          initial={{ rotate: rotate * 1.3 }}
          whileInView={{ rotate }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="plate p-3 md:p-4"
          style={{ transformOrigin: even ? "left center" : "right center" }}
        >
          {/* Top metadata strip */}
          <div className="meta-strip flex items-center justify-between px-3 md:px-4 py-2.5 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.28em] text-ink/75 bg-paperHi">
            <span>Dilan Kochhar</span>
            <span className="hidden sm:inline">{p.year}</span>
            <span>{p.discipline}</span>
          </div>

          {/* Image surface — colored panel with grid motif as placeholder. */}
          <div
            className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden"
            style={{
              background: pal.bg,
              backgroundImage: `
                linear-gradient(${pal.grid} 1px, transparent 1px),
                linear-gradient(90deg, ${pal.grid} 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <div className={`flex items-start justify-between ${pal.label}`}>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.32em] opacity-70">
                    Plate N° {p.n}
                  </p>
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.32em] opacity-70">
                    {p.tag}
                  </p>
                </div>
                <p className={`font-display italic text-5xl md:text-7xl leading-none ${pal.label} opacity-90`}>
                  {p.n}
                </p>
              </div>

              <div className={pal.label}>
                <h3 className="font-display text-4xl md:text-6xl leading-[0.9] tracking-tight text-balance">
                  {p.title}
                </h3>
                <p className={`mt-3 font-display italic text-lg md:text-2xl leading-snug max-w-md ${pal.label} opacity-90`}>
                  {p.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom metadata strip */}
          <div className="meta-strip flex items-center justify-between px-3 md:px-4 py-2.5 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.28em] text-ink/75 bg-paperHi">
            <span>{p.role}</span>
            <span className={p.status === "wip" ? "text-ochre" : ""}>
              {p.status === "wip" ? "In Studio" : "Shipped"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Text column */}
      <div className={`md:col-span-5 ${even ? "md:order-2" : "md:order-1"} relative`}>
        <div className="flex items-start gap-6">
          <p className="vrule hidden md:block text-[10px] font-mono uppercase tracking-[0.4em] text-inkMuted pt-1">
            Dilan Kochhar · {p.year}
          </p>
          <div className="flex-1">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° {p.n} · {p.discipline}
            </p>
            <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[0.9] tracking-tight text-balance">
              {p.title}.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-inkSoft leading-relaxed text-balance">
              {p.body}
            </p>
            <div className="mt-8 rule" />
            <dl className="mt-6 grid grid-cols-2 gap-y-4 text-sm">
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-[0.28em] text-inkMuted">Role</dt>
                <dd className="mt-1.5 text-ink">{p.role}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-[0.28em] text-inkMuted">Year</dt>
                <dd className="mt-1.5 text-ink">{p.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[10px] font-mono uppercase tracking-[0.28em] text-inkMuted">Visit</dt>
                <dd className="mt-1.5">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-ink border-b border-ink/30 hover:border-ochre hover:text-ochre transition-colors"
                    >
                      {p.url}
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                  ) : (
                    <span className="text-inkMuted italic">{p.url}</span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* Editorial cover for the Work section */}
      <section className="relative px-6 md:px-10 pt-40 pb-16">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              N° 01 · Portfolio · 2021 — 2026
            </p>
            <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
              Dilan Kochhar · Studio of One
            </p>
          </div>

          <div className="mt-10 md:mt-14 relative">
            <h1 className="font-display text-[22vw] md:text-[14rem] leading-[0.82] tracking-tight">
              <span className="block">Port</span>
              <span className="block italic font-light text-ochre -mt-3 md:-mt-6">folio.</span>
            </h1>
            <p className="absolute right-0 top-4 hidden md:block vrule text-[10px] font-mono uppercase tracking-[0.42em] text-inkMuted">
              Websites · Apps · AI Agents
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-12 gap-8">
            <p className="md:col-span-7 text-xl md:text-2xl text-inkSoft leading-relaxed text-balance">
              Seven plates. Six shipped, one in the studio. Every one designed, coded, and
              launched alone — treated less like a deliverable and more like something you'd
              hang on a wall.
            </p>
            <div className="md:col-span-4 md:col-start-9 border-t hairline pt-5 text-sm text-inkSoft space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-inkMuted">
                Edition
              </p>
              <p className="font-display text-2xl">First. Signed.</p>
              <p className="text-inkSoft/80">
                These are the ones I'd sign. No templates, no filler, no outsourced pieces.
              </p>
            </div>
          </div>

          <div className="rule mt-14" />
        </div>
      </section>

      {/* Plates */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem] space-y-40 md:space-y-56 py-16">
          {projects.map((p, i) => (
            <Plate key={p.title} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* Colophon for the plates */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <div className="rule" />
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-inkMuted">
                End of Portfolio
              </p>
              <p className="mt-6 font-display text-4xl md:text-6xl leading-[1.02] text-balance">
                Every plate signed.{" "}
                <span className="italic text-ochre">No ghostwriters.</span>
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 text-sm text-inkSoft space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-inkMuted">
                Next
              </p>
              <p>
                Want something made this way?{" "}
                <a href="mailto:ceo@hellodilly.com" className="underline decoration-ochre underline-offset-4 hover:text-ochre transition-colors">
                  ceo@hellodilly.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
