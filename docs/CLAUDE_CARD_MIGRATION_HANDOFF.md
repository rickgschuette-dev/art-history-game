# Claude Sonnet Handoff: Curriculum Card Migration

## Purpose

Migrate the remaining playable cards in this Art History curriculum from the legacy game-card presentation to the approved **Observation-First Close Reading** card template.  **EM-01, The Four Tetrarchs, is the canonical working example.** Preserve its interaction and visual hierarchy while making the template truly data-driven for every card.

There are currently 91 playable cards. Work in small, reviewable batches (for example, one chronological deck or 5–10 cards), not a single destructive rewrite of the deck file.

## Attach these files to Claude

1. `content/cards.js` — **the complete card deck data file**. This is the primary source of every card's image path, detail image, alt text, credits, sources, existing vocabulary, features, and deck order.
2. `app.js` — contains `backwardCard()` (the approved card renderer) and legacy fallback rendering.
3. `styles.css` — contains the complete approved visual system, including all `.be-` / Backward Equation styles.
4. This handoff document.

If Claude needs to inspect artwork for accurate feature placement, also make the local files in `public/images/artworks/` available. It must not substitute external image URLs.

## The approved model

In `content/cards.js`, find:

- `EM01` — the approved Four Tetrarchs card data.
- `EM01.backward` — the first migrated card's new narrative data.

In `app.js`, find:

- `function backwardCard(id,f)` — the working Observation-First renderer.
- `function card(id)` — routes cards with `card.backward` into the new template and allows non-migrated cards to retain the legacy fallback.

EM-01 is the design and interaction standard. Do not reintroduce the earlier "Archive Layers" block or the student-facing compiled folio box.

## Required student card experience

For every migrated card, retain this sequence and hierarchy:

1. Course bar: original card title and unit.
2. Tombstone: medium, work title, date, location, and artist visible immediately.
3. **Words to Know**: existing card vocabulary, placed between the tombstone and the main image.
4. The card's existing local primary image and a compact **Zoom image** control.
5. Three feature cards, A–C:
   - The student selects **Locate on artwork**, then clicks its exact location in the existing primary image.
   - The student writes at least one observation sentence and records it.
   - A required location should show clear red guidance if the student attempts to record before locating the feature.
   - Each observation is independently recordable. Do not force students to record A before B or B before C.
6. An optional open response: **“Optional: What else do you notice or want to know more about?”** with the brief helper text **“This is your space to follow your curiosity.”**
7. Once all three observations are recorded, reveal **The Story Behind the Work**.
8. After completion, retain the expandable notes control: **“Click here for more notes about the work.”** Its content includes Size Scale / Physical Scale & Architectural Setting, Material & Technique, and vocabulary in context. Keep that information out of the active observation workspace.
9. Keep Previous card / Next card navigation at the bottom. Students may browse forward or backward without completing a card.
10. Keep citations and licensing text visually small but readable.

## Data rules — do not violate

- Use each card's exact existing `image` and `detail.image` values from `content/cards.js`.
- Preserve the existing `alt` text, `detail.alt`, credit information, and `sourceNums`.
- Never replace local artwork paths with Wikimedia or other remote image URLs.
- Preserve every card ID, deck sequence, playable status, and legacy field unless a clearly justified template field supersedes its display.
- Use the existing `context`, `clues`, and `zones` data wherever they fit; do not erase research already in the cards.
- Write in clear, accurate Grade 8–10 language. Explain visual/historical reasoning without college-level jargon such as “lens.”
- The title/date/location are already in the visible tombstone. Do not call the object an “Unidentified Primary Source.”
- Do not add a student-facing “Compiled Period Folio Entry,” “Copy folio entry,” teacher feedback box, or teacher dashboard UI to cards.

## Important template refactor before broad migration

The current renderer is partly data-driven, but EM-01 still contains hard-coded information that must be generalized before cards are migrated broadly:

- EM-01’s scale measurement and Physical Scale & Architectural Setting text are currently written directly in `backwardCard()`.
- EM-01’s material explanation is currently written directly in `backwardCard()`.
- `.be-pin[data-pin="blocky"]`, `.be-pin[data-pin="identical"]`, and `.be-pin[data-pin="incised"]` in `styles.css` use hard-coded visual pin locations.

Refactor those items into each card’s `backward` data. A suggested shape is:

```js
backward: {
  course: "Foundations of Art History",
  unit: "Unit 1: …",
  pins: {
    featureIdA: { x: 48, y: 50 },
    featureIdB: { x: 47, y: 15 },
    featureIdC: { x: 53, y: 44 }
  },
  scale: {
    label: "Size Scale",
    heading: "Physical Scale & Architectural Setting",
    measurement: "Height: …",
    setting: "…"
  },
  material: {
    label: "Material",
    heading: "Material & Technique",
    text: "…"
  },
  synthesis: {
    subhead: "…",
    title: "…",
    text: ["…", "…"]
  }
}
```

Use existing `zones` for click validation and add/derive `pins` only for the visual A/B/C markers. Pins must align with each card’s **local primary image**. Do not hard-code card-specific pixel or CSS selectors for future cards.

## Migration method

1. Inspect EM-01’s current result first. Do not change its approved behavior or wording unless necessary to make its values data-driven.
2. Improve the shared renderer once, so all `backward` data works without EM-01-specific code.
3. Migrate a small chronological group of existing playable cards by adding complete `backward` objects. Retain their legacy content as source material.
4. Verify the first and last migrated cards in a browser, including A/B/C hotspot alignment, zoom, unlocking, mobile layout, citations, and previous/next navigation.
5. Leave cards without a complete `backward` object on the clean legacy fallback until their narrative and coordinates are ready.
6. Report exactly which cards are migrated in each batch and identify any cards whose data is insufficient for accurate feature locations or historical writing.

## Acceptance checks for each migrated card

- Existing local primary image, detail image, alt text, and credit render correctly.
- All three visible pins and clickable zones line up with the intended local image features.
- A location is required before that feature’s observation can be recorded.
- Any feature can be recorded independently.
- One recorded observation unlocks only its related progress; all three unlock the story/notes area.
- The optional curiosity response remains optional.
- No unexpected game scoring, points, “submit finds,” or mandatory sequential card completion remains in the student experience.
- Previous and Next card controls work without submission requirements.
- Cards without `backward` still render cleanly with the legacy template.

## Paste-ready request for Claude

> I am migrating an existing Art History curriculum deck to the approved Observation-First Close Reading template. I have attached `content/cards.js`, `app.js`, `styles.css`, and a handoff brief. Treat EM-01 / The Four Tetrarchs as the canonical approved card. First refactor the shared `backwardCard()` renderer and its CSS so scale, setting, material explanation, synthesis, and image pins are data-driven—not hard-coded for EM-01. Then migrate a small chronological batch of playable cards by adding complete `backward` objects, preserving all existing local image paths, detail images, alt text, credits, sources, IDs, and deck order. Use existing `zones` for click validation; ensure visual pins align with each local image. Keep legacy fallback for cards not yet migrated. Do not introduce remote image URLs, archive-layer boxes, scoring, mandatory card completion, student compiled folios, or teacher-feedback controls. Before changing anything, show the proposed first batch and the exact files/fields you will edit. Afterward, list migrated cards and the checks you performed.

## What not to send Claude

Do not include teacher access codes, Netlify environment variables, passwords, or deployment credentials. They are unrelated to card migration.
