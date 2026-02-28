const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Mundial 2026 Guadalajara · Renta Directa",
  description:
    "Departamento en renta en Guadalajara para el Mundial 2026 con comunicación directa y estancia cómoda.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressCountry: "MX",
  },
  areaServed: "Guadalajara, Jalisco, MX",
  availableLanguage: ["es", "en"],
  url: "https://example.com/",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "reservations",
    telephone: "+52-00-0000-0000",
    availableLanguage: ["es", "en"],
  },
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
