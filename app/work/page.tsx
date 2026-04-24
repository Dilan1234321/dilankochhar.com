"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  url: string;
  href: string | null;
  tag: string;
  bg: string;
  image?: string;
  aspect: string; // varied ratios create the gallery rhythm
};

const projects: Project[] = [
  {
    slug: "dilly",
    title: "Dilly",
    role: "Founder · Engineer · Designer",
    year: "2026",
    url: "hellodilly.com",
    href: "https://hellodilly.com",
    tag: "SaaS · AI",
    bg: "#252B46",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "kochhar-foundation",
    title: "Kochhar Foundation",
    role: "Co-founder",
    year: "2023",
    url: "kochharfoundation.com",
    href: "https://kochharfoundation.com",
    tag: "Charity · $22K raised",
    bg: "#B86A2E",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "engineers-in-ai",
    title: "Engineers in AI",
    role: "Website + autonomous outbound agent",
    year: "2026",
    url: "engineersinai.com",
    href: "https://engineersinai.com",
    tag: "Website · AI Agent",
    bg: "#1C1F2B",
    aspect: "aspect-[3/4]",
  },
  {
    slug: "utampa-akpsi",
    title: "UTampa AKPSI",
    role: "Lead Developer",
    year: "2025",
    url: "utampaakpsi.com",
    href: "https://utampaakpsi.com",
    tag: "Organization site",
    bg: "#002868",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "taken-time-to-design",
    title: "Taken Time to Design",
    role: "Full build",
    year: "2026",
    url: "takentimetodesign.com",
    href: "https://takentimetodesign.com",
    tag: "Studio · Art commissions",
    bg: "#E4D9C2",
    aspect: "aspect-[3/4]",
  },
  {
    slug: "erickson-flooring",
    title: "Erickson Flooring",
    role: "Full build",
    year: "2026",
    url: "erickson-flooring.com",
    href: "https://erickson-flooring.com",
    tag: "Small business",
    bg: "#4F533A",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "scoops",
    title: "Scoops",
    role: "In progress",
    year: "2026",
    url: "Coming soon",
    href: null,
    tag: "Consumer app · On-demand delivery",
    bg: "#B85A6E",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "puchalski-performance",
    title: "Puchalski Performance",
    role: "In progress",
    year: "2026",
    url: "Coming soon",
    href: null,
    tag: "Athletic brand",
    bg: "#2B2F1E",
    aspect: "aspect-[4/5]",
  },
];

function Tile({ p }: { p: Project }) {
  const isLight = p.bg === "#E4D9C2";
  const titleColor = isLight ? "text-ink" : "text-white";
  const captionColor = isLight ? "text-ink/60" : "text-white/70";

  const inner = (
    <>
      <div className={`tile ${p.aspect} mb-3`} style={p.image ? {} : { background: p.bg }}>
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="tile-img"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <span
              className={`font-display leading-[0.9] tracking-tight ${titleColor}`}
              style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
            >
              {p.title}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-display text-lg md:text-xl text-ink">{p.title}</p>
          <p className="text-xs uppercase tracking-widest text-ink/50 mt-1">
            {p.tag} · {p.year}
          </p>
        </div>
        {p.href && (
          <span className="text-ink/40 group-hover:text-ochre transition-colors text-xl">↗</span>
        )}
      </div>
    </>
  );

  if (p.href) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className="group block break-inside-avoid mb-8 md:mb-12"
      >
        {inner}
      </a>
    );
  }
  return <div className="group block break-inside-avoid mb-8 md:mb-12 opacity-80">{inner}</div>;
}

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-16">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-8 items-end">
          <h1 className="md:col-span-8 font-display text-[14vw] md:text-[9rem] leading-[0.9] tracking-tight">
            Work.
          </h1>
          <p className="md:col-span-4 text-lg md:text-xl text-ink/65 leading-relaxed md:text-right">
            Seven projects, six live, one in progress. Every one designed, coded, and
            shipped by me.
          </p>
        </div>
      </section>

      {/* Gallery (masonry columns) */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-10">
            {projects.map((p) => (
              <Tile key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Index table — quick reference */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-6">Index</p>
          <ul className="divide-y divide-ink/10 border-y hairline">
            {projects.map((p, i) => (
              <li key={p.slug}>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid grid-cols-12 gap-4 py-5 items-baseline hover:text-ochre transition-colors"
                  >
                    <span className="col-span-1 text-sm text-ink/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="col-span-11 md:col-span-4 font-display text-xl md:text-2xl">{p.title}</span>
                    <span className="hidden md:block col-span-3 text-sm text-ink/60">{p.role}</span>
                    <span className="hidden md:block col-span-2 text-sm text-ink/60">{p.year}</span>
                    <span className="hidden md:block col-span-2 text-sm text-right text-ink/60 group-hover:text-ochre">
                      {p.url} ↗
                    </span>
                  </a>
                ) : (
                  <div className="grid grid-cols-12 gap-4 py-5 items-baseline text-ink/50">
                    <span className="col-span-1 text-sm tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="col-span-11 md:col-span-4 font-display text-xl md:text-2xl">{p.title}</span>
                    <span className="hidden md:block col-span-3 text-sm">{p.role}</span>
                    <span className="hidden md:block col-span-2 text-sm">{p.year}</span>
                    <span className="hidden md:block col-span-2 text-sm text-right italic">{p.url}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
