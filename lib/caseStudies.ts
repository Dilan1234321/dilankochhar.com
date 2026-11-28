import type { SkillKey } from "./skills";

export type CaseStudy = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  url?: string;
  /** One or two sentences. Also used as the meta description. */
  summary: string;
  /** Paragraphs describing the problem the project had to solve. */
  challenge: string[];
  /** What I built, one point per bullet. */
  built: string[];
  stack: SkillKey[];
  /** Only facts. Leave out when there is no known result to report. */
  outcome?: string[];
};

/**
 * Case studies for /work/<slug>. Every detail here comes from the project's own
 * source, its live site, or project email. No invented metrics or quotes.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "sage",
    name: "Sage",
    kind: "Agency operating system",
    year: "2026",
    summary:
      "An **operating system for social media agencies**, built for Sage Marketing & Media: strategy, weekly planning, content calendar, shoots, client approvals, and analytics in one place. It is in development.",
    challenge: [
      "A social media agency juggles many clients, each with its own brand rules, content calendar, shoots, and rounds of approval, usually **spread across spreadsheets, chat threads, and shared drives**.",
      "Sage puts all of that **in one app** with ==three kinds of users==: agency admins, account managers who only see their assigned clients, and a portal where clients review and approve their own content.",
    ],
    built: [
      "**A Next.js App Router app** on PostgreSQL with Drizzle ORM, where every record belongs to an agency and one access layer decides which clients each user can see.",
      "**Email and password auth** with signed session cookies, and a client portal for approvals.",
      "**An AI weekly planner** on the Claude API. It is fed structured client data, its output is validated with Zod and checked against real client records, and ==nothing is ever published automatically==. If the AI is unavailable, a rules-based planner takes over.",
      "**Planning tools**: brand kits, a content calendar, shoot planning, approvals that keep every round, and version history for content and strategy edits.",
      "**A creative studio** that renders branded post and carousel templates to images.",
      "**An approval-gated publishing queue** and an activity log that feeds dashboards and the client portal.",
    ],
    stack: ["next", "ts", "postgres", "drizzle", "claude", "aiSdk", "stripe", "sentry", "tailwind", "zod", "vercel", "productDesign"],
  },
  {
    slug: "leaselogic-ai",
    name: "LeaseLogic AI",
    kind: "Machine learning service",
    year: "2026",
    summary:
      "A **lead-scoring model** that predicts how likely a prospective tenant is to sign a lease, served as an API so leasing agents get an instant confidence score.",
    challenge: [
      "Leasing teams spend **the same time on every inquiry**, whether the person is ready to sign or not. A score at the top of each lead lets agents **call the most likely signers first**.",
    ],
    built: [
      "**A data generator** that produces realistic synthetic leads, since real applicant data is private. The model is trained on that synthetic set, so this is a working proof of concept, not a model tuned on a real property's history.",
      "**An XGBoost classifier** trained on ==five inputs==: credit score, monthly income, target rent, years at current employer, and prior evictions.",
      "**A FastAPI service** with a predict endpoint that validates each lead and returns a signing probability, plus a health check.",
    ],
    stack: ["python", "machineLearning", "xgboost", "sklearn", "pandas", "numpy", "fastapi"],
  },
  {
    slug: "wine-and-shine",
    name: "Wine & Shine Co",
    kind: "Wholesale portal for Shopify",
    year: "2026",
    url: "https://wineandshineco.com",
    summary:
      "A **wholesale portal** built into the existing Shopify store of a wine-night wellness supplement, where retailers apply, get approved, sign in with a one-time code, and order by the case.",
    challenge: [
      "Wine & Shine sells a **nighttime supplement made for wine lovers**. The project came to me through Sage Marketing & Media, the agency that runs their marketing.",
      "Selling to shoppers was only half of it. They also wanted wine shops, wineries, restaurants, and boutiques to carry the product, and that meant **a second set of prices that regular customers should never see**, plus **a way to vet each store** before it could order.",
    ],
    built: [
      "**A wholesale page** at /pages/wholesale that explains the program in three steps: apply, get reviewed, log in to see pricing.",
      "**An application form** that asks for business name, business type, city and state, and website or Instagram, with an option to request a free two-packet trial pack shipped to the store.",
      "**An approval flow inside Shopify**: each application creates a customer record and emails the team a link to it, and approving a store is as simple as tagging the customer \"Wholesale Partner\".",
      "**A Klaviyo approval email** that goes out when a store is approved, with step-by-step instructions for logging in.",
      "**Passwordless sign-in** for partners: they enter their email and get a ==6-digit code==, so there is no password to forget.",
      "**Partner-only pricing** and ordering by the case of 6 boxes, up to ==24 boxes online==, with larger orders routed to the wholesale inbox.",
    ],
    stack: ["shopify", "liquid", "wholesale", "klaviyo", "ecommerce"],
  },
  {
    slug: "n-plus-1-talent",
    name: "N+1 Talent",
    kind: "Recruiting firm",
    year: "2026",
    url: "https://nplus1talent.com",
    summary:
      "The **website and lead engine** for a technical recruiting firm: a fast static site built to be found by search engines and AI assistants, Python generators that publish state and role pages from templates, and a weekly prospector that finds companies hiring right now.",
    challenge: [
      "N+1 Talent places engineers in two areas: data center and critical facilities roles, and AI, data, and software roles. Recruiting is won or lost on two things: **being the firm that shows up** when a company searches for help, and **reaching hiring managers before someone else does**.",
      "So the brief was never just a website. Every piece had to either **capture and convert leads** or **get the firm found**, by Google and by AI assistants like ChatGPT and Perplexity.",
    ],
    built: [
      "**A zero-build static site** in plain HTML, CSS, and JavaScript, deployed on Vercel, with a WebGL data-hall flythrough on the homepage built with Three.js.",
      "**Python page generators** that build the ==51 state pages== for data center recruitment, the locations hub, and the AI, data, and software role pages from shared templates, so new pages can be added or regenerated in one run.",
      "**Hiring guides**, a salary guide, and two interactive tools: a hiring cost calculator and a salary planning calculator.",
      "**An answer-first content pattern**: role and state pages open with a paragraph that fully answers the search query, and role pages carry FAQs mirrored in FAQPage structured data.",
      "**AI search readiness**: an llms.txt summary, robots rules that explicitly allow search and AI crawlers, a full sitemap, and Organization JSON-LD that separates the firm from similarly named companies.",
      "**A contact form** on Web3Forms that falls back to a prefilled email if the form service ever fails, so no inquiry is lost.",
      "**A careers page** and live job pages where candidates apply through Dilly.",
      "**A weekly prospector** in Python that checks ==about 180 companies== against the public Greenhouse, Lever, and Ashby job boards, scores each one by how many senior AI, infrastructure, and data roles it has open, and writes a ranked call list with a drafted outreach email for the top prospects. GitHub Actions runs it every Monday.",
    ],
    stack: [
      "html", "css", "js", "three", "programmaticSeo", "aeo", "structuredData", "web3forms", "vercel",
      "python", "githubActions", "greenhouse", "automation",
    ],
  },
  {
    slug: "erickson-flooring",
    name: "Erickson Flooring",
    kind: "Local business",
    year: "2026",
    url: "https://erickson-flooring.com",
    summary:
      "A high-end marketing site for a Tampa luxury vinyl flooring installer, built to **turn visitors into quote requests**.",
    challenge: [
      "Erickson Flooring installs **luxury vinyl plank and nothing else**. The founder, Reid Erickson, learned the trade in Chicago and brought it to Tampa, where a lot of vinyl work is done fast and cheap.",
      "The site had to **make a specialist installer look like the premium option**, explain why the prep work matters, and make **asking for a quote the obvious next step** on every page.",
    ],
    built: [
      "**Six pages**: home, the founder's story, craftsmanship, portfolio, FAQ, and a quote page.",
      "**A quote form** that sends requests straight to the owner's inbox without a page reload, asking for the type of project: full home, single room, bathroom or kitchen, or commercial.",
      "**A before-and-after slider** on the portfolio page so visitors can drag across a real job.",
      "**An availability bar** across the top of every page and a quote button in the navigation, so the call to action is always ==one click away==.",
      "**A four-step process section** (consultation, preparation, installation, walk-through) and a story page in the founder's own voice.",
      "**Local search copy**: page titles and descriptions written for local search around luxury vinyl installation in Tampa.",
    ],
    stack: ["html", "css", "js", "formsubmit", "leadGen", "seo", "vercel"],
  },
  {
    slug: "nomi-bar",
    name: "Nomi Bar",
    kind: "Restaurant & bar",
    year: "2026",
    url: "https://nomibar.com",
    summary:
      "A custom website for Nomi, a **modern Japanese izakaya** in downtown Tampa, with menu, story, and visit pages.",
    challenge: [
      "Nomi came to me through Sage Marketing & Media. A restaurant site gets asked **the same few questions all day**: are you open right now, what is on the menu, can I book, and what should I wear.",
      "The site had to **answer those quickly on a phone**, feel like the room, and be **easy for the restaurant to keep up to date** without touching code.",
    ],
    built: [
      "**Core pages**: home, menu, about, and visit, plus accessibility, privacy, and a custom 404 page.",
      "**A live hours line** that reads the time in Tampa and says whether Nomi is open, when Happy Hour ends, and when the kitchen and the bar close, including late-night rollover on Fridays and Saturdays. It is covered by automated tests.",
      "**A JSON-driven menu**: the menu page reads from ==a single JSON file== with Food, Drinks, Happy Hour, and Rare Menu sections, so dishes and prices can be updated by editing one file, with a written guide for the team.",
      "**A visit page** covering hours, OpenTable reservations for larger parties, age policy, dress code, parking, and private events.",
      "**Local search copy**: page titles and descriptions written around a modern Japanese izakaya in downtown Tampa.",
    ],
    stack: ["html", "css", "js", "brandDesign", "vercel"],
  },
  {
    slug: "mu-epsilon-delta",
    name: "Mu Epsilon Delta",
    kind: "Medical fraternity",
    year: "2026",
    url: "https://utampamed.com",
    summary:
      "An institution-grade site for the University of Tampa chapter of Mu Epsilon Delta, the first pre-health fraternity on campus, with an **admin panel** so officers can update it themselves.",
    challenge: [
      "A student chapter **changes every semester**: new officers, new members, new events, a new recruitment calendar. Most chapter sites go stale because **only one person knows how to edit them**.",
      "The site needed to **look credible to future doctors and their parents**, run recruitment sign-ups, and **stay current long after I hand it off**.",
    ],
    built: [
      "**A Next.js and TypeScript site** with pages for about, membership and recruitment, calendar, leadership, the member family, service, accomplishments, gallery, donations, and contact.",
      "**JSON content storage**: all content lives in simple JSON files, so the site has ==no database== to maintain.",
      "**An admin panel** behind a rate-limited password login where officers edit the exec board, events, member roster, and site settings. Saves are committed back to the site's code repository, so ==every change is versioned==.",
      "**Image uploads** for headshots, stored on Vercel Blob.",
      "**Recruitment sign-up and contact forms**, with sign-ups saved and viewable in the admin panel.",
      "**A searchable member roster** with photos, LinkedIn links, and skills.",
    ],
    stack: ["next", "ts", "tailwind", "vercel"],
  },
  {
    slug: "taken-time-to-design",
    name: "Taken Time to Design",
    kind: "Artist studio",
    year: "2026",
    url: "https://takentimetodesign.com",
    summary:
      "A gallery and commission site for Brooke Taken, an artist who draws and paints **portraits of people and pets**, designed brand-first.",
    challenge: [
      "Brooke works in pencil, ink, and paint, and **every piece is slow, careful work**. The site needed to feel the same way, and it needed to **turn admirers into commissions** without feeling like a store.",
    ],
    built: [
      "**A brand-first design**: a quiet, gallery-like layout built around the studio's name, so the work does the talking.",
      "**Five pages**: home, about, gallery, commissions, and contact.",
      "**A gallery filtered by type**: portraits, pet portraits, figure studies, paintings, and caricatures.",
      "**A commissions page** with ==three pricing tiers== by size, a four-step process from inquiry to delivery, and answers to common questions about timing, reference photos, gifts, and shipping.",
      "**An inquiry form** that asks for the type of piece and size up front, so each conversation starts with what Brooke needs to quote it.",
    ],
    stack: ["html", "css", "js", "brandDesign", "vercel"],
  },
  {
    slug: "utampa-akpsi",
    name: "UTampa AKPsi",
    kind: "Business fraternity",
    year: "2025",
    url: "https://utampaakpsi.com",
    summary:
      "A nine-page site for the Phi Upsilon chapter of Alpha Kappa Psi at the University of Tampa, with a **talent network for employers**, sponsorship tiers, and donations.",
    challenge: [
      "I built this while serving as the chapter's **Chairman of Technology**. The chapter needed **one place** to introduce itself to recruits, give employers a reason to hire its members, and give sponsors and donors a clear way to support it.",
    ],
    built: [
      "**Nine pages**: home, about, events, the family, officers, talent network, sponsors, donate, and contact.",
      "**A talent network page** where employers can search members by name or skill and filter by major, with each member's class year and internship availability.",
      "**A sponsors page** with tiered partnership levels, from a Friend of AKPsi listing to event sponsorship.",
      "**A donate page** with giving tiers tied to what each gift pays for.",
      "**A members page** organized by pledge class, and a contact form through Formspree.",
      "**A dark mode toggle**.",
    ],
    stack: ["html", "css", "js", "formspree", "vercel"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
