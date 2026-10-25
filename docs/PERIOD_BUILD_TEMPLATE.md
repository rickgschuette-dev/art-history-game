# How to build a period deck

Early Medieval is finished and is the worked example for every period that follows. Read this before building Late Medieval, Renaissance, Baroque or Modern. It records decisions that were expensive to reach, and several traps that cost real time.

Nothing here is theory. Every rule below came out of building 30 cases, 5 vocabulary cards and a closing review.

---

## 1. What a finished period contains

- **30 cases**, ids `LM-01` to `LM-30` (prefix per period: `em`, `lm`, `re`, `ba`, `mo`).
- **4 or 5 vocabulary cards**, placed by the rule in section 3.
- **1 closing Case File**, the period review.
- Entries in `docs/IMAGE_CREDITS.md` for every photograph.
- Approved PNGs in the Drive folder for that period.

Case ids are permanent and independent of play order. **The order lives only in the `window.DECKS[n].cards[i]=XX;` assignments at the foot of `content/cards.js`.** Re-sequencing is therefore cheap: change the index assignments, change nothing else.

---

## 2. Sequencing: by difficulty of looking, not by date

The deck is ordered by **how hard the act of looking is**. Not chronology, not style, not medium. The period span sits in the tab header, so the chronology is still available to anyone who wants it; it just is not doing the teaching.

Rate every case by what it asks the player to do:

1. **Naming** — find a discrete thing (a gold dome, four horses, an ink horn).
2. **Describing manner** — say how it was made (blocky bodies, robes in folds, streaky lines).
3. **Reading arrangement** — see structure across the whole field (matching figures, scenes in boxes, the same person twice).
4. **Comparing and judging** — hold two things side by side and infer a difference (two styles on one arch; pointed windows in a round-arched building).

Then build four tiers of roughly 8 / 8 / 8 / 6, rising through those four demands, and **interleave the media inside every tier**. A pure difficulty ramp stacks all the easy small objects at the front and the first third goes flat.

Two rules override pure difficulty:

- **Baselines before contrasts.** A manner feature is a comparison in disguise. "Blocky" needs something to be blocky against. In Early Medieval the Junius Bassus sarcophagus sits at 15 and the Four Tetrarchs at 16 for exactly this reason. Find the equivalent pairing in each period and do not separate it.
- **The deck ends on the hardest act of looking, wherever its date falls.** Early Medieval closes on the Arch of Constantine, dedicated 315, because spotting two styles on one monument is the most sophisticated thing the deck asks. The case before it rehearses the same move on an easier example.

---

## 3. Vocabulary cards

### Placement
**A word arrives immediately after its second encounter.** First case plants the thing, second confirms a pattern, the word names it, every later case pays the player back. A word that arrives after the pattern is over teaches nothing. Early Medieval originally had all three words trailing their examples by ten cases or more; fixing that was the single largest improvement to the deck.

### Which words earn a card
A term earns a card only if the player meets it in **more than one case**, or if it is **structurally inseparable** from terms that do. Narthex appears in no Early Medieval case and was left out on that test, even though it is prominent on one image. Transept appears in only one case but cannot be separated from nave and apse, so it stayed. Where a technical term would not repay the effort, use plain English — the deck says "open yard", not "atrium".

### Hard constraints, rechecked whenever the order changes
- `after` is a **1-based position in the case list**, not a case number and not an array index.
- The card's `example.id` and **every** `recognize.options[].case` must be a case the player has **already played** at that point in the order.
- **No two vocabulary cards may share a correct answer.** A repeat hands the player free points. This nearly shipped in Early Medieval: moving Nimbus earlier left it and Attribute both answering "Saint Peter icon".
- Bonus is **3 points**, one try, answer stored and locked.
- Options show the letter and the case name only. **No thumbnails** — they give the answer away.

### Two card types

**Type A, the recognize card.** `example:{id, points[]}` plus `recognize:{prompt, points, correct, options:[{case}]}`. The example image is pulled from the referenced case.

**Type B, the locate card.** Teaches several related terms and asks the player to find each on one image. Carries a `locate` object instead of `example`/`recognize`:

```
locate:{ heading, prompt, points,          // points is PER PART
         image, alt, caption, credit, creditWord,
         clues:[{id,label,def}],
         zones:{ id:[{x0,y0,x1,y1}] } }
```

Scoring: **one point per part, awarded only on the first try for that part.** A player who misses still places the mark and still learns, but does not score it. A found part cannot be re-found, so points cannot be farmed. Three parts therefore equal the same 3-point bonus the recognize cards carry.

If the teaching image carries printed labels, **strip them**, or the answers are given away. **Crop to the parts being taught** — a prominent element that is not a target invites a wrong click and raises a question the card does not answer. Record both edits in the credit's `changes` field.

---

## 4. The closing Case File

One review page per period at `#/review/<deckId>`, listed as the final row of the deck list. It is a **synthesis, not an assessment**: no score, no right answers, nothing to get wrong.

### Movement 1 — what the evidence shows
Six or seven traits of the period, each one line, with a short note and the cases where it appears. Case numbers render as chips, filled for cases the player has closed, outlined for the rest. Wording adapts: "You have closed 6 of the 8 cases where this appears" once they have played some, "Appears in 8 cases" before that.

**Count over completed cases, not marked features.** `save()` clears a case's `finds` on submit, so the page cannot report which features a player marked. Marking all three is compulsory anyway, so there is no selectivity to report.

### Movement 2 — one last work
A work the player has **never seen**, chosen to carry as many traits as possible in one image. The player writes what they recognize — unscored, saved — then presses a button to reveal what an art historian would say. The reveal names each trait in the new work and ends with one line about what they can now do.

Rules for the closing work:
- It must be outside the deck. Re-using a played case tests memory, not transfer.
- **Pick for trait coverage first, fame second.** San Zeno at Santa Prassede carries all seven Early Medieval traits in one chapel.
- Include a detail that carries a trait the main image cannot. The San Zeno doorway was chosen because "artists kept looking back to Rome" is the only trait with no marked features behind it anywhere in the deck; at the doorway the reused Roman stone is physically visible rather than argued.
- Details sit side by side, not stacked, so the page uses its width.

### Data shape
```
window.DECKS[n].review = {
  id, title, crumb, lead, traitsHead,
  traits:[{id, claim, note, cases:[caseId,...]}],
  work:{ head, kicker, lede, image, alt, caption, credit,
         detail:{image,alt,caption,credit}, detail2:{...},
         prompt, placeholder, revealBtn, reveal:[para,...], closing },
  sourceNums:[...], outro }
```
Stored in `localStorage` under the review id as `{seen, text, shown}`.

---

## 5. Case cards

### Shape
`id, kind, wide, title, object, playable, crumb, work, date, location, artist, headline, alt, enlarge, image, imageNote, detail{image,alt,caption,credit}, detail2, size, intro, context, clues[3]{id,label,def}, steps[2], closing, bonus, guide, sourceNums, credit`

Zones live separately as `XXnn.zones={clueId:[{x0,y0,x1,y1}|{cx,cy,rx,ry}]}`, in **percentages of the photo**. Clue ids and zone keys must match exactly — a mismatch breaks the card silently.

### Rules
- **Three features by default.** Two only with two written answers.
- The player marks all three, then writes about any two, at least four words in each of two boxes.
- Step texts are fixed and are not rewritten per card.
- **Give features distinct zones.** Overlapping zones mean a later mark lands on an earlier one.
- **Check every zone visually** before approving. Render an overlay, do not trust the numbers. A dead spot where the obvious answer sits is the worst defect in this game: the player is right and is told they are wrong. One was found on the Lorscher Kopf after the card had been approved.
- A **detail must be a component of its main work** — a close view, a crop of the same photo, or another part of the same monument.
- Detail captions begin **"Technique detail:"**.
- **Size line only when verified** from a credible source. An unverified size line stays empty.
- State facts plainly. **Do not hedge on a card.** Source doubts belong in `IMAGE_CREDITS.md` and the Sources page.
- No two cases should teach the same three concepts. Early Medieval had two basilica cards with two features in common; one was recast.

---

## 6. Terminology

- **Never use the word "quiz" anywhere — player-facing or internal.** The game must read as a welcoming, fascinating entry point into art history as a field of study, not a testing tool. The bonus multiple-choice identification mechanic is called **recognize** (data field `recognize`, CSS class `.vrecog`); the review page already avoided the word and stays that way. Check prose, data field names, CSS classes and docs — not just player-facing text.
- **"Halo" is not used in Early Medieval content.** The thin ring of light is a later form; in this period the mark is a solid disk and the word is **nimbus**. Apply the same discipline in every period: do not use a term before the thing exists. Check alt text and internal ids too — the word was hiding in a clue id and a zone key.
- A source's real title is not deck language. Britannica's article is titled "Halo" and remains cited under that title. **Never alter a citation to fit a style rule.**
- Prefer plain English in feature labels unless a vocabulary card teaches the term.

---

## 7. Images

- Main photos: **at most 1600 px on the longest side.** Details at native size or cropped.
- Accepted with visible credit: public domain, CC0, CC BY, CC BY-SA. Avoid files flagged "disputed copyright" on Commons.
- Flat reproductions of old paintings (scans of book plates) are accepted as public domain, with the book named in the credit.
- Every photograph gets an entry in `docs/IMAGE_CREDITS.md`.
- Credit object: `{word, url, author, license, licenseUrl, changes}`. `changes` must describe every edit actually made.

---

## 8. Sources

- **Source numbers are permanent.** A retired source leaves a gap. 26 and 69 are retired. **Next free number: 79.**
- New sources take the next free number. Never renumber.
- Link addresses must open the page that supports the claim. Check them when added.
- **Wikipedia is used for orientation only and is never listed as a source.**

---

## 9. Workflow

1. Rick supplies Commons links: main photo, then detail, sometimes a second detail.
2. Research the work and verify every fact that will appear on the card.
3. Build the card, render a PNG, show it in chat.
4. On Rick's approval, save the PNG to the period's Drive folder and copy the files to the local repo.
5. Rick pushes. Do not go into GitHub Desktop without first sending, as its own single-line message, the agreed confirmation request and waiting for his reply.

### Drive naming
`AHG_MS_<ID>_<Name>_v<NN>-APPROVED_<YYYY-MM-DD>.png`, with `-DRAFT` until approved. Keep the version number when a draft is approved unchanged; bump it when the content changes.

---

## 10. Traps that cost time

These are not hypothetical. Each one happened.

- **`store` is read once at page load.** Setting `localStorage` after load does nothing until a reload. To seed test progress, use Playwright's `add_init_script`.
- **Visiting a page writes the whole in-memory store back to `localStorage`.** Seeding after load and then navigating will silently wipe the seed.
- **Deck ids are slugs, not prefixes** — `early-medieval`, not `EM`. A wrong id makes the review route redirect to the deck list with no error.
- **`device_commit_files` lags.** Always verify with `md5sum` on the device and recommit if it differs. It also re-encodes PNGs: different byte size, identical pixels. Compare pixels, not bytes.
- **The Downloads folder refuses staging** with a hardlink error. Copy the file into the repo's `_cand/` with `cat src > dest` first, then stage from there.
- **One browser download per tab.** Open a fresh tab for each file, or build a single contact sheet on a canvas and download that.
- **Assert every string replacement.** A silent no-op left approved cards sitting under a "Waiting for review" heading. A replace that matched a curly apostrophe against a straight one did nothing and reported success.
- **Do not key tests to row numbers in the deck list.** Adding a vocabulary card shifts every row below it. Find rows by content.
- **`_cand/` is gitignored.** Working files there will not be committed, which is intended.

---

## 11. Testing before approval

Scripts live in `tools/`. Run from the repository root. See `tools/README.md`.

Minimum before any card is approved:
- The case flow test passes for all 30 cases — miss, red X, glow after two misses, mark, submit.
- Zone overlays inspected **by eye** for any card whose zones changed.
- Vocabulary pages render with no console errors, and every example and option resolves to a case already played.
- The Case File renders, the reveal opens, and progress survives a reload.

---

## 12. Early Medieval, for reference

Play order: EM-19, 18, 24, 22, 05, 29 | 30, 06, 12, 21, 28, 07 | 09, 25, 10, 01 | 02, 08, 20, 26 | 15, 13, 11, 04, 14, 17, 16, 23, 27, 03.

Vocabulary: Nimbus after 6, Interlace after 12, Composition after 16, Attribute after 20, Nave/Transept/Apse after 24.

The seven traits in the Case File: pattern is the thing; gold replaces space; the round arch travels everywhere; figures face front; bodies are signs not studies; a nimbus marks the holy; artists kept looking back to Rome.

Closing work: Chapel of San Zeno, Santa Prassede, Rome, about 817–824.
