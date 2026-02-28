import LandingPage from "../_components/LandingPage";
import { landingContent } from "../_content/landing";

export const metadata = {
  title: "Guadalajara World Cup 2026 rental (placeholder)",
  description:
    "Stay near the World Cup 2026 in Guadalajara with a comfortable, well-located rental. Details and availability coming soon.",
  alternates: {
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
};

export default function EnglishPage() {
  return <LandingPage content={landingContent.en} />;
}
