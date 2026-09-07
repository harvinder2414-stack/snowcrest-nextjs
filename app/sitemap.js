import { getAllPostSlugs } from "../lib/posts";

export default function sitemap() {
  const baseUrl = "https://www.snowcresthotels.com";
  const staticPages = ["", "/luxe-vista", "/rooms", "/offers", "/about", "/contact", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
  const blogPages = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...blogPages];
}
