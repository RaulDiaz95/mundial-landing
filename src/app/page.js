import LandingPage from "./_components/LandingPage";
import { landingContent } from "./_content/landing";

export const metadata = {
  title: "Guadalajara World Cup 2026 apartment rental | Direct Booking",
  description:
    "Apartment rental in Guadalajara for World Cup 2026. Strategic location, comfortable stay, and direct contact with no intermediaries. Check availability.",
  alternates: {
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return <LandingPage content={landingContent.en} />;
}
