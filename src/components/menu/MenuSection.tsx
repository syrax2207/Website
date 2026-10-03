import React, { useState, useMemo } from 'react';
import { Container, Section } from '../layout';
import { SectionHeading } from '../ui/SectionHeading';
import { MenuCard } from './MenuCard';
import { MenuFilter } from './MenuFilter';
import { MenuItemModal } from './MenuItemModal';
import { menuItems, MENU_CATEGORIES } from '../../data/menu';
import { MenuItem, MenuCategory } from '../../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

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

  const handleSelectItem = (item: MenuItem, element: HTMLElement) => {
    setSelectedItem(item);
    setTriggerElement(element);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <Section id="menu" background="oat" className="scroll-mt-20">
      <Container size="normal">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Our Craft Offerings"
            title="Handcrafted Coffee &amp; Fresh Bakes"
            subtitle="Browse our morning beverages and artisanal bakery selections. Select any item to view flavor profiles, artisanal craft methods, and preparation details."
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onSelect={handleSelectItem}
            />
          ))}
        </div>

        {/* Informative Disclaimer Note */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-espresso/60 leading-relaxed bg-cream/70 py-3.5 px-6 rounded-xl border border-oat">
            <strong>Note:</strong> Opening menu pricing, seasonal single-origin roasts, and daily bake selections will be
            published at our grand opening. Select any card above to explore its flavor profile.
          </p>
        </div>
      </Container>

      {/* Detailed Modal */}
      <MenuItemModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={handleCloseModal}
        triggerElement={triggerElement}
      />
    </Section>
  );
};
