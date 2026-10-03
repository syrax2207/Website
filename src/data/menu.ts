import { MenuItem, MenuCategory } from '../types';

export const MENU_CATEGORIES: readonly MenuCategory[] = ['All', 'Drinks', 'Bites'] as const;

/**
 * Supplied Draft Menu Items (11 items)
 * Note: Prices, detailed descriptions, allergens, and photos are not yet
 * supplied by the owner. Under PRD rules, do not invent prices or guarantees.
 */
export const menuItems: readonly MenuItem[] = [
  // Drinks (6)
  {
    id: 'drink-espresso',
    name: 'Espresso',
    category: 'Drinks',
  },
  {
    id: 'drink-americano',
    name: 'Americano',
    category: 'Drinks',
  },
  {
    id: 'drink-oat-latte',
    name: 'Oat Latte',
    category: 'Drinks',
  },
  {
    id: 'drink-caramel-cold-brew',
    name: 'Caramel Cold Brew',
    category: 'Drinks',
  },
  {
    id: 'drink-matcha-latte',
    name: 'Matcha Latte',
    category: 'Drinks',
  },
  {
    id: 'drink-loose-leaf-teas',
    name: 'Loose-Leaf Teas',
    category: 'Drinks',
  },
  // Bites (5)
  {
    id: 'bite-almond-croissants',
    name: 'Almond Croissants',
    category: 'Bites',
  },
  {
    id: 'bite-avocado-sourdough-toast',
    name: 'Avocado Sourdough Toast',
    category: 'Bites',
  },
  {
    id: 'bite-cinnamon-rolls',
    name: 'Cinnamon Rolls',
    category: 'Bites',
  },
  {
    id: 'bite-blueberry-scones',
    name: 'Blueberry Scones',
    category: 'Bites',
  },
  {
    id: 'bite-vegan-muffins',
    name: 'Vegan Muffins',
    category: 'Bites',
  },
] as const;
