import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  const baseUrl = "https://ghccpgh.org";

  // Static pages
  const staticPages = [
    "", "/about", "/about/mission",  "/about/history",
    "/about/partners", "/contact",
    "/privacy", "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Dynamic pages from Sanity
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`);
  const postPages = posts.map((p: { slug: string; _updatedAt: string }) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p._updatedAt),
  }));

  return [...staticPages, ...postPages];
}