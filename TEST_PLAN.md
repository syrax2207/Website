# Test Plan --- Bean & Bite

## Test approach

Test incrementally after each feature, then run the full checklist
before handover. Record actual results; never claim a test passed if it
was not performed.

## Browsers and viewports

Where available, test current Chrome, Edge, Firefox and Safari. At
minimum, test the target browser used by the owner.

    Viewport width Typical device
  ---------------- ----------------
            360 px Small phone
            390 px Modern phone
            768 px Tablet
           1024 px Small laptop
           1440 px Desktop

## Functional tests

-   [ ] Logo/brand link returns to top.
-   [ ] Desktop navigation links reach correct sections.
-   [ ] Mobile menu opens, closes and closes after selecting a link.
-   [ ] Hero CTAs reach the intended section/action.
-   [ ] Menu category filters show the correct items.
-   [ ] Menu filter selected state is visible and accessible.
-   [ ] Phone action uses a verified number.
-   [ ] WhatsApp action opens the verified destination with correctly
    encoded text.
-   [ ] Email action opens the verified email address.
-   [ ] Directions/map uses a verified address only.
-   [ ] Hours match owner-approved schedule.
-   [ ] Dynamic open/closed status (if present) uses verified timezone
    and handles weekends/DST.
-   [ ] Footer links work.

## Responsive and visual tests

-   [ ] No horizontal page overflow at each viewport.
-   [ ] Navigation does not overlap hero content.
-   [ ] Text is readable and does not clip.
-   [ ] Images crop appropriately and do not distort.
-   [ ] Buttons and controls are easy to tap.
-   [ ] Sections have consistent spacing and alignment.
-   [ ] No unexpected layout shift while images load.

## Accessibility checks

-   [ ] Page uses semantic landmarks.
-   [ ] Heading levels are logical.
-   [ ] All interactive elements are keyboard reachable.
-   [ ] Focus indicator is visible.
-   [ ] Icon-only buttons have accessible names.
-   [ ] Images have appropriate alt text.
-   [ ] Colour contrast is checked.
-   [ ] Menu filters announce state appropriately.
-   [ ] Mobile menu exposes expanded/collapsed state.
-   [ ] Reduced-motion preference is respected.

## Technical checks

-   [ ] No console errors.
-   [ ] No broken network assets.
-   [ ] TypeScript check passes.
-   [ ] Lint passes if configured.
-   [ ] Production build passes.
-   [ ] Page title and meta description are present.
-   [ ] Structured data, if used, contains only verified facts.
-   [ ] No secrets or private credentials in source control.

## Performance checks

Measure using browser Lighthouse or an equivalent tool and record date,
device profile and results: - LCP target: ≤ 2.5 seconds - INP target: ≤
200 milliseconds - CLS target: ≤ 0.1

These are targets, not assumed results. Optimise large images, avoid
unnecessary scripts and lazy-load below-the-fold imagery.

## Test report template

-   Date:
-   Commit/version:
-   Browser/device:
-   Viewport:
-   Tests performed:
-   Passed:
-   Failed:
-   Known issues:
-   Follow-up tasks:
