import React from 'react';
import { Coffee, Cookie } from 'lucide-react';
import { MenuItem } from '../../types';
import { Badge } from '../ui/Badge';

export interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const isDrink = item.category === 'Drinks';

  return (
    <article
      className="group bg-cream rounded-2xl p-5 sm:p-6 border border-oat hover:border-coffee/40 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
      aria-label={`${item.name} (${item.category})`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl bg-oat/70 text-coffee flex items-center justify-center group-hover:bg-coffee group-hover:text-cream transition-colors duration-200"
            aria-hidden="true"
          >
            {isDrink ? (
              <Coffee className="w-5 h-5" />
            ) : (
              <Cookie className="w-5 h-5" />
            )}
          </div>

          <Badge variant={isDrink ? 'sage' : 'default'} size="sm">
            {item.category}
          </Badge>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-coffee transition-colors leading-snug">
          {item.name}
        </h3>
      </div>

      <div className="mt-4 pt-3.5 border-t border-oat/60 flex items-center justify-between text-xs text-espresso/60">
        <span className="italic font-sans">
          {isDrink ? 'Handcrafted to order' : 'Freshly baked daily'}
        </span>
        <span className="text-coffee font-medium">Seasonal Craft</span>
      </div>
    </article>
  );
};
