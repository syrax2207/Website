import React, { useRef } from 'react';
import { MenuCategory } from '../../types';

export interface MenuFilterProps {
  categories: readonly MenuCategory[];
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  itemCounts: Record<MenuCategory, number>;
}

export const MenuFilter: React.FC<MenuFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  itemCounts,
}) => {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let targetIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      targetIndex = (index + 1) % categories.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      targetIndex = (index - 1 + categories.length) % categories.length;
    } else if (event.key === 'Home') {
      event.preventDefault();
      targetIndex = 0;
    } else if (event.key === 'End') {
      event.preventDefault();
      targetIndex = categories.length - 1;
    }

    if (targetIndex !== index) {
      tabsRef.current[targetIndex]?.focus();
      onSelectCategory(categories[targetIndex]);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Filter menu by category"
      className="inline-flex p-1.5 rounded-2xl bg-cream border border-oat/90 shadow-xs max-w-full overflow-x-auto gap-1"
    >
      {categories.map((category, index) => {
        const isSelected = activeCategory === category;
        const count = itemCounts[category];

        return (
          <button
            key={category}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            id={`tab-${category.toLowerCase()}`}
            role="tab"
            type="button"
            aria-selected={isSelected}
            aria-controls="menu-items-grid"
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelectCategory(category)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`cursor-pointer whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 ${
              isSelected
                ? 'bg-coffee text-cream shadow-xs'
                : 'text-espresso/70 hover:text-espresso hover:bg-oat/50'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-mono leading-none ${
                isSelected
                  ? 'bg-cream/20 text-cream'
                  : 'bg-oat text-espresso/60'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
