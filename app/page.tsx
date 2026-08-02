import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { craftPillars } from "@/lib/craft";
import { retainer, builds } from "@/lib/services";
import { projects, liveCount } from "@/lib/projects";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  description:
    "Dilan Kochhar designs and builds websites, apps, and AI agents — and runs a $500/month SEO & AEO retainer that gets businesses found on Google and cited by AI assistants.",
  alternates: { canonical: "/" },
};

const featuredSlugs = ["dilly", "n-plus-one", "sigma-marble", "erickson-flooring"];
const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const chips = [
  { k: "Founder", v: "Dilly" },
  { k: "Live projects", v: String(liveCount) },
  { k: "Retainer", v: "$500/mo" },
];

export default function Home() {
  return (
    <>
      {/* HERO — dark, cinematic, engineered */}
      <section className="relative bg-ink text-paper overflow-hidden">
        {/* Fine blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10 pt-36 md:pt-44 pb-16 md:pb-20 grid md:grid-cols-12 gap-12 md:gap-14 items-center min-h-[92svh]">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/50">
              Web engineer · AI · SEO &amp; AEO — Tampa, FL
            </p>
            <h1 className="mt-7 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
              I build websites, apps, and AI agents —{" "}
              <span className="text-paper/55">then make sure they get</span>{" "}
              <span className="text-accentBright">found.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl text-paper/60 leading-relaxed">
              Founder of{" "}
              <Link href="/dilly" className="text-paper underline decoration-accentBright underline-offset-4 hover:text-accentBright transition-colors">
                Dilly
              </Link>
              . I take on a small roster of client work: full builds, and a monthly
              retainer that keeps businesses visible on Google and cited by AI.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-md bg-paper text-ink px-5 py-3 text-sm font-medium hover:bg-accentBright hover:text-paper transition-colors"
              >
                Services &amp; pricing <span aria-hidden className="arrow-shift">→</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-md border border-paper/25 px-5 py-3 text-sm text-paper/80 hover:border-paper hover:text-paper transition"
              >
                See the work
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {chips.map((c) => (
                <div key={c.k} className="flex items-baseline gap-3 border border-paper/15 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
                    {c.k}
                  </span>
                  <span className="font-display text-lg text-paper tabular-nums">{c.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-paper/20">
              <Image
                src="/dilan.jpg"
                alt="Dilan Kochhar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
            <p className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
              <span>Dilan Kochhar</span>
              <span>Founder · Engineer</span>
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10 pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/35">
            — Scroll
          </p>
        </div>
        <Marquee />
      </section>

      {/* INTRO STRIP */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">About</p>
          </div>
          <Reveal className="md:col-span-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight text-balance max-w-3xl">
              I taught myself to code, and I ship everything with my name on it —
              from a single landing page to a full SaaS platform.
            </p>
            <p className="mt-8 text-lg text-ink/60 max-w-2xl leading-relaxed">
              Every site in the ticker above is live, designed and coded by one person.
              That standard — brand, build, and discoverability handled together — is
              what clients hire me for.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Services</p>
                <h2 className="font-display text-3xl md:text-5xl tracking-tight">Two ways to hire me</h2>
              </div>
              <Link href="/services" className="text-sm text-ink/60 hover:text-accent transition-colors whitespace-nowrap">
                Full details <span aria-hidden className="arrow-shift">→</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <Link
                href="/services#retainer"
                className="group block h-full bg-ink text-paper p-8 md:p-12"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">{retainer.eyebrow}</p>
                <h3 className="mt-5 font-display text-3xl md:text-4xl tracking-tight text-balance">
                  {retainer.name}
                </h3>
                <p className="mt-5 font-display text-4xl md:text-5xl text-accentBright tabular-nums">
                  {retainer.price}
                </p>
                <p className="mt-6 text-paper/65 leading-relaxed max-w-md">{retainer.lead}</p>
                <span className="inline-flex items-center gap-2 mt-8 text-sm text-paper/70 group-hover:text-accentBright transition-colors">
                  What the month buys <span aria-hidden className="arrow-shift">→</span>
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/services#builds" className="case-card group block h-full p-8 md:p-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{builds.eyebrow}</p>
                <h3 className="mt-5 font-display text-3xl md:text-4xl tracking-tight text-balance text-ink">
                  {builds.name}
                </h3>
                <p className="mt-5 font-display text-2xl md:text-3xl text-accent">{builds.price}</p>
                <p className="mt-6 text-ink/60 leading-relaxed max-w-md">{builds.lead}</p>
                <span className="inline-flex items-center gap-2 mt-8 text-sm text-ink/70 group-hover:text-accent transition-colors">
                  How a project runs <span aria-hidden className="arrow-shift">→</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CRAFT PREVIEW */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Craft</p>
                <h2 className="font-display text-3xl md:text-5xl tracking-tight text-balance">
                  I don&apos;t collect skills. I use them.
                </h2>
              </div>
              <p className="md:col-span-5 text-ink/60 leading-relaxed md:text-right">
                <Link href="/work#craft" className="underline decoration-accent underline-offset-4 hover:text-accent">
                  Read how each one shows up in the work <span aria-hidden>→</span>
                </Link>
              </p>
            </div>
          </Reveal>
          <ul className="divide-y divide-ink/10 border-y hairline">
            {craftPillars.map((pillar, i) => (
              <li key={pillar.slug}>
                <Link
                  href="/work#craft"
                  className="group grid md:grid-cols-12 gap-3 md:gap-8 py-7 md:py-8 items-baseline"
                >
                  <span className="md:col-span-1 font-mono text-xs text-ink/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="md:col-span-3 font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors">
                    {pillar.title}
                  </span>
                  <span className="md:col-span-8 text-base md:text-lg text-ink/60 leading-relaxed">
                    {pillar.lead}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Selected work</p>
                <h2 className="font-display text-3xl md:text-5xl tracking-tight">Proof, not promises</h2>
              </div>
              <Link href="/work" className="text-sm text-ink/60 hover:text-accent transition-colors whitespace-nowrap">
                View all <span aria-hidden className="arrow-shift">→</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1}>
                <Link href={`/work#${p.slug}`} className="case-card group block h-full p-7 md:p-9">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight text-ink group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 whitespace-nowrap">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-ink/60 leading-relaxed line-clamp-3">{p.summary}</p>
                  <p className="mt-6 font-mono text-[11px] text-ink/45 leading-relaxed">{p.stack}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance max-w-4xl">
              Have something you&apos;d want me to build — or rank?
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:ceo@hellodilly.com"
                className="group inline-flex items-center gap-2 rounded-md bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                ceo@hellodilly.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-5 py-3 text-sm text-ink/80 hover:border-ink hover:text-ink transition"
              >
                Other ways to reach me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
