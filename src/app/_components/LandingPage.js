import GallerySection from "./GallerySection";

export default function LandingPage({ content }) {
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

  return (
    <div className="min-h-screen bg-neutral-100 overflow-x-hidden">
      <header className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
        <p className="text-sm text-neutral-600">{content.siteName}</p>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-10 sm:space-y-12">
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
                  Pensado para viajeros que buscan comodidad, privacidad y
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
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <img
                    src="/images/apartment/hero-principal.jpg"
                    alt="Vista principal del departamento"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-neutral-600">
                  Vista real del departamento
                </p>
              </div>
            </div>

            <div className="order-3 space-y-4 lg:col-span-7 lg:order-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                href="https://wa.me/526691590498text=Hola%2C%20me%20interesa%20el%20departamento%20para%20el%20Mundial%202026%20en%20Guadalajara.%20%C2%BFQu%C3%A9%20fechas%20tienes%20disponibles%20y%20cu%C3%A1l%20es%20el%20proceso%20de%20reserva%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar disponibilidad
              </a>
              <p className="text-sm text-neutral-500">
                Respuesta rápida y contacto directo por WhatsApp
              </p>
            </div>

            <div className="order-4 lg:col-span-7 lg:order-4">
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
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
                  Zona estratégica con fácil acceso a estadio y Expo
                </li>
                <li className="flex items-start gap-2">
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
                  Comunicación directa y respuesta rápida por WhatsApp
                </li>
                <li className="flex items-start gap-2">
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
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            Resumen del departamento
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Capacidad", value: "Hasta 4 personas" },
              { label: "Recámaras", value: "2" },
              { label: "Baños", value: "1" },
              { label: "Wi-Fi", value: "Alta velocidad incluido" },
              { label: "Estacionamiento", value: "Techado (en batería, exclusivo del departamento)" },
              { label: "Cocina", value: "Cocina integral totalmente equipada" },
            ].map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-md"
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

        <GallerySection />

        <section
          aria-labelledby="property-title"
          className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="property-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            Características del departamento
          </h2>
          <p className="text-sm text-neutral-600">
            Detalles reales pensados para una estancia cómoda durante el Mundial 2026.
          </p>
          <div className="grid grid-cols-2 gap-4 text-neutral-700 sm:grid-cols-3 lg:grid-cols-4">
            {[
              {
                title: "Distribución cómoda",
                description:
                  "Departamento bien distribuido, ideal para estancias de varios días sin sensación de encierro.",
              },
              {
                title: "Dos recámaras privadas",
                description:
                  "Espacios silenciosos y bien iluminados para descansar antes y después de los partidos.",
              },
              {
                title: "Dos baños completos",
                description:
                  "Baños funcionales con agua caliente estable para mayor comodidad.",
              },
              {
                title: "Cocina integral equipada",
                description:
                  "Cocina completa para preparar alimentos, desayunos o cenas durante tu estancia.",
              },
              {
                title: "Wi-Fi de alta velocidad",
                description:
                  "Conexión confiable para trabajo remoto, streaming y comunicación diaria.",
              },
              {
                title: "Estacionamiento techado",
                description:
                  "Cajón de estacionamiento en batería, exclusivo del departamento.",
              },
              {
                title: "Ambiente tranquilo",
                description:
                  "Ideal para descansar, dormir bien y recuperarse entre jornadas del Mundial.",
              },
              {
                title: "Espacios de guardado",
                description:
                  "Clósets y áreas de almacenamiento suficientes para estancias prolongadas.",
              },
            ].map((item, index) => (

              <div
                key={`${item.description}-${index}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
              >
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-200 transition-transform duration-200 ease-out group-hover:scale-105"
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
          className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2
                  id="stadium-location-title"
                  className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
                >
                  Ubicación estratégica en Chapalita · Conectividad clave para el Mundial 2026
                </h2>
                <p className="text-sm text-neutral-600">
                  El departamento se encuentra en Chapalita, una de las zonas mejor ubicadas y más agradables de Guadalajara, ideal para quienes visitan la ciudad durante el Mundial 2026.
                </p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-neutral-700">
                Su ubicación permite traslados eficientes hacia los principales puntos del evento, sin sacrificar tranquilidad ni comodidad.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  Acceso rápido a Expo Guadalajara
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  Conectividad sencilla hacia el estadio y zonas sede
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  Zona residencial tranquila, lejos del ruido turístico
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  Cercanía a avenidas principales para moverte por la ciudad
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                Servicios, restaurantes y comercios a pocos minutos
              </p>
              <p className="text-sm text-neutral-600"></p>
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
                  Classiqa Chapalita · Av. Nicolás Copérnico 943A, Atlas Chapalita,
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
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            ¿Por qué reservar directamente?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { text: "Comunicación directa, sin intermediarios" },
              { text: "Sin comisiones ocultas" },
              { text: "Información clara antes de confirmar" },
              { text: "Respuesta rápida por WhatsApp" },
              { text: "Flexibilidad en llegada y salida (según disponibilidad)" },
              { text: "Condiciones transparentes y trato personal" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-2xl bg-neutral-50 p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
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
                <p className="text-sm font-medium text-neutral-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-600">
            Trato directo con el propietario para una experiencia clara, confiable y sin sorpresas durante el Mundial 2026.
          </p>
        </section>

        <section
          aria-labelledby="nearby-title"
          className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
        >
          <h2
            id="nearby-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            {content.nearby.title}
          </h2>
          <ul className="grid gap-3 text-neutral-700 sm:grid-cols-2 sm:gap-4">
            {content.nearby.items.map((item, index) => (
              <li key={`${item.description}-${index}`}>{item.description}</li>
            ))}
          </ul>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          className="inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white hover:bg-rose-700"
          href="https://wa.me/526691590498text=Hola%2C%20me%20interesa%20el%20departamento%20para%20el%20Mundial%202026%20en%20Guadalajara.%20%C2%BFQu%C3%A9%20fechas%20tienes%20disponibles%20y%20cu%C3%A1l%20es%20el%20proceso%20de%20reserva%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.finalCta.cta}
        </a>
      </div>

      <footer className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm text-neutral-600">
          Renta directa en Guadalajara para el Mundial 2026 con atención clara y
          organizada. Compartimos información precisa y mantenemos comunicación
          directa para una experiencia confiable.
        </p>
      </footer>
    </div>
  );
}
