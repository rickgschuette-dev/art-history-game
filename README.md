# Art History Game

Browser-based game for eighth graders: Introduction to Art History. Level name in the header: Apprentice (Middle School).

## Status
Early Medieval Period (circa 300 C.E. to 900 C.E.): all 30 cases are built and approved (EM-01 to EM-30), plus three vocabulary cards (Composition, Nimbus, Attribute) after cases 8, 16 and 24. The other four period tabs (Late Medieval, Renaissance, Baroque, Modern) have case slots only. See `docs/BUILD_STATUS.md`.

## Run locally
Open `index.html` in a browser. No build step.

## How it is built
- `index.html`, `styles.css`, `app.js`: the page, its styles and the game engine.
- `content/cards.js`: every card (text, features, click zones, credits) and the vocabulary cards.
- `content/sources.js`: the master Sources page (each source keeps its number permanently).
- `public/images/artworks/`: the photos used by the cards.
- `docs/`: design rules, build status, candidate list and the image credit log.

## Important limits
- Progress is saved only in the browser on one device. No accounts, no server.
- Not yet reviewed by an art historian. Not yet reviewed for student-privacy obligations.
- Photo licences are logged in `docs/IMAGE_CREDITS.md`. A few photos have licence questions noted there.
- Keyboard use: Tab to the artwork, arrow keys move the cursor, Enter marks.

## Publish
Netlify can publish this folder directly (`netlify.toml`).
