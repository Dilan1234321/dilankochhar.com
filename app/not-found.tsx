import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const projects = caseStudies.slice(0, 4);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="flex items-center justify-between py-8">
        <a href="/" className="font-medium tracking-tight">Dilan Kochhar</a>
        <a href="/#websites" className="text-sm text-soft hover:text-ink transition-colors">
          ← All work
        </a>
      </header>

      <div className="pt-16 pb-24 sm:pt-24 text-center">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-soft max-w-md mx-auto text-balance">
          The link may be old or mistyped. Head back home, or take a look at some of the sites I have built.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-3d btn-navy">
            Back home
          </Link>
          <Link href="/#websites" className="btn-3d btn-white">
            See my work
          </Link>
        </div>

        <section className="mt-16 text-left max-w-md mx-auto">
          <h2 className="border-b border-line pb-4 mb-2 text-sm font-medium text-ink">A few projects</h2>
          <ul>
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-b border-line py-3 text-[15px] text-ink hover:text-accent transition-colors"
                >
                  <span>{p.name}</span>
                  <span className="text-sm text-muted">{p.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
