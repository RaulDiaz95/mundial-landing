"use client";

import { useEffect, useMemo, useState } from "react";

export default function GallerySection() {
  const apartmentImages = [
    { src: "/images/apartment/ingreso-departamento.jpg", alt: "Ingreso al departamento" },
    { src: "/images/apartment/sala.jpg", alt: "Sala principal" },
    { src: "/images/apartment/comedor-y-sala.jpg", alt: "Comedor y sala integrados" },
    { src: "/images/apartment/comedor-y-sala-2.jpg", alt: "Comedor y sala en otra vista" },
    { src: "/images/apartment/comedor-1.jpg", alt: "Comedor" },
    { src: "/images/apartment/comedor-2.jpg", alt: "Comedor en otra vista" },
    { src: "/images/apartment/cocina.jpg", alt: "Cocina del departamento" },
    { src: "/images/apartment/refrigerador.jpg", alt: "Refrigerador en la cocina" },
    { src: "/images/apartment/lavaplatos.jpg", alt: "Área de lavaplatos" },
    { src: "/images/apartment/recamara-principal.jpg", alt: "Recámara principal" },
    { src: "/images/apartment/vista-sala.jpg", alt: "Vista de la sala" },
    { src: "/images/apartment/vista-balcon.jpg", alt: "Vista desde el balcón" },
    { src: "/images/apartment/vista-balcon-nocturna.jpg", alt: "Vista nocturna desde el balcón" },
    { src: "/images/apartment/recamara-2.jpg", alt: "Segunda recámara" },
    { src: "/images/apartment/camas-recamara-2.jpg", alt: "Camas en la segunda recámara" },
    { src: "/images/apartment/escritorio-recamara-2.jpg", alt: "Escritorio en la segunda recámara" },
    { src: "/images/apartment/bano-2.jpg", alt: "Baño del departamento" },
    { src: "/images/apartment/lavamanos-bano-1.jpg", alt: "Lavamanos del baño principal" },
    { src: "/images/apartment/lavamanos-bano-2.jpg", alt: "Lavamanos del segundo baño" },
    { src: "/images/apartment/regadera-bano-2.jpg", alt: "Regadera del segundo baño" },
    { src: "/images/apartment/closet-bano-1.jpg", alt: "Clóset del baño principal" },
    { src: "/images/apartment/cuarto-de-servicio.jpg", alt: "Cuarto de servicio" },
    { src: "/images/apartment/lavadora.jpg", alt: "Lavadora" },
    { src: "/images/apartment/vista-nocturna.jpg", alt: "Vista nocturna" },
    { src: "/images/apartment/vista-ingreso.jpg", alt: "Vista del ingreso" },
    { src: "/images/apartment/vista-recamara-2.jpeg", alt: "Vista de la segunda recámara" },
  ];

  const amenitiesImages = [
    { src: "/images/amenities/lobby-1.jpg", alt: "Lobby del edificio" },
    { src: "/images/amenities/lobby-2.jpg", alt: "Lobby con área de acceso" },
    { src: "/images/amenities/alberca-1.jpg", alt: "Alberca del edificio" },
    { src: "/images/amenities/alberca-2.jpg", alt: "Alberca en otra vista" },
    { src: "/images/amenities/sitio-descanso-1.jpg", alt: "Área de descanso" },
    { src: "/images/amenities/sitio-descanso-2.jpg", alt: "Zona de descanso" },
    { src: "/images/amenities/sala-estar-1.jpg", alt: "Sala de estar del edificio" },
    { src: "/images/amenities/sala-estar-2.jpg", alt: "Sala de estar en otra vista" },
    { src: "/images/amenities/mesas-aire-libre-1.jpg", alt: "Mesas al aire libre" },
    { src: "/images/amenities/mesas-aire-libre-2.jpg", alt: "Área de mesas al aire libre" },
  ];

  const initialApartment = apartmentImages.slice(0, 9);
  const remainingApartment = apartmentImages.slice(9);
  const initialAmenities = amenitiesImages.slice(0, 6);
  const remainingAmenities = amenitiesImages.slice(6);

  const [expandedApartment, setExpandedApartment] = useState(false);
  const [expandedAmenities, setExpandedAmenities] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [touchStartX, setTouchStartX] = useState(null);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const showPrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxOpen, lightboxImages.length]);

  const currentImage = useMemo(
    () => lightboxImages[lightboxIndex],
    [lightboxImages, lightboxIndex]
  );

  const getIndexBySrc = (items, src) =>
    items.findIndex((item) => item.src === src);

  const renderGrid = (items, fullItems, enableReveal = false) => (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3${enableReveal ? " reveal-stagger" : ""}`}>
      {items.map((item) => (
        <figure key={item.src} className={`group${enableReveal ? " reveal" : ""}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl motion-safe:opacity-0 motion-safe:animate-[fadeIn_0.3s_ease-out_forwards]">
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="parallax h-full w-full cursor-pointer object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              onClick={() => {
                const resolvedIndex = getIndexBySrc(fullItems, item.src);
                openLightbox(fullItems, resolvedIndex);
              }}
            />
          </div>
        </figure>
      ))}
    </div>
  );

  return (
    <>
      <section
        aria-labelledby="gallery-department-title"
        className="reveal space-y-6 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
      >
        <div className="space-y-3">
          <h2
            id="gallery-department-title"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl"
          >
            Galería del departamento
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-700">
            Imágenes reales del departamento y áreas comunes. Sin renders ni fotografías de referencia.
          </p>
        </div>

        {renderGrid(initialApartment, apartmentImages, true)}

        {!expandedApartment ? (
          <div>
            <button
              type="button"
              onClick={() => setExpandedApartment(true)}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
            >
              Ver más fotos
            </button>
          </div>
        ) : remainingApartment.length > 0 ? (
          renderGrid(remainingApartment, apartmentImages, true)
        ) : null}
      </section>

      <section
        aria-labelledby="gallery-amenities-title"
        className="reveal space-y-6 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
      >
        <div className="space-y-3">
          <h3
            id="gallery-amenities-title"
            className="text-xl font-semibold text-neutral-900 sm:text-2xl"
          >
            Amenidades del edificio
          </h3>
          <p className="max-w-2xl text-base leading-7 text-neutral-700">
            Espacios compartidos pensados para disfrutar, relajarte y complementar tu estancia durante el Mundial 2026.
          </p>
          <ul className="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
            <li>Alberca al aire libre — Ideal para relajarte después de los partidos o comenzar el día con un momento de descanso.</li>
            <li>Zona de asadores — Espacio equipado para convivir y preparar comidas en un ambiente relajado.</li>
            <li>Zona para fogata — Área común pensada para reuniones tranquilas por la tarde o noche.</li>
            <li>Gimnasio equipado — Mantén tu rutina de ejercicio sin salir del edificio durante tu estancia.</li>
            <li>Salón para adultos — Espacio cómodo para descansar, leer o convivir fuera del departamento.</li>
            <li>Juegos infantiles — Área segura para niños, ideal si viajas en familia.</li>
            <li>Estacionamiento techado — Cajón en batería, techado y exclusivo del departamento.</li>
          </ul>
        </div>

        {renderGrid(initialAmenities, amenitiesImages, true)}

        {!expandedAmenities ? (
          <div>
            <button
              type="button"
              onClick={() => setExpandedAmenities(true)}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
            >
              Ver más fotos
            </button>
          </div>
        ) : remainingAmenities.length > 0 ? (
          renderGrid(remainingAmenities, amenitiesImages, true)
        ) : null}
      </section>

      {lightboxOpen && currentImage ? (
        <div
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl lg:max-w-[1280px]"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStartX === null) return;
              const delta = event.changedTouches[0].clientX - touchStartX;
              if (delta > 50) showPrev();
              if (delta < -50) showNext();
              setTouchStartX(null);
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm"
              aria-label="Cerrar"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
            {lightboxImages.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm"
                  aria-label="Anterior"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm"
                  aria-label="Siguiente"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            ) : null}
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[90vh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
