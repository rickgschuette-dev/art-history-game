#!/usr/bin/env python3
"""
One-off translator for the Renaissance deck build.
Reads content/cards.js, applies:
  - Appends 14 new RE entries (RE17..RE30) + their .zones
  - Updates RE11 detail to point at MonaLisa-Face.jpg
  - Replaces window.DECKS[2].vocab with the 5-VOC Renaissance set
  - Appends window.DECKS[2].review in the ceremonial capstone format
  - Rewrites window.DECKS[2].cards assignments in the 36-position play order
Writes cards.js back in place.
"""
import json, re, sys, os

CARDS_PATH = 'content/cards.js'
CRUMB_RE = "Renaissance Period, circa 1400 C.E. – 1600 C.E."

# ------------------------------------------------------------------
# NEW RE CARDS (14) — each dict becomes one cards.js var declaration
# ------------------------------------------------------------------

CARDS = []

def card(**kw): CARDS.append(kw)

card(
  var='RE17', id='RE-17', kind='Oil painting', title='A Painted Sculpture of Grief',
  object='Descent from the Cross', wide=True,
  work='Descent from the Cross', date='about 1435 C.E.',
  location='Museo del Prado, Madrid', artist='Rogier van der Weyden',
  headline='Look closely at the altarpiece',
  alt='A large oil painting on an oak panel, painted against a solid gold-leaf wall. Ten mourning figures gather around the body of Christ as it is lowered from the cross. On the left, Mary swoons in a blue robe, her body echoing the curve of her son’s. On the right, Mary Magdalene wrings her hands in anguish, wearing orange damask and a white headdress.',
  image='public/images/artworks/Weyden-Descent.jpg',
  imageNote='An oil painting on oak panel, about 7 feet tall by 8.5 feet wide (220 × 262 cm) — roughly the size of a doorway laid on its side. The painted frame with its Gothic tracery is part of the panel itself.',
  detail=dict(image='public/images/artworks/Weyden-Magdalene.jpg',
    alt='A close view of Mary Magdalene at the right edge of the altarpiece: her white headdress, the orange damask of her sleeve, a single tear on her cheek, her hands wrung together.',
    caption='Detail: Mary Magdalene at the right edge of the altarpiece — her white headdress, the orange damask of her sleeve, a single tear on her cheek, her wrung hands',
    credit=dict(word='Detail photo', url='', author='Rogier van der Weyden', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close view of Mary Magdalene from the same altarpiece.')),
  detail2=dict(image='public/images/artworks/Weyden-Mourner.jpg',
    alt='A close view of another female mourner from the same altarpiece, wiping her tears into a white handkerchief, with the gold ground visible behind her head.',
    caption='Detail: another mourner from the same painting, wiping her tears with a handkerchief, the gold ground visible behind her',
    credit=dict(word='Detail photo', url='', author='Rogier van der Weyden', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close view of a female mourner from the same altarpiece.')),
  intro='Rogier van der Weyden painted this altarpiece in Brussels around 1435 for the chapel of the Louvain crossbow-makers’ guild. Soon after, the city of Brussels named him its official painter. He worked in the new oil technique perfected a few years earlier by Jan van Eyck, and his designs became a model for Flemish painters for the next century. The altarpiece was carried to Spain in the 1500s and eventually entered the royal collection in Madrid.',
  context=[
    {"term":"Lamentation","pron":"lam-en-TAY-shun","def":"The mourning of Christ after he is taken down from the cross. A subject often painted in Christian art, in which his family and followers gather around his body before he is laid in the tomb."},
    {"term":"Gold ground","pron":"","def":"A solid gold background painted behind figures. Used in medieval and early Renaissance art to show that the scene belongs to heaven or holy space rather than the everyday world."},
    {"term":"Altarpiece","pron":"","def":"A large painting or carving placed above and behind the altar in a Christian church, often made of several joined panels that can open and close."},
  ],
  clues=[
    {"id":"lamentation","label":"Lamentation","def":"The ten figures grouped around Christ’s body."},
    {"id":"gold","label":"Gold ground","def":"The solid gold wall behind the figures."},
    {"id":"curves","label":"Mirroring curves","def":"Mary’s swooning body in blue, lower left."},
  ],
  closing='Why did Van der Weyden set his mourners against a flat gold wall instead of a real landscape or room?',
  zones=dict(
    lamentation=[dict(x0=18,y0=20,x1=82,y1=80)],
    gold=[dict(x0=5,y0=4,x1=95,y1=40)],
    curves=[dict(x0=8,y0=55,x1=35,y1=90)],
  ),
  credit=dict(word='Photo', url='', author='Rogier van der Weyden', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE18', id='RE-18', kind='Woodcut print', title='Four Horsemen at the End of Days',
  object='The Four Horsemen of the Apocalypse',
  work='The Four Horsemen of the Apocalypse', date='1497–1498 C.E.',
  location='from the Apocalypse series, published Nuremberg', artist='Albrecht Dürer',
  headline='Look closely at the woodcut',
  alt='A tall black-and-white woodcut. Four horsemen charge diagonally across the sheet, from upper right to lower left. In the lower left, Death on a pale horse carries a trident. Behind him, Famine holds up a pair of scales; War raises a sword above his head; and the crowned Conquest draws a bow at the upper right. In the clouds at the top right, an angel descends with a sword. Below the horses, small figures are trampled on the ground, and in the lower left corner a dragon-like beast — Hell — bites down on a bishop.',
  image='public/images/artworks/Durer-Horsemen.jpg',
  imageNote='A woodcut on paper, about 15 by 11 inches (39 × 28 cm). The four horsemen, from the front rider back, are Death (with a trident), Famine (with scales), War (with a sword), and Conquest (crowned, with a bow).',
  detail=dict(image='public/images/artworks/Durer-Horsemen-Riders.jpg',
    alt='A close view of Death on the pale horse at the front of the four horsemen’s charge. His skeletal body, thin bearded face and trident are visible. In the lower left corner, the jaws of a beast — Hell — are visible among the trampled.',
    caption='Detail: Death at close range — the thin, skeletal rider on the pale horse, carrying his trident at the front of the four horsemen’s charge. The beast at the lower left is Hell, which follows Death in the Bible’s account',
    credit=dict(word='Detail photo', url='', author='Albrecht Dürer', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the main woodcut.')),
  intro='Albrecht Dürer carved this woodcut in his Nuremberg workshop in 1497 or 1498 as part of his Apocalypse series — fifteen large woodcuts illustrating the Book of Revelation, the final book of the Bible. He published the series as a bound book in 1498, in editions in both German and Latin, and printed many hundreds of copies on his own press. The prints sold across Europe and made Dürer, at twenty-seven, the most famous printmaker on the continent.',
  context=[
    {"term":"Woodcut","pron":"","def":"A print made by carving a design into a block of wood, inking the raised surfaces that remain, and pressing paper onto the block. One block produces many copies."},
    {"term":"Apocalypse","pron":"uh-POK-uh-lips","def":"Greek for ‘uncovering’ or ‘revelation.’ Also the last book of the Bible, which describes a future end of the world. The four horsemen appear in its sixth chapter."},
    {"term":"Allegory","pron":"AL-uh-gor-ee","def":"A picture or story in which figures and objects stand for larger ideas. Each of the four horsemen stands for a disaster the Bible promises."},
  ],
  clues=[
    {"id":"riders","label":"The riders","def":"The four horsemen charging diagonally across the sheet."},
    {"id":"angel","label":"The angel","def":"The winged figure descending from the clouds in the upper right."},
    {"id":"trampled","label":"The trampled","def":"The figures crushed beneath the horses in the lower half."},
  ],
  closing='Why did Dürer send his four horsemen charging from the upper right down toward the viewer rather than lining them up calmly across the picture?',
  zones=dict(
    riders=[dict(x0=10,y0=25,x1=95,y1=78)],
    angel=[dict(x0=55,y0=0,x1=90,y1=22)],
    trampled=[dict(x0=5,y0=72,x1=95,y1=99)],
  ),
  credit=dict(word='Photo', url='', author='Albrecht Dürer', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE19', id='RE-19', kind='Fresco wall painting', wide=True, title='Lines That Lead the Eye',
  object='Delivery of the Keys to Peter',
  work='Delivery of the Keys to Peter', date='1481–1482 C.E.',
  location='Sistine Chapel, Vatican City', artist='Pietro Perugino',
  headline='Look closely at the fresco',
  alt='A wide fresco on the Sistine Chapel wall. In the foreground, a row of figures in colored robes stands on a vast paved plaza of pale stone. In the center, Christ hands two keys to Peter, who kneels before him. Far behind, a large round domed temple stands at the center of the square, flanked by two triumphal arches. The paving stones run from the foreground back to the temple in receding lines.',
  image='public/images/artworks/Perugino-Keys.jpg',
  imageNote='A fresco painted on the north wall of the Sistine Chapel in the Vatican, as part of a cycle of scenes from the lives of Moses and Christ. About 11 by 18 feet (335 × 550 cm).',
  detail=dict(image='public/images/artworks/Perugino-Keys-Center.jpg',
    alt='A closer view of the center of the fresco: Christ in red and blue hands the keys to the kneeling Peter, surrounded by apostles in colored robes, with the pavement’s receding lines leading back to the round domed temple behind them.',
    caption='Detail: Christ hands the keys to Peter at the center of the pavement. The lines of the paving stones meet at a single point behind the figures — the vanishing point',
    credit=dict(word='Detail photo', url='', author='Pietro Perugino', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the central group.')),
  intro='Pope Sixtus IV called Pietro Perugino and a team of other painters down from Umbria in 1481 to decorate the walls of his newly built chapel in the Vatican. This fresco was one of the first he finished, painted in 1481 or 1482. The subject came from the Gospel of Matthew: Christ handing Peter the keys that make him the first pope. The round temple in the background is Perugino’s invention — a classical building designed to recall the Temple of Jerusalem.',
  context=[
    {"term":"Vanishing point","pron":"","def":"The single point on the horizon where parallel lines running back into a picture appear to meet. Italian Renaissance artists used it to show real space on a flat surface."},
    {"term":"Fresco","pron":"","def":"A painting technique where colored pigments are brushed onto wet plaster so the color becomes part of the wall once it dries. Used for most large-scale Italian Renaissance wall paintings."},
    {"term":"Symmetry","pron":"","def":"An arrangement where the parts on one side of a center line match the parts on the other side. Italian Renaissance painters and architects prized symmetry as a sign of order and calm."},
  ],
  clues=[
    {"id":"vanish","label":"Vanishing point","def":"The spot where the paving lines meet, behind the central figures."},
    {"id":"fresco","label":"Fresco","def":"The whole painted wall, from edge to edge."},
    {"id":"symmetry","label":"Symmetry","def":"The matching halves of the composition, left and right."},
  ],
  closing='How does the setting of a vast empty plaza change the way you read the small central event of handing over the keys?',
  zones=dict(
    vanish=[dict(x0=47,y0=35,x1=55,y1=45)],
    fresco=[dict(x0=2,y0=2,x1=98,y1=98)],
    symmetry=[dict(x0=5,y0=40,x1=95,y1=80)],
  ),
  credit=dict(word='Photo', url='', author='Pietro Perugino', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE20', id='RE-20', kind='Tempera painting', wide=True, title='A Goddess Blown to Shore',
  object='The Birth of Venus',
  work='The Birth of Venus', date='about 1485 C.E.',
  location='Uffizi Gallery, Florence', artist='Sandro Botticelli',
  headline='Look closely at the painting',
  alt='A wide tempera painting on canvas. In the center, the nude goddess Venus stands on a giant scallop shell that floats on a calm blue-green sea. Her long gold hair falls over her shoulder and she covers herself with one hand. On the left, the wind god Zephyr, wrapped around a smaller female figure, blows her toward the shore; pink roses scatter in the air. On the right, a woman in a flower-patterned dress waits to clothe her with a billowing pink cloak.',
  image='public/images/artworks/Botticelli-Venus.jpg',
  imageNote='A tempera painting on canvas, about 5.5 by 9 feet (172 × 278 cm). Botticelli probably painted it for a Medici family villa outside Florence; it hangs today in the Uffizi, two rooms away from his Primavera.',
  detail=dict(image='public/images/artworks/Botticelli-Venus-Detail1.jpg',
    alt='A close view of the goddess Venus at the center of the painting: her long gold hair, her raised hand covering her chest, her quiet face turned slightly to the side.',
    caption='Detail: Venus at the center of the painting — her long gold hair and the quiet tilt of her head',
    credit=dict(word='Detail photo', url='', author='Sandro Botticelli', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the central figure.')),
  detail2=dict(image='public/images/artworks/Botticelli-Venus-Zephyr.jpg',
    alt='A close view of the wind god Zephyr at the left side of the painting: a muscular figure with blue wings, wrapped around a smaller female figure. His cheeks puff out as he blows a stream of air toward Venus, and pink roses fall around them.',
    caption='Detail: Zephyr at the left side of the painting, blowing Venus toward the shore, with the nymph Chloris in his arms and pink roses in the air',
    credit=dict(word='Detail photo', url='', author='Sandro Botticelli', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the left-side figures.')),
  intro='Botticelli painted this large canvas in Florence around 1485, probably for a member of the Medici family. The subject is the birth of Venus, the ancient Roman goddess of love: blown to shore on a shell by the west wind Zephyr and his companion Chloris, and received by an attendant with a pink cloak. Classical subjects like this were a new idea in Italian painting — Botticelli was one of the first painters since antiquity to make a large picture of an ancient Roman goddess rather than a Christian scene.',
  context=[
    {"term":"Tempera","pron":"TEM-pur-uh","def":"A paint made from powdered pigment mixed with egg yolk and water. It dries quickly to a matte finish and was the usual paint of European painters before oil replaced it in the 1400s and 1500s."},
    {"term":"Mythological","pron":"mith-uh-LOJ-i-kul","def":"A picture whose subject comes from ancient Greek or Roman myths — the stories of their gods and heroes — rather than from the Bible or the lives of saints."},
    {"term":"Zephyr","pron":"ZEF-ur","def":"The ancient Greek and Roman name for the gentle west wind, often shown in art as a winged male figure."},
  ],
  clues=[
    {"id":"venus","label":"Venus on the shell","def":"The nude goddess standing in the center on a scallop shell."},
    {"id":"zephyr","label":"Zephyr blowing","def":"The winged figure on the left blowing wind toward Venus."},
    {"id":"attendant","label":"The attendant","def":"The woman on the right with a pink cloak, waiting to clothe Venus."},
  ],
  closing='What makes this painting feel ancient and new at the same time?',
  zones=dict(
    venus=[dict(x0=38,y0=18,x1=63,y1=90)],
    zephyr=[dict(x0=0,y0=12,x1=35,y1=55)],
    attendant=[dict(x0=65,y0=15,x1=100,y1=80)],
  ),
  credit=dict(word='Photo', url='', author='Sandro Botticelli', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE21', id='RE-21', kind='Tempera painting', title='A Body That Reaches Toward You',
  object='The Dead Christ',
  work='The Dead Christ', date='about 1480 C.E.',
  location='Pinacoteca di Brera, Milan', artist='Andrea Mantegna',
  headline='Look closely at the painting',
  alt='A small tempera painting on canvas. The dead body of Christ lies on a marble slab, his feet pointing straight toward the viewer and his head at the back of the picture. His body is shown in sharp perspective so the feet look almost life-size and the head looks smaller and farther away. The soles of his feet, with dark nail wounds, fill the foreground. At the upper left, three mourning figures with lined faces press in close.',
  image='public/images/artworks/Mantegna-Christ.jpg',
  imageNote='A small tempera painting on canvas, about 27 by 32 inches (68 × 81 cm). Christ’s body rests on a marble anointing slab; the three mourners at the upper left are traditionally identified as Mary, the mother of Jesus, Saint John the Evangelist, and Mary Magdalene.',
  detail=dict(image='public/images/artworks/Mantegna-Mourners.jpg',
    alt='A close view of the three mourners at the upper left of the painting: lined, grieving faces pressed close together, their mouths slightly open.',
    caption='Detail: the three mourners at the upper left of the painting, their faces lined and wet with tears',
    credit=dict(word='Detail photo', url='', author='Andrea Mantegna', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the upper-left figures.')),
  detail2=dict(image='public/images/artworks/Mantegna-Feet.jpg',
    alt='A close view of Christ’s feet in the lower foreground: the soles turned toward the viewer, with the dark holes of the nail wounds visible on each foot.',
    caption='Detail: Christ’s feet in the lower foreground, with the dark holes of the nail wounds visible',
    credit=dict(word='Detail photo', url='https://commons.wikimedia.org/wiki/File:Mantegna_Cristo_morto_dettaglio.jpg', author='Francesco Bini', license='CC BY-SA 4.0', licenseUrl='https://creativecommons.org/licenses/by-sa/4.0/', changes='Close crop from a photograph of the painting.')),
  intro='Andrea Mantegna painted this small picture in northern Italy around 1480, probably for his own use rather than for a patron. It was found in his workshop after his death in 1506. Mantegna was trained in Padua, where artists studied the remains of ancient Roman sculpture and architecture, and he became one of the most inventive painters of his generation in the handling of the human body in space. The painting entered the Brera collection in Milan in the 19th century.',
  context=[
    {"term":"Foreshortening","pron":"FOR-shor-ten-ing","def":"A method of drawing an object or figure in extreme perspective, with its length sharply compressed."},
    {"term":"Lamentation","pron":"lam-en-TAY-shun","def":"The mourning of Christ after he is taken down from the cross. A subject often painted in Christian art, in which his family and followers gather around his body before he is laid in the tomb."},
    {"term":"Tempera","pron":"TEM-pur-uh","def":"A paint made from powdered pigments mixed with egg yolk and water. It dries quickly to a matte finish and was the most common paint of European painters for centuries, before oil paint replaced it in the 1400s and 1500s."},
  ],
  clues=[
    {"id":"foreshort","label":"Foreshortening","def":"Christ’s body stretched from feet to head."},
    {"id":"lamentation","label":"Lamentation","def":"The three mourning figures at the upper left."},
    {"id":"slab","label":"Anointing slab","def":"The stone slab beneath Christ’s body."},
  ],
  closing='Why would Mantegna put Christ’s feet, and not his head, nearest to the viewer?',
  zones=dict(
    foreshort=[dict(x0=15,y0=30,x1=85,y1=90)],
    lamentation=[dict(x0=0,y0=5,x1=40,y1=35)],
    slab=[dict(x0=5,y0=55,x1=95,y1=98)],
  ),
  credit=dict(word='Photo', url='', author='Andrea Mantegna', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE22', id='RE-22', kind='Tempera mural', wide=True, title='A Room Where the Lines Meet',
  object='The Last Supper',
  work='The Last Supper', date='1495–1498 C.E.',
  location='Santa Maria delle Grazie, Milan', artist='Leonardo da Vinci',
  headline='Look closely at the mural',
  alt='A very wide painting covering the entire end wall of a long dining hall. Christ sits at the center of a long table, with his twelve apostles grouped three on each side of him in four clusters. Behind the table, the back wall opens into a long room with coffered ceilings, windows on either side of Christ’s head, and a distant landscape through the center window. The lines of the ceiling and the side walls appear to run toward a point directly behind Christ.',
  image='public/images/artworks/Leonardo-LastSupper.jpg',
  imageNote='A wall painting made with experimental paints applied to dry plaster, about 15 by 29 feet (460 × 880 cm). It covers the whole end wall of the dining room (refectory) of the Dominican friary attached to the church of Santa Maria delle Grazie in Milan.',
  detail=dict(image='public/images/artworks/Leonardo-LastSupper-Detail1.jpg',
    alt='A close view of the central three figures: Christ in red and blue at the center with hands open on the table, Judas leaning back with a bag of silver held behind him, Peter leaning in behind Judas with a knife in his hand.',
    caption='Detail: Christ at the center, with Judas (leaning back, gripping a bag of silver) and Peter (behind, holding a knife) in the first group to his right',
    credit=dict(word='Detail photo', url='', author='Leonardo da Vinci', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the central group.')),
  detail2=dict(image='public/images/artworks/Leonardo-LastSupper-Detail2.jpg',
    alt='A close view of the landscape visible through the central window behind Christ’s head: distant hills and sky in soft, hazy blue.',
    caption='Detail: the landscape framed by the window behind Christ’s head — soft, hazy blue hills typical of Leonardo’s treatment of distant space',
    credit=dict(word='Detail photo', url='', author='Leonardo da Vinci', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the window and distant landscape.')),
  intro='Duke Ludovico Sforza of Milan commissioned Leonardo to paint this scene on the wall of a monastery dining room in 1495. Leonardo worked on it for three years, painting in an experimental mixture of oil and tempera applied to dry plaster rather than the standard fresco technique. The paint began to flake within twenty years. The subject — Christ sharing his last meal with his apostles and announcing that one of them will betray him — is set in a room whose architecture Leonardo painted as a continuation of the real dining hall below.',
  context=[
    {"term":"One-point perspective","pron":"","def":"A perspective arrangement in which all receding lines in a picture meet at a single vanishing point directly in front of the viewer."},
    {"term":"Refectory","pron":"re-FEK-to-ree","def":"The dining hall of a monastery, convent, or college. This painting covers the whole end wall of one."},
    {"term":"Composition","pron":"","def":"How an artist arranges the parts of a picture. In this one, the twelve apostles are grouped into four sets of three around the single central figure of Christ."},
  ],
  clues=[
    {"id":"christ","label":"Christ at center","def":"The still figure at the middle of the long table."},
    {"id":"groups","label":"Four groups of three","def":"The twelve apostles split into four clusters, two on each side."},
    {"id":"vanish","label":"Vanishing point","def":"The spot behind Christ’s head where the ceiling and wall lines meet."},
  ],
  closing='Why would Leonardo make Christ’s head the exact point where every line in the room converges?',
  zones=dict(
    christ=[dict(x0=43,y0=28,x1=57,y1=70)],
    groups=[dict(x0=5,y0=30,x1=95,y1=78)],
    vanish=[dict(x0=47,y0=32,x1=53,y1=42)],
  ),
  credit=dict(word='Photo', url='', author='Leonardo da Vinci', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE23', id='RE-23', kind='Marble sculpture', title='The Giant Who Shows His Nerves',
  object='David',
  work='David', date='1501–1504 C.E.',
  location='Galleria dell’Accademia, Florence', artist='Michelangelo Buonarroti',
  headline='Look closely at the sculpture',
  alt='A waist-up view of a towering white marble statue of the young David, carved from a single block. He stands turned slightly to one side, looking off into the distance over his left shoulder with a frown. His sling is slung over his left shoulder; his right hand, oversized, hangs down against his thigh with a stone held loosely. His neck muscles are tensed, his brow furrowed, the vein on his right hand swollen.',
  image='public/images/artworks/Michelangelo-David.jpg',
  imageNote='A sculpture carved from a single block of Carrara marble, about 17 feet tall (5.2 m) — three times life size. It was commissioned for one of the buttresses of Florence Cathedral but the city placed it in the main square in front of the town hall instead.',
  detail=dict(image='public/images/artworks/Michelangelo-David-Head.jpg',
    alt='A close view of David’s face: his furrowed brow, parted lips, and distant stare over his left shoulder. His hair is carved in thick, waving locks.',
    caption='Detail: David’s face — furrowed brow, tensed neck, and the distant stare that gives the figure its charged waiting energy',
    credit=dict(word='Detail photo', url='', author='Michelangelo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the head.')),
  detail2=dict(image='public/images/artworks/Michelangelo-David-Back.jpg',
    alt='A close view of David’s right hand and forearm: oversized, muscular, veins standing on the back of the hand, a stone held loosely in the fingers.',
    caption='Detail: David’s right hand — oversized for the body, veins standing on the back of the hand, a stone held loosely before the throw',
    credit=dict(word='Detail photo', url='', author='Michelangelo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the right hand.')),
  intro='The city of Florence gave Michelangelo the commission for this statue in 1501, when he was twenty-six. He worked on it for three years, carving it from a block of marble that had sat abandoned in the cathedral workshop for forty years. Florence had just thrown off the rule of the Medici family and faced bigger neighboring powers. David — a small shepherd who had defeated the giant Goliath — made a natural symbol for the city. The statue was placed in front of the town hall and became an image of Florentine resolve.',
  context=[
    {"term":"Colossal","pron":"kuh-LOS-ul","def":"Much larger than life size. This David stands about three times the height of a real person."},
    {"term":"Tension","pron":"","def":"The charged energy of a body or face that is about to act but has not acted yet. Michelangelo built it into David’s face, hand and neck."},
    {"term":"High Renaissance","pron":"","def":"The brief, intense period of Italian Renaissance art, roughly 1495–1527, when Leonardo, Michelangelo and Raphael were all working at the height of their powers."},
  ],
  clues=[
    {"id":"face","label":"The tensed face","def":"David’s furrowed brow and distant stare."},
    {"id":"hand","label":"The oversized hand","def":"David’s right hand, loose with a stone."},
    {"id":"sling","label":"The sling","def":"The strap slung over his left shoulder."},
  ],
  closing='Michelangelo carved David at the moment before the fight with Goliath, not after. How does that choice change what the figure stands for?',
  zones=dict(
    face=[dict(x0=35,y0=6,x1=70,y1=28)],
    hand=[dict(x0=48,y0=72,x1=78,y1=95)],
    sling=[dict(x0=15,y0=18,x1=48,y1=42)],
  ),
  credit=dict(word='Photo', url='', author='Michelangelo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE24', id='RE-24', kind='Fresco wall painting', wide=True, title='Fingers That Nearly Touch',
  object='Creation of Adam',
  work='Creation of Adam (from the Sistine Chapel ceiling)', date='1508–1512 C.E.',
  location='Sistine Chapel, Vatican City', artist='Michelangelo Buonarroti',
  headline='Look closely at the fresco',
  alt='A wide fresco panel from a painted ceiling. On the left, Adam reclines nude on a hillside, his torso turned toward the center, one leg bent. He stretches out his left arm with a limp hand. On the right, God the Father — an old man with white beard and hair, in a swirling pink robe — flies through the air, carried by a crowd of angels inside a billowing cloak. God reaches out his right index finger toward Adam’s. A small gap of empty space separates the two fingertips.',
  image='public/images/artworks/Michelangelo-CreationAdam.jpg',
  imageNote='A fresco painted on a central panel of the Sistine Chapel ceiling, about 9 by 18 feet (280 × 570 cm). Pope Julius II commissioned Michelangelo to paint the whole ceiling in 1508; he finished in October 1512.',
  detail=dict(image='public/images/artworks/Michelangelo-CreationAdam-Reaching.jpg',
    alt='A close view of the two hands reaching toward each other across a small gap: God’s right hand firm and extended, Adam’s left hand limp and hanging from the wrist.',
    caption='Detail: the two fingertips with the famous gap of about 5 cm between them — called one of the most poignant painted surfaces in all of Western art',
    credit=dict(word='Detail photo', url='', author='Michelangelo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the fingertips.')),
  detail2=dict(image='public/images/artworks/Michelangelo-CreationAdam-Hands.jpg',
    alt='A close view of God and the angels on the right half of the fresco: God with long white beard and hair, wrapped in pink robes, surrounded by nude angel figures all carried inside a large billowing cloak.',
    caption='Detail: God the Father carried by angels inside a billowing cloak — the shape of the cloak has been read as the outline of a human brain',
    credit=dict(word='Detail photo', url='', author='Michelangelo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the right-side figures.')),
  intro='Michelangelo painted this panel in 1511 or 1512 as part of a four-year commission to fresco the whole ceiling of Pope Julius II’s private chapel. He worked lying on his back on wooden scaffolding, with the paint dripping into his eyes. In the Book of Genesis, God creates Adam from dust and breathes life into him. Michelangelo gives the two figures the same proportions and treats them as equal in scale — a Renaissance idea called Christian Humanism, which held that human beings were made in the image of God.',
  context=[
    {"term":"Imago Dei","pron":"ee-MAH-go DAY-ee","def":"Latin for ‘the image of God.’ A central Christian idea that human beings were made in God’s image and share in his dignity. Michelangelo gives Adam and God the same proportions on this panel."},
    {"term":"Christian Humanism","pron":"","def":"The Renaissance movement that combined the new Humanist interest in classical Greek and Roman writers with the older Christian faith. Michelangelo was shaped by it."},
    {"term":"Fresco cycle","pron":"","def":"A series of frescoes painted across the walls or ceiling of a single room, telling connected stories. The Sistine ceiling is one of the most famous of all."},
  ],
  clues=[
    {"id":"gap","label":"The fingertips’ gap","def":"The small space between God’s and Adam’s outstretched fingers."},
    {"id":"adam","label":"Adam reclining","def":"The nude figure on the left, waiting to be given life."},
    {"id":"god","label":"God carried","def":"The old man on the right, flying inside the cloak of angels."},
  ],
  closing='Why do you think Michelangelo left a gap of five centimeters between the two fingers, when he could have let them touch?',
  zones=dict(
    gap=[dict(x0=43,y0=38,x1=58,y1=55)],
    adam=[dict(x0=5,y0=30,x1=45,y1=90)],
    god=[dict(x0=55,y0=10,x1=100,y1=85)],
  ),
  credit=dict(word='Photo', url='', author='Michelangelo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE25', id='RE-25', kind='Oil painting', title='Mary Rising in Red',
  object='Assumption of the Virgin',
  work='Assumption of the Virgin', date='1516–1518 C.E.',
  location='Santa Maria Gloriosa dei Frari, Venice', artist='Tiziano Vecellio (Titian)',
  headline='Look closely at the altarpiece',
  alt='A tall oil painting above a church altar. In three horizontal tiers: at the bottom, twelve apostles gather on a dark plot of ground, arms raised and faces turned upward. In the center, Mary rises on a cloud among a ring of angels, wearing a brilliant red robe, her blue cloak flying out behind her and her hands lifted. At the top, God the Father, golden and bearded, leans down from a burst of yellow light, reaching toward Mary’s crown.',
  image='public/images/artworks/Titian-Assumption.jpg',
  imageNote='An oil painting on wood panel, about 22 feet by 11 feet (690 × 360 cm). It still stands over the main altar of Santa Maria Gloriosa dei Frari in Venice, where Titian painted it and where generations of worshippers have knelt beneath it for more than five centuries.',
  detail=dict(image='public/images/artworks/Titian-Assumption-God.jpg',
    alt='A close view of God the Father at the top of the painting: a bearded elderly figure in gold robes leaning down from a burst of yellow light, with loose, visible brushwork.',
    caption='Detail: God the Father at the top of the painting — Titian’s loose, painterly brushwork is a mark of the Venetian school',
    credit=dict(word='Detail photo', url='', author='Titian', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the upper tier.')),
  detail2=dict(image='public/images/artworks/Titian-Assumption-Apostles.jpg',
    alt='A close view of the twelve apostles in the lower tier of the painting: a tight group of figures, many with arms raised and faces turned upward toward the rising Mary.',
    caption='Detail: the twelve apostles in the lower tier of the painting, cropped from the main image — their reaching gestures turn inward and upward toward the rising Mary',
    credit=dict(word='Detail photo', url='', author='Titian', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the lower tier.')),
  intro='Titian painted this altarpiece in Venice between 1516 and 1518 for the Franciscan church of Santa Maria Gloriosa dei Frari, where it still stands over the main altar. He was in his early thirties; the painting made his reputation across Europe within a few years. He went on to work for the Holy Roman Emperor Charles V, the French king, the Spanish king, and three popes, counted as the fourth of the great High Renaissance masters after Leonardo, Michelangelo, and Raphael.',
  context=[
    {"term":"Closed composition","pron":"","def":"An arrangement in which the figures turn inward toward the center of the picture. A compositional ideal of the High Renaissance, later broken by Baroque painters who let figures spill outward toward the viewer."},
    {"term":"Venetian colorism","pron":"","def":"An approach to painting developed in Venice, favoring rich color and the effects of light over the sharp line and drawing of Florence. Associated with the Venetian school of Titian and his contemporaries."},
    {"term":"Assumption","pron":"","def":"The Christian subject showing the Virgin Mary (Mary, the mother of Jesus) taken up to heaven, body and soul, at the end of her earthly life. One of the main scenes of Mary’s life in Christian art."},
  ],
  clues=[
    {"id":"closed","label":"Closed composition","def":"The figures and gestures turning inward toward the center."},
    {"id":"color","label":"Venetian color","def":"The brilliant reds, blues, and gold throughout."},
    {"id":"mary","label":"Mary rising","def":"Mary at the center, carried upward by angels."},
  ],
  closing='What is Titian doing with color that none of the Florentine painters you have met would have done?',
  zones=dict(
    closed=[dict(x0=5,y0=10,x1=95,y1=95)],
    color=[dict(x0=30,y0=35,x1=70,y1=70)],
    mary=[dict(x0=35,y0=32,x1=65,y1=68)],
  ),
  credit=dict(word='Photo', url='', author='Titian', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE26', id='RE-26', kind='Oil painting', title='A Deposition That Floats',
  object='Deposition from the Cross',
  work='Deposition from the Cross', date='1525–1528 C.E.',
  location='Capponi Chapel, Santa Felicita, Florence', artist='Jacopo da Pontormo',
  headline='Look closely at the altarpiece',
  alt='A tall oil altarpiece without a cross, a tomb, a ground line, or a clear setting. Figures in pink, blue and acid-green robes float together, their bodies twisted into S-shapes. In the center, the limp body of Christ is carried by a figure crouched on tiptoe. Around him, grieving women turn and lean. Mary swoons at the upper right, a blue-and-pink figure turning away in the foreground.',
  image='public/images/artworks/Pontormo-Deposition.jpg',
  imageNote='An oil painting on a tall arched panel, about 10 feet by 6.5 feet (313 × 192 cm), still hanging over the altar of the Capponi family chapel in the Florentine church of Santa Felicita, where Pontormo painted it to be seen by worshippers kneeling at the altar below.',
  detail=dict(image='public/images/artworks/Pontormo-Deposition-D1.jpg',
    alt='A close view of three long, narrow hands reaching across the center of the painting: pale, with long tapered fingers, overlapping one another.',
    caption='Detail: three hands reaching across the center of the painting — the long, tapered fingers typical of Pontormo and his generation',
    credit=dict(word='Detail photo', url='', author='Jacopo da Pontormo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the central hands.')),
  detail2=dict(image='public/images/artworks/Pontormo-Deposition-D2.jpg',
    alt='A close view of Mary at the center of the painting: her face drawn and wet with tears, her mouth slightly open. In front of her, a young woman in a pink dress turns her back to the viewer.',
    caption='Detail: Mary, the mother of Jesus, at the center of the painting, her face drawn and wet with tears, with a young woman in pink turning before her',
    credit=dict(word='Detail photo', url='', author='Jacopo da Pontormo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the central group.')),
  intro='Jacopo da Pontormo painted this altarpiece in Florence between 1525 and 1528 for the Capponi family chapel at the church of Santa Felicita, where it still hangs today. He was one of the leading figures of a new generation of Florentine painters called the Mannerists, who worked in the shadow of Michelangelo and Raphael. The painting shows a scene often called the Deposition — the moment Christ’s body is taken down from the cross.',
  context=[
    {"term":"Mannerism","pron":"","def":"An art movement in Europe from about 1520 to 1580. Mannerist artists broke with the calm balance of High Renaissance art."},
    {"term":"Figura serpentinata","pron":"feh-GOO-rah ser-pen-tee-NAH-tah","def":"Italian for ‘serpentine figure.’ A twisting, S-shaped human pose favored by Mannerist artists."},
    {"term":"Altarpiece","pron":"","def":"A large painting or carving placed above and behind the altar in a Christian church, often made of several joined panels that can open and close."},
  ],
  clues=[
    {"id":"serp","label":"Figura serpentinata","def":"The twisting, S-shaped poses of the figures."},
    {"id":"acid","label":"Acid palette","def":"The bright pinks, blues, and greens."},
    {"id":"elong","label":"Elongated bodies","def":"The stretched proportions of the figures."},
  ],
  closing='Compare this painting to Titian’s Assumption from only a few years earlier. How is Pontormo pulling against the ideals Titian worked within?',
  zones=dict(
    serp=[dict(x0=10,y0=15,x1=90,y1=95)],
    acid=[dict(x0=10,y0=10,x1=90,y1=95)],
    elong=[dict(x0=10,y0=10,x1=90,y1=95)],
  ),
  credit=dict(word='Photo', url='', author='Jacopo da Pontormo', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE27', id='RE-27', kind='Oil painting', title='Mary With a Neck Like a Swan',
  object='Madonna of the Long Neck',
  work='Madonna of the Long Neck', date='about 1534–1540 C.E.',
  location='Uffizi Gallery, Florence', artist='Girolamo Francesco Maria Mazzola (Parmigianino)',
  headline='Look closely at the altarpiece',
  alt='A tall oil altarpiece. In the center, Mary sits with an unnaturally long neck and elongated body, dressed in a shimmering blue-grey gown. A large sleeping infant Christ stretches across her lap, his body limp. On the left, a group of elegant adolescent angels press forward with a tall urn. In the lower right, a tiny figure of Saint Jerome stands unfinished beside the base of a single marble column; the rest of the setting fades out, incomplete.',
  image='public/images/artworks/Parmigianino-LongNeck.jpg',
  imageNote='An oil painting on wood panel, about 7 feet by 4.5 feet (219 × 135 cm). The lower edge and the small figure of Saint Jerome at the lower right are unfinished — Parmigianino died in 1540 before completing the work.',
  detail=dict(image='public/images/artworks/Parmigianino-LongNeck-D1.jpg',
    alt='A close view of the sleeping Christ child stretched across Mary’s lap, limp and overlong, with the attendant angels pressed in from the left of the painting.',
    caption='Detail: the sleeping Christ child stretched across Mary’s lap, with the attendant angels at the left of the painting',
    credit=dict(word='Detail photo', url='https://commons.wikimedia.org/wiki/File:Parmigianino_015.jpg', author='Francesco Bini', license='CC BY-SA 4.0', licenseUrl='https://creativecommons.org/licenses/by-sa/4.0/', changes='Close crop from a photograph of the altarpiece.')),
  detail2=dict(image='public/images/artworks/Parmigianino-LongNeck-D2.jpg',
    alt='A close view of Mary’s right hand and forearm: long slender fingers, an elongated wrist. The hand is drawn much longer than life.',
    caption='Detail: Mary’s right hand and forearm — fingers and wrist drawn much longer than life',
    credit=dict(word='Detail photo', url='https://commons.wikimedia.org/wiki/File:Parmigianino_015.jpg', author='Francesco Bini', license='CC BY-SA 4.0', licenseUrl='https://creativecommons.org/licenses/by-sa/4.0/', changes='Close crop from a photograph of the altarpiece.')),
  intro='Parmigianino painted this altarpiece in the Italian city of Parma between 1534 and 1540 for a private chapel in the church of Santa Maria dei Servi. He died in 1540 before finishing the painting, as the incomplete lower edge and the small figure of Saint Jerome at the right show. The painting passed to the Medici family in Florence in the 17th century and hangs today in the Uffizi Gallery, considered one of the clearest statements of Mannerist taste.',
  context=[
    {"term":"Grazia","pron":"GRAHT-syah","def":"Italian for ‘grace’ or ‘elegance.’ A central ideal of Mannerist art: refined, poised, slightly artificial beauty."},
    {"term":"Elongation","pron":"","def":"The stretching of figures and features beyond natural proportion, favored by Mannerist painters."},
    {"term":"Madonna","pron":"","def":"Italian for ‘my lady.’ The Christian subject showing Mary, the mother of Jesus, usually with the Christ child."},
  ],
  clues=[
    {"id":"grazia","label":"Grazia","def":"The poised, elegant postures of the figures."},
    {"id":"elong","label":"Elongation","def":"The long neck, long body, long fingers."},
    {"id":"infant","label":"Oversized infant","def":"The large baby across Mary’s lap."},
  ],
  closing='Mannerist painters knew the High Renaissance ideals — they chose to bend them. Why would an artist bend ideals he already knew how to follow?',
  zones=dict(
    grazia=[dict(x0=10,y0=10,x1=90,y1=90)],
    elong=[dict(x0=40,y0=15,x1=65,y1=70)],
    infant=[dict(x0=25,y0=45,x1=70,y1=85)],
  ),
  credit=dict(word='Photo', url='', author='Parmigianino', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE28', id='RE-28', kind='Architecture', title='A Villa with Four Faces',
  object='Villa Rotonda',
  work='Villa Rotonda (Villa Almerico–Capra)', date='1566–1570 C.E.',
  location='hilltop outside Vicenza, Italy', artist='Andrea Palladio',
  headline='Look closely at the villa',
  alt='A country villa seen from one corner. Two columned entrance porches with triangular pediments are visible, one on each visible face. A small shallow dome rises above the center of the building. Classical statues stand along the edges of each pediment. Green lawn in the foreground, grey-blue sky behind.',
  image='public/images/artworks/Palladio-Rotonda.jpg',
  imageNote='A country villa built of stone and stucco, about 80 feet square at the base of its porticos. Two of the four identical porticos are visible in the view above; the central hall rises into a shallow dome at the heart of the villa.',
  detail=dict(image='public/images/artworks/Palladio-Rotonda-Section.jpg',
    alt='An architectural section drawing of the villa, showing a cross-section cut through the center: the round central hall rising into the dome, with the two opposite porticos and their staircases on either side.',
    caption='Detail: an architectural section cut through the villa, showing the central domed hall and the staircases of two opposite porticos',
    credit=dict(word='Detail', url='', author='after Vincenzo Scamozzi', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Historical engraving of the villa’s cross-section, published 1778.')),
  detail2=dict(image='public/images/artworks/Palladio-Rotonda-Plate.jpg',
    alt='A page from Palladio’s Four Books of Architecture (1570). The top half shows the villa’s floor plan: a round central hall with four identical porticos radiating out, one on each face. The bottom half shows the front elevation.',
    caption='Detail: the page from Palladio’s Four Books of Architecture (Venice, 1570), showing the floor plan (top — four porticos radiating from the central circular hall) and the front elevation (bottom)',
    credit=dict(word='Detail', url='', author='Andrea Palladio, I Quattro Libri dell’Architettura (Venice, 1570), Book 2, page 19', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Plate from the Metropolitan Museum of Art, Open Access collection.')),
  intro='Andrea Palladio designed this country villa in the Veneto for Paolo Almerico, a retired canon of the papal court, on a hilltop just outside the town of Vicenza. Construction began in 1566, in a tradition of centrally planned Renaissance buildings that stretched back to Bramante’s Tempietto of sixty years earlier. Palladio died in 1580 before the villa was finished; his pupil Vincenzo Scamozzi completed it. Palladio had already published the design in his Four Books of Architecture in 1570, and the book carried his villa to architects across Europe for the next 250 years — including Thomas Jefferson, who studied it while designing Monticello.',
  context=[
    {"term":"Villa","pron":"","def":"A country residence of a wealthy Renaissance family, usually with land or a garden attached. Distinct from a palazzo, which is a town or urban residence."},
    {"term":"Portico","pron":"POR-ti-koh","def":"A roofed entrance porch supported by columns. A feature of ancient Greek and Roman temples carried forward into Renaissance architecture."},
    {"term":"Central plan","pron":"","def":"A building organized symmetrically around a central point, so that it looks the same from each of its main directions. The alternative is the longitudinal plan, with one long axis, used in most Christian churches."},
  ],
  clues=[
    {"id":"portico","label":"Portico","def":"A columned entrance porch on the front of the villa."},
    {"id":"dome","label":"Dome","def":"The round roof at the center of the villa."},
    {"id":"pediment","label":"Pediment","def":"The triangular gable above the portico, topped with statues."},
  ],
  closing='Think back to Bramante’s Tempietto. What has Palladio done with the central plan that Bramante did not?',
  zones=dict(
    portico=[dict(x0=48,y0=28,x1=85,y1=82)],
    dome=[dict(x0=35,y0=12,x1=58,y1=36)],
    pediment=[dict(x0=55,y0=25,x1=85,y1=42)],
  ),
  credit=dict(word='Photo', url='https://commons.wikimedia.org/wiki/File:Villa_Rotonda_side(2).jpg', author='Hans A. Rosbach', license='CC BY-SA 3.0', licenseUrl='https://creativecommons.org/licenses/by-sa/3.0/'),
)

card(
  var='RE29', id='RE-29', kind='Oil painting', title='The Painter as Gentleman',
  object='Self-Portrait at Twenty-Six',
  work='Self-Portrait at Twenty-Six', date='1498 C.E.',
  location='Museo del Prado, Madrid', artist='Albrecht Dürer',
  headline='Look closely at the self-portrait',
  alt='A tall oil portrait. A young man in his mid-twenties faces three-quarters toward the viewer, auburn hair falling in long curls past his shoulders. He wears a black-and-white striped soft cap with a long tassel, a striped silk gown with gold trim, kid-leather gloves, and a twisted cord around his shoulders. Through a window on the right, a distant landscape of blue Alpine mountains is visible. A gold inscription with a date sits in the upper right.',
  image='public/images/artworks/Durer-Self26.jpg',
  imageNote='An oil painting on wood panel, about 20 by 16 inches (52 × 41 cm). The inscription at the upper right gives the date 1498, the artist’s name, and his age — twenty-six.',
  detail=dict(image='public/images/artworks/Durer-Self26-Inscription.jpg',
    alt='A close view of the gold inscription at the upper right of the painting: the date 1498, three lines of German script, and the AD monogram beneath.',
    caption='Detail: the gold inscription at the upper right — the date 1498, the German text ‘das malt ich nach meiner gestalt / Ich was sex und zwenzig Jor alt’ (‘I painted this after my own appearance; I was twenty-six years old’), and Dürer’s AD monogram',
    credit=dict(word='Detail photo', url='', author='Albrecht Dürer', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the inscription.')),
  detail2=dict(image='public/images/artworks/Durer-Self26-Eyes.jpg',
    alt='A close view of the painter’s eyes in extreme close-up. A fine web of hairline cracks — the age of the paint — crosses the surface.',
    caption='Detail: Dürer’s eyes in extreme close-up — the fine web of cracks across the paint surface is more than five hundred years of age showing through',
    credit=dict(word='Detail photo', url='', author='Albrecht Dürer', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the eyes.')),
  intro='Albrecht Dürer painted this self-portrait in Nuremberg in 1498, when he was 26 years old, just after his first trip to Venice. He was already running one of Europe’s most successful printmaking workshops, selling his woodcuts and engravings as far south as Spain and Italy — his fame had spread through prints before any of his paintings left German lands. The panel entered the Spanish royal collection in the seventeenth century and hangs today in the Prado in Madrid.',
  context=[
    {"term":"Self-portrait","pron":"","def":"A picture an artist makes of their own face. Renaissance artists began making them more often as the social position of the painter in Europe rose."},
    {"term":"Engraving","pron":"","def":"A print made by cutting lines into a copper plate, inking those lines, and pressing paper onto the plate. One plate produces many identical copies."},
    {"term":"Monogram","pron":"","def":"An artist’s name worked into a small design of combined letters, used as a signature. Renaissance printmakers began using them as prints carried their names across Europe."},
  ],
  clues=[
    {"id":"self","label":"Self-portrait","def":"The painter’s own face and figure at the center of the panel."},
    {"id":"alps","label":"Alpine landscape","def":"The mountainous view through the window at right."},
    {"id":"inscr","label":"Inscription","def":"The gold writing with the AD monogram, upper right."},
  ],
  closing='Dürer paints himself like an Italian gentleman, not a working German craftsman. What do you think he was claiming?',
  zones=dict(
    self=[dict(x0=22,y0=5,x1=80,y1=98)],
    alps=[dict(x0=78,y0=22,x1=98,y1=50)],
    inscr=[dict(x0=70,y0=35,x1=90,y1=50)],
  ),
  credit=dict(word='Photo', url='', author='Albrecht Dürer', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

card(
  var='RE30', id='RE-30', kind='Oil painting', wide=True, title='A Portrait That Hides a Skull',
  object='The Ambassadors',
  work='The Ambassadors', date='1533 C.E.',
  location='National Gallery, London', artist='Hans Holbein the Younger',
  headline='Look closely at the portrait',
  alt='A nearly square oil painting of two men standing full-length on either side of a two-tiered shelf of objects. On the left, a bearded man in a black fur-trimmed robe with a pink silk shirt, a gold chain across his chest; on the right, a younger man in a dark brown fur robe resting his elbow on books. On the top shelf: a celestial globe, a polyhedral sundial, and other astronomical instruments. On the bottom shelf: a terrestrial globe, a lute, an open hymnal, a flute case, and books. Across the tiled floor in the foreground, a long, distorted grey shape stretches at an angle — an anamorphic skull.',
  image='public/images/artworks/Holbein-Ambassadors.jpg',
  imageNote='An oil painting on wood panel, about 6 feet 10 inches square (207 × 209 cm) — nearly life-size. Dinteville stands at the left, de Selve at the right, with a two-tiered shelf of objects between them and a stretched form across the tiled floor in the foreground.',
  detail=dict(image='public/images/artworks/Holbein-Ambassadors-TopShelf.jpg',
    alt='A close view of the top shelf: a celestial globe showing the stars, a polyhedral sundial, and several brass instruments for measuring the heavens, on a red oriental rug.',
    caption='Detail: the objects on the top shelf — a celestial globe showing the stars, a polyhedral sundial, and several instruments for measuring the heavens',
    credit=dict(word='Detail photo', url='', author='Hans Holbein the Younger', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Close crop of the upper shelf.')),
  detail2=dict(image='public/images/artworks/Holbein-Ambassadors-Skull.jpg',
    alt='A close view of the anamorphic skull as it appears from the right side of the painting at an acute angle — the stretched grey form on the floor resolves into a proper skull.',
    caption='Detail: the anamorphic skull as it appears from the right side of the painting at an acute angle — the stretched grey form on the floor resolves into a skull',
    credit=dict(word='Detail photo', url='', author='Hans Holbein the Younger', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/', changes='Photographed from the oblique viewing angle.')),
  intro='Hans Holbein the Younger painted this double portrait in London in 1533 for Jean de Dinteville, the French ambassador to the court of Henry VIII. The other figure is Georges de Selve, the young bishop of Lavaur, who had come to London that year on a diplomatic visit. Holbein was becoming the most sought-after portrait painter of the Tudor court; he died in London of plague in 1543. The painting hung for centuries at Dinteville’s family chateau in Burgundy and was bought by the National Gallery in London in 1890.',
  context=[
    {"term":"Anamorphosis","pron":"an-uh-MOR-fuh-sis","def":"A distorted image that resolves into a recognizable form only when viewed from a specific angle, usually acute from one side."},
    {"term":"Vanitas","pron":"VAN-i-tas","def":"A Northern Renaissance and Baroque picture whose objects — skulls, candles, clocks, flowers — remind the viewer that life is brief."},
    {"term":"Still life","pron":"","def":"A picture of arranged inanimate objects (fruit, flowers, books, musical instruments) rather than of people or landscapes."},
  ],
  clues=[
    {"id":"amb","label":"The ambassadors","def":"The two men standing on either side of the shelves."},
    {"id":"still","label":"Still life","def":"The objects arranged on the two shelves between them."},
    {"id":"skull","label":"Anamorphic skull","def":"The stretched grey form across the tiled floor in the foreground."},
  ],
  closing='Holbein painted the two ambassadors with every instrument of human knowledge between them — and then painted a stretched skull across the floor. What did he want the viewer to think, standing in front of this?',
  zones=dict(
    amb=[dict(x0=5,y0=15,x1=95,y1=90)],
    still=[dict(x0=25,y0=28,x1=75,y1=72)],
    skull=[dict(x0=15,y0=78,x1=85,y1=98)],
  ),
  credit=dict(word='Photo', url='', author='Hans Holbein the Younger', license='Public domain', licenseUrl='https://creativecommons.org/publicdomain/mark/1.0/'),
)

# ------------------------------------------------------------------
# VOC CARDS — 5 Renaissance VOC entries (revise VOC-11, add 4 new)
# ------------------------------------------------------------------

VOC = [
  # VOC-RE-1 — revised VOC-11 Perspective (now uses RE-19 Perugino)
  dict(id="VOC-11", after=12, word="Perspective",
       crumb=CRUMB_RE,
       pron=None,
       def_="A technique Italian Renaissance artists worked out for showing deep space on a flat surface. Lines along floors, walls and ceilings appear to run toward a single point on the horizon — the vanishing point — and figures and objects farther back are drawn smaller, as the eye sees them.",
       look=[
         "Do the lines of a floor, wall or ceiling seem to run toward one spot in the picture?",
         "Do figures and objects farther back look smaller than those in front?",
         "Can you find where the running lines meet — the vanishing point?"
       ],
       example=dict(id="RE-19", points=[
         "The lines of the paving stones all run toward a single point behind Christ at the center of the picture. That meeting point is the vanishing point.",
         "The figures across the front stand on the same ground line and are all drawn at roughly the same size, so the eye accepts them as near the viewer.",
         "The two round temple buildings and the figures in the plaza behind them are drawn much smaller than the foreground figures, so the plaza reads as deep real space."
       ]),
       correct=1,
       options=["RE-14","RE-19","RE-21"]),
  dict(id="VOC-RE-2", after=7, word="Contrapposto",
       crumb=CRUMB_RE,
       pron="kon-truh-POS-toh",
       def_="A standing pose in which a figure rests its weight on one leg, letting the other leg relax. The hips tilt toward the weight-bearing side and the shoulders tilt the other way, so the body makes a gentle S-curve. Ancient Greek sculptors invented the pose; Italian Renaissance sculptors revived it after a thousand years of stiffer, frontal figures.",
       look=[
         "Does the figure stand with its weight on one leg, letting the other leg bend or relax?",
         "Do the hips tilt one way and the shoulders tilt the other way, so the body curves gently?",
         "Does the figure look like it could take a step forward, instead of standing stiffly facing front?"
       ],
       example=dict(id="RE-15", points=[
         "The figure’s weight rests on one leg, with the other leg bent at the knee — look how the hip on the weight-bearing side rises higher than the other.",
         "The shoulders tilt in the opposite direction from the hips, so the torso curves softly from one side to the other.",
         "The whole body looks still but ready to move — that is what contrapposto gives a figure that stiff frontal figures from earlier medieval sculpture do not have."
       ]),
       correct=2,
       options=["RE-02","RE-05","RE-15"]),
  dict(id="VOC-RE-3", after=18, word="Sfumato",
       crumb=CRUMB_RE,
       pron="sfoo-MAH-toh",
       def_="An Italian Renaissance painting technique that blends colors and tones so softly that no lines or hard edges remain. Forms seem to emerge from and dissolve into shadow, ‘like smoke’ — the literal meaning of the Italian word sfumato.",
       look=[
         "Do the edges of faces, lips and eyes fade softly into the surrounding skin and shadow, rather than meeting a hard line?",
         "Does the skin seem modeled in continuous tones, with no outline marking where light meets shadow?",
         "Do the far parts of the picture look softer, almost misty, as if seen through a thin veil of air?"
       ],
       example=dict(id="RE-11", points=[
         "The corners of her mouth fade into soft shadow without a clear outline. That is why her smile seems to change as you keep looking.",
         "The edges of her eyes dissolve into her brow and cheek shadows — no hard line tells you where one ends and the next begins.",
         "The transition from the light on her forehead and cheek to the shadow at her jaw is continuous, with no visible dividing line between light and dark."
       ]),
       correct=1,
       options=["RE-16","RE-11","RE-21"]),
  dict(id="VOC-RE-4", after=21, word="Classical revival",
       crumb=CRUMB_RE,
       pron=None,
       def_="The deliberate return of Renaissance artists and architects to the forms and ideas of ancient Greece and Rome. Classical columns, round arches, domes, pediments and balanced human figures replace the pointed arches and stylized figures of the Middle Ages. This return is what gives the Renaissance its name — the French word for ‘rebirth.’",
       look=[
         "Does the building use ancient Greek or Roman forms — columns, round arches, pediments, domes?",
         "Is the composition symmetrical and balanced, with matching elements on both sides of a central axis?",
         "Does the work look as if it belongs to the ancient world, not to the medieval one before it?"
       ],
       example=dict(id="RE-28", points=[
         "The plan shows four identical porticos — columned entrances with triangular pediments — radiating out from a central round hall, one on each face of the villa. The porticos quote directly from the fronts of ancient Roman temples.",
         "At the heart of the plan is the round central hall, under a dome whose shape goes back to the Pantheon in Rome, built about 1,400 years earlier.",
         "The plan shows perfect four-way symmetry: from the central hall, the four porticos extend identically in all four directions. A classical ideal of geometric balance."
       ]),
       correct=2,
       options=["RE-07","RE-03","RE-28"]),
  dict(id="VOC-RE-5", after=20, word="Humanism",
       crumb=CRUMB_RE,
       pron=None,
       def_="The Renaissance idea that human beings — their bodies, their minds, their stories and achievements — are worthy subjects for art and thought. Renaissance humanists read ancient Greek and Roman writers and believed people could aspire to the dignity and beauty of the ancient world. In art, the human figure became as central a subject as scenes from the Bible.",
       look=[
         "Does the human figure stand at the center of the picture, as a subject in its own right?",
         "Is the body modeled with care — real proportions, weight, and anatomy — rather than simplified as a symbol?",
         "Does the subject come from ancient myth, history or everyday life, rather than only from the Bible?"
       ],
       example=dict(id="RE-20", points=[
         "The central figure is Venus, the goddess of love from ancient Roman myth — not Mary, not a saint, not a figure from the Bible. Classical subject matter returning after a thousand years of mostly religious painting.",
         "The goddess stands at the center of her own picture with quiet dignity. Her body is drawn with the careful proportions ancient Greek sculptors gave their gods.",
         "The whole scene — the wind god blowing her ashore, the attendant rushing to clothe her — illustrates an ancient myth the painter had read in its original Greek and Latin. Renaissance humanists treated the classical texts as a key to understanding human beauty."
       ]),
       correct=1,
       options=["RE-10","RE-20","RE-23"]),
]

# Sort VOC entries by 'after' so the array matches play-order reading
VOC.sort(key=lambda v: v["after"])

# ------------------------------------------------------------------
# REV-RE CAPSTONE (new ceremonial format, flagged capstone:true)
# ------------------------------------------------------------------

REV = dict(
  id="REV-RE",
  capstone=True,
  crumb=CRUMB_RE,
  title="Renaissance Case File",
  banner=dict(
    eyebrow="CASE FILE REVIEW · NOVICE · 30 CASES",
    closed="CLOSED · CIRCA 1400 – 1600 C.E.",
    sealCount=30
  ),
  intro=[
    "You have reached the end of the Renaissance Case File. Across thirty cases you have met the artists, patrons and ideas that led European art from the gold-ground panels of the late Middle Ages to the dense symbolism of Holbein’s Ambassadors.",
    "This final case uses a single painting — Raphael’s School of Athens, finished in 1511 for the pope’s private library — to review the three ideas that run through every case you have played. Many of them stand together in this one picture."
  ],
  image="public/images/artworks/School.jpg",
  alt="Raphael’s fresco The School of Athens: a vast vaulted hall with round arches and coffered ceilings, a vanishing point behind the central figures. Dozens of ancient philosophers gather in groups across the marble floor, talking, reading, writing. Plato and Aristotle walk together at the center, framed by the arches receding into deep space.",
  caption="Raphael, The School of Athens, 1509–1511; fresco on the wall of the Stanza della Segnatura, Vatican. About 25 feet wide and 16 feet tall.",
  credit=dict(word="Photo", url="", author="Raphael", license="Public domain", licenseUrl="https://creativecommons.org/publicdomain/mark/1.0/"),
  words=[
    dict(term="Renaissance", def_="The European cultural movement from about 1400 to 1600 that returned to the forms and ideas of ancient Greece and Rome, after a thousand years of mostly religious medieval art."),
    dict(term="Humanism", def_="The Renaissance idea that human beings — their bodies, their minds, their stories and achievements — are worthy subjects of art and study in their own right."),
    dict(term="Classical revival", def_="The deliberate return to the columns, round arches, domes, pediments and balanced human figures of ancient Greek and Roman art.")
  ],
  traitsHead="Find the three Renaissance traits in this fresco",
  traitsSub="Click a trait to begin, then mark it on the painting above. For each, think back to another case where you saw the same trait.",
  traits=[
    dict(id="humanist", label="Humanist subject", hint="The gathering of ancient philosophers — a subject from the classical world, not the Bible.", color="teal", cases=[]),
    dict(id="perspective", label="Perspective", hint="The lines of the floor and ceiling arches running toward a single vanishing point.", color="rust", cases=[]),
    dict(id="classical", label="Classical architecture", hint="The great hall with its columns, round arches and vaulted ceiling.", color="violet", cases=[])
  ],
  bonus=dict(points=5, prompt="Name one Renaissance artist or idea from the deck that is not on this card, and say briefly why it mattered."),
  closeBtn="CLOSE THE RENAISSANCE CASE FILE",
  outro="Renaissance closed. The Baroque file opens next.",
  sourceNums=[]
)

# ------------------------------------------------------------------
# SEQUENCE ORDER (36 positions)
# ------------------------------------------------------------------

# cards only (30), in play order
CARD_ORDER = [
  "RE03","RE07","RE12","RE02","RE01","RE05",
  "RE15",                               # VOC-RE-2 Contrapposto after here (pos 7)
  "RE23","RE21","RE13","RE14",
  "RE19",                               # VOC-11 Perspective after here (pos 12)
  "RE08","RE22","RE16","RE10","RE24",
  "RE11",                               # VOC-RE-3 Sfumato after here (pos 18)
  "RE06",
  "RE20",                               # VOC-RE-5 Humanism after here (pos 20)
  "RE28",                               # VOC-RE-4 Classical revival after here (pos 21)
  "RE29","RE18","RE04","RE17","RE09",
  "RE25","RE27","RE26","RE30"
]
assert len(CARD_ORDER) == 30, f"Expected 30 cards in play order, got {len(CARD_ORDER)}"

# ------------------------------------------------------------------
# SERIALIZE TO JAVASCRIPT
# ------------------------------------------------------------------

def jsonify(v):
    """Compact JSON serialization that js can eval. Uses double-quoted strings."""
    return json.dumps(v, ensure_ascii=False, separators=(',', ':'))

def var_js(c):
    """Serialize one card dict into a `var RENN={...};\\nRENN.zones={...};` block."""
    V = c['var']
    # Build the object literal piece by piece to match existing style (unquoted keys, pretty)
    parts = []
    # Line 1: id, kind, optional wide, title, object, playable
    head = [f'id:"{c["id"]}"', f'kind:"{c["kind"]}"']
    if c.get('wide'): head.append('wide:true')
    head += [f'title:{jsonify(c["title"])}', f'object:{jsonify(c["object"])}', 'playable:true']
    parts.append('{' + ','.join(head) + ',')
    # Line 2: crumb
    parts.append(f' crumb:{jsonify(c.get("crumb", CRUMB_RE))},')
    # Line 3: work, date, location, artist
    parts.append(f' work:{jsonify(c["work"])},date:{jsonify(c["date"])},location:{jsonify(c["location"])},artist:{jsonify(c["artist"])},')
    # Line 4: headline
    parts.append(f' headline:{jsonify(c["headline"])},')
    # Line 5: alt
    parts.append(f' alt:{jsonify(c["alt"])},')
    # Line 6: enlarge (standard field in existing cards)
    parts.append(' enlarge:"Enlarge image",')
    # Line 7: image
    parts.append(f' image:{jsonify(c["image"])},')
    # Line 8: imageNote
    parts.append(f' imageNote:{jsonify(c["imageNote"])},')
    # detail
    d = c["detail"]
    parts.append(f' detail:{{image:{jsonify(d["image"])},alt:{jsonify(d["alt"])},caption:{jsonify(d["caption"])},credit:{jsonify(d["credit"])}}},')
    # detail2 (optional)
    if c.get("detail2"):
        d2 = c["detail2"]
        parts.append(f' detail2:{{image:{jsonify(d2["image"])},alt:{jsonify(d2["alt"])},caption:{jsonify(d2["caption"])},credit:{jsonify(d2["credit"])}}},')
    # size
    parts.append(' size:"",')
    # intro
    parts.append(f' intro:{jsonify(c["intro"])},')
    # context
    ctx = [{"term": t["term"], "pron": t.get("pron",""), "def": t["def"]} for t in c["context"]]
    parts.append(f' context:{jsonify(ctx)},')
    # clues
    parts.append(f' clues:{jsonify(c["clues"])},')
    # steps — match existing format
    parts.append(' steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],')
    # closing
    parts.append(f' closing:{jsonify(c["closing"])},')
    # bonus
    parts.append(' bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},')
    # guide
    feat_names = [cl["label"] for cl in c["clues"]]
    guide_names = ", ".join(feat_names[:-1]) + " and " + feat_names[-1] if len(feat_names) > 1 else feat_names[0]
    parts.append(f' guide:{jsonify(f"Evidence filed. {guide_names} are features a detective can carry to the next case.")},')
    # sourceNums
    parts.append(' sourceNums:[],')
    # credit
    parts.append(f' credit:{jsonify(c["credit"])}}};')
    body = '\n'.join(parts)
    zones_body = ',\n '.join(f'{k}:{jsonify(z)}' for k, z in c["zones"].items())
    return f'var {V}={body}\n{V}.zones={{\n {zones_body}\n}};'


def voc_js(v):
    """Serialize a VOC entry as JS object literal."""
    parts = [f'{{id:"{v["id"]}"', f'after:{v["after"]}', f'word:{jsonify(v["word"])}', f'crumb:{jsonify(v["crumb"])}']
    if v.get("pron"):
        parts.append(f'pron:{jsonify(v["pron"])}')
    parts.append(f'def:{jsonify(v["def_"])}')
    parts.append(f'look:{jsonify(v["look"])}')
    parts.append(f'example:{{id:"{v["example"]["id"]}",points:{jsonify(v["example"]["points"])}}}')
    parts.append(f'sourceNums:[]')
    opts = [{'case': o} for o in v['options']]
    parts.append(f'recognize:{{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:{v["correct"]},options:{jsonify(opts)}}}')
    return ','.join(parts) + '}'


def rev_js(r):
    """Serialize the capstone REV entry."""
    return jsonify(r)

# ------------------------------------------------------------------
# APPLY CHANGES
# ------------------------------------------------------------------

with open(CARDS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# 1. Update RE11 Mona Lisa detail from Hands to Face
old_re11_detail_pattern = r'(RE11=\{[^}]*)detail:\{image:"public/images/artworks/MonaLisa-Hands\.jpg",alt:"[^"]+",caption:"[^"]+"(?:,credit:\{[^}]*\})?\}'
m = re.search(r'(var RE11=\{.*?\};)', src, re.DOTALL)
if not m:
    print("WARN: could not find RE11 block")
else:
    re11_block = m.group(1)
    # Simple string replace within the RE11 block
    old_hands = '"public/images/artworks/MonaLisa-Hands.jpg"'
    new_face = '"public/images/artworks/MonaLisa-Face.jpg"'
    if old_hands in re11_block:
        new_block = re11_block.replace(old_hands, new_face)
        # Also update alt/caption to match face content
        new_block = re.sub(
            r'detail:\{image:"public/images/artworks/MonaLisa-Face\.jpg",alt:"[^"]+",caption:"[^"]+"',
            'detail:{image:"public/images/artworks/MonaLisa-Face.jpg",alt:"A close view of Mona Lisa’s face: the famous half-smile, the corners of the mouth and the eyes fading softly into shadow with no hard line. The fine web of cracks across the paint surface is more than five hundred years of age showing through.",caption:"Detail: Mona Lisa’s face — the smile, lip edges and eye corners where Leonardo’s sfumato is unmistakable"',
            new_block
        )
        src = src.replace(re11_block, new_block)
        print("RE11: MonaLisa-Hands.jpg → MonaLisa-Face.jpg")
    else:
        print("WARN: Hands image not found in RE11 block")

# 2. Append all new RE variable declarations (RE17..RE30)
#    Find the location: just before `window.DECKS[2].cards[0]=RE01;`
anchor = 'window.DECKS[2].cards[0]=RE01;'
if anchor not in src:
    print("ERROR: Could not find DECKS[2].cards[0] anchor")
    sys.exit(1)

re_blocks = '\n'.join(var_js(c) for c in CARDS)
src = src.replace(anchor, re_blocks + '\n' + anchor)
print(f"Appended {len(CARDS)} RE variable declarations before DECKS[2].cards assignments.")

# 3. Rewrite DECKS[2].cards assignments in play order
#    Remove existing lines window.DECKS[2].cards[0]=RE01; .. =RE16;
src = re.sub(r'window\.DECKS\[2\]\.cards\[\d+\]=RE\d+;\n?', '', src)
new_assignments = '\n'.join(f'window.DECKS[2].cards[{i}]={v};' for i, v in enumerate(CARD_ORDER))

# 4. Replace DECKS[2].vocab line
new_vocab = f'window.DECKS[2].vocab=[{",".join(voc_js(v) for v in VOC)}];'
if re.search(r'window\.DECKS\[2\]\.vocab=\[.*?\];', src, re.DOTALL):
    src = re.sub(r'window\.DECKS\[2\]\.vocab=\[.*?\];', new_vocab, src, flags=re.DOTALL)
    print("Replaced DECKS[2].vocab")
else:
    print("WARN: No DECKS[2].vocab line to replace, will append")
    src = src.rstrip() + '\n' + new_vocab + '\n'

# 5. Append REV-RE capstone
rev_line = f'window.DECKS[2].review={rev_js(REV)};'

# Insert new card assignments AND REV, grouped at the end
# Find end of file and add new block
src = src.rstrip() + '\n' + new_assignments + '\n' + rev_line + '\n'
print(f"Applied {len(CARD_ORDER)} card assignments in play order")
print("Appended REV-RE capstone")

with open(CARDS_PATH, 'w', encoding='utf-8') as f:
    f.write(src)

print("\nDONE. Wrote back to", CARDS_PATH)
print("File is now", os.path.getsize(CARDS_PATH), "bytes")
