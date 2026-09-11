// Next.js serves this at /robots.txt automatically. Keep SITE_URL in sync
// with app/layout.js and app/sitemap.js.
const SITE_URL = "https://www.snowcresthotels.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
