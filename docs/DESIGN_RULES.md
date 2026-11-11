# Design rules (middle school, eighth grade)

- Aim between elementary shape-finding and advanced abstract inference: notice, compare, explain with visible evidence.
- Focus on period style, technique, posture, depth, composition. Avoid philosophical prompts.
- Define unfamiliar art terms. No academic shorthand.
- Do not narrate what the player can see, retell the scene, or give away the answer.
- Name the control and the action: click or tap the button, then click or tap the artwork. Use one term per control.
- Do not describe predictable interface feedback (no 'the button will highlight').
- Non-architecture: verified dimensions in cm and inches plus a truthful size reference. Architecture: ground-level context, location, later additions noted.
- Use verified original images for any task that depends on visible details. Generated images are layout concepts only.
- Christian subject matter is historical context, not assumed belief. No devotional tasks or prior Bible knowledge.
- Revision is progress. No required generic disclaimers.
- Removed from deck: Tiny Pieces, Precise Patterns (Sutton Hoo shoulder clasp), judged too elementary.
- Card header (Middle School): work title; date; location; artist, in that order, with 'artist unknown' when not known. Example: The Four Tetrarchs; circa 300 C.E.; St. Mark's Basilica, Venice; artist unknown. The period (for example, Early Medieval Period) shows above the header.
- Photos: resize every photo to 1,600 pixels on its longest side. The credit line must say 'Resized from the original.'
- Detail photo (optional): shown under the main photo with the caption 'Detail'. No Enlarge button. Players mark clues on the main photo only. It carries its own credit line.
- Scoring (Middle School): 10 points for a closed case, plus 5 bonus points for additional observations about the work in general, or questions to pursue later. Each sentence needs at least four words. Points are stored once per card. No wrong answers, no timers, no accounts, no automatic grading of content.
- Guide: Vasario, a scripted character (no live AI at Middle School and High School). Detective framing: Art Detective, cases, clues.
- Clues are lettered A, B, C. The letter, name and color match on the clue button, the marker on the artwork, and the answer box. Numbers are used only for the three steps.
- Middle School and High School: no Save draft button. Work is saved silently in the browser. The only buttons on a card are Submit finds and, after a successful submit, Next case.
- Next case returns the player to the period's case list. The player chooses the next case from there.
- Each period has an entry page: a tab strip of the five periods, a numbered list of 30 cases, and a check box beside each case that fills in automatically when the case is submitted. A Start or Continue button leads to the first unfinished case.
- Photo credits sit in a full-width line at the bottom of the card page. The bonus box sits in the right column directly under the answer boxes, above Submit finds, at every screen width (Rick, 2026-10-22), so players see it before they submit. It keeps its own gold color.
- Early Medieval Period dates for Middle School: circa 300 C.E. to 900 C.E. (raised from 800 C.E. by Rick, 2026-10-22). Keep dates consistent across levels. Sub-periods (Byzantine, Merovingian, Carolingian) come at High School and above.
- Two clues only (Rick, 2026-10-22): a player marks and answers exactly two of the three clues. Choosing the third clue and clicking the artwork swaps out the older mark and its written answer, with a short notice. Clicking an already marked clue moves its mark.
- Closing question (after Submit): shown under the label 'Think like an art historian (no written response required)' It is a thought for the player, never a task, and has no field to answer in. The bonus box locks once the bonus points are earned.
- Sources: each card shows a small line, for example 'Sources: 1, 7', linking to a master Sources page (header link, content/sources.js). Each source keeps its number permanently. List credible sources only; Wikipedia is used for orientation but is never listed. Each source is tagged by type. Source standard (confirmed by Rick, 2026-10-22): object and collection records and contemporary documents first, then scholarly books and articles; teaching resources such as Smarthistory only as a labeled secondary fallback. Photo credits stay on every card page.

- Purpose (Rick, 2026-10-22): the game teaches players to recognize the characteristics of a period style. The artwork is the evidence; naming the artist or work is not the goal.
- Clue vocabulary (adopted): keep clue labels consistent across the cards of a period, so the same trait (for example 'Floating figures') can recur and the player learns to spot it.
- PLANNED, NOT BUILT: a period 'case file' that gradually shows which traits the player has collected across that period's cases. It also gives the compare cards a clear job. Vasario may name patterns afterward without scoring them. Details to be designed before building.
- Detail photo (Rick, 2026-10-22): the second link Rick sends is always the detail image. It shows the technique (for example how a mosaic or a relief is made) and may come from another part of the work or from a similar work in the same monument. It is not necessarily a corner of the featured scene. Its caption begins 'Technique detail:' so the player is not told it is part of the scene.
- Header label (Rick, 2026-10-22, confirmed for all cards): the descriptor of what the work is (Sculpture, Mosaic, Architecture, Illuminated manuscript, Burial artifact, Fresco, and so on) stands alone on a line above the title, in small capitals with no colon. Stored as the card field 'kind'.
- Image controls (Rick, 2026-10-22): the Enlarge image button sits on the top line, directly beside the headline (for example 'Look closely at the whole page'). The caption of the primary image, when a card has one, sits directly beneath the image. Applies to all cards.
- Card spacing (Rick, 2026-10-22): extra white space sits between the card title block and the 'Look closely' line, enough to stay clear when the title wraps to a second line, and between the primary image caption and the detail image. These come from the shared page styles, so every existing and future card gets them.
- Player-facing wording (Rick, 2026-10-23): step 3 reads 'Write at least one sentence about your own observations or what you find most interesting.' An answer box that has no mark yet is locked and empty (step 1 already tells the player to mark the image first); once its mark is placed, the box reads 'Look at where you marked the image, then write your own observation or point of special interest.' (Rick, 2026-10-28). The bonus box reads 'For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.' The earlier line 'Do this for two different clues.' was removed from step 3 and the two-clue rule moved to step 1, which now reads 'Choose any two of the following features.' (Rick, 2026-10-23). Player-facing instructions call the A, B and C items 'features' (step 1, the swap notice in the answer box, the Submit message and the screen-reader label); the card guide's closing line and the code still say 'clues'. The bonus box starts empty, with no ghost text (Rick, 2026-10-23). The two-clue limit is still enforced when the player submits.

## Clue selection interaction (2026-10-23)
- SUPERSEDED (Rick, 2026-10-29): the two-box queue with order badges proved confusing. The player now chooses ONE feature box, then clicks the artwork; the order in which features are marked does not matter. Choosing a different box switches the choice; clicking the chosen box again un-chooses it. No order badges. To move a placed letter, choose its box, then click the artwork.
- Three-feature flow (Rick, 2026-10-24, replacing the two-feature flow): the player marks ALL THREE features on the artwork. Step 1: "Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features." (second sentence changed by Rick, 2026-11-10) Step 2: "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."
- Submit needs all three marks and at least four words in any two of the three answer boxes; the third answer is optional. Points are unchanged: 10 per closed case plus 5 bonus. The live prompt under the boxes still guides each click, for example "Click the artwork to place A, then B, then C."

## Magnifier and photo size (2026-10-24)
- There is no Enlarge button. Each photo shows at the largest size its column allows, capped at 78% of the window height.
- A "Magnifier" switch with two buttons, On and Off, sits beside the photo heading. Off is active (red) at the start; On is green.
- While On, a 187 px round lens follows the pointer at 2.5 times zoom, with a gold centre dot and any placed letters shown inside it. It never appears while Off.

## Vocabulary cards (2026-10-24)
- A "Learn Your Art History Vocabulary" card appears after every 8th case in a period's list (after cases 8, 16, 24). It is an unnumbered gold row marked "Word" and does not count toward the 30 cases.
- Bonus question (2026-10-24, replaces "read only"): the example photo is shown without its name. Below it: "For 5 bonus points, identify this work. You have seen it before." with three choices A, B, C (thumbnail and title, all earlier cases of the same kind). One try only: the first answer is stored with its points and locked, the correct answer is shown, and the work's name, caption and extra source are revealed. A "Next case" button returns to the list. Wrong answers score 0. Until more cases exist, incorrect choices are placeholder text ("Another carved work (placeholder)") to be back-filled with real earlier cases.
- Content: the word, a one-sentence definition, three "Look for" questions, one example case shown inline, and a Sources line.
- The example sits at the bottom of the vocabulary page itself, so the player never leaves it: a heading "A good example: <case>", the case's photo with its header line, and a few short comments (example.points in cards.js). Credits and sources are in the page footer. The photo is not clickable and nothing on it is playable.
- Standing rule (2026-10-24): a vocabulary card follows every 8th case in every period and level (after cases 8, 16, 24), built exactly like VOC-01 with an inline example image. The example image must always come from a case that appears earlier in the list than the vocabulary card, so the player has already met it.
- Data lives in cards.js as DECKS[n].vocab (id, after, word, def, look, example, sourceNums). First card: VOC-01 Composition, after case 8, example EM-01, source 28 (Tate).

## Clean replay (2026-10-24)
- When a case is submitted, only its points are kept on the device. The marked letters and the player's written answers and bonus note are cleared from storage, so reopening the case later (replay) starts with a clean card.
- The finished card stays on screen as submitted until the player leaves it. The case keeps its check mark and points in the list.
- A case that was started but not submitted keeps its marks and text when the player leaves and returns.
- Vocabulary data fields: recognize {prompt, points, correct (0-2), options[{case:"EM-01"} or {label:"..."}]}. The correct option's letter varies from card to card. Answered vocabulary rows show their points in the case list.

## Updates and standing rules (Rick, 2026-10-24)
These replace any earlier rule they contradict.

### Cards
- Three features (A, B, C) by default. A card may use two features only with two written answers.
- A player marks all three features on the photo, then writes about any two (at least four words in each of two answer boxes). The third answer is optional. Step texts are fixed and are not rewritten card by card.
- Click zones: every feature has one or more zones (stored as percentages of the photo in `EMnn.zones` in `content/cards.js`). A click outside the chosen feature's zone shows a red X and the message "Not quite. Try another spot."; after two misses on a feature, its zone glows. Give features distinct zones so a later mark does not land on an earlier one.
- Details: a detail photo must be a component of its main work (a close view, a crop of the same photo, or another part of the same monument). A card may carry a second detail (`detail2`), for example a floor plan. Detail captions begin "Technique detail:". Details are shown at native size or cropped; main photos are resized to at most 1,600 px on the longest side.
- Size line: shown only when verified from a credible source (object record, museum or encyclopedia). An unverified size line stays empty.
- Photo notes and captions state facts plainly. Do not hedge ("the date follows the photographer's caption"). Put source questions in `IMAGE_CREDITS.md` and the Sources page, not on the card.
- Wikipedia is used for orientation only and is never listed as a source.

### Photo licences
- Accepted with visible credit: public domain, CC0, CC BY, CC BY-SA. Avoid files flagged "disputed copyright" on Commons.
- Flat reproductions of old paintings (for example scans of book plates) are accepted as public domain on Rick's reasoning, with the book named in the credit (EM-29).
- Each photo gets an entry in `docs/IMAGE_CREDITS.md`.

### Sources
- Source numbers are permanent. A retired source leaves a gap (26 and 69 are retired). New sources take the next free number.
- Link addresses must open the page that supports the claim. Check them when a source is added.

### Vocabulary cards (replaces the earlier vocabulary-bonus wording)
- The bonus question is worth 3 points (the case bonus stays 5). Prompt: "For 3 bonus points, identify this work. You have seen it before." One try; the first answer is stored and locked.
- The answer choices show only the letter and the case name. No thumbnails (they give the answer away). Choices are real earlier cases; placeholder options are gone.
- The example photo on the vocabulary page has a Magnifier (On/Off switch, right-aligned in the "A good example" heading row; 2.5x lens, 187 px), the same control as the game cards.
- Vocabulary words so far: Composition (after case 8), Nimbus (after case 16), Attribute (after case 24). Nimbus: a solid disk behind the head of a holy figure; a halo is only a thin line.

### Early Medieval cases (final list)
EM-01 Four Tetrarchs, EM-02 San Vitale apse, EM-03 Arch of Constantine, EM-04 Old St. Peter's, EM-05 Saint Peter icon, EM-06 Lindisfarne Matthew page, EM-07 Bewcastle Cross, EM-08 Lorscher Kopf, EM-09 Bawit lunette, EM-10 Junius Bassus sarcophagus, EM-11 Santa Sabina, EM-12 Hagia Sophia, EM-13 Vienna Genesis, EM-14 Lorsch ivory cover, EM-15 Ardagh Chalice (copy), EM-16 Kells Chi-Rho, EM-17 Ebbo Gospels Matthew, EM-18 Spong Man, EM-19 Roselle bowl, EM-20 Sutton Hoo purse lid, EM-21 Cordoba mosque, EM-22 Oseberg ship, EM-23 Franks Casket, EM-24 Dome of the Rock, EM-25 Santa Maria Antiqua, EM-26 Christ Pantocrator (Sinai), EM-27 Palatine Chapel, EM-28 Santa Maria del Naranco, EM-29 Flight into Egypt (Mustair), EM-30 Mausoleum of Galla Placidia.

## Deck sequencing (Rick, 2026-10-25)
The deck is ordered by **how hard the looking is**, not by date. The period span is stated in the tab header, so the cases inside it are free to run in teaching order.

### The four acts of looking
Each case is rated by what it asks the player to do. The order ramps through them.
1. **Naming** — find a discrete thing (a gold dome, four horses, an ink horn).
2. **Describing manner** — say how it was made (blocky bodies, robes in folds, streaky lines).
3. **Reading arrangement** — see structure across the whole field (matching figures, scenes in boxes, the same person twice).
4. **Comparing and judging** — hold two things side by side and infer a difference (two styles on one arch; pointed windows in a round-arched building).

### Tiers
- **Cases 1-8, naming.** Eight quick wins. Media are mixed so it does not read as eight small objects in a row.
- **Cases 9-16, manner and arrangement.** Ends on the Four Tetrarchs, placed directly after the Junius Bassus sarcophagus so "blocky" has a naturalistic baseline to push against.
- **Cases 17-24, technique and close looking.** Ends on the two basilica cases, Santa Sabina then Old St. Peter's.
- **Cases 25-30, capstones.** Each needs a comparison the player can now actually make. The deck closes on the Arch of Constantine, the hardest act of looking in it, with the Palatine Chapel at 29 as its rehearsal.

Media are interleaved within every tier. A pure difficulty ramp would front-load all the easy naming cases and make the first third monotonous.

### Vocabulary placement rule
**A word arrives immediately after its second encounter.** The first encounter plants the thing, the second confirms a pattern, the word names it, and every later case rewards the player for knowing it. A word that arrives after the pattern is over teaches nothing.

Current placement: Nimbus after 6, Interlace after 12, Composition after 16, Attribute after 20.

### Hard constraints on a vocabulary card
These are enforced by the deck order and must be rechecked whenever the order changes:
- Its `example.id` and every `recognize.options[].case` must be a case the player has **already played** at that point in the order.
- No two vocabulary cards may have the **same correct answer**. A repeat hands the player free points.
- `after` is a 1-based position in the case list, not a case number.

### Feature threads
Features are meant to recur so the player accumulates them. The arch thread is the clearest and runs the length of the deck: name an arch (Dome of the Rock, 3), blind arch (Galla Placidia, 7), horseshoe arch (Cordoba, 10), rounded arch (Naranco, 11), arches framing figures (Lorsch ivory, 25), round against pointed (Palatine Chapel, 29).

No two cases should teach the same three concepts. Santa Sabina (23) owns the basilica form; Old St. Peter's (24) was recast onto the courtyard, the approach and the evidence problem to remove the overlap.

## Vocabulary cards that ask the player to locate parts (2026-10-25)
A vocabulary card may teach more than one word and ask the player to find each on an image, instead of asking a single multiple-choice question. VOC-05 (Nave, Transept and Apse) is the first.

- The card carries a `locate` object in `content/cards.js` instead of `example` and `recognize`: `heading`, `prompt`, `points` (per part), `image`, `alt`, `caption`, `credit`, `creditWord`, `clues[]` and `zones{}`. Zones use the same percentage format as a game case.
- The mechanic matches a game case: choose a part, click the image, red X on a miss, the zone glows after two misses on the same part.
- **Scoring: one point per part, awarded only on the first try for that part.** This matches the one-try rule on the other vocabulary cards. A player who misses still places the mark and still learns the answer; they just do not score it. Three parts therefore equal the same 3-point bonus the other vocabulary cards carry.
- A found part cannot be re-found, so points cannot be farmed by clicking again.
- Progress is stored under the vocabulary card's own id in `localStorage`, as `{finds, points, done}`, and the deck list shows the earned points once `done` is true.
- If the teaching image carries printed labels, strip them before use, or the answers are given away. Record the removal in the credit's `changes` field.
- Crop the image to the parts being taught. A prominent element that is not one of the targets invites a wrong click and raises a question the card does not answer. The Old St. Peter's plan was cropped to the body of the church for exactly this reason, which dropped the narthex and the atrium and made the three targets much larger in the frame.
- A term earns a place on a vocabulary card only if the player meets it in more than one case, or if it is structurally inseparable from terms that do. Narthex appears in no case in the deck and was left out on that test; transept appears in only one but is inseparable from nave and apse, so it stays. The deck uses plain English ("open yard") where a technical term would not repay the effort.

## The closing Case File (2026-10-25)
Each period deck ends with one review page, reached at `#/review/<deckId>` and listed as the final row of the deck list. It is a **synthesis, not an assessment**: no score, no right answers, nothing to get wrong.

It has two movements.

**1. What the evidence shows.** Seven traits of the period, each stated plainly in one line, with a short note and the cases where it appears. Case numbers render as chips, filled for cases the player has closed and outlined for those they have not, so the page shows their own progress without a progress bar. The wording adapts: "You have closed 6 of the 8 cases where this appears" once they have played some, "Appears in 8 cases" before that.

**A constraint worth knowing:** `save()` clears a case's `finds` once the case is submitted, so the page cannot report *which* features a player marked. Marking all three is compulsory anyway, so there is no selectivity to report. Counts are therefore over **completed cases**, which is the honest measure.

**2. One last work.** A work the player has never seen, chosen to carry as many of the period's traits as possible in one image. The player writes what they recognize — unscored, saved — then presses a button to reveal what an art historian would say. The reveal names each trait in the new work and ends with one line about what they can now do.

Rules for the closing work:
- It must be outside the deck. Re-using a played case tests memory, not transfer.
- Pick for trait coverage first and fame second. San Zeno at Santa Prassede carries all seven.
- A detail that carries a trait the main image cannot is worth including. The San Zeno doorway was chosen because "artists kept looking back to Rome" is the one trait with no marked features behind it anywhere in the deck; at the doorway the reused Roman stone is physically visible rather than argued.
- Details sit side by side rather than stacked, so the page uses its width.

Stored under the review id in `localStorage` as `{seen, text, shown}`.


## Terminology rule: no "quiz" (2026-10-25)
The word "quiz" is never used anywhere in this project — not in player-facing text, not in data field names, CSS classes, or docs. The game must read as a welcoming, fascinating entry point into art history as a field of study, not a testing tool. The bonus multiple-choice identification mechanic (previously called "quiz") is called **recognize** (data field `recognize`, CSS class `.vrecog`).
