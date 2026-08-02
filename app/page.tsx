import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { craftPillars } from "@/lib/craft";
import { retainer, builds } from "@/lib/services";
import { projects, liveCount } from "@/lib/projects";

export const metadata: Metadata = {
  description:
    "Dilan Kochhar designs and builds websites, apps, and AI agents — and runs a $500/month SEO & AEO retainer that gets businesses found on Google and cited by AI assistants.",
  alternates: { canonical: "/" },
};

const featuredSlugs = ["dilly", "n-plus-one", "sigma-marble", "erickson-flooring"];
const featured = featuredSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function Home() {
  return (
    <>
      {/* HERO — structured, professional */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-[88rem] grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
              Web engineer · AI · SEO &amp; AEO — Tampa, FL
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
              I build websites, apps, and AI agents — then make sure they get found.
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl text-ink/60 leading-relaxed">
              Founder of <Link href="/dilly" className="text-ink underline decoration-accent underline-offset-4 hover:text-accent">Dilly</Link>.
              I take on a small roster of client work: full builds, and a monthly
              retainer that keeps businesses visible on Google and cited by AI.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Services &amp; pricing <span aria-hidden>→</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-5 py-3 text-sm text-ink/80 hover:border-ink hover:text-ink transition"
              >
                See the work
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t hairline pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Live projects</dt>
                <dd className="mt-1 font-display text-2xl md:text-3xl tabular-nums">{liveCount}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Founded</dt>
                <dd className="mt-1 font-display text-2xl md:text-3xl">Dilly</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Retainer</dt>
                <dd className="mt-1 font-display text-2xl md:text-3xl tabular-nums">$500<span className="text-base text-ink/50">/mo</span></dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border hairline bg-paperLo">
              <Image
                src="/dilan.jpg"
                alt="Dilan Kochhar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
            <p className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
              <span>Dilan Kochhar</span>
              <span>Founder · Engineer</span>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Services</p>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">Two ways to hire me</h2>
            </div>
            <Link href="/services" className="text-sm text-ink/60 hover:text-accent transition-colors">
              Full details →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/services#retainer"
              className="group block bg-ink text-paper p-8 md:p-12"
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
                What the month buys <span aria-hidden>→</span>
              </span>
            </Link>
            <Link href="/services#builds" className="case-card group block p-8 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{builds.eyebrow}</p>
              <h3 className="mt-5 font-display text-3xl md:text-4xl tracking-tight text-balance text-ink">
                {builds.name}
              </h3>
              <p className="mt-5 font-display text-2xl md:text-3xl text-accent">{builds.price}</p>
              <p className="mt-6 text-ink/60 leading-relaxed max-w-md">{builds.lead}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm text-ink/70 group-hover:text-accent transition-colors">
                How a project runs <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CRAFT PREVIEW */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Craft</p>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight text-balance">
                I don&apos;t collect skills. I use them.
              </h2>
            </div>
            <p className="md:col-span-5 text-ink/60 leading-relaxed md:text-right">
              <Link href="/work#craft" className="underline decoration-accent underline-offset-4 hover:text-accent">
                Read how each one shows up in the work →
              </Link>
            </p>
          </div>
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
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50 mb-3">Selected work</p>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">Proof, not promises</h2>
            </div>
            <Link href="/work" className="text-sm text-ink/60 hover:text-accent transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p) => (
              <Link key={p.slug} href={`/work#${p.slug}`} className="case-card group block p-7 md:p-9">
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
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t hairline">
        <div className="mx-auto max-w-[88rem]">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance max-w-4xl">
            Have something you&apos;d want me to build — or rank?
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:ceo@hellodilly.com"
              className="inline-flex items-center gap-2 rounded-md bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
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
        </div>
      </section>
    </>
  );
}
