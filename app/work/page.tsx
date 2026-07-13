"use client";

import Link from "next/link";
import Image from "next/image";
import { projects, liveCount, wipCount, asWord, type Project } from "@/lib/projects";
import { craftIntro, craftPillars, howIWork } from "@/lib/craft";

function Tile({ p }: { p: Project }) {
  const isLight = p.bg === "#E4D9C2";
  const titleColor = isLight ? "text-ink" : "text-white";

  const inner = (
    <>
      <div
        className={`tile ${p.aspect} mb-3 transition-all duration-500 ease-out group-hover:shadow-[0_30px_60px_-20px_rgba(28,31,43,0.35)]`}
        style={p.image ? {} : { background: p.bg }}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="tile-img"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-6 md:p-8 transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <span
              className={`font-display leading-[0.9] tracking-tight transition-opacity duration-500 ${titleColor} group-hover:opacity-95`}
              style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
            >
              {p.title}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-ochre opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08] mix-blend-overlay" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-ochre transition-[width] duration-700 ease-out group-hover:w-full" />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-display text-lg md:text-xl text-ink transition-colors duration-300 group-hover:text-ochre">
            {p.title}
          </p>
          <p className="text-xs uppercase tracking-widest text-ink/50 mt-1 transition-colors duration-300 group-hover:text-ink/70">
            {p.tag} · {p.year}
          </p>
        </div>
        {p.href && (
          <span className="text-ink/40 text-xl transition-all duration-300 group-hover:text-ochre group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        )}
      </div>
    </>
  );

  const wrapperBase =
    "group block break-inside-avoid mb-8 md:mb-12 transition-transform duration-500 ease-out will-change-transform hover:-translate-y-1.5";

  if (p.href) {
    return (
      <a href={`#${p.slug}`} className={wrapperBase}>
        {inner}
      </a>
    );
  }
  return <div className={`${wrapperBase} opacity-80`}>{inner}</div>;
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
            {asWord(projects.length).charAt(0).toUpperCase() + asWord(projects.length).slice(1)}{" "}
            projects, {asWord(liveCount)} live, {asWord(wipCount)} in progress. The gallery
            is the proof. The writing below is how the skills actually got used.
          </p>
        </div>
        <div className="mx-auto max-w-[92rem] mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a href="#craft" className="text-ink/60 hover:text-ochre transition-colors">
            How I work →
          </a>
          <a href="#by-project" className="text-ink/60 hover:text-ochre transition-colors">
            Skills by project →
          </a>
          <a href="#index" className="text-ink/60 hover:text-ochre transition-colors">
            Index →
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-10">
            {projects.map((p) => (
              <Tile key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Craft thesis — talk about skills first */}
      <section id="craft" className="scroll-mt-28 bg-ink text-paper px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-paper/50 mb-4">
            {craftIntro.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-4xl text-balance">
            {craftIntro.headline}
          </h2>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-paper/70 leading-relaxed">
            {craftIntro.body}
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-10 md:gap-12 border-t border-paper/15 pt-16">
            {howIWork.map((h) => (
              <div key={h.title}>
                <h3 className="font-display text-2xl md:text-3xl text-paper">{h.title}</h3>
                <p className="mt-4 text-paper/65 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 space-y-0 divide-y divide-paper/15 border-y border-paper/15">
            {craftPillars.map((pillar, i) => (
              <article key={pillar.slug} className="py-12 md:py-16 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <p className="text-xs tabular-nums text-paper/40 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl leading-none">
                    {pillar.title}
                  </h3>
                  <p className="mt-6 text-sm text-paper/45 leading-relaxed">
                    Seen in{" "}
                    {pillar.where.map((name, idx) => (
                      <span key={name}>
                        {idx > 0 && (idx === pillar.where.length - 1 ? ", and " : ", ")}
                        <span className="text-paper/70">{name}</span>
                      </span>
                    ))}
                    .
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="font-display text-2xl md:text-3xl leading-snug text-balance text-paper">
                    {pillar.lead}
                  </p>
                  <p className="mt-6 text-base md:text-lg text-paper/65 leading-relaxed max-w-3xl">
                    {pillar.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills by project — long form */}
      <section id="by-project" className="scroll-mt-28 px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-widest text-ink/50 mb-4">By project</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                Where each skill showed up.
              </h2>
            </div>
            <p className="md:col-span-5 text-ink/60 leading-relaxed md:text-right text-lg">
              First person on purpose. If I can&apos;t explain how a skill was used on a
              real project, it doesn&apos;t belong on this page.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-ink/10 border-y hairline">
            {projects.map((p, i) => (
              <article
                key={p.slug}
                id={p.slug}
                className="scroll-mt-28 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12"
              >
                <div className="md:col-span-4">
                  <p className="text-xs tabular-nums text-ink/40 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-3xl md:text-5xl leading-none text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-xs uppercase tracking-widest text-ink/50">
                    {p.tag} · {p.year}
                  </p>
                  <p className="mt-2 text-sm text-ink/55">{p.role}</p>
                  <p className="mt-6 font-mono text-[11px] leading-relaxed text-ink/45">
                    {p.stack}
                  </p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-sm text-ink/70 hover:text-ochre transition-colors"
                    >
                      {p.url} <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <p className="mt-6 text-sm italic text-ink/40">{p.url}</p>
                  )}
                </div>

                <div className="md:col-span-8">
                  <p className="text-xl md:text-2xl text-ink/80 leading-relaxed text-pretty max-w-3xl font-display">
                    {p.summary}
                  </p>
                  <p className="mt-12 text-xs uppercase tracking-widest text-ink/40">
                    Skills on this project
                  </p>
                  <ul className="mt-4 divide-y divide-ink/10 border-t hairline">
                    {p.skills.map((s) => (
                      <li key={s.name} className="py-8">
                        <h4 className="font-display text-2xl md:text-3xl text-ink">{s.name}</h4>
                        <p className="mt-3 text-base md:text-lg text-ink/60 leading-relaxed max-w-2xl">
                          {s.used}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Index */}
      <section id="index" className="scroll-mt-28 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[92rem]">
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-6">Index</p>
          <ul className="divide-y divide-ink/10 border-y hairline">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <div className="grid grid-cols-12 gap-4 py-5 items-baseline">
                  <span className="col-span-1 text-sm text-ink/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={`#${p.slug}`}
                    className="col-span-7 md:col-span-4 font-display text-xl md:text-2xl hover:text-ochre transition-colors"
                  >
                    {p.title}
                  </Link>
                  <span className="hidden md:block col-span-3 text-sm text-ink/60">{p.role}</span>
                  <span className="hidden md:block col-span-2 text-sm text-ink/60">{p.year}</span>
                  <span className="col-span-4 md:col-span-2 text-sm text-right">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink/60 hover:text-ochre transition-colors"
                      >
                        {p.url} ↗
                      </a>
                    ) : (
                      <span className="text-ink/40 italic">{p.url}</span>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
