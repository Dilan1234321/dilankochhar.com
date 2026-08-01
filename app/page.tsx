import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { craftPillars } from "@/lib/craft";
import { retainer, builds } from "@/lib/services";

export const metadata: Metadata = {
  description:
    "Dilan Kochhar designs and builds websites, apps, and AI agents — and runs a $500/month SEO & AEO retainer that gets businesses found on Google and cited by AI assistants.",
  alternates: { canonical: "/" },
};

const peek = [
  { title: "Dilly",             tag: "SaaS · AI",      year: "2026", href: "/work#dilly", bg: "#252B46" },
  { title: "N+1 Talent",        tag: "Recruiting",     year: "2026", href: "/work#n-plus-one", bg: "#1F3D2B" },
  { title: "Taken Time",        tag: "Studio",         year: "2026", href: "/work#taken-time-to-design", bg: "#B86A2E" },
  { title: "Sigma Marble",      tag: "Stone & tile",   year: "2026", href: "/work#sigma-marble", bg: "#3E4147" },
];

export default function Home() {
  return (
    <>
      {/* FULL-BLEED HERO IMAGE */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <Image
          src="/dilan.jpg"
          alt="Dilan Kochhar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-24">
          <div className="mx-auto max-w-[92rem] w-full">
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/70 mb-5">
              Web · AI · Search — Tampa, FL
            </p>
            <h1 className="font-display text-white text-[14vw] md:text-[9rem] leading-[0.88] tracking-tight">
              Dilan Kochhar
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-white/85 leading-snug">
              I design and build websites, apps, and AI agents — then make sure
              Google and AI assistants can find them.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-paperHi transition-colors"
              >
                Services &amp; pricing
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 text-white px-6 py-3 text-sm hover:border-white hover:bg-white/10 transition"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="mx-auto max-w-[92rem] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-ink/50">About</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-balance max-w-3xl">
              I taught myself to code, and I ship everything with my name on it —
              from a single landing page to a full SaaS platform.
            </p>
            <p className="mt-8 text-lg text-ink/65 max-w-2xl leading-relaxed">
              I&apos;m the founder of <Link href="/dilly" className="underline decoration-ochre underline-offset-4 hover:text-ochre">Dilly</Link>,
              a career platform for college students, and I take on a small roster of client
              work: full builds, and a monthly retainer that keeps businesses visible in
              search — the classic kind and the AI kind.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-4xl md:text-6xl">Hire me</h2>
            <Link href="/services" className="text-sm text-ink/60 hover:text-ochre transition-colors">
              Full details →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/services#retainer"
              className="group block bg-ink text-paper p-8 md:p-12 transition-transform duration-500 ease-out hover:-translate-y-1.5"
            >
              <p className="text-xs uppercase tracking-widest text-paper/50">{retainer.eyebrow}</p>
              <h3 className="mt-5 font-display text-3xl md:text-5xl leading-[0.95] text-balance">
                {retainer.name}
              </h3>
              <p className="mt-6 font-display text-4xl md:text-5xl text-ochre tabular-nums">
                {retainer.price}
              </p>
              <p className="mt-6 text-paper/65 leading-relaxed max-w-md">{retainer.lead}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm text-paper/70 group-hover:text-ochre transition-colors">
                What the month buys <span aria-hidden>→</span>
              </span>
            </Link>
            <Link
              href="/services#builds"
              className="group block border hairline p-8 md:p-12 transition-transform duration-500 ease-out hover:-translate-y-1.5"
            >
              <p className="text-xs uppercase tracking-widest text-ink/50">{builds.eyebrow}</p>
              <h3 className="mt-5 font-display text-3xl md:text-5xl leading-[0.95] text-balance text-ink">
                {builds.name}
              </h3>
              <p className="mt-6 font-display text-2xl md:text-3xl text-ochre">{builds.price}</p>
              <p className="mt-6 text-ink/65 leading-relaxed max-w-md">{builds.lead}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm text-ink/70 group-hover:text-ochre transition-colors">
                How a project runs <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CRAFT PREVIEW */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-widest text-ink/50 mb-4">Craft</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                I don&apos;t collect skills. I use them.
              </h2>
            </div>
            <p className="md:col-span-5 text-ink/60 leading-relaxed md:text-right">
              Product sense. Agents with receipts. Full-stack ownership. Growth engineering.
              Design as code.{" "}
              <Link href="/work#craft" className="underline decoration-ochre underline-offset-4 hover:text-ochre">
                Read how each one shows up in the work →
              </Link>
            </p>
          </div>
          <ul className="divide-y divide-ink/10 border-y hairline">
            {craftPillars.map((pillar) => (
              <li key={pillar.slug}>
                <Link
                  href="/work#craft"
                  className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-baseline"
                >
                  <span className="md:col-span-3 font-display text-2xl md:text-3xl text-ink group-hover:text-ochre transition-colors">
                    {pillar.title}
                  </span>
                  <span className="md:col-span-9 text-base md:text-lg text-ink/60 leading-relaxed">
                    {pillar.lead}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SELECTED WORK PEEK */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-4xl md:text-6xl">Selected work</h2>
            <Link href="/work" className="text-sm text-ink/60 hover:text-ochre transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {peek.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="tile aspect-[3/4] group"
                style={{ background: w.bg }}
              >
                <div className="absolute inset-0 flex items-end p-5 md:p-6">
                  <div>
                    <p className="font-display text-white text-2xl md:text-3xl leading-none">
                      {w.title}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-white/60">
                      {w.tag} · {w.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[92rem] border-t hairline pt-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
            Have something you&apos;d want me to build — or rank?
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:ceo@hellodilly.com"
              className="inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3 text-sm hover:bg-ochre transition-colors"
            >
              ceo@hellodilly.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-ink/30 px-6 py-3 text-sm text-ink/80 hover:border-ink hover:text-ink transition"
            >
              Other ways to reach me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
