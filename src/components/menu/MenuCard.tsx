import React, { useState } from 'react';
import { Coffee, Cookie, ArrowUpRight, Sparkles } from 'lucide-react';
import { MenuItem } from '../../types';
import { Badge } from '../ui/Badge';

export interface MenuCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem, triggerElement: HTMLElement) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelect }) => {
  const [imageError, setImageError] = useState(false);
  const isDrink = item.category === 'Drinks';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onSelect(item, e.currentTarget);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(item, e.currentTarget);
    }
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-label={`View details for ${item.name} (${item.category})`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="group bg-cream rounded-2xl overflow-hidden border border-oat hover:border-coffee/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 select-none"
    >
      <div>
        {/* Consistent Image Container */}
        <div className="relative aspect-[16/10] w-full bg-oat/50 overflow-hidden">
          {item.image && !imageError ? (
            <img
              src={item.image.url}
              alt={item.image.alt}
              width={640}
              height={400}
              onError={() => setImageError(true)}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-oat/60 text-coffee p-4 text-center">
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-2 shadow-xs group-hover:bg-coffee group-hover:text-cream transition-colors duration-200">
                {isDrink ? <Coffee className="w-6 h-6" /> : <Cookie className="w-6 h-6" />}
              </div>
              <span className="font-serif text-sm font-semibold text-espresso">
                {item.name}
              </span>
            </div>
          )}

          {/* Category Pill Tag */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <Badge
              variant={isDrink ? 'sage' : 'default'}
              size="sm"
              className="shadow-xs backdrop-blur-xs bg-cream/90"
            >
              {item.category}
            </Badge>
          </div>

          {/* Quick Details indicator on hover */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-cream/95 text-coffee p-1.5 rounded-full shadow-xs">
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-coffee transition-colors leading-snug">
              {item.name}
            </h3>
            {item.tasteProfile && item.tasteProfile.length > 0 && (
              <span
                className="shrink-0 text-coffee/60 group-hover:text-coffee transition-colors"
                title={item.tasteProfile.join(', ')}
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
              </span>
            )}
          </div>

          <p className="font-sans text-xs sm:text-sm text-espresso/75 leading-relaxed line-clamp-2">
            {item.shortDescription || item.description}
          </p>
        </div>
      </div>

      {/* Card Footer / View Details Trigger */}
      <div className="px-5 sm:px-6 pb-5 pt-3.5 border-t border-oat/70 flex items-center justify-between text-xs text-espresso/70">
        <span className="italic font-sans text-espresso/60">
          {isDrink ? 'Handcrafted to order' : 'Freshly baked daily'}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-oat/90 text-coffee group-hover:bg-coffee group-hover:text-cream font-medium transition-colors duration-150 shadow-2xs">
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
};
