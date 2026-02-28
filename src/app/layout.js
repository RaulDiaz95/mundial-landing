import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  verification: {
    google: "air9_DRe4AaygnjaI",
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;
  const lang = locale === "en" ? "en" : "es";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Departamento en renta en Guadalajara para el Mundial 2026",
    description:
      "A comfortable rental property in Guadalajara designed for World Cup 2026 visitors seeking a calm, well-located stay with direct communication.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    areaServed: "Guadalajara",
    availableLanguage: ["es", "en"],
    url: "/",
    sameAs: [],
    makesOffer: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability",
      category: "Short-term rental",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Kitchen" },
      { "@type": "LocationFeatureSpecification", name: "Quiet environment" },
      { "@type": "LocationFeatureSpecification", name: "Comfortable bedrooms" },
      { "@type": "LocationFeatureSpecification", name: "Workspace" },
    ],
  };

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="lodgingbusiness-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
