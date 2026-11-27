import { SKILLS, glyphs, type SkillKey } from "@/lib/skills";

/** Brand colors that are too light to read on a pale chip fall back to ink. */
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

/** A collapsible list of skills with logos. Uses <details>, so it works without JS. */
export default function Skills({ skills, className = "" }: { skills: SkillKey[]; className?: string }) {
  return (
    <details className={`group/skills ${className}`}>
      <summary className="inline-flex cursor-pointer list-none select-none items-center gap-1.5 text-[13px] font-medium text-accent hover:underline [&::-webkit-details-marker]:hidden">
        Skills
        <span className="text-muted font-normal">· {skills.length}</span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform group-open/skills:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <ul className="mt-3 flex flex-wrap gap-2">
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
    </details>
  );
}
