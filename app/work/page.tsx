import type { Metadata } from "next";
import Link from "next/link";
import { projects, liveCount, wipCount, asWord } from "@/lib/projects";
import { craftIntro, craftPillars, howIWork } from "@/lib/craft";

export const metadata: Metadata = {
  title: "Work: projects, live and in build",
  description: `${asWord(projects.length)} projects: SaaS, recruiting engines, client sites, and AI agents, with a first-person breakdown of how each skill was actually used.`,
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Work</p>
            <h1 className="font-display text-4xl md:text-6xl tracking-tight">
              Proof, not promises.
            </h1>
          </div>
          <p className="md:col-span-4 text-lg text-ink/60 leading-relaxed md:text-right">
            {asWord(projects.length).charAt(0).toUpperCase() + asWord(projects.length).slice(1)}{" "}
            projects, {asWord(liveCount)} live, {asWord(wipCount)} in progress. Every one
            designed, coded, and shipped by me.
          </p>
        </div>
        <div className="mx-auto max-w-[88rem] mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a href="#craft" className="text-ink/60 hover:text-accent transition-colors">
            How I work →
          </a>
          <a href="#by-project" className="text-ink/60 hover:text-accent transition-colors">
            Skills by project →
          </a>
          <a href="#index" className="text-ink/60 hover:text-accent transition-colors">
            Index →
          </a>
        </div>
      </section>

      {/* Case grid */}
      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className={`case-card group block p-7 md:p-8 ${p.href ? "" : "opacity-70"}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-xs text-ink/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-[10px] uppercase tracking-[0.2em] text-ink/45 text-right">
                  {p.tag} · {p.year}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl tracking-tight text-ink group-hover:text-accent transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-ink/55">{p.role}</p>
              <p className="mt-4 text-ink/60 leading-relaxed line-clamp-3">{p.summary}</p>
              <p className="mt-6 font-medium text-[11px] text-ink/45 leading-relaxed">{p.stack}</p>
              <p className="mt-5 text-sm">
                {p.href ? (
                  <span className="text-ink/70 group-hover:text-accent transition-colors">
                    {p.url} ↗
                  </span>
                ) : (
                  <span className="italic text-ink/40">{p.url}</span>
                )}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Craft thesis */}
      <section id="craft" className="scroll-mt-24 bg-ink text-paper px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-paper/50 mb-4">
            {craftIntro.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight max-w-4xl text-balance">
            {craftIntro.headline}
          </h2>
          <p className="mt-7 max-w-2xl text-lg text-paper/70 leading-relaxed">
            {craftIntro.body}
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-12 border-t border-paper/15 pt-12">
            {howIWork.map((h) => (
              <div key={h.title}>
                <h3 className="font-display text-xl md:text-2xl text-paper">{h.title}</h3>
                <p className="mt-4 text-paper/65 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-0 divide-y divide-paper/15 border-y border-paper/15">
            {craftPillars.map((pillar, i) => (
              <article key={pillar.slug} className="py-10 md:py-14 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <p className="font-medium text-xs tabular-nums text-paper/40 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 text-sm text-paper/45 leading-relaxed">
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
                  <p className="font-display text-xl md:text-2xl leading-snug text-balance text-paper">
                    {pillar.lead}
                  </p>
                  <p className="mt-5 text-base md:text-lg text-paper/65 leading-relaxed max-w-3xl">
                    {pillar.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills by project: long form */}
      <section id="by-project" className="scroll-mt-24 px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
            <div className="md:col-span-7">
              <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">By project</p>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">
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
                className="scroll-mt-24 py-12 md:py-16 grid md:grid-cols-12 gap-8 md:gap-12"
              >
                <div className="md:col-span-4">
                  <p className="font-medium text-xs tabular-nums text-ink/40 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-medium text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    {p.tag} · {p.year}
                  </p>
                  <p className="mt-2 text-sm text-ink/55">{p.role}</p>
                  <p className="mt-6 font-medium text-[11px] leading-relaxed text-ink/45">
                    {p.stack}
                  </p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-sm text-ink/70 hover:text-accent transition-colors"
                    >
                      {p.url} <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <p className="mt-6 text-sm italic text-ink/40">{p.url}</p>
                  )}
                </div>

                <div className="md:col-span-8">
                  <p className="text-lg md:text-xl text-ink/75 leading-relaxed text-pretty max-w-3xl">
                    {p.summary}
                  </p>
                  <p className="mt-10 font-medium text-[10px] uppercase tracking-[0.2em] text-ink/40">
                    Skills on this project
                  </p>
                  <ul className="mt-4 divide-y divide-ink/10 border-t hairline">
                    {p.skills.map((s) => (
                      <li key={s.name} className="py-6">
                        <h4 className="font-display text-xl md:text-2xl text-ink">{s.name}</h4>
                        <p className="mt-3 text-base text-ink/60 leading-relaxed max-w-2xl">
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
      <section id="index" className="scroll-mt-24 px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[88rem]">
          <p className="font-medium text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-6">Index</p>
          <ul className="divide-y divide-ink/10 border-y hairline">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <div className="grid grid-cols-12 gap-4 py-4 items-baseline">
                  <span className="col-span-1 font-medium text-sm text-ink/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={`#${p.slug}`}
                    className="col-span-7 md:col-span-4 font-display text-lg md:text-xl hover:text-accent transition-colors"
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
                        className="text-ink/60 hover:text-accent transition-colors"
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
