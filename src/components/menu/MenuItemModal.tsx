import React, { useEffect, useRef, useState } from 'react';
import { X, Coffee, Cookie, Sparkles, AlertCircle, ChefHat } from 'lucide-react';
import { MenuItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface MenuItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({
  item,
  isOpen,
  onClose,
  triggerElement,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [imageError, setImageError] = useState(false);

  // Reset image error state when item changes
  useEffect(() => {
    setImageError(false);
  }, [item?.id]);

  // Handle Escape key & Focus management
  useEffect(() => {
    if (!isOpen) return;

    // Trap focus inside modal
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Lock background scrolling
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
      // Restore focus to trigger element
      triggerElement?.focus();
    };
  }, [isOpen, onClose, triggerElement]);

  if (!isOpen || !item) return null;

  const isDrink = item.category === 'Drinks';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-espresso/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-hidden={!isOpen}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-item-title"
        aria-describedby="modal-item-desc"
        className="relative w-full max-w-2xl bg-cream rounded-3xl shadow-2xl border border-oat overflow-hidden flex flex-col max-h-[90vh] my-auto animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Sticky Header with Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={`Close details for ${item.name}`}
            className="w-10 h-10 rounded-full bg-cream/90 hover:bg-oat text-espresso hover:text-coffee border border-oat/80 flex items-center justify-center shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee cursor-pointer transition-colors duration-150"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto">
          {/* Top Visual Area */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-oat/50 overflow-hidden">
            {item.image && !imageError ? (
              <img
                src={item.image.url}
                alt={item.image.alt}
                width={800}
                height={500}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-oat/60 text-coffee p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center mb-3 shadow-xs">
                  {isDrink ? (
                    <Coffee className="w-8 h-8" />
                  ) : (
                    <Cookie className="w-8 h-8" />
                  )}
                </div>
                <span className="font-serif text-lg font-bold text-espresso">
                  {item.name}
                </span>
                <span className="font-sans text-xs text-coffee/80 mt-1">
                  Artisanal {item.category} Craft
                </span>
              </div>
            )}

            {/* Badges Overlay */}
            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
              <Badge variant={isDrink ? 'sage' : 'default'} size="md" className="shadow-xs backdrop-blur-xs">
                {item.category}
              </Badge>
              {item.dietaryInfo?.map((diet) => (
                <Badge key={diet} variant="espresso" size="md" className="shadow-xs">
                  {diet}
                </Badge>
              ))}
            </div>

            {/* Photo credit note if available */}
            {item.image?.photographer && (
              <div className="absolute bottom-4 right-4 bg-espresso/70 text-cream/90 text-[10px] px-2 py-0.5 rounded-md font-sans">
                Photo: {item.image.photographer} (Unsplash)
              </div>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                <h2
                  id="modal-item-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-espresso tracking-tight"
                >
                  {item.name}
                </h2>
                <span className="font-sans text-sm font-semibold text-coffee bg-oat/80 px-3 py-1 rounded-full border border-oat">
                  {item.price ? `$${item.price.toFixed(2)}` : 'Opening Price TBA'}
                </span>
              </div>

              <p
                id="modal-item-desc"
                className="font-sans text-base sm:text-lg text-espresso/80 leading-relaxed pt-1"
              >
                {item.description || item.shortDescription}
              </p>
            </div>

            {/* Taste Profile Tags */}
            {item.tasteProfile && item.tasteProfile.length > 0 && (
              <div className="p-4 rounded-2xl bg-oat/40 border border-oat">
                <span className="text-xs font-semibold uppercase tracking-wider text-coffee flex items-center gap-1.5 mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  Taste &amp; Character Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tasteProfile.map((note) => (
                    <span
                      key={note}
                      className="font-sans text-xs bg-cream text-espresso px-3 py-1 rounded-lg border border-oat font-medium shadow-xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Preparation / Craft Note */}
            {item.prepNotes && (
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-cream border border-oat">
                <ChefHat className="w-5 h-5 text-coffee shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs font-sans leading-relaxed text-espresso/80">
                  <span className="font-semibold text-espresso block mb-0.5">
                    Artisanal Craft Method
                  </span>
                  {item.prepNotes}
                </div>
              </div>
            )}

            {/* Informative Disclaimer */}
            <div className="p-4 rounded-xl bg-oat/30 border border-oat/70 flex items-start gap-2.5 text-xs text-espresso/70 font-sans">
              <AlertCircle className="w-4 h-4 text-coffee shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong>Kitchen &amp; Allergen Notice:</strong> Official dietary certifications,
                confirmed ingredient specifications, and opening prices will be published at our grand opening.
                Please speak with our head barista regarding any specific sensitivities.
              </p>
            </div>

            {/* Footer action */}
            <div className="pt-2 flex justify-end">
              <Button variant="secondary" size="md" onClick={onClose}>
                Back to Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
