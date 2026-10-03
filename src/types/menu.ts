export type MenuCategory = 'All' | 'Drinks' | 'Bites';

export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly category: 'Drinks' | 'Bites';
  readonly price?: number | null;
  readonly description?: string | null;
  readonly dietaryInfo?: readonly string[];
}
