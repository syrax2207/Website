/**
 * Centralised Image Assets & Placeholders
 *
 * NOTE: As documented in PRD.md and ASSET_MANIFEST.md, official business
 * photographs and logos have not yet been provided by the client.
 * The following temporary editorial stock photos are sourced from Unsplash
 * under the Unsplash free commercial license.
 * Each asset is tracked in ASSET_MANIFEST.md for easy replacement.
 */

export interface StockImageAsset {
  readonly id: string;
  readonly url: string;
  readonly alt: string;
  readonly photographer: string;
  readonly photographerUrl: string;
  readonly description: string;
}

export const CAFE_IMAGES = {
  // Hero: Warm, artisanal coffee shop atmosphere
  hero: {
    id: 'hero-cafe',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
    alt: 'Warm and inviting artisan coffee shop counter with warm pendant lighting and wooden details',
    photographer: 'Roman Bozhko',
    photographerUrl: 'https://unsplash.com/@rbozhko',
    description: 'Temporary hero image demonstrating warm café ambience',
  },

  // Story: Fresh artisanal bakery and croissants
  story: {
    id: 'story-bakery',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    alt: 'Golden flaky croissants and morning pastries freshly baked on parchment paper',
    photographer: 'Mae Mu',
    photographerUrl: 'https://unsplash.com/@itsmaemu',
    description: 'Fresh bakery pastry craft for About/Story section',
  },

  // Showcase Gallery (4 images)
  showcase: [
    {
      id: 'showcase-espresso',
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      alt: 'Artisanal espresso with delicate latte art served in a ceramic cup',
      photographer: 'Fahmi Fakhrudin',
      photographerUrl: 'https://unsplash.com/@fahmifkr',
      description: 'Handcrafted espresso drink presentation',
    },
    {
      id: 'showcase-pourover',
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      alt: 'Barista carefully brewing a single-origin pour-over coffee with a gooseneck kettle',
      photographer: 'Nathan Dumlao',
      photographerUrl: 'https://unsplash.com/@nate_dumlao',
      description: 'Single-origin pour-over brewing craft',
    },
    {
      id: 'showcase-pastries',
      url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      alt: 'Selection of fresh baked bakery goods including cinnamon rolls and berry pastries',
      photographer: 'Jennifer Pallian',
      photographerUrl: 'https://unsplash.com/@foodess',
      description: 'Artisanal morning bakes selection',
    },
    {
      id: 'showcase-space',
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      alt: 'Bright, quiet café corner with comfortable wooden tables and natural sunlight',
      photographer: 'Daiki Aizawa',
      photographerUrl: 'https://unsplash.com/@daikiaizawa',
      description: 'Quiet, welcoming seating space for morning visitors and remote work',
    },
  ],
} as const;
