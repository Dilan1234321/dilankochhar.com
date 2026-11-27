import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EmailLink from "@/components/EmailLink";
import { BOOKING_URL, EMAIL } from "@/lib/content";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { SKILLS, glyphs, type SkillKey } from "@/lib/skills";

const SITE = "https://www.dilankochhar.com";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  const title = `How I built ${c.name}`;
  const path = `/work/${c.slug}`;
  return {
    title,
    description: plain(c.summary),
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Dilan Kochhar`,
      description: plain(c.summary),
      url: `${SITE}${path}`,
      siteName: "Dilan Kochhar",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Dilan Kochhar`,
      description: plain(c.summary),
    },
  };
}

/** Removes the **bold** and ==highlight== markers, for meta tags and JSON-LD. */
function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/==(.+?)==/g, "$1");
}

/** Renders **bold** as dark ink and ==highlight== in the accent color with a soft wash. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*|==.+?==)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {p.slice(2, -2)}
            </strong>
          );
        }
        if (p.startsWith("==") && p.endsWith("==")) {
          return (
            <mark key={i} className="rounded-md bg-accent/10 px-1 py-0.5 font-medium text-accent">
              {p.slice(2, -2)}
            </mark>
          );
        }
        return p;
      })}
    </>
  );
}

/** Brand colors that are too light to read on a pale chip fall back to ink. Mirrors components/Skills. */
function readable(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.72 ? "#0A0A0B" : `#${hex}`;
}

function Logo({ k }: { k: SkillKey }) {
  const s = SKILLS[k];
  if ("brand" in s) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill={readable(s.brand.hex)}>
        <path d={s.brand.path} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      fill="none"
      stroke="#52525B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={glyphs[s.glyph]} />
    </svg>
  );
}

/** The same chips as the Skills component, always shown instead of tucked in a <details>. */
function StackChips({ skills }: { skills: SkillKey[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((k) => (
        <li
          key={k}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-[#FAFAFA] py-1.5 pl-2.5 pr-3 text-[13px] text-ink"
        >
          <Logo k={k} />
          {SKILLS[k].label}
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="border-b border-line pb-4 mb-5 text-sm font-medium text-ink">{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudyPage({ params }: Props) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  const host = c.url?.replace(/^https?:\/\/(www\.)?/, "");
  const pageUrl = `${SITE}/work/${c.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.name,
    headline: `How I built ${c.name}`,
    description: plain(c.summary),
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    genre: c.kind,
    dateCreated: c.year,
    inLanguage: "en",
    keywords: c.stack.map((k) => SKILLS[k].label).join(", "),
    author: { "@type": "Person", name: "Dilan Kochhar", url: SITE },
    creator: { "@type": "Person", name: "Dilan Kochhar", url: SITE },
    ...(c.url ? { sameAs: c.url } : {}),
  };

  return (
    <div className="mx-auto max-w-3xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="flex items-center justify-between py-8">
        <a href="/" className="font-medium tracking-tight">Dilan Kochhar</a>
        <a href="/#websites" className="text-sm text-soft hover:text-ink transition-colors">
          ← All work
        </a>
      </header>

      <article className="pt-10 pb-20 sm:pt-16">
        <p className="text-sm text-muted">
          {c.kind} · {c.year}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">{c.name}</h1>
        {c.url && (
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 inline-block text-sm text-ink hover:text-accent transition-colors"
          >
            {host}{" "}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        )}
        <p className="mt-6 text-lg leading-relaxed text-soft text-balance"><Rich text={c.summary} /></p>

        <Section title="The challenge">
          <div className="space-y-4 text-[15px] leading-relaxed text-soft">
            {c.challenge.map((p) => (
              <p key={p}><Rich text={p} /></p>
            ))}
          </div>
        </Section>

        <Section title="What I built">
          <ul className="space-y-3 text-[15px] leading-relaxed text-soft">
            {c.built.map((b) => (
              <li key={b} className="relative pl-5">
                <span aria-hidden className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent" />
                <Rich text={b} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Stack">
          <StackChips skills={c.stack} />
        </Section>

        {c.outcome && c.outcome.length > 0 && (
          <Section title="Outcome">
            <div className="space-y-4 text-[15px] leading-relaxed text-soft">
              {c.outcome.map((p) => (
                <p key={p}><Rich text={p} /></p>
              ))}
            </div>
          </Section>
        )}

        <section className="mt-16 rounded-3xl border border-line p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">Want something like this?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-soft max-w-lg mx-auto">
            I design and build every site myself, start to finish. Tell me what you need and I will tell you how I would build it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {BOOKING_URL ? (
              <>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-3d btn-navy">
                  Book a call
                </a>
                <EmailLink email={EMAIL} className="btn-3d btn-white">
                  Email me
                </EmailLink>
              </>
            ) : (
              <EmailLink email={EMAIL} className="btn-3d btn-navy">
                Email me
              </EmailLink>
            )}
          </div>
        </section>

        <p className="mt-12 text-center">
          <a href="/#websites" className="text-sm text-soft hover:text-ink transition-colors">
            ← All work
          </a>
        </p>
      </article>
    </div>
  );
}
