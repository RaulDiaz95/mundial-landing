const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "World Cup 2026 Guadalajara · Direct Rental",
  description:
    "Rental property in Guadalajara for the World Cup 2026 with direct contact and a comfortable stay.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressCountry: "MX",
  },
  areaServed: "Guadalajara, Jalisco, MX",
  availableLanguage: ["es", "en"],
  url: "https://example.com/en",
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
