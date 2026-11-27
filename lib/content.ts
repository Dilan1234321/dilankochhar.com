import type { SkillKey } from "./skills";

export const EMAIL = "dilan@hellodilly.com";
export const GITHUB = "https://github.com/dilan1234321";

export type Item = {
  name: string;
  kind: string;
  year: string;
  blurb: string;
  skills: SkillKey[];
  url?: string;
  label?: string;
};

export const dilly = {
  url: "https://trydilly.com",
  appStore: "https://apps.apple.com/us/app/id6817830445",
  headline: "AI-smart, not AI-dependent.",
  lead:
    "is a learning app for kids ages 7 to 11. Each child trains their own companion, then builds things with what it learned, and finds out how AI works by making it. I founded it, designed it, and built it end to end.",
  // Companion art is served from trydilly.com so it stays in sync with the app's site.
  companions: [
    { name: "Pip", src: "https://trydilly.com/assets/companions/pip-happy.webp" },
    { name: "Mochi", src: "https://trydilly.com/assets/companions/mochi-happy.webp" },
    { name: "Fern", src: "https://trydilly.com/assets/companions/fern-happy.webp" },
    { name: "Nova", src: "https://trydilly.com/assets/companions/nova-happy.webp" },
    { name: "Pebble", src: "https://trydilly.com/assets/companions/pebble-happy.webp" },
    { name: "Wisp", src: "https://trydilly.com/assets/companions/wisp-happy.webp" },
  ],
  steps: [
    {
      title: "Pick a companion",
      text: "Six friends to choose from. Each one starts out able to do nothing. It's a learner, not a know-it-all.",
    },
    {
      title: "Teach it",
      text: "Kids spot what went wrong, pick the rule that fixes it, and test again. No typing, just prepared choices.",
    },
    {
      title: "Build with it",
      text: "Every skill becomes a puzzle piece. In the Workshop, pieces snap together into games, codes, and robot repairs.",
    },
  ],
  skills: [
    "productDesign", "learningDesign", "expo", "reactNative", "ts", "swift",
    "fastapi", "python", "postgres", "jwt", "railway", "appStore",
  ] as SkillKey[],
  facts: [
    { k: "Ages", v: "7 to 11" },
    { k: "Platform", v: "iPhone & iPad" },
  ],
};

export const software: Item[] = [
  {
    name: "Sage",
    skills: ["next", "ts", "postgres", "drizzle", "claude", "aiSdk", "stripe", "sentry", "tailwind", "zod", "vercel", "productDesign"],
    kind: "Agency operating system",
    year: "2026",
    blurb:
      "A full operating system for social media agencies: strategy, weekly planning, content calendar, shoots, client approvals, and analytics in one place.",
    label: "In development",
  },
  {
    name: "N+1 Talent engine",
    skills: ["python", "programmaticSeo", "githubActions", "greenhouse", "structuredData", "aeo", "automation"],
    kind: "SEO generator + outbound agent",
    year: "2026",
    blurb:
      "Python generators that publish fifty-plus state and role pages from templates, plus a prospector that scans Greenhouse, Lever, and Ashby weekly and drafts outreach.",
    url: "https://nplus1talent.com",
  },
  {
    name: "LeaseLogic AI",
    skills: ["python", "machineLearning", "xgboost", "sklearn", "pandas", "numpy", "fastapi"],
    kind: "Machine learning service",
    year: "2026",
    blurb:
      "A lead-scoring model that predicts how likely a prospective tenant is to sign a lease, served as an API so leasing agents get an instant confidence score.",
  },
  {
    name: "Kochhar Foundation Learning Hub",
    skills: ["next", "ts", "tailwind", "lucide", "vercel", "learningDesign"],
    kind: "Education platform",
    year: "2026",
    blurb:
      "Free, curated K–12 learning resources by grade and subject. Built for a computer classroom in Delhi, India, with no accounts, payments, or tracking.",
  },
];

export const websites: Item[] = [
  {
    name: "Wine & Shine Co",
    skills: ["shopify", "liquid", "wholesale", "klaviyo", "ecommerce"],
    kind: "Shopify store",
    year: "2026",
    blurb:
      "Shopify store with a wholesale portal: retailers apply, get approved, sign in with a one-time code, and order by the case at partner pricing.",
    url: "https://wineandshineco.com",
  },
  {
    name: "N+1 Talent",
    skills: ["html", "css", "js", "three", "programmaticSeo", "aeo", "structuredData", "web3forms", "vercel"],
    kind: "Recruiting firm",
    year: "2026",
    blurb: "Discovery-first site with programmatic SEO, AI search readiness, and a Three.js hero.",
    url: "https://nplus1talent.com",
  },
  {
    name: "Sigma Marble Studio",
    skills: ["next", "ts", "tailwind", "framerMotion", "maplibre", "radix", "motionDesign"],
    kind: "Stone & tile",
    year: "2026",
    blurb: "Next.js rebuild with a full motion system and a live map of installed projects.",
    url: "https://sigmamarble.vercel.app",
  },
  {
    name: "Erickson Flooring",
    skills: ["html", "css", "js", "formsubmit", "leadGen", "seo", "vercel"],
    kind: "Local business",
    year: "2026",
    blurb: "A high-end marketing site built to turn visitors into quote requests.",
    url: "https://erickson-flooring.com",
  },
  {
    name: "Taken Time to Design",
    skills: ["html", "css", "js", "brandDesign", "vercel"],
    kind: "Artist studio",
    year: "2026",
    blurb: "Gallery and commission site for an artist, designed brand-first.",
    url: "https://takentimetodesign.com",
  },
  {
    name: "Nomi Bar",
    skills: ["html", "css", "js", "brandDesign", "vercel"],
    kind: "Restaurant & bar",
    year: "2026",
    blurb: "Custom site with menu, story, and visit pages.",
    url: "https://nomibar.com",
  },
  {
    name: "Mu Epsilon Delta",
    skills: ["next", "ts", "tailwind"],
    kind: "Medical fraternity",
    year: "2026",
    blurb: "Institution-grade chapter site with leadership, events, and rush forms.",
    url: "https://utampamed.com",
  },
  {
    name: "UTampa AKPsi",
    skills: ["html", "css", "js", "formspree", "vercel"],
    kind: "Business fraternity",
    year: "2025",
    blurb: "Nine-page chapter site with directories, sponsorships, and donations.",
    url: "https://utampaakpsi.com",
  },
  {
    name: "Kochhar Foundation",
    skills: ["wordpress", "fundraising", "brandDesign"],
    kind: "Nonprofit · co-founder",
    year: "2023",
    blurb: "The public site for the charity I co-founded, which has raised over $22K.",
    url: "https://kochharfoundation.com",
  },
];

export const services = [
  {
    name: "Websites",
    price: "From $100/mo",
    detail: "Designed and built by me, start to finish. Apps and AI agents are quoted per project.",
  },
  {
    name: "Search & AI Visibility",
    price: "$500/mo",
    detail: "Technical SEO, structured data, and AEO so you show up on Google and in ChatGPT answers.",
  },
  {
    name: "Website care",
    price: "From $45/mo",
    detail: "Security $45, maintenance $80, or both as Full Care for $100 a month.",
  },
];
