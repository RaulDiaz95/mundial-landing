import LandingPage from "./_components/LandingPage";
import { landingContent } from "./_content/landing";

export const metadata = {
  title: "Renta cerca del Mundial 2026 en Guadalajara (placeholder)",
  description:
    "Renta una propiedad cómoda y bien ubicada para el Mundial 2026 en Guadalajara. Detalles y disponibilidad próximamente.",
  alternates: {
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return <LandingPage content={landingContent.es} />;
}
