export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mundial-landing.vercel.app/sitemap.xml",
  };
}
