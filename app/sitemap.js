import { posts } from "@/lib/data";
import { partners } from "@/lib/partners";
import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "",
    "/nonprofits",
    "/for-donors",
    "/for-nonprofits",
    "/share-your-story",
    "/about",
    "/blog",
    "/disclaimer",
    "/privacy",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const partnerRoutes = partners.map((p) => ({
    url: `${site.url}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...partnerRoutes, ...postRoutes];
}
