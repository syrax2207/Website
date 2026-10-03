import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { CAFE_IMAGES } from '../../data/images';

export const Showcase: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const images = CAFE_IMAGES.showcase;

  const activeImage = activeImageIndex !== null ? images[activeImageIndex] : null;

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : images.length - 1
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, [activeImageIndex, images.length]);

  return (
    <Section id="showcase" background="cream" className="scroll-mt-20 border-b border-oat/70">
      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow="Inside Bean &amp; Bite"
          title="Café Atmosphere &amp; Daily Rhythm"
          subtitle="A tranquil, sunlit neighbourhood retreat designed for slow mornings, quiet work sessions, and genuine conversations."
        />

        {/* Responsive 6-Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <figure
              key={item.id}
              tabIndex={0}
              role="button"
              aria-label={`View enlarged photo: ${item.description}`}
              onClick={() => setActiveImageIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImageIndex(index);
                }
              }}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-oat hover:border-coffee/40 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee select-none"
            >
              <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-oat/40">
                <img
                  src={item.url}
                  alt={item.alt}
                  width={600}
                  height={480}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-espresso/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/95 text-coffee text-xs font-semibold shadow-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Image</span>
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-cream/90 backdrop-blur-xs text-coffee px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase border border-oat/70 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-coffee" aria-hidden="true" />
                  <span>Atmosphere</span>
                </div>
              </div>

              <figcaption className="p-4 flex-1 flex flex-col justify-between">
                <p className="font-serif text-sm font-semibold text-espresso mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-[11px] text-espresso/60 pt-2 border-t border-oat/60 font-sans">
                  <span>Photo: {item.photographer}</span>
                  <span className="italic">Unsplash</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Editorial Transparency Note */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-espresso/65 leading-relaxed bg-oat/50 py-3 px-5 rounded-xl border border-oat inline-flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-coffee shrink-0" aria-hidden="true" />
            <span>
              Editorial stock imagery illustrative of our coffee shop atmosphere. Official venue photography will debut at our grand opening.
            </span>
          </p>
        </div>
      </Container>

      {/* Accessible Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveImageIndex(null);
            }
          }}
        >
          <div className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl border border-oat flex flex-col max-h-[92vh]">
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-oat/80 bg-cream">
              <span className="font-sans text-xs uppercase tracking-wider text-coffee font-semibold flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Gallery Preview ({activeImageIndex! + 1} of {images.length})</span>
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close enlarged photo view"
                className="w-9 h-9 rounded-full bg-oat text-espresso hover:text-coffee flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image Viewport */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-espresso flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Navigation Buttons */}
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null ? (prev - 1 + images.length) % images.length : 0
                  )
                }
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 hover:bg-cream text-espresso flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null ? (prev + 1) % images.length : 0
                  )
                }
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 hover:bg-cream text-espresso flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Attribution Footer */}
            <div className="p-5 sm:p-6 bg-cream border-t border-oat/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="font-serif text-base font-bold text-espresso mb-1">
                  {activeImage.description}
                </p>
                <p className="font-sans text-espresso/70">
                  {activeImage.alt}
                </p>
              </div>

              <div className="shrink-0 font-sans text-espresso/60 text-right sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0">
                <span className="block font-medium text-espresso">
                  Photo by {activeImage.photographer}
                </span>
                <span className="italic">Unsplash Commercial Licence</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
