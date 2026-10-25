# tools

Checks and renderers for building a period deck. Run everything **from the repository root**.
They need Node (for `check_data.js`) and Python with Playwright plus a Chromium binary;
set `CHROME` at the top of `_serve.py` if yours is not at `/opt/pw-browsers/chromium`.

Output is written to `tools/out/`, which is gitignored.

| Command | What it checks |
|---|---|
| `node tools/check_data.js` | Static integrity. Run this first and after every content edit. |
| `python3 tools/test_cases.py [ID ...]` | Plays every case: miss, red X, glow after two misses, mark, write, submit. No argument tests all playable cases. |
| `python3 tools/test_pages.py [deck-id]` | Vocabulary pages, the locate mechanic, the closing Case File, and the deck list row count. |
| `python3 tools/render.py ID ...` | Full-page PNGs for review or for Drive. `review:<deck-id>` for the Case File; `--played ID ...` renders as if those cases were finished. |
| `python3 tools/zones.py ID ...` | Draws the click zones over the artwork. |

## check_data.js catches

- clue ids that do not match their zone keys (breaks a card silently)
- zones outside the image, or with no area
- a vocabulary card whose example or answer options are cases the player has not reached yet
- two vocabulary cards sharing the same correct answer, which hands out free points
- any card or review citing a source number that does not exist

## Always look at the zones

`zones.py` exists because numbers are not enough. A zone that misses the obvious spot tells a
player who is right that they are wrong — the worst failure this game can produce. One such dead
spot was found on EM-08 after the card had already been approved.

## Seeding progress

`store` is read once when the page loads, so setting `localStorage` afterwards does nothing, and
visiting a page writes the whole in-memory store back over your seed. `_serve.py` seeds through
Playwright's `add_init_script`, which runs before the page scripts. Use `done_seed([...])` to
mark cases finished; note that `save()` clears a case's `finds` on submit, so finished cases
carry points but no marks.
