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

  // Coffee Experience: Focused craftsmanship and single-origin coffee
  coffeeExperience: {
    id: 'coffee-craft',
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Artisanal single-origin whole coffee beans beside handcrafted pour-over brewing kettle',
    photographer: 'Mike Kenneally',
    photographerUrl: 'https://unsplash.com/@mikekenneally',
    description: 'Specialty coffee beans and careful brewing presentation',
  },

  // Bakery Showcase: Golden bakes and morning pastries
  bakeryHero: {
    id: 'bakery-craft',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    alt: 'Golden flaky sourdough croissants and fresh morning pastries on parchment paper',
    photographer: 'Mae Mu',
    photographerUrl: 'https://unsplash.com/@itsmaemu',
    description: 'Fresh bakery pastry craft for Bakery section',
  },

  // Story: Brand philosophy and community space
  story: {
    id: 'story-bakery',
    url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm, sunlit café seating area with natural wood tables inviting conversation',
    photographer: 'Petr Sevcik',
    photographerUrl: 'https://unsplash.com/@petrsevcik',
    description: 'Welcoming neighbourhood seating atmosphere for About/Story section',
  },

  // Showcase Gallery: 6 curated interior & atmosphere moments
  showcase: [
    {
      id: 'showcase-interior',
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      alt: 'Bright, quiet café corner with comfortable wooden tables and natural sunlight',
      photographer: 'Daiki Aizawa',
      photographerUrl: 'https://unsplash.com/@daikiaizawa',
      description: 'Cozy seating and workspace corner with natural morning light',
    },
    {
      id: 'showcase-counter',
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
      alt: 'Warm wooden café service counter with espresso machinery and clean workstation',
      photographer: 'Demi DeHerrera',
      photographerUrl: 'https://unsplash.com/@demi_deherrera',
      description: 'Handcrafted espresso workstation and coffee preparation counter',
    },
    {
      id: 'showcase-espresso',
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      alt: 'Artisanal espresso with delicate latte art served in a ceramic cup',
      photographer: 'Fahmi Fakhrudin',
      photographerUrl: 'https://unsplash.com/@fahmifkr',
      description: 'Calibrated espresso extraction with silky micro-foamed latte art',
    },
    {
      id: 'showcase-pastries',
      url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      alt: 'Freshly baked morning bakery goods on display including cinnamon rolls and berry scones',
      photographer: 'Jennifer Pallian',
      photographerUrl: 'https://unsplash.com/@foodess',
      description: 'Daily morning bake selection displayed warm from the oven',
    },
    {
      id: 'showcase-pourover',
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      alt: 'Barista carefully brewing a single-origin pour-over coffee with a gooseneck kettle',
      photographer: 'Nathan Dumlao',
      photographerUrl: 'https://unsplash.com/@nate_dumlao',
      description: 'Slow-drip single-origin pour-over brewing station',
    },
    {
      id: 'showcase-table',
      url: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80',
      alt: 'Morning coffee cup and open notebook on a rustic café table',
      photographer: 'Toa Heftiba',
      photographerUrl: 'https://unsplash.com/@heftiba',
      description: 'Comfortable table setting for morning reading, journaling, or conversation',
    },
  ],
} as const;
