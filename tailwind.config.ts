import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Neutral, engineered system — white surfaces, near-black ink, one blue accent.
        paper: "#FFFFFF",
        paperHi: "#FAFAFA",
        paperLo: "#F4F4F5",
        ink: "#0A0A0B",
        inkSoft: "#3F3F46",
        inkMuted: "#71717A",
        accent: "#2563EB",
        accentBright: "#3B82F6",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        driftIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        driftIn: "driftIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
