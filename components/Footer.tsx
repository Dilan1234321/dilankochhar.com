import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-32 border-t hairline">
      <div className="mx-auto max-w-[92rem] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <p className="font-display text-4xl md:text-5xl leading-[1.05] text-balance max-w-xl">
            Websites, apps, and AI agents, built solo.
          </p>
          <p className="mt-5 text-ink/60 text-sm max-w-md leading-relaxed">
            Long Island, now Tampa. Every project on this site was designed and coded by one
            person.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-4">Site</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-ochre transition-colors">Home</Link></li>
            <li><Link href="/work" className="hover:text-ochre transition-colors">Work</Link></li>
            <li><Link href="/dilly" className="hover:text-ochre transition-colors">Dilly</Link></li>
            <li><Link href="/about" className="hover:text-ochre transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-ochre transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-ink/50 mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:ceo@hellodilly.com" className="hover:text-ochre transition-colors">
                ceo@hellodilly.com
              </a>
            </li>
            <li>
              <a href="https://github.com/dilan1234321" target="_blank" rel="noreferrer" className="hover:text-ochre transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://hellodilly.com" target="_blank" rel="noreferrer" className="hover:text-ochre transition-colors">
                hellodilly.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-[92rem] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink/50">
          <p>© {year} Dilan Kochhar</p>
          <p>Tampa, Florida</p>
        </div>
      </div>
    </footer>
  );
}
