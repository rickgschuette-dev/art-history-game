# Build status

Updated 2026-10-25.

## Next period
Early Medieval is the agreed template for the remaining Apprentice periods. Before building Late Medieval, read `docs/PERIOD_BUILD_TEMPLATE.md`; it carries the sequencing method, the vocabulary placement and gating rules, the closing Case File, the terminology rules and the traps. Run `node tools/check_data.js` after every content edit.

## Middle School
- Early Medieval: 30 of 30 cases approved (EM-01 to EM-30) and 5 vocabulary cards (VOC-01 Composition, VOC-02 Nimbus, VOC-03 Attribute, VOC-04 Interlace, VOC-05 Nave/Transept/Apse). Approved PNGs are in the shared Drive folder Cards / Middle School / Early Medieval.
- Click zones (where a feature really is on the photo) now exist for all 30 cases. A click outside the chosen feature's zone shows a red X; after two misses the zone glows.
- Late Medieval, Renaissance, Baroque, Modern: 0 of 30 approved (case slots only).

## Re-sequenced 2026-10-25
The 30 Early Medieval cases were re-ordered by difficulty of looking rather than by date. See the "Deck sequencing" section of DESIGN_RULES.md for the method. No case text was rewritten for the re-order itself; only the array index in `content/cards.js` changed.

Play order: EM-19, 18, 24, 22, 05, 29 | 30, 06, 12, 21, 28, 07 | 09, 25, 10, 01 | 02, 08, 20, 26 | 15, 13, 11, 04, 14, 17, 16, 23, 27, 03.

Vocabulary moved to the "second encounter" rule: Nimbus after 6 (was 16), Interlace after 12 (new), Composition after 16 (was 8), Attribute after 20 (was 24), Nave/Transept/Apse after 24 (new). Five vocabulary cards in all.

### Approved 2026-10-25 (closing review)
- **The Case File** (REV-EM) — APPROVED (v03). The closing review page for Early Medieval, reached from the final row of the deck list. Seven traits of the period, each with the player's own count of closed cases, then the Chapel of San Zeno at Santa Prassede as an unseen synthesis work with a write-then-reveal. Adds a `#/review/<deckId>` route and render function to `app.js`, styles to `styles.css`, three images, and source 78.
  - On the square nimbus: source 64 (Catholic Encyclopedia) supports the convention that a square nimbus marked someone who was not a saint, "almost without exception only the living". Mackie (source 78) identifies the figure from the inscription as Theodora, mother of Paschal I, and argues she was probably already dead when the mosaic was made. The page states the convention and the identification but makes no claim about whether she was living.

### Approved 2026-10-25
- **VOC-05 Nave, Transept and Apse** — APPROVED 2026-10-25 (v02). The first vocabulary card that asks the player to locate parts on an image rather than answer one multiple-choice question. It sits after case 24, Old St. Peter's, the only case where all three are visible. Uses a public-domain plan of that church, cropped to the body of the church and with its printed labels stripped, so the only things on the image are the three parts to find. One point per part, first try only. This required a new `locate` block on the vocabulary page in `app.js`; the other four vocabulary cards are untouched and still use the quiz.
- **VOC-04 Interlace** — APPROVED (v01). Example is the Lindisfarne Matthew page; source 77 is the HMML lexicon.
- **VOC-02 Nimbus** — APPROVED (v04). Example moved from the Bawit lunette (now case 13, after the word) to the Mustair Flight (case 6). Moving it also fixed a collision: the Saint Peter icon would otherwise have been the correct answer on two different vocabulary cards.
- **EM-04 Old St. Peter's** — APPROVED (v09). Retitled "Drawn From Evidence". It shared two of three features with Santa Sabina, so it was recast onto the open yard (the atrium Britannica calls Paradise), the crossing arm and the entrance steps, and its word-to-know changed from clerestory to reconstruction. Santa Sabina now owns the basilica form alone. The detail caption was corrected to begin "Technique detail:".
- **EM-08 Lorscher Kopf** — APPROVED (v05). "Dark outlines" became "Lead strips", which is the actual technique lesson and removes a duplicate pair with the Bawit lunette. A fourth zone was added along the bottom of the head so a click on the lower lead does not read as a miss.

### Terminology rule added 2026-10-25
"Halo" is not used anywhere in Early Medieval content. The thin ring of light is a later form; in this period the mark is a solid disk and the word is **nimbus**. Twelve occurrences were removed: the Nimbus card's definition (which had been built on the halo/nimbus contrast), five picture descriptions, and two internal identifiers on EM-05 (the clue id and its matching zone key). One case needed care: the Lorscher Kopf's blue glass genuinely is a ring, so it is now described as "a ring behind the head" rather than named as either.

Source 63 is Britannica's article, whose real title is "Halo", and it remains cited on the Nimbus card. A citation title is not deck language and was not altered.

### Note on the EM-04 transept
The crossing arm could not at first be located in the Lowrie reconstruction drawing well enough to place a click target: at that oblique angle the transept and the basilica's own entrance front read almost alike. Rick identified the entrance front (the gabled, arcaded block facing the atrium) and then placed the transept at the far end of the nave, with the apse curving beyond it. The zone follows his call. Britannica (source 7) supports the plan: a "five-aisled basilican-plan church with apsed transept".

The double side aisles were considered as a third feature and not used. The stepped flank is legible, but it runs diagonally across the drawing and a rectangular zone over it would take in as much nave roof as aisle.

## Revisions approved 2026-10-25
- EM-12 Hagia Sophia: size line corrected to the dome's width (about 32 m / 105 ft across). EM-22 Oseberg ship: photo note on the museum's closure and 2027 reopening.
- EM-05 and EM-25: feature label "Gold halo" changed to "Gold nimbus", and "gold halo(s)" changed to "gold nimbus(es)" in EM-06 and EM-26 descriptions, to match the Nimbus vocabulary card.
- EM-26 photo licence (flat-reproduction reasoning) and the Yorck scan on EM-24 (public domain) accepted by Rick.
- EM-01 to EM-14: re-rendered PNGs; layout only.

## GitHub
Pushed 2026-10-24 as commit e4e3080 "Final review"; Netlify deployed it the same evening. The re-sequencing, the new locate mechanic and all five vocabulary cards are **not yet committed**.

## Open items
- EM-06 date: the British Library catalogue gives c. 700 (695-705); some scholars date the book 715-720. The card says about 700 C.E.
- EM-15: the photo shows an early 20th-century copy (Metropolitan Museum 07.65.8). The card says so.
- EM-26 and EM-29 photo licence basis: accepted by Rick (see IMAGE_CREDITS.md).
- Source 16 (Santa Sabina) link repaired to a working page. Santa Sabina size verified (nave 48.0 x 13.5 m, MIT Dome record).
- Date spans for Late Medieval, Renaissance, Baroque and Modern; Proto-Renaissance handling. Later level names are not chosen.
- Planned feature, not built: period case file (traits collected across cases). Needs a design pass first.
