"use client";

import { useMemo, useState } from "react";

export default function GallerySection() {
  const images = useMemo(
    () => [
      { label: "Sala", size: "main" },
      { label: "Recámara principal", size: "secondary" },
      { label: "Cocina", size: "secondary" },
      { label: "Área común", size: "secondary" },
      { label: "Vista exterior", size: "secondary" },
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(null);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <section
      aria-labelledby="gallery-department-title"
      className="space-y-6 rounded-2xl bg-white p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] sm:p-8"
    >
      <div className="space-y-3">
        <h2
          id="gallery-department-title"
          className="text-2xl font-semibold text-neutral-900"
        >
          Galería del departamento
        </h2>
        <p className="text-base leading-7 text-neutral-700">
          Publicaremos fotografías reales del departamento una vez finalizada la
          sesión fotográfica. Mostramos únicamente imágenes reales para mantener
          total transparencia.
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
              Galería en actualización · Publicaremos únicamente fotos reales
            </span>
          </div>
          {images.slice(0, 6).map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative h-44 overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_4px_12px_rgba(0,0,0,0.06)] sm:h-48"
              aria-label={`Abrir imagen: ${item.label}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-200" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-700">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada: ${activeImage.label}`}
        >
          <div className="relative w-full max-w-3xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-10 right-0 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm"
            >
              Cerrar
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
              <div className="absolute inset-0 bg-neutral-200/80" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-700">
                {activeImage.label}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
