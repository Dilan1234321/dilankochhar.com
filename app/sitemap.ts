import type { MetadataRoute } from "next";

const BASE = "https://dilankochhar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/services", "/dilly", "/about", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/work" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" || path === "/work" ? 0.9 : 0.6,
  }));
}
