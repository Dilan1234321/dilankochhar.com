import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Dilan Kochhar, Founder of Dilly. Websites, apps & CRM.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0A0B";
const ACCENT = "#1D4ED8";

export default async function Image() {
  const headshot = await readFile(join(process.cwd(), "public", "headshot.jpg"));
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          color: INK,
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={headshotSrc}
          width={220}
          height={220}
          alt=""
          style={{
            borderRadius: 9999,
            objectFit: "cover",
            border: `6px solid ${ACCENT}`,
          }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Dilan Kochhar
        </div>
        <div style={{ marginTop: 22, fontSize: 36, color: "#3F3F46" }}>
          Founder of Dilly · Websites, apps & CRM
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: ACCENT,
            letterSpacing: "0.02em",
          }}
        >
          dilankochhar.com
        </div>
      </div>
    ),
    { ...size },
  );
}
