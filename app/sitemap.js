import { rooms } from "@/lib/rooms";
import { getAllPosts } from "@/lib/posts";

// Next.js serves this at /sitemap.xml automatically. Keep SITE_URL in sync
// with the one in app/layout.js — update both the day this goes live on
// its final domain.
const SITE_URL = "https://www.snowcresthotels.com";

export default function sitemap() {
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/luxe-vista", priority: 0.9, changeFrequency: "monthly" },
    { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
    { path: "/offers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const roomRoutes = rooms.map((room) => ({
    url: `${SITE_URL}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...roomRoutes, ...postRoutes];
}
