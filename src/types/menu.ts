export type MenuCategory = 'All' | 'Drinks' | 'Bites';

export interface MenuItemImage {
  readonly url: string;
  readonly alt: string;
  readonly photographer?: string;
  readonly photographerUrl?: string;
}

export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly category: 'Drinks' | 'Bites';
  readonly price?: number | null;
  readonly shortDescription?: string;
  readonly description?: string;
  readonly tasteProfile?: readonly string[];
  readonly prepNotes?: string;
  readonly ingredients?: readonly string[];
  readonly allergens?: readonly string[];
  readonly dietaryInfo?: readonly string[];
  readonly image?: MenuItemImage;
}
