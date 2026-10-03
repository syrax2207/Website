# Product Requirements Document (PRD)

## Bean & Bite Coffee & Bakery --- One-Page Website

**Document status:** Draft for practice project\
**Source of truth:** This document\
**Important:** Business contact details, address, timezone, prices, menu
descriptions, logo and photography must be confirmed by the business
owner before publication.

## 1. Project overview

Create a polished, responsive, single-page website for Bean & Bite
Coffee & Bakery. The website should communicate the café's atmosphere,
introduce its coffee and bakery menu, and make it easy for visitors to
call, message, find the shop and check opening hours.

**Business name:** Bean & Bite Coffee & Bakery\
**Owner/contact name supplied:** Alex Rivera (Founder)\
**Tagline:** "Fresh Bakes, Honest Beans, Warm Conversations."\
**Positioning:** Artisanal neighbourhood coffee shop and bakery.

The business description supplied says the café specialises in
single-origin pour-over coffees, handcrafted espresso drinks, and
freshly baked sourdough pastries and cakes each morning. Its intended
audiences include morning commuters, remote workers seeking a quiet desk
and Wi-Fi, and weekend brunch visitors.

## 2. Project goals

-   Establish a memorable, warm and trustworthy online presence.
-   Make the menu easy to browse on phones and desktop screens.
-   Clearly display opening hours and location information.
-   Provide obvious contact, call, WhatsApp and directions actions where
    details are verified.
-   Load quickly, be accessible, and be easy for a beginner developer to
    maintain.
-   Keep business information and menu content centralised so updates do
    not require editing many components.

## 3. Out of scope for version 1

-   Online ordering, checkout, payments or delivery integration.
-   Customer accounts, authentication or a database.
-   Reservation system.
-   Admin dashboard or CMS.
-   Claims about Wi-Fi speed, ingredients, allergens, dietary
    suitability, sourcing certifications or product availability unless
    the owner confirms them.
-   Fake testimonials, ratings, awards, opening promotions or customer
    counts.

## 4. Audience and user needs

### Morning commuters

Need to understand what is served, when the café opens, and how to get
there quickly.

### Remote workers

Need clear information about the atmosphere and Wi-Fi. Only state Wi-Fi
availability after owner confirmation; do not promise speed or workspace
availability without confirmation.

### Weekend brunch visitors

Need to see food options, weekend hours, location and contact
information.

## 5. Supplied business information --- confirmation required

  ---------------------------------------------------------------------------
  Field                   Supplied value              Publication status
  ----------------------- --------------------------- -----------------------
  Business name           Bean & Bite Coffee & Bakery Confirm spelling

  Owner                   Alex Rivera, Founder        Confirm

  Tagline                 Fresh Bakes, Honest Beans,  Confirm
                          Warm Conversations.         

  Phone / WhatsApp        +1 (555) 019-2834           **Unverified demo
                                                      value; do not publish
                                                      as working contact**

  Email                   hello@beanandbitecafe.com   Verify ownership and
                                                      deliverability

  Address                 142 Maplewood Avenue,       **Unverified; confirm
                          Downtown District,          exact address**
                          Cityville, NY 10001         

  Monday--Friday          7:00 AM--6:00 PM            Confirm

  Saturday--Sunday        8:00 AM--5:00 PM            Confirm

  Timezone                Not confirmed               Confirm from actual
                                                      business location

  Logo and photos         Owner said high-resolution  Not yet supplied in
                          logo and photos are         this workspace
                          available                   
  ---------------------------------------------------------------------------

The supplied 555-style phone number and Cityville address may be
placeholders. Treat all supplied contact/location details as draft data
until the owner confirms them. Do not create a real directions link,
embedded map, LocalBusiness structured data, or live/open status based
on unverified location/timezone details.

## 6. Menu information supplied --- draft only

### Drinks

-   Espresso
-   Americano
-   Oat Latte
-   Caramel Cold Brew
-   Matcha Latte
-   Loose-Leaf Teas

### Bites

-   Almond Croissants
-   Avocado Sourdough Toast
-   Cinnamon Rolls
-   Blueberry Scones
-   Vegan Muffins

No prices, descriptions, allergens, dietary cross-contamination
information, sizes or item-to-photo mappings were supplied. Do not
invent these. Show item names only until the owner supplies approved
details. "Vegan Muffins" is a supplied menu name, but do not make
broader vegan/allergen guarantees.

## 7. Functional requirements

### FR-01 --- Navigation

-   Responsive navigation with logo/brand, section links and a clear
    contact action.
-   Mobile menu must open and close reliably, be keyboard accessible and
    close after selecting a section.
-   Anchor links should scroll to the correct section without hiding
    headings behind a sticky header.

### FR-02 --- Hero

-   Prominent café/bakery visual.
-   Display business name, approved tagline and concise introductory
    copy.
-   Include primary menu CTA and secondary visit/contact CTA.
-   Use a supplied, approved image or a clearly tracked temporary
    licensed/AI placeholder.

### FR-03 --- Highlights

-   Present a small set of supplied/confirmed selling points such as
    specialty coffee, fresh bakes and neighbourhood atmosphere.
-   Do not imply certifications, specific sourcing claims, Wi-Fi or
    daily availability beyond what the owner confirms.

### FR-04 --- About / story

-   Briefly explain the café concept using only supplied or
    owner-approved facts.
-   Avoid inventing founder biography, history, mission claims or origin
    stories.

### FR-05 --- Digital menu

-   Render menu items from a central data file.
-   Provide simple category filters. Proposed categories (Coffee, Cold
    Drinks, Tea, Bakery, Brunch) are provisional and must not be used to
    imply unprovided item details.
-   Provide an "All" option and a clear active state.
-   Ensure the filter works with mouse, touch and keyboard.
-   Do not show invented prices, descriptions, allergens or photos.

### FR-06 --- Opening hours

-   Display the owner-confirmed weekly hours.
-   Optional open/closed status may be added only after the actual
    timezone and hours are confirmed.
-   Correctly handle weekends, daylight-saving changes and boundary
    times.
-   Do not infer holiday/special hours. If special hours are unknown,
    avoid claiming the business is open on holidays.

### FR-07 --- Visit / location

-   Display only a verified address.
-   Add a directions link or map only after confirming the actual
    location.
-   Do not embed a map for the placeholder address.

### FR-08 --- Contact

-   Provide click-to-call and WhatsApp actions only for a verified,
    working phone number.
-   Provide an email link only after confirming the address.
-   Encode WhatsApp message text safely.
-   No forms that pretend to submit unless a real delivery endpoint is
    configured and tested.

### FR-09 --- Footer

-   Repeat approved brand details, navigation and verified contact
    information.
-   Include a sensible copyright line without inventing a founding year.

## 8. Design system

### Visual direction

Warm, cosy, modern-minimalist and neighbourhood-friendly. Use editorial
food photography, generous whitespace, clear hierarchy, subtle shadows
and restrained rounded corners. Cute hand-drawn iconography may be used
sparingly.

### Palette

-   Espresso: `#39251E`
-   Coffee: `#704832`
-   Oat beige: `#F3EBDD`
-   Muted sage: `#87947A`
-   Cream: `#FFFDF8`

### Typography

-   Headings: Playfair Display (or a visually similar available serif).
-   Body/UI: DM Sans (or a clean system sans-serif fallback).

### Avoid

-   Excessive gradients, glassmorphism, visual clutter, aggressive
    animations, tiny text and low-contrast beige-on-beige text.
-   Generic café clichés and mismatched imagery.
-   Making every section look like a separate card.

See `DESIGN_SYSTEM.md` for implementation details.

## 9. Technical approach

Preferred stack: - Vite - React - TypeScript - Tailwind CSS - Lucide
React icons - Motion for React only if needed; CSS transitions are
sufficient for most interactions.

Use compatible, currently supported package versions at setup time. If
the installed Antigravity environment recommends a different compatible
configuration, report the reason and ask before changing the agreed
stack.

No backend, database or authentication is required for version 1.

## 10. Suggested page structure

1.  Navbar
2.  Hero
3.  Highlights
4.  About / story
5.  Digital menu
6.  Signature favourites (optional; only after actual signature items
    are identified)
7.  Opening hours
8.  Visit / location
9.  Contact CTA
10. Footer
11. Mobile floating contact/directions action (only with verified
    details)

## 11. Content and asset rules

-   The client logo and photography have not yet been uploaded to the
    project.
-   Keep original assets in `public/assets/` and document source,
    licence/permission, attribution requirements and intended use in
    `ASSET_MANIFEST.md`.
-   Use client-owned assets only after receiving them and confirming
    permission.
-   Temporary stock images must come from a source whose licence permits
    the intended commercial use; record the exact source and licence. Do
    not download from Google Images or hotlink random images.
-   AI-generated images may be used as mockup placeholders, but must not
    be represented as actual photos of the café, staff or products.
-   Use descriptive filenames and meaningful alt text. Decorative images
    should have empty alt text.

## 12. Non-functional requirements

### Responsive behaviour

Test at 360, 390, 768, 1024 and 1440 CSS pixels. No horizontal overflow.
Touch targets should be comfortable and controls usable on small
screens.

### Accessibility

-   Semantic HTML landmarks and logical heading order.
-   Keyboard navigation and visible focus indicators.
-   Sufficient text/background contrast.
-   Accessible names for icon-only controls.
-   Meaningful image alt text.
-   Respect `prefers-reduced-motion`.
-   Filters and mobile navigation must expose state accessibly.

### Performance

-   Optimise and correctly size images; prefer modern formats where
    practical.
-   Lazy-load below-the-fold imagery.
-   Avoid unnecessary dependencies and heavy animation.
-   Measure real performance; initial targets are LCP ≤ 2.5 s, INP ≤ 200
    ms and CLS ≤ 0.1 under suitable field/lab conditions. Do not claim
    these targets are met without measurement.

### SEO

-   Unique title and meta description.
-   One clear H1.
-   Descriptive section headings and useful page copy.
-   Open Graph metadata.
-   Add LocalBusiness structured data only after all business details
    are verified. Never fabricate address, geo-coordinates, phone, price
    range or opening hours.

### Maintainability

-   Centralise business details and menu data.
-   Use reusable components and typed data.
-   Keep secrets out of source control.
-   Avoid duplicated business information across components.

## 13. Acceptance criteria

-   The page builds and runs without errors.
-   All required sections are present and responsive.
-   Menu filters work and render from central data.
-   Navigation and calls to action work.
-   Hours are displayed accurately; dynamic status is disabled until
    timezone and hours are verified.
-   Unverified contact/location information is not presented as real.
-   No invented prices, reviews, testimonials, awards or business
    claims.
-   Images have appropriate alt text and documented sources.
-   Keyboard, focus, contrast and reduced-motion checks are completed.
-   No horizontal overflow at agreed viewport sizes.
-   Documentation is updated when implementation decisions change.

## 14. Open questions for the owner

-   What is the verified address and timezone?
-   Is the phone number real and WhatsApp-enabled?
-   Is the email address monitored?
-   Are the supplied weekly hours current? Any holiday/special hours?
-   What are menu prices, descriptions and approved item photos?
-   Which items are signature favourites?
-   Is Wi-Fi available? Are remote-work seats/outlets available?
-   Are there approved brand story details or founder bio?
-   Are social media URLs available?
-   Are there any accessibility, language or legal requirements specific
    to the business?

## 15. Change control

`PRD.md` is the source of truth for requirements. If a requirement
changes: 1. Explain the proposed change and impact. 2. Ask for approval
if it changes scope, design direction, stack or business claims. 3.
Update this document and `CHANGELOG.md`. 4. Update `TASKS.md` and tests
where relevant.
