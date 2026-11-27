/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Old multi-page routes now live as sections on the home page.
    return [
      { source: "/work", destination: "/#websites", permanent: true },
      { source: "/dilly", destination: "/#dilly", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};
module.exports = nextConfig;
