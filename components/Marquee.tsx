import { projects } from "@/lib/projects";

const live = projects.filter((p) => p.href);

function Row() {
  return (
    <div className="marquee-row" aria-hidden="true">
      {live.map((p) => (
        <span key={p.slug} className="inline-flex items-center gap-6 md:gap-10 pr-6 md:pr-10">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-paper/45">
            {p.url}
          </span>
          <span className="text-paper/25">·</span>
        </span>
      ))}
    </div>
  );
}

/** Infinite ticker of live project domains — every one clickable proof. */
export default function Marquee() {
  return (
    <div className="marquee border-t border-paper/10 bg-ink py-5" role="presentation">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
