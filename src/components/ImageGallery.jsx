import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/**
 * Auto-rotating image gallery for article and event detail pages.
 * Pass image paths as strings, or objects: { src, alt }.
 */
export default function ImageGallery({ images = [], title = "", interval = 4500 }) {
  const slides = images
    .map((image) => typeof image === "string" ? { src: image, alt: title } : image)
    .filter((image) => image?.src);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setActive(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length < 2 || paused) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [slides.length, paused, interval]);

  if (!slides.length) return null;

  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#E5EEF6]"
      aria-label="Image gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] max-h-[600px] min-h-[220px] w-full">
        {slides.map((slide, index) => (
          <img
            key={`${slide.src}-${index}`}
            src={slide.src}
            alt={slide.alt || title}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ))}
        {slides.length > 1 && (
          <>
            <button type="button" onClick={previous} aria-label="Previous image" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123B64] shadow-md transition hover:bg-white">
              <ChevronLeft size={22} />
            </button>
            <button type="button" onClick={next} aria-label="Next image" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123B64] shadow-md transition hover:bg-white">
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-[#123B64]/75 px-3 py-2 text-white">
              <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>
                {paused ? <Play size={14} /> : <Pause size={14} />}
              </button>
              <span className="text-xs font-semibold tabular-nums">{active + 1} / {slides.length}</span>
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((slide, index) => (
                <button key={`${slide.src}-dot-${index}`} type="button" onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`} className={`h-2 rounded-full transition-all ${index === active ? "w-6 bg-white" : "w-2 bg-white/65 hover:bg-white"}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
