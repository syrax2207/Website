import { MenuItem, MenuCategory } from '../types';

export const MENU_CATEGORIES: readonly MenuCategory[] = ['All', 'Drinks', 'Bites'] as const;

/**
 * Enhanced Draft Menu Items (11 items)
 * Note: Prices, detailed certified recipes, and allergen matrices are pending
 * official kitchen verification prior to grand opening.
 * Under PRD rules, descriptions and taste profiles are draft marketing notes.
 */
export const menuItems: readonly MenuItem[] = [
  // --- DRINKS (6) ---
  {
    id: 'drink-espresso',
    name: 'Espresso',
    category: 'Drinks',
    shortDescription: 'A rich, balanced double shot extracted with calibrated precision.',
    description:
      'Our signature double shot extracted from seasonally sourced, ethically farmed beans. Expect a dense hazelnut-toned crema with a balanced harmony of bittersweet chocolate and subtle stone fruit brightness.',
    tasteProfile: ['Dark Chocolate', 'Stone Fruit', 'Hazelnut Crema'],
    prepNotes: 'Calibrated double extraction under 9 bars of pressure',
    image: {
      url: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80',
      alt: 'Artisanal espresso with rich crema served in a dark ceramic cup',
      photographer: 'Demi DeHerrera',
      photographerUrl: 'https://unsplash.com/@demi_deherrera',
    },
  },
  {
    id: 'drink-americano',
    name: 'Americano',
    category: 'Drinks',
    shortDescription: 'Rich espresso lengthened with hot filtered water for clarity.',
    description:
      'Two freshly pulled shots of our signature house espresso poured gently over purified hot water. Lengthening the espresso preserves delicate aromatics and roasted sweetness in a smooth, unhurried cup.',
    tasteProfile: ['Clean Roasted', 'Nutty Cocoa', 'Mellow Finish'],
    prepNotes: 'Double espresso poured over temperature-controlled water',
    image: {
      url: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=80',
      alt: 'Freshly poured hot Americano black coffee in a rustic café ceramic mug',
      photographer: 'Gerson Cifuentes',
      photographerUrl: 'https://unsplash.com/@gersoncifuentes',
    },
  },
  {
    id: 'drink-oat-latte',
    name: 'Oat Latte',
    category: 'Drinks',
    shortDescription: 'Velvety steamed oat milk folded over balanced espresso.',
    description:
      'Rich espresso paired with velvety, micro-foamed barista-grade oat milk. Naturally sweet with a silky mouthfeel and crowned with delicate latte art, making it a beloved morning ritual.',
    tasteProfile: ['Creamy Oat', 'Toasted Graham', 'Gentle Cocoa'],
    dietaryInfo: ['Plant-Based Milk Standard'],
    prepNotes: 'Micro-foamed barista oat milk with gentle latte art',
    image: {
      url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
      alt: 'Creamy oat latte with delicate heart latte art in an earthenware cup',
      photographer: 'Tabitha Turner',
      photographerUrl: 'https://unsplash.com/@tabithaturner',
    },
  },
  {
    id: 'drink-caramel-cold-brew',
    name: 'Caramel Cold Brew',
    category: 'Drinks',
    shortDescription: 'Slow-steeped cold brew infused with delicate caramel notes.',
    description:
      'Coarsely ground beans steeped slowly in cold filtered water for sixteen hours. This patient brewing process extracts deep roasted cacao sweetness while virtually eliminating acidity, finished with subtle natural caramel notes.',
    tasteProfile: ['Silky Smooth', 'Warm Caramel', 'Low Acidity'],
    prepNotes: '16-hour slow cold steep in small batches',
    image: {
      url: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      alt: 'Iced caramel cold brew coffee served over clear ice blocks in a tall glass',
      photographer: 'Demi DeHerrera',
      photographerUrl: 'https://unsplash.com/@demi_deherrera',
    },
  },
  {
    id: 'drink-matcha-latte',
    name: 'Matcha Latte',
    category: 'Drinks',
    shortDescription: 'Stone-ground Japanese green tea whisked with silky milk.',
    description:
      'Ceremonial-grade Japanese shade-grown matcha carefully whisked to order with a bamboo chasen. Combined with your choice of silky steamed milk for an antioxidant-rich, earthy morning beverage with vibrant natural colour.',
    tasteProfile: ['Earthy Umami', 'Subtle Sweetness', 'Velvety Smooth'],
    prepNotes: 'Tradition-whisked to order with bamboo whisk',
    image: {
      url: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
      alt: 'Vibrant green matcha latte served in a minimalist ceramic cup with foam art',
      photographer: 'Matcha & CO',
      photographerUrl: 'https://unsplash.com/@matchaandco',
    },
  },
  {
    id: 'drink-loose-leaf-teas',
    name: 'Loose-Leaf Teas',
    category: 'Drinks',
    shortDescription: 'Carefully curated whole-leaf herbal and black tea infusions.',
    description:
      'A seasonal, rotating selection of single-estate black, green, and botanical herbal infusions. Steeping times and water temperatures are calibrated precisely to honour the nuance and therapeutic aromatics of each leaf.',
    tasteProfile: ['Aromatic Florals', 'Brisk Malt', 'Calming Botanicals'],
    prepNotes: 'Steeped at calibrated temperatures per varietal',
    image: {
      url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      alt: 'Freshly steeped amber loose-leaf tea in a clear glass teapot',
      photographer: 'Massimo Rinaldi',
      photographerUrl: 'https://unsplash.com/@massimorinaldi',
    },
  },

  // --- BITES (5) ---
  {
    id: 'bite-almond-croissants',
    name: 'Almond Croissants',
    category: 'Bites',
    shortDescription: 'Twice-baked flaky pastry filled with rich almond frangipane.',
    description:
      'Handcrafted with slow-fermented laminated sourdough pastry dough. Filled generously with aromatic almond frangipane cream, baked twice until deeply golden and flaky, and finished with toasted sliced almonds and powdered sugar.',
    tasteProfile: ['Toasted Almond', 'Butter Flakes', 'Vanilla Crème'],
    prepNotes: 'Twice-baked daily before dawn from sourdough lamination',
    image: {
      url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      alt: 'Golden flaky croissants topped with toasted sliced almonds on parchment paper',
      photographer: 'Jennifer Pallian',
      photographerUrl: 'https://unsplash.com/@foodess',
    },
  },
  {
    id: 'bite-avocado-sourdough-toast',
    name: 'Avocado Sourdough Toast',
    category: 'Bites',
    shortDescription: 'Crushed avocado on thick-cut toasted country sourdough.',
    description:
      'Thick-cut slices of our signature country sourdough loaf toasted crisp on the outside and tender within. Topped with seasoned crushed avocado, flaky Maldon sea salt, cracked black pepper, and a bright squeeze of lemon.',
    tasteProfile: ['Creamy Avocado', 'Tangy Sourdough', 'Zesty Citrus'],
    dietaryInfo: ['Vegetarian / Plant-Forward'],
    prepNotes: 'Sliced and seasoned to order on fresh sourdough',
    image: {
      url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
      alt: 'Toasted country sourdough bread topped with creamy crushed avocado and seasoning',
      photographer: 'Brenda Godinez',
      photographerUrl: 'https://unsplash.com/@cravethebenefits',
    },
  },
  {
    id: 'bite-cinnamon-rolls',
    name: 'Cinnamon Rolls',
    category: 'Bites',
    shortDescription: 'Warm, pillowy brioche swirled with aromatic Ceylon cinnamon.',
    description:
      'Enriched brioche dough rolled by hand with aromatic brown sugar, organic butter, and aromatic Ceylon cinnamon. Baked each morning until soft and tender, then glazed with a light vanilla bean drizzle.',
    tasteProfile: ['Ceylon Cinnamon', 'Caramelized Sugar', 'Vanilla Glaze'],
    prepNotes: 'Hand-rolled and baked warm every morning',
    image: {
      url: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
      alt: 'Freshly baked cinnamon rolls glazed with vanilla icing in a baking pan',
      photographer: 'Monika Grabkowska',
      photographerUrl: 'https://unsplash.com/@moniqa',
    },
  },
  {
    id: 'bite-blueberry-scones',
    name: 'Blueberry Scones',
    category: 'Bites',
    shortDescription: 'Tender, crumbly bakery scone bursting with sweet blueberries.',
    description:
      'A classic European-style cream scone mixed by hand with plump sweet blueberries and a hint of fresh lemon zest. Baked with crumbly golden edges and a tender centre, perfect alongside a hot pour-over or morning latte.',
    tasteProfile: ['Wild Berry', 'Buttery Crumb', 'Light Lemon Zest'],
    prepNotes: 'Hand-mixed and baked in small daily batches',
    image: {
      url: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
      alt: 'Rustic golden blueberry scone with wild berries and a crumbly golden crust',
      photographer: 'Mae Mu',
      photographerUrl: 'https://unsplash.com/@itsmaemu',
    },
  },
  {
    id: 'bite-vegan-muffins',
    name: 'Vegan Muffins',
    category: 'Bites',
    shortDescription: 'Wholesome, plant-based morning muffin made with orchard fruit.',
    description:
      'A moist, satisfying morning muffin crafted entirely without eggs or dairy. Folded with seasonal orchard fruits, toasted oats, and warm spices, finished with a crunchy raw sugar and oat crumble topping.',
    tasteProfile: ['Orchard Fruit', 'Toasted Oat', 'Gentle Spice'],
    dietaryInfo: ['100% Plant-Based / Vegan'],
    prepNotes: 'Daily small-batch bake without eggs or dairy',
    image: {
      url: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80',
      alt: 'Freshly baked blueberry muffins with golden oat crumble topping in bakery liners',
      photographer: 'Eiliv Aceron',
      photographerUrl: 'https://unsplash.com/@eilivaceron',
    },
  },
] as const;
