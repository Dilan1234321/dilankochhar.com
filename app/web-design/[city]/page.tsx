import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailLink from "@/components/EmailLink";
import { BOOKING_URL, EMAIL, services } from "@/lib/content";
import { getCaseStudy, type CaseStudy } from "@/lib/caseStudies";
import { getLocation, locations } from "@/lib/locations";

const SITE = "https://www.dilankochhar.com";

type Props = { params: { city: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const l = getLocation(params.city);
  if (!l) return {};
  const path = `/web-design/${l.slug}`;
  return {
    title: { absolute: l.metaTitle },
    description: l.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: l.metaTitle,
      description: l.metaDescription,
      url: `${SITE}${path}`,
      siteName: "Dilan Kochhar",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: l.metaTitle,
      description: l.metaDescription,
    },
  };
}

/** Removes the **bold** and ==highlight== markers. */
function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/==(.+?)==/g, "$1");
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="border-b border-line pb-4 mb-5 text-sm font-medium text-ink">{title}</h2>
      {children}
    </section>
  );
}

export default function LocationPage({ params }: Props) {
  const l = getLocation(params.city);
  if (!l) notFound();

  const featured = l.featured.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));
  const others = locations.filter((x) => x.slug !== l.slug);
  const pageUrl = `${SITE}/web-design/${l.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#service`,
        name: "Dilan Kochhar",
        url: SITE,
        description: l.metaDescription,
        priceRange: "$$",
        email: EMAIL,
        areaServed: [
          { "@type": "Place", name: l.region },
          ...l.areas.map((a) => ({ "@type": "Place", name: a })),
        ],
        founder: { "@type": "Person", name: "Dilan Kochhar", url: SITE },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            name: s.name,
            description: `${s.price}. ${s.detail}`,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: l.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="flex items-center justify-between py-8">
        <a href="/" className="font-medium tracking-tight">Dilan Kochhar</a>
        <a href="/#software" className="text-sm text-soft hover:text-ink transition-colors">
          ← All work
        </a>
      </header>

      <article className="pt-10 pb-20 sm:pt-16">
        <p className="text-sm text-muted">{l.region}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">{l.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-soft text-balance">{l.intro}</p>

        <Section title="Why work with me">
          <ul className="space-y-3 text-[15px] leading-relaxed text-soft">
            {l.why.map((w) => (
              <li key={w} className="relative pl-5">
                <span aria-hidden className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent" />
                {w}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Services">
          <ul className="grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <li key={s.name} className="rounded-2xl border border-line p-5">
                <span className="block font-medium text-ink">{s.name}</span>
                <span className="mt-1 block text-sm text-accent">{s.price}</span>
                <span className="mt-3 block text-sm leading-relaxed text-soft">{s.detail}</span>
              </li>
            ))}
          </ul>
        </Section>

        {featured.length > 0 && (
          <Section title="Featured work">
            <div className="grid gap-4 sm:grid-cols-2">
              {featured.map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group rounded-2xl border border-line p-5 transition-colors hover:border-accent"
                >
                  <span className="block font-medium text-ink transition-colors group-hover:text-accent">
                    {c.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{c.kind}</span>
                  <span className="mt-3 block text-sm leading-relaxed text-soft">{plain(c.summary)}</span>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <Section title="Areas served">
          <ul className="flex flex-wrap gap-2">
            {l.areas.map((a) => (
              <li
                key={a}
                className="inline-flex items-center rounded-full border border-line bg-[#FAFAFA] px-3 py-1.5 text-[13px] text-ink"
              >
                {a}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="FAQ">
          <div className="space-y-6">
            {l.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[15px] font-medium text-ink">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        <section className="mt-16 rounded-3xl border border-line p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
            Need a website in {l.name}?
          </h2>
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

        <nav aria-label="Other locations" className="mt-12 text-center text-sm text-soft">
          Also serving{" "}
          {others.map((o, i) => (
            <span key={o.slug}>
              {i > 0 && " and "}
              <Link href={`/web-design/${o.slug}`} className="text-ink hover:text-accent transition-colors">
                {o.name}
              </Link>
            </span>
          ))}
          .
        </nav>

        <p className="mt-10 text-center">
          <a href="/#software" className="text-sm text-soft hover:text-ink transition-colors">
            ← All work
          </a>
        </p>
      </article>
    </div>
  );
}
