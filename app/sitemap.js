import { posts } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = ["", "/about", "/blog", "/disclaimer", "/privacy"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const postRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
