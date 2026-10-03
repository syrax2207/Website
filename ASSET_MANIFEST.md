# Asset Manifest

## Rules

Track every image, logo, font and other third-party asset used by the
website. Record where it came from, who owns it, licence/permission,
attribution requirements, intended use and whether it is approved for
production.

Do not use Google Images downloads or random hotlinked image URLs. Do
not present AI or stock imagery as real photos of the business, its
staff or products.

## Expected folders

``` text
public/
  assets/
    brand/
    hero/
    cafe/
    menu/
    brunch/
```

## Asset inventory

  --------------------------------------------------------------------------------------
  Asset             Expected location                Status            Notes
  ----------------- -------------------------------- ----------------- -----------------
  Primary logo SVG  `public/assets/brand/logo.svg`   Awaiting client   Verify it opens
                                                     file              and has
                                                                       transparent/no
                                                                       unwanted
                                                                       background

  Logo PNG          `public/assets/brand/logo.png`   Awaiting client   Prefer high
                                                     file              resolution and
                                                                       transparency

  Hero image        `public/assets/hero/`            Awaiting approved Could use
                                                     image             licensed
                                                                       temporary
                                                                       placeholder
                                                                       during mockup

  Café interior     `public/assets/cafe/`            Awaiting          Do not imply a
                                                     client/approved   stock image is
                                                     image             the actual shop

  Barista/team      `public/assets/cafe/`            Awaiting          Confirm
                                                     client/approved   permission from
                                                     image             identifiable
                                                                       people

  Coffee products   `public/assets/menu/`            Awaiting          Match image to
                                                     client/approved   correct item only
                                                     image             when confirmed

  Bakery/brunch     `public/assets/brunch/`          Awaiting          Avoid inventing
                                                     client/approved   menu-item photo
                                                     image             mappings
  --------------------------------------------------------------------------------------

## Asset source log

For each non-client asset, add: - Filename: - Creator/source URL: -
Download date: - Licence name and URL: - Attribution required: -
Commercial use permitted: - Modifications permitted: - Intended
placement: - Production approved (yes/no):

- **Hero Ambient Café**:
  - Source URL: `https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb`
  - Photographer: Roman Bozhko (`https://unsplash.com/@rbozhko`)
  - Licence: Unsplash Free Commercial Licence
  - Attribution: Recommended; provided in code & UI
  - Intended placement: `Hero.tsx`
  - Production approved: Temporary mockup only; to be replaced with official café photo.

- **Coffee Experience (Artisanal Whole Beans & Brew Equipment)**:
  - Source URL: `https://images.unsplash.com/photo-1447933601403-0c6688de566e`
  - Photographer: Mike Kenneally (`https://unsplash.com/@mikekenneally`)
  - Licence: Unsplash Free Commercial Licence
  - Attribution: Provided in manifest & code
  - Intended placement: `CoffeeExperience.tsx`
  - Production approved: Temporary mockup only.

- **Bakery Craft (Fresh Morning Bakes)**:
  - Source URL: `https://images.unsplash.com/photo-1509440159596-0249088772ff`
  - Photographer: Mae Mu (`https://unsplash.com/@itsmaemu`)
  - Licence: Unsplash Free Commercial Licence
  - Attribution: Provided in manifest & code
  - Intended placement: `BakerySection.tsx`
  - Production approved: Temporary mockup only.

- **Story & Space (Sunlit Café Seating)**:
  - Source URL: `https://images.unsplash.com/photo-1517256064527-09c73fc73e38`
  - Photographer: Petr Sevcik (`https://unsplash.com/@petrsevcik`)
  - Licence: Unsplash Free Commercial Licence
  - Attribution: Provided in manifest & code
  - Intended placement: `About.tsx`
  - Production approved: Temporary mockup only.

- **Showcase Gallery (6 Atmosphere Moments with Lightbox)**:
  1. *Cozy Interior Workspace*: Photo by Daiki Aizawa (`https://unsplash.com/photo-1554118811-1e0d58224f24`)
  2. *Espresso Workstation Counter*: Photo by Demi DeHerrera (`https://unsplash.com/photo-1442512595331-e89e73853f31`)
  3. *Handcrafted Espresso*: Photo by Fahmi Fakhrudin (`https://unsplash.com/photo-1514432324607-a09d9b4aefdd`)
  4. *Morning Bakery Display*: Photo by Jennifer Pallian (`https://unsplash.com/photo-1555507036-ab1f4038808a`)
  5. *Pour-Over Brewing*: Photo by Nathan Dumlao (`https://unsplash.com/photo-1495474472287-4d71bcdd2085`)
  6. *Tabletop Coffee & Notebook*: Photo by Toa Heftiba (`https://unsplash.com/photo-1497636577773-f1231844b336`)
  - Licence: Unsplash Free Commercial Licence
  - Intended placement: `Showcase.tsx`
  - Production approved: Temporary mockup photography; will debut official photos at opening.

- **Menu Item Imagery (11 items)**:
  - Sources: Unsplash Free Commercial Licence
  - Photographers: Demi DeHerrera (Espresso, Cold Brew), Gerson Cifuentes (Americano), Tabitha Turner (Oat Latte), Matcha & CO (Matcha Latte), Massimo Rinaldi (Loose-Leaf Tea), Jennifer Pallian (Almond Croissant), Brenda Godinez (Avocado Toast), Monika Grabkowska (Cinnamon Roll), Mae Mu (Blueberry Scone), Eiliv Aceron (Vegan Muffin).
  - Intended placement: `src/data/menu.ts`, `MenuCard.tsx`, `MenuItemModal.tsx`
  - Production approved: Temporary mockup photography; to be replaced with confirmed client food photography upon launch.

## Temporary asset policy

Temporary assets must be clearly labelled in the source code or
manifest. Remove or replace them before launch if they could mislead
visitors. AI-generated images may be used for design exploration/mockups
only unless the owner explicitly approves their use and they are not
represented as documentary photos.

## Final checks

-   [ ] Correct file format and dimensions.
-   [ ] No broken paths.
-   [ ] Optimised file size.
-   [ ] Appropriate crop on mobile and desktop.
-   [ ] Alt text added or empty alt for decorative images.
-   [ ] Rights/permissions documented.
-   [ ] Owner approval recorded where required.
