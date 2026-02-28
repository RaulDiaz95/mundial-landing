import LandingPage from "./_components/LandingPage";
import { landingContent } from "./_content/landing";

export const metadata = {
  title: "Departamento en renta en Guadalajara para el Mundial 2026 | Renta Directa",
  description:
    "Departamento en renta en Guadalajara para el Mundial 2026. Ubicación estratégica, estancia cómoda y contacto directo sin intermediarios. Consulta disponibilidad.",
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
