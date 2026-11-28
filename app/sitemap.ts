import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { locations } from "@/lib/locations";

const SITE = "https://www.dilankochhar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...caseStudies.map((c) => ({
      url: `${SITE}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locations.map((l) => ({
      url: `${SITE}/web-design/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
