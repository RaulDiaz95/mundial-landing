"use client";

import { useEffect } from "react";
import GallerySection from "./GallerySection";
import LanguageSwitcher from "./LanguageSwitcher";

export default function LandingPage({ content }) {
  const whatsappMessage = content.whatsapp.message;
  const whatsappLink = `https://wa.me/526691590498?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const amenityIcons = [
    "M3 11.25 12 4l9 7.25M5.25 10.75V20a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1v-9.25",
    "M4.5 12.75h15M6 12.75V10.5a2.25 2.25 0 0 1 2.25-2.25h4.5A2.25 2.25 0 0 1 15 10.5v2.25M4.5 12.75V18M19.5 12.75V18",
    "M4.5 13.5h15M6 13.5V8.25a2.25 2.25 0 1 1 4.5 0V13.5M9 17.25v2.25M15 17.25v2.25",
    "M7.5 3.75h9v16.5h-9zM10.5 7.5h3M10.5 11.25h3",
    "M5.25 10.5a9.75 9.75 0 0 1 13.5 0M8.25 13.5a6 6 0 0 1 7.5 0M12 16.5h.01",
    "M3.75 13.5h12l2-3h2.25a1.5 1.5 0 0 1 1.5 1.5v4.5H3.75V13.5zM6.75 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    "M6.75 15.75c5.25-1.5 8.25-4.5 9.75-9.75-5.25 1.5-8.25 4.5-9.75 9.75zM6.75 15.75 12.75 21.75",
    "M6.75 4.5h10.5v15h-10.5zM9 4.5V3h6v1.5M11.25 12h1.5",
  ];
  const amenityIconColors = [
    "text-emerald-500",
    "text-rose-500",
    "text-sky-500",
    "text-amber-500",
    "text-sky-500",
    "text-amber-500",
    "text-emerald-500",
    "text-amber-500",
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeNew = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        observer.observe(el);
      });
    };

    observeNew();

    const mutationObserver = new MutationObserver(() => {
      observeNew();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const parallaxElements = document.querySelectorAll(".parallax");
    const updateParallax = () => {
      parallaxElements.forEach((el) => {
        const rectTop = el.getBoundingClientRect().top;
        const rawOffset = (rectTop - window.innerHeight) * -0.05;
        const offset = Math.max(-8, Math.min(8, rawOffset));
        el.style.setProperty("--parallax-offset", `${offset}px`);
      });
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <LanguageSwitcher />
      <main className="mx-auto max-w-5xl lg:max-w-[1280px] px-6 pt-6 pb-6 lg:pt-2 space-y-10 sm:space-y-12">
        <section
          aria-labelledby="hero-title"
          className="-mx-6 border-y border-neutral-200 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.7),_rgba(255,255,255,1)_55%)] px-6 py-12 sm:mx-0 sm:rounded-2xl sm:border sm:px-10 sm:py-14 motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.35s_ease-out_forwards]"
        >
          <div className="mx-auto max-w-5xl lg:max-w-[1280px] gap-10 space-y-8 lg:grid lg:grid-cols-12 lg:items-start lg:space-y-0">
            <div className="order-1 space-y-6 lg:col-span-7 lg:order-1">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards] motion-safe:[animation-delay:0ms]">
                  WORLD CUP 2026 · GUADALAJARA
                </p>
                <h1
                  id="hero-title"
                  className="max-w-2xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] motion-safe:[animation-delay:120ms]"
                >
                  {content.hero.title}
                </h1>
                <p className="max-w-2xl text-base font-medium leading-7 text-neutral-700 motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] motion-safe:[animation-delay:240ms]">
                  {content.hero.lead}
                </p>
                <p className="max-w-2xl text-base leading-7 text-neutral-700">
                  {content.hero.sublead}
                </p>
                <details className="group max-w-2xl">
                  <summary className="cursor-pointer list-none text-sm text-neutral-500">
                    {content.hero.detailsLabel}
                  </summary>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    {content.hero.subtitle}
                  </p>
                </details>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-700">
                  {content.hero.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-2 lg:col-span-5 lg:order-2">
              <div className="space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <img
                    src="/images/apartment/hero-principal.jpg"
                    alt="Primary view of the apartment"
                    className="parallax h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-neutral-600">
                  Real view of the apartment
                </p>
              </div>
            </div>

            <div className="order-3 space-y-4 lg:col-span-7 lg:order-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] motion-safe:[animation-delay:360ms]"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={content.whatsapp.ariaLabel}
              >
                {content.hero.cta}
              </a>
              <p className="text-sm text-neutral-500">{content.hero.ctaNote}</p>
            </div>

            <div className="order-4 lg:col-span-7 lg:order-4">
              <ul className="space-y-2 text-sm text-neutral-700">
                {content.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-600"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0L3.3 9.1a1 1 0 1 1 1.4-1.4l3.1 3.1 6.5-6.5a1 1 0 0 1 1.4 0z" />
                    </svg>
                  </span>
                  {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="summary-title"
          className="reveal space-y-4 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="summary-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            {content.summary.title}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {content.summary.items.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="reveal group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-4 text-center shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:shadow-md motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.35s_ease-out_forwards]"
              >
                {[
                  {
                    icon: "M4 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v5H4zM8 8a2 2 0 1 0-4 0M16 8a2 2 0 1 0 4 0",
                    color: "text-emerald-500",
                  },
                  {
                    icon: "M4 12h16M6 12V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M4 12v4M20 12v4",
                    color: "text-rose-500",
                  },
                  {
                    icon: "M4 12h16M6 12V7a2 2 0 1 1 4 0v5M8 16v2M12 16v2",
                    color: "text-sky-500",
                  },
                  {
                    icon: "M4.5 9.5a8 8 0 0 1 11 0M7 12a4.5 4.5 0 0 1 6 0M10 15h.01",
                    color: "text-sky-500",
                  },
                  {
                    icon: "M3 13h12l2-3h2a1 1 0 0 1 1 1v5H3v-3a1 1 0 0 1 1-1zm2 3a1.5 1.5 0 1 0 3 0m8 0a1.5 1.5 0 1 0 3 0",
                    color: "text-amber-500",
                  },
                  {
                    icon: "M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4",
                    color: "text-sky-500",
                  },
                ][index] && (
                  <div className="flex justify-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 transition-transform duration-200 ease-out group-hover:scale-105">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-6 w-6 ${[
                          "text-emerald-500",
                          "text-rose-500",
                          "text-sky-500",
                          "text-sky-500",
                          "text-amber-500",
                          "text-sky-500",
                        ][index]}`}
                      >
                        <path
                          d={
                            [
                              "M4 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v5H4zM8 8a2 2 0 1 0-4 0M16 8a2 2 0 1 0 4 0",
                              "M4 12h16M6 12V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M4 12v4M20 12v4",
                              "M4 12h16M6 12V7a2 2 0 1 1 4 0v5M8 16v2M12 16v2",
                              "M4.5 9.5a8 8 0 0 1 11 0M7 12a4.5 4.5 0 0 1 6 0M10 15h.01",
                              "M3 13h12l2-3h2a1 1 0 0 1 1 1v5H3v-3a1 1 0 0 1 1-1zm2 3a1.5 1.5 0 1 0 3 0m8 0a1.5 1.5 0 1 0 3 0",
                              "M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4",
                            ][index]
                          }
                        />
                      </svg>
                    </span>
                  </div>
                )}
                <p className="mt-2 text-xs font-semibold text-neutral-700">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-neutral-900">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <GallerySection className="reveal" content={content.gallery} />

        <section
          aria-labelledby="property-title"
          className="reveal space-y-4 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="property-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            {content.features.title}
          </h2>
          <p className="text-sm text-neutral-600">
            {content.features.description}
          </p>
          <div className="grid grid-cols-2 gap-4 text-neutral-700 sm:grid-cols-3 lg:grid-cols-4">
            {content.features.items.map((item, index) => (
              <div
                key={`${item.description}-${index}`}
                className="reveal group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.35s_ease-out_forwards]"
              >
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 transition-transform duration-300 ease-out group-hover:scale-105"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 ${amenityIconColors[index % amenityIconColors.length]}`}
                  >
                    <path d={amenityIcons[index % amenityIcons.length]} />
                  </svg>
                </span>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="stadium-location-title"
          role="region"
          className="reveal space-y-8 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start no-grid-hover">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2
                  id="stadium-location-title"
                  className="text-2xl font-semibold text-neutral-900 sm:text-3xl tracking-tight"
                >
                  {content.location.title}
                </h2>
                <p className="text-sm leading-6 text-neutral-600">
                  {content.location.subtitle}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-neutral-700">
                {content.location.body}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-neutral-700">
                {content.location.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/70 px-4 py-2 text-sm text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.06)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="text-sm text-neutral-600">{content.location.note}</p>
              <p className="text-sm text-neutral-600"></p>
            </div>
            <div className="w-full">
              <iframe
                className="h-72 w-full rounded-2xl border border-neutral-200 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
                src="https://www.google.com/maps?q=Classiqa%20Chapalita%2C%20Av.%20Nicol%C3%A1s%20Cop%C3%A9rnico%20943A%2C%20Atlas%20Chapalita%2C%2045030%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                aria-label={content.location.mapAria}
              />
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <p className="font-semibold text-neutral-900">
                  {content.location.mapLabel}
                </p>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
                  href="https://www.google.com/maps?q=Classiqa%20Chapalita%2C%20Av.%20Nicol%C3%A1s%20Cop%C3%A9rnico%20943A%2C%20Atlas%20Chapalita%2C%2045030%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.location.mapCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="direct-trust-title"
          className="reveal space-y-6 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="direct-trust-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            {content.directTrust.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.directTrust.items.map((text) => (
              <div
                key={text}
                className="reveal flex items-start gap-3 rounded-2xl bg-neutral-50 p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
              >
                <span
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-neutral-700"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                  >
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0L3.3 9.1a1 1 0 1 1 1.4-1.4l3.1 3.1 6.5-6.5a1 1 0 0 1 1.4 0z" />
                  </svg>
                </span>
                <p className="text-sm font-medium text-neutral-800">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-600">{content.directTrust.note}</p>
        </section>

        <section
          aria-labelledby="nearby-title"
          className="reveal space-y-4 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="nearby-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            {content.nearby.title}
          </h2>
          <p className="text-sm text-neutral-600">{content.nearby.body}</p>
          <ul className="grid gap-4 text-neutral-700 sm:grid-cols-2">
            {content.nearby.items.map((item) => (
              <li
                key={item}
                className="reveal rounded-xl bg-neutral-100 p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-colors duration-300 ease-out hover:bg-neutral-200 motion-safe:opacity-0 motion-safe:translate-y-2 motion-safe:animate-[fadeInUp_0.35s_ease-out_forwards]"
              >
                <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                  <span className="text-xs">•</span>
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/80 px-4 py-3 backdrop-blur-sm sm:hidden">
          <a
            className="inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white hover:bg-rose-700"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.whatsapp.ariaLabel}
          >
            {content.finalCta.cta}
          </a>
        </div>

      <footer className="mx-auto max-w-5xl lg:max-w-[1280px] px-6 py-10">
        <div className="rounded-2xl bg-neutral-50 px-6 py-6 text-center shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-neutral-600">
            {content.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
