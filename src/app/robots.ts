export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio/" },
    sitemap: "https://ghccpgh.org/sitemap.xml",
  };
}