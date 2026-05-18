export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://testhisu.vercel.app/sitemap.xml",
  };
}