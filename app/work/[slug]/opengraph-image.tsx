import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/lib/caseStudies";

export const alt = "Case study by Dilan Kochhar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0A0B";
const SOFT = "#3F3F46";
const MUTED = "#71717A";
const ACCENT = "#1D4ED8";

export default function Image({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  const name = c?.name ?? "Case study";
  const meta = c ? `${c.kind} · ${c.year}` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#FFFFFF",
          color: INK,
          position: "relative",
        }}
      >
        <div style={{ fontSize: 28, color: ACCENT, letterSpacing: "0.04em" }}>CASE STUDY</div>
        <div
          style={{
            marginTop: 24,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {name}
        </div>
        {meta && <div style={{ marginTop: 24, fontSize: 34, color: SOFT }}>{meta}</div>}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 96,
            right: 96,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: MUTED,
          }}
        >
          <span>Dilan Kochhar</span>
          <span style={{ color: ACCENT }}>dilankochhar.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
