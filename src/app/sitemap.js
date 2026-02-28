export default function sitemap() {
  const lastModified = new Date("2026-02-28");

  return [
    {
      url: "https://mundial-landing.vercel.app/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
