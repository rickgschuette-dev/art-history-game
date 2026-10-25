# Art History Game

Browser-based game for eighth graders: Introduction to Art History. Level name in the header: Apprentice (Middle School).

## Status
Early Medieval Period (circa 300 C.E. to 900 C.E.) is finished: 30 cases, 5 vocabulary cards and a closing Case File, all approved. The other four period tabs (Late Medieval, Renaissance, Baroque, Modern) have case slots only. See `docs/BUILD_STATUS.md`.

**Building the next period? Read `docs/PERIOD_BUILD_TEMPLATE.md` first.** Early Medieval is the template for the rest of the Apprentice level, and that document records the sequencing method, the vocabulary rules, the closing Case File, and the traps worth avoiding.

## Run locally
Open `index.html` in a browser. No build step.

## How it is built
- `index.html`, `styles.css`, `app.js`: the page, its styles and the game engine.
- `content/cards.js`: every card (text, features, click zones, credits) and the vocabulary cards.
- `content/sources.js`: the master Sources page (each source keeps its number permanently).
- `public/images/artworks/`: the photos used by the cards.
- `docs/`: the period build template, design rules, build status, candidate list and the image credit log.
- `tools/`: integrity checks, flow tests, renderers and zone overlays. See `tools/README.md`.

## Important limits
- Progress is saved only in the browser on one device. No accounts, no server.
- Not yet reviewed by an art historian. Not yet reviewed for student-privacy obligations.
- Photo licences are logged in `docs/IMAGE_CREDITS.md`. A few photos have licence questions noted there.
- Keyboard use: Tab to the artwork, arrow keys move the cursor, Enter marks.

## Publish
Netlify can publish this folder directly (`netlify.toml`).
