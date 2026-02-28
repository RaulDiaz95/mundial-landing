import GallerySection from "./GallerySection";

export default function LandingPage({ content }) {
  return (
    <div className="min-h-screen bg-neutral-100 overflow-x-hidden">
      <header className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
        <p className="text-sm text-neutral-600">{content.siteName}</p>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-8 sm:space-y-10">
        <section
          aria-labelledby="hero-title"
          className="-mx-6 border-y border-neutral-200 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.7),_rgba(255,255,255,1)_55%)] px-6 py-12 sm:mx-0 sm:rounded-2xl sm:border sm:px-10 sm:py-14"
        >
          <div className="mx-auto max-w-5xl gap-10 space-y-8 lg:grid lg:grid-cols-12 lg:items-start lg:space-y-0">
            <div className="order-1 space-y-6 lg:col-span-7 lg:order-1">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  WORLD CUP 2026 · GUADALAJARA
                </p>
                <h1
                  id="hero-title"
                  className="max-w-2xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl"
                >
                  {content.hero.title}
                </h1>
                <p className="max-w-2xl text-base font-medium leading-7 text-neutral-700">
                  Estancia privada en una zona estratégica de Guadalajara, con
                  atención directa y sin intermediarios para el Mundial 2026.
                </p>
                <p className="max-w-2xl text-base leading-7 text-neutral-700">
                  Diseñado para viajeros que buscan comodidad, privacidad y
                  traslados eficientes durante el torneo.
                </p>
                <details className="group max-w-2xl">
                  <summary className="cursor-pointer list-none text-sm text-neutral-500">
                    Leer descripción completa
                  </summary>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    {content.hero.subtitle}
                  </p>
                </details>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-700">
                  <span className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1">
                    Guadalajara
                  </span>
                  <span className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1">
                    Renta directa
                  </span>
                  <span className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1">
                    Mundial 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="order-2 lg:col-span-5 lg:order-2">
              <div className="space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 via-white to-neutral-50 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                    Disponible · Fechas limitadas
                  </div>
                </div>
                <p className="text-xs text-neutral-600">
                  Vista real del departamento
                </p>
              </div>
            </div>

            <div className="order-3 space-y-4 lg:col-span-7 lg:order-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                href="https://wa.me/526691590498?text=Hola%2C%20me%20interesa%20el%20departamento%20para%20el%20Mundial%202026%20en%20Guadalajara.%20%C2%BFQu%C3%A9%20fechas%20tienes%20disponibles%20y%20cu%C3%A1l%20es%20el%20proceso%20de%20reserva%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar disponibilidad
              </a>
              <p className="text-sm text-neutral-500">
                Respuesta rápida por WhatsApp · Fechas limitadas
              </p>
            </div>

            <div className="order-4 lg:col-span-7 lg:order-4">
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600" aria-hidden="true">
                    ✓
                  </span>
                  Zona estratégica con fácil acceso a estadio y Expo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600" aria-hidden="true">
                    ✓
                  </span>
                  Comunicación directa y respuesta rápida por WhatsApp
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600" aria-hidden="true">
                    ✓
                  </span>
                  Espacio privado, cómodo y cuidadosamente mantenido
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="summary-title"
          className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="summary-title"
            className="text-2xl font-semibold text-neutral-900"
          >
            Resumen del departamento
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: "👥", label: "Hasta 4 personas", value: "Hasta 4" },
              { icon: "🛏️", label: "Recámaras", value: "2" },
              { icon: "🚿", label: "Baños", value: "1" },
              {
                icon: "📶",
                label: "Wi‑Fi de alta velocidad incluido",
                value: "Incluido",
              },
              { icon: "🚗", label: "Consultar disponibilidad", value: "Consultar" },
              { icon: "❄️", label: "Consultar disponibilidad", value: "Consultar" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
              >
                <div className="text-lg">{item.icon}</div>
                <p className="mt-2 text-xs font-semibold text-neutral-700">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-neutral-900">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="stadium-location-title"
          role="region"
          className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2
                  id="stadium-location-title"
                  className="text-2xl font-semibold text-neutral-900"
                >
                  Ubicación estratégica en Chapalita · Conectividad clave para el
                  Mundial 2026
                </h2>
                <p className="text-sm text-neutral-600">
                  Zona tranquila, bien conectada y con acceso eficiente a estadio,
                  Expo y zonas de afición.
                </p>
              </div>
              <p className="text-base leading-7 text-neutral-700">
                La propiedad se encuentra en Chapalita, una zona tranquila y bien
                conectada de Guadalajara. Durante el Mundial 2026, esta ubicación
                permite desplazamientos eficientes hacia el estadio, Expo
                Guadalajara y principales puntos de la ciudad, sin sacrificar
                comodidad ni descanso.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  🏟 Estadio Akron · ~25–40 min en auto
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  🏢 Expo Guadalajara · ~10–20 min en auto
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  🏙 Centro de Guadalajara · ~20–35 min en auto
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  ✈️ Aeropuerto GDL · ~30–45 min en auto
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                Tiempos aproximados, sujetos a condiciones de tráfico y horario.
              </p>
              <p className="text-sm text-neutral-600">
                La ubicación exacta se comparte únicamente al confirmar
                disponibilidad.
              </p>
            </div>
            <div className="w-full">
              <iframe
                className="h-72 w-full rounded-2xl border border-neutral-200 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
                src="https://www.google.com/maps?q=Classiqa%20Chapalita%2C%20Av.%20Nicol%C3%A1s%20Cop%C3%A9rnico%20943A%2C%20Atlas%20Chapalita%2C%2045030%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                aria-label="Mapa de ubicación aproximada en Guadalajara"
              />
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <p className="font-semibold text-neutral-900">
                  Classiqa Chapalita — Av. Nicolás Copérnico 943A, Atlas Chapalita,
                  45030 Zapopan, Jal.
                </p>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
                  href="https://www.google.com/maps?q=Classiqa%20Chapalita%2C%20Av.%20Nicol%C3%A1s%20Cop%C3%A9rnico%20943A%2C%20Atlas%20Chapalita%2C%2045030%20Zapopan%2C%20Jal.%2C%20M%C3%A9xico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="direct-trust-title"
          className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="direct-trust-title"
            className="text-2xl font-semibold text-neutral-900"
          >
            ¿Por qué reservar directamente?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🤝", text: "Comunicación directa, sin intermediarios" },
              { icon: "📄", text: "Información clara antes de confirmar" },
              { icon: "💬", text: "Respuesta rápida por WhatsApp" },
              { icon: "🧾", text: "Condiciones transparentes y sencillas" },
              { icon: "🕒", text: "Coordinación flexible de llegada y salida" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-2xl bg-neutral-50 p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
              >
                <span className="text-lg" aria-label="Indicador de confianza">
                  {item.icon}
                </span>
                <p className="text-sm font-medium text-neutral-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="property-title"
          className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="property-title"
            className="text-2xl font-semibold text-neutral-900"
          >
            {content.property.title}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-neutral-700 sm:grid-cols-3 lg:grid-cols-4">
            {content.property.items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
              >
                <div className="text-lg">
                  {[
                    "🛋️",
                    "🛏️",
                    "🍽️",
                    "📶",
                    "🧳",
                    "🌤️",
                    "🚿",
                    "🔑",
                    "🧼",
                    "💻",
                    "⚡",
                    "🌙",
                  ][index % 12]}
                </div>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  Amenidad {index + 1}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="nearby-title"
          className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="nearby-title"
            className="text-2xl font-semibold text-neutral-900"
          >
            {content.nearby.title}
          </h2>
          <ul className="grid gap-3 text-neutral-700 sm:grid-cols-2 sm:gap-4">
            {content.nearby.items.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <GallerySection />

        

        <section
          aria-labelledby="final-cta-title"
          className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="final-cta-title"
            className="text-2xl font-semibold text-neutral-900"
          >
            {content.finalCta.title}
          </h2>
          <a
            className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            href="https://wa.me/526691590498?text=Hola%2C%20me%20interesa%20el%20departamento%20para%20el%20Mundial%202026%20en%20Guadalajara.%20%C2%BFQu%C3%A9%20fechas%20tienes%20disponibles%20y%20cu%C3%A1l%20es%20el%20proceso%20de%20reserva%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </section>

      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          className="inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white hover:bg-rose-700"
          href="https://wa.me/526691590498?text=Hola%2C%20vi%20el%20departamento%20en%20renta%20en%20Guadalajara%20para%20el%20Mundial%202026%20y%20me%20gustar%C3%ADa%20conocer%20disponibilidad%2C%20fechas%20y%20condiciones.%20Gracias."
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.finalCta.cta}
        </a>
      </div>

      <footer className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm text-neutral-600">{content.footer}</p>
      </footer>
    </div>
  );
}
