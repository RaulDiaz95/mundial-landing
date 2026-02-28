export default function LandingPage({ content }) {
  return (
    <>
      <header className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm">{content.siteName}</p>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-16">
        <section aria-labelledby="hero-title" className="space-y-4">
          <h1 id="hero-title" className="text-3xl">
            {content.hero.title}
          </h1>
          <p className="text-base">{content.hero.subtitle}</p>
          <button className="text-base">{content.hero.cta}</button>
        </section>

        <section aria-labelledby="property-title" className="space-y-4">
          <h2 id="property-title" className="text-2xl">
            {content.property.title}
          </h2>
          <ul className="space-y-2">
            {content.property.items.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="location-title" className="space-y-4">
          <h2 id="location-title" className="text-2xl">
            {content.location.title}
          </h2>
          <p className="text-base">{content.location.body}</p>
        </section>

        <section aria-labelledby="map-title" className="space-y-4">
          <h2 id="map-title" className="text-2xl">
            {content.map.title}
          </h2>
          <p className="text-base">{content.map.body}</p>
        </section>

        <section aria-labelledby="nearby-title" className="space-y-4">
          <h2 id="nearby-title" className="text-2xl">
            {content.nearby.title}
          </h2>
          <ul className="space-y-2">
            {content.nearby.items.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="gallery-title" className="space-y-4">
          <h2 id="gallery-title" className="text-2xl">
            {content.gallery.title}
          </h2>
          <p className="text-base">{content.gallery.body}</p>
        </section>

        <section aria-labelledby="final-cta-title" className="space-y-4">
          <h2 id="final-cta-title" className="text-2xl">
            {content.finalCta.title}
          </h2>
          <a
            className="text-base"
            href="https://wa.me/526691590498?text=Hola%2C%20vi%20el%20departamento%20en%20renta%20en%20Guadalajara%20para%20el%20Mundial%202026%20y%20me%20gustar%C3%ADa%20conocer%20disponibilidad%2C%20fechas%20y%20condiciones.%20Gracias."
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.finalCta.cta}
          </a>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm">{content.footer}</p>
      </footer>
    </>
  );
}
