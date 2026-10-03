import React, { useState, useMemo } from 'react';
import { Container, Section } from '../layout';
import { SectionHeading } from '../ui/SectionHeading';
import { MenuCard } from './MenuCard';
import { MenuFilter } from './MenuFilter';
import { menuItems, MENU_CATEGORIES } from '../../data/menu';
import { MenuCategory } from '../../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  const itemCounts = useMemo<Record<MenuCategory, number>>(() => {
    const drinksCount = menuItems.filter((i) => i.category === 'Drinks').length;
    const bitesCount = menuItems.filter((i) => i.category === 'Bites').length;
    return {
      All: menuItems.length,
      Drinks: drinksCount,
      Bites: bitesCount,
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="menu" background="oat" className="scroll-mt-20">
      <Container size="normal">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Our Craft Offerings"
            title="Handcrafted Coffee &amp; Fresh Bakes"
            subtitle="Browse our morning beverages and artisanal bakery selections. Everything is prepared fresh with honest ingredients and careful craft."
          />

          {/* Accessible Category Filters */}
          <div className="mb-10">
            <MenuFilter
              categories={MENU_CATEGORIES}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              itemCounts={itemCounts}
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div
          id="menu-items-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Informative Disclaimer Note */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-espresso/60 leading-relaxed bg-cream/60 py-3.5 px-6 rounded-xl border border-oat">
            <strong>Note:</strong> Menu pricing, seasonal roasts, and daily bake selections will be
            published upon our official grand opening. Please speak with our barista for any questions.
          </p>
        </div>
      </Container>
    </Section>
  );
};
