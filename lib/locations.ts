/**
 * Local landing pages for /web-design/<slug>. Honesty rules: no invented clients,
 * results, reviews, or addresses, and no claim of a local office. Only Tampa Bay has
 * known local clients (Erickson Flooring, Nomi, Mu Epsilon Delta, UTampa AKPsi).
 * Miami and New York feature strong projects without calling them local.
 */

export type Faq = { q: string; a: string };

export type Location = {
  slug: string;
  /** Short city name used in copy, e.g. "Tampa Bay". */
  name: string;
  /** City and state, e.g. "Tampa Bay, FL". */
  region: string;
  h1: string;
  /** Full page title (not run through the layout's title template). */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  why: string[];
  areas: string[];
  faqs: Faq[];
  /** Slugs from lib/caseStudies.ts. */
  featured: string[];
};

const pricing: Faq = {
  q: "How much does a website cost?",
  a: "Websites are a one-time build starting at $1,000. The final price depends on what the site needs to do. Website care starts at $45 a month, and CRM management starts at $1,500 a month. You get a clear quote before any work starts.",
};

const timeline: Faq = {
  q: "How long does a website take?",
  a: "It depends on scope. A simple site with the content ready moves faster than a store or a custom app. After our first call, I give you a timeline for your project before anything starts.",
};

const ownership: Faq = {
  q: "Do I own the website?",
  a: "Yes. The site is yours to keep, code and content included. If you want ongoing help after launch, care plans cover security and maintenance.",
};

const crm: Faq = {
  q: "What does CRM management include?",
  a: "I build and run your CRM: pipelines, automations, follow-ups, and reporting, so every lead gets worked and nothing slips through the cracks. It starts at $1,500 a month.",
};

export const locations: Location[] = [
  {
    slug: "tampa-bay",
    name: "Tampa Bay",
    region: "Tampa Bay, FL",
    h1: "Web design & development in Tampa Bay",
    metaTitle: "Web Design & Development in Tampa Bay | Dilan Kochhar",
    metaDescription:
      "Tampa Bay web designer and developer. Custom websites from $1,000, CRM management, and website care, built start to finish by Dilan Kochhar.",
    intro:
      "I'm Dilan Kochhar, a web developer based in Tampa Bay and a student at the University of Tampa. I design and build websites for local businesses, from a flooring installer to a downtown izakaya. Every site is designed and coded by me, start to finish, and it's yours to keep.",
    why: [
      "I live here. I study at the University of Tampa and meet Tampa Bay clients in person.",
      "I've built for Tampa businesses and groups, including Erickson Flooring, Nomi, Mu Epsilon Delta, and UTampa AKPsi.",
      "One person, start to finish. You talk to the person who designs and writes the code.",
      "Clear pricing. Websites start at $1,000, and you get a quote before any work starts.",
    ],
    areas: [
      "Tampa",
      "St. Petersburg",
      "Clearwater",
      "Brandon",
      "Riverview",
      "Wesley Chapel",
      "Largo",
      "Dunedin",
      "Palm Harbor",
      "Lakeland",
    ],
    faqs: [
      pricing,
      timeline,
      ownership,
      {
        q: "Can we meet in person?",
        a: "Yes. I'm based in Tampa Bay, so we can meet in person or over a video call, whichever is easier for you.",
      },
    ],
    featured: ["erickson-flooring", "nomi-bar", "mu-epsilon-delta", "utampa-akpsi"],
  },
  {
    slug: "miami",
    name: "Miami",
    region: "Miami, FL",
    h1: "Web design & development in Miami",
    metaTitle: "Web Design & Development in Miami, FL | Dilan Kochhar",
    metaDescription:
      "Miami web designer and developer. Custom websites from $1,000, CRM management, and website care for businesses across Miami-Dade and Broward.",
    intro:
      "I'm Dilan Kochhar, a web developer based in Florida. I work with businesses across Miami-Dade and Broward, remotely and in person. I design and build every site myself, start to finish, and it's yours to keep.",
    why: [
      "One person, start to finish. You talk to the person who designs and writes the code.",
      "In-state. I'm based in Tampa Bay and work with Miami businesses remotely and in person.",
      "Built to be found. Fast sites with clean structure for search engines and AI assistants.",
      "Clear pricing. Websites start at $1,000, and you get a quote before any work starts.",
    ],
    areas: [
      "Miami",
      "Miami Beach",
      "Brickell",
      "Wynwood",
      "Coral Gables",
      "Coconut Grove",
      "Doral",
      "Aventura",
      "Fort Lauderdale",
      "Hollywood",
    ],
    faqs: [
      pricing,
      timeline,
      {
        q: "Do you work with Miami businesses remotely or in person?",
        a: "Both. I'm based in Tampa Bay, so most of the work happens over video calls, email, and shared previews. If meeting in person matters to you, tell me and we can plan for it.",
      },
      crm,
    ],
    featured: ["n-plus-1-talent", "erickson-flooring", "taken-time-to-design"],
  },
  {
    slug: "new-york",
    name: "New York",
    region: "New York, NY",
    h1: "Web design & development in New York",
    metaTitle: "Web Design & Development in New York | Dilan Kochhar",
    metaDescription:
      "New York web designer and developer. Custom websites from $1,000, CRM management, and website care, designed and built start to finish by Dilan Kochhar.",
    intro:
      "I'm Dilan Kochhar, a web developer originally from New York and now based in Tampa Bay. I work with New York businesses remotely, from first call to launch. I design and build every site myself, start to finish, and it's yours to keep.",
    why: [
      "Born in New York, and on the same clock. Tampa Bay runs on Eastern time, so calls and replies happen during your workday.",
      "One person, start to finish. You talk to the person who designs and writes the code.",
      "Built to be found. Fast sites with clean structure for search engines and AI assistants.",
      "Clear pricing. Websites start at $1,000, and you get a quote before any work starts.",
    ],
    areas: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "The Bronx",
      "Staten Island",
      "Long Island",
      "Westchester",
      "Jersey City",
    ],
    faqs: [
      pricing,
      timeline,
      ownership,
      {
        q: "Can you work with a New York business from Tampa Bay?",
        a: "Yes. New York projects run remotely over video calls, email, and shared previews, so you can review progress at every step. If meeting in person matters to you, tell me and we can plan for it.",
      },
    ],
    featured: ["n-plus-1-talent", "taken-time-to-design", "nomi-bar"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
