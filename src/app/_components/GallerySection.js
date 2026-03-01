"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function GallerySection({ content }) {
  const apartmentImages = [
    { src: "/images/apartment/ingreso-departamento.jpg", alt: "Apartment entrance" },
    { src: "/images/apartment/sala.jpg", alt: "Main living room" },
    { src: "/images/apartment/comedor-y-sala.jpg", alt: "Dining and living area" },
    { src: "/images/apartment/comedor-y-sala-2.jpg", alt: "Dining and living area (alternate view)" },
    { src: "/images/apartment/comedor-1.jpg", alt: "Dining room" },
    { src: "/images/apartment/comedor-2.jpg", alt: "Dining room en otra vista" },
    { src: "/images/apartment/cocina.jpg", alt: "Apartment kitchen" },
    { src: "/images/apartment/refrigerador.jpg", alt: "Kitchen refrigerator" },
    { src: "/images/apartment/lavaplatos.jpg", alt: "Dishwashing area" },
    { src: "/images/apartment/recamara-principal.jpg", alt: "Primary bedroom" },
    { src: "/images/apartment/vista-sala.jpg", alt: "Living room view" },
    { src: "/images/apartment/vista-balcon.jpg", alt: "Balcony view" },
    { src: "/images/apartment/vista-balcon-nocturna.jpg", alt: "Night view from the balcony" },
    { src: "/images/apartment/recamara-2.jpg", alt: "Second bedroom" },
    { src: "/images/apartment/camas-recamara-2.jpg", alt: "Beds in the second bedroom" },
    { src: "/images/apartment/escritorio-recamara-2.jpg", alt: "Desk in the second bedroom" },
    { src: "/images/apartment/bano-2.jpg", alt: "Apartment bathroom" },
    { src: "/images/apartment/lavamanos-bano-1.jpg", alt: "Primary bathroom sink" },
    { src: "/images/apartment/lavamanos-bano-2.jpg", alt: "Second bathroom sink" },
    { src: "/images/apartment/regadera-bano-2.jpg", alt: "Second bathroom shower" },
    { src: "/images/apartment/closet-bano-1.jpg", alt: "Primary bathroom closet" },
    { src: "/images/apartment/cuarto-de-servicio.jpg", alt: "Utility room" },
    { src: "/images/apartment/lavadora.jpg", alt: "Washing machine" },
    { src: "/images/apartment/vista-nocturna.jpg", alt: "Night view" },
    { src: "/images/apartment/vista-ingreso.jpg", alt: "Entrance view" },
    { src: "/images/apartment/vista-recamara-2.jpeg", alt: "Second bedroom view" },
  ];

  const amenitiesImages = [
    { src: "/images/amenities/lobby-1.jpg", alt: "Building lobby" },
    { src: "/images/amenities/lobby-2.jpg", alt: "Lobby with access area" },
    { src: "/images/amenities/alberca-1.jpg", alt: "Building pool" },
    { src: "/images/amenities/alberca-2.jpg", alt: "Pool (alternate view)" },
    { src: "/images/amenities/sitio-descanso-1.jpg", alt: "Lounge area" },
    { src: "/images/amenities/sitio-descanso-2.jpg", alt: "Relaxation area" },
    { src: "/images/amenities/sala-estar-1.jpg", alt: "Building lounge" },
    { src: "/images/amenities/sala-estar-2.jpg", alt: "Lounge (alternate view)" },
    { src: "/images/amenities/mesas-aire-libre-1.jpg", alt: "Outdoor tables" },
    { src: "/images/amenities/mesas-aire-libre-2.jpg", alt: "Outdoor seating area" },
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
  const closeButtonRef = useRef(null);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(Math.max(0, Math.min(index, images.length - 1)));
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = () => {
    setLightboxIndex((prev) =>
      lightboxImages.length === 0 ? 0 : (prev + 1) % lightboxImages.length
    );
  };

  const showPrev = () => {
    setLightboxIndex((prev) =>
      lightboxImages.length === 0
        ? 0
        : prev === 0
          ? lightboxImages.length - 1
          : prev - 1
    );
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
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
          >{content.departmentTitle}</h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-700">{content.departmentBody}</p>
        </div>

        {renderGrid(initialApartment, apartmentImages, true)}

        {!expandedApartment ? (
          <div>
            <button
              type="button"
              onClick={() => setExpandedApartment(true)}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
            >{content.showMore}</button>
          </div>
        ) : remainingApartment.length > 0 ? (
          renderGrid(remainingApartment, apartmentImages, true)
        ) : null}
      </section>

      <section
        aria-labelledby="gallery-amenities-title"
        className="space-y-6 rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
      >
        <div className="space-y-3">
          <h3
            id="gallery-amenities-title"
            className="text-xl font-semibold text-neutral-900 sm:text-2xl"
          >
            {content.amenitiesTitle}
          </h3>
          <p className="max-w-2xl text-base leading-7 text-neutral-700">
            {content.amenitiesBody}
          </p>
          <ul className="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2 no-grid-hover">
            <li>{content.amenitiesList[0]}</li>
            <li>{content.amenitiesList[1]}</li>
            <li>{content.amenitiesList[2]}</li>
            <li>{content.amenitiesList[3]}</li>
            <li>{content.amenitiesList[4]}</li>
            <li>{content.amenitiesList[5]}</li>
            <li>{content.amenitiesList[6]}</li>
          </ul>
        </div>

        {renderGrid(initialAmenities, amenitiesImages, true)}

        {!expandedAmenities ? (
          <div>
            <button
              type="button"
              onClick={() => setExpandedAmenities(true)}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
            >{content.showMore}</button>
          </div>
        ) : remainingAmenities.length > 0 ? (
          renderGrid(remainingAmenities, amenitiesImages, true)
        ) : null}
      </section>

      {lightboxOpen && currentImage ? (
        <div
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/80 p-4 pointer-events-auto"
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
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm pointer-events-auto"
              aria-label={content.lightboxClose}
              ref={closeButtonRef}
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
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm pointer-events-auto"
                  aria-label={content.lightboxPrev}
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
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm pointer-events-auto"
                  aria-label={content.lightboxNext}
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
              className="relative z-0 max-h-[90vh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
