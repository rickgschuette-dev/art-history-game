import re, sys

with open('content/cards.js', encoding='utf-8') as f:
    js = f.read()

original = js

def sreplace(text, old, new, card_id="?"):
    count = text.count(old)
    if count == 0:
        print(f"  ERROR [{card_id}]: not found: {repr(old[:70])}")
        return text
    if count > 1:
        print(f"  WARNING [{card_id}]: {count} matches, replacing first")
        return text.replace(old, new, 1)
    return text.replace(old, new)

def ctx_array(terms):
    entries = []
    for t, p, d in terms:
        entries.append('{term:"' + t + '",pron:"' + p + '",def:"' + d + '"}')
    return 'context:[' + ','.join(entries) + ']'

def clue(id_, label, def_):
    return '{id:"' + id_ + '",label:"' + label + '",def:"' + def_ + '"}'


# LM-01
print("LM-01...")
js = sreplace(js,
    'intro:"The builders of this cathedral in Pisa, Italy, did not leave their stone walls plain. Work began almost 1,000 years ago, and the outside is covered in repeating patterns. Can you find three of them?"',
    'intro:"Work on this Romanesque cathedral in Pisa, Italy, began almost 1,000 years ago. Its builders left almost no wall plain: a few patterns repeat across the cathedral and the bell tower beside it. Why might they have repeated a few patterns instead of designing something new for each wall?"',
    'LM-01 intro')
js = sreplace(js,
    'context:"An arcade is a row of arches standing side by side."',
    ctx_array([
        ('Arcade','','a row of arches carried on columns or piers. Here, tiers of them climb the front of the cathedral and the tower.'),
        ('Romanesque','roh-muh-NESK','a medieval building style from about 900 to 1200. Thick walls, round arches and sturdy stone piers give it a solid, massive feel, like Roman buildings before it.'),
    ]), 'LM-01 ctx')
js = sreplace(js,
    '{id:"arches",label:"Rows of small arches",def:"Small round arches lined up side by side in rows"}',
    clue('arches','Tiers of arcades','Rows of small round arches stacked level above level. Trace one tier from side to side. Does it keep the same rhythm all the way across?'),
    'LM-01 arches')
js = sreplace(js,
    '{id:"stripes",label:"Striped marble",def:"Bands of light and dark stone across the walls"}',
    clue('stripes','Banded marble','Light and dark stone laid in alternating horizontal stripes. Where do the bands run on the cathedral, and where on the tower?'),
    'LM-01 stripes')
js = sreplace(js,
    '{id:"diamonds",label:"Diamond shapes",def:"Diamond-shaped panels of colored stone set into the walls"}',
    clue('diamonds','Diamond-shaped stone panels','Panels of colored stone fitted flush into the marble walls. Where on the building are they set in, and where not?'),
    'LM-01 diamonds')

# LM-05
print("LM-05...")
js = sreplace(js,
    'intro:"Two tall windows stand on either side of a carved block set high in a stone wall. Can you find three features?"',
    'intro:"Almost 900 years ago, a sculptor carved this scene — an angel speaking to a young woman — into a block of stone and set it into a church wall. Instead of standing stiff and square, the two figures lean toward each other and gesture with their hands. Why would an artist want his figures to move and turn like real people?"',
    'LM-05 intro')
js = sreplace(js,
    'context:"A voussoir (VOO-swar) is a wedge-shaped stone used to build an arch. Laid side by side, voussoirs form a curved ring."',
    ctx_array([
        ('Voussoir','VOO-swar','a wedge-shaped stone used to build an arch. Laid side by side, voussoirs form a curved ring.'),
        ('Annunciation','','the Christian Bible scene shown here: the angel Gabriel visiting Mary. It appears in art again and again across the centuries.'),
        ('Relief','rih-LEEF','carving that rises from a flat background instead of standing free.'),
    ]), 'LM-05 ctx')

# LM-07
print("LM-07...")
js = sreplace(js,
    'intro:"This scene was painted by hand on parchment, in a book of prayers. Dark blue fills the main panel. Can you find three features?"',
    'intro:"Almost 700 years ago, a wealthy English landowner paid a team of artists to decorate his personal book of psalms. The painters crowded the margins with scenes from daily life: ploughing, baking, carrying food. Why might the painters have filled the edges of a book of prayers with ordinary workers?"',
    'LM-07 intro')
js = sreplace(js,
    'context:"A psalter is a handwritten book of psalms, the songs and prayers of the Bible."',
    ctx_array([
        ('Psalter','','a handwritten book of psalms, the songs and prayers of the Bible.'),
        ('Marginalia','mar-jin-AY-lee-uh','small pictures painted in the margins of a page, around the main text or scene.'),
        ('Illumination','','a page decorated with painted scenes, patterned borders and, often, gold leaf that catches the light.'),
    ]), 'LM-07 ctx')
js = sreplace(js, '{id:"panel",label:"Dark panel with a border",', '{id:"panel",label:"Diapered panel",', 'LM-07 panel')
js = sreplace(js, '{id:"work",label:"People at everyday work",', '{id:"work",label:"Figures in the margin",', 'LM-07 work')
js = sreplace(js, '{id:"vine",label:"Curling vine with leaves",', '{id:"vine",label:"Vine border",', 'LM-07 vine')

# LM-09
print("LM-09...")
js = sreplace(js, 'headline:"Look closely at the walls"', 'headline:"Look closely at the chapel"', 'LM-09 headline')
js = sreplace(js,
    'intro:"This tall room seems to stretch upward, and light pours in from every side. Can you find three features?"',
    'intro:"Almost 800 years ago, a French king built this small chapel to hold religious treasures brought back from the Holy Land. His architects pushed the walls as close to all-glass as stone would allow. Why would a builder want a stone building to seem almost to disappear?"',
    'LM-09 intro')
js = sreplace(js,
    'context:"A rib is a thin, curved band of stone that crosses a ceiling."',
    ctx_array([
        ('Stained glass','','pieces of colored glass held together with strips of lead to form a picture or pattern.'),
        ('Lancet','LAN-set','a tall, narrow window with a pointed top. Common in Gothic buildings.'),
        ('Rib','','a thin, curved band of stone that crosses a ceiling.'),
    ]), 'LM-09 ctx')
js = sreplace(js, '{id:"windows",label:"Glass in place of walls",', '{id:"windows",label:"Stained-glass walls",', 'LM-09 windows')
js = sreplace(js, '{id:"pieces",label:"Patterns of small glass pieces",', '{id:"pieces",label:"Lead patterns",', 'LM-09 pieces')
js = sreplace(js, '{id:"columns",label:"Slender columns",', '{id:"columns",label:"Columns and ribs",', 'LM-09 columns')

# LM-10
print("LM-10...")
js = sreplace(js,
    'intro:"These stone figures stand side by side, each on its own small base. Can you find three features?"',
    'intro:"About 800 years ago, sculptors at this French cathedral carved life-size saints and kings to stand beside the main doors. Each pilgrim who walked in passed between these stone figures. Each figure tilts, turns or looks sideways — not one stands perfectly still. Why would a sculptor carve a saint to look like a real person you might meet, instead of a stiff holy icon?"',
    'LM-10 intro')

# LM-10 context
print("LM-10 ctx...")
js = sreplace(js,
    'context:"Drapery (DRAY-puh-ree) is the cloth of a figure\'s robes and cloak, as shown in art."',
    ctx_array([
        ("Drapery","DRAY-puh-ree","the cloth of a figure's robes and cloak, as shown in art."),
        ("Jamb figure","","a tall statue carved beside the main door of a Gothic church, standing on its own small base."),
        ("Contrapposto","con-truh-POS-toh","a natural standing pose in which a figure's weight rests on one leg, so the hips and shoulders tilt in opposite directions."),
    ]), "LM-10 ctx")

# LM-11
print("LM-11...")
js = sreplace(js,
    'intro:"This marble stand rises on columns and is wrapped in carved panels. Can you find three features?"',
    'intro:"In 1260, a sculptor in Pisa carved this marble pulpit — a six-sided stand for the preacher — and filled every panel with crowded figures. He had been studying the ancient Roman stone coffins kept in a nearby cemetery. Why would a sculptor of a Christian pulpit go back to the pagan Romans for ideas?"',
    'LM-11 intro')
js = sreplace(js,
    'context:"A pulpit (PUL-pit) is a raised stand in a church where a speaker reads and preaches."',
    ctx_array([
        ('Pulpit','PUL-pit','a raised stand in a church where a speaker reads and preaches.'),
        ('Trefoil arch','TRE-foyl','a pointed arch made of three lobes, used often in Gothic design.'),
        ('Classical','','the art of ancient Greece and Rome. When a later artist copies that style, we say the work is classical.'),
    ]), 'LM-11 ctx')

# LM-12
print("LM-12...")
js = sreplace(js,
    'intro:"This tall panel is covered in gold. Can you find three features?"',
    'intro:"Almost 750 years ago, a Florentine painter named Cimabue made this altar panel for a church. It is twelve feet tall and covered in real gold. The Virgin Mary sits on a tall throne, angels line each side of her, and four prophets stand below. Why would a painter cover an altar painting in gold instead of showing a real room or sky?"',
    'LM-12 intro')

# LM-12 context
print("LM-12 ctx...")
js = sreplace(js,
    'context:"A prophet (PROF-it) is a person who speaks God\'s message. Here, four prophets hold scrolls under the throne."',
    ctx_array([
        ("Maestà","my-ess-TAH","a picture of the Virgin and Child enthroned in majesty, often surrounded by angels and saints."),
        ("Tempera","TEM-puh-ruh","egg-based paint used on wood panels for most Italian paintings before oil paint arrived."),
        ("Prophet","PROF-it","in the Bible, a person who speaks God's message. Here, four prophets hold scrolls under the throne."),
    ]), "LM-12 ctx")

# LM-13
print("LM-13...")
js = sreplace(js,
    'intro:"In this wall painting, every figure points the eye toward one place. Can you find three features?"',
    'intro:"In 1305, a painter named Giotto covered the walls of a private chapel in Padua with painted scenes from the life of Christ. In this one, every figure — mourner, rock and angel — bends or dives toward the body of Christ. Why would a painter use even the landscape and the sky to help tell a story about grief?"',
    'LM-13 intro')
js = sreplace(js,
    'context:"A fresco (FRES-koh) is a painting made on a wall while the plaster is still wet. This whole scene is a fresco."',
    ctx_array([
        ('Lamentation','','a Christian subject showing the mourning over the body of Christ after he was taken down from the cross.'),
        ('Naturalism','','a style that aims to show people and things as they actually look, instead of in a stiff or formal way.'),
        ('Modeling','','the use of light and shadow in painting or sculpture to make a figure look rounded and solid, as if it has real weight.'),
    ]), 'LM-13 ctx')
js = sreplace(js, '{id:"angels",label:"Angels crying in the sky",', '{id:"angels",label:"Angels in the sky",', 'LM-13 angels')

# LM-17
print("LM-17...")
js = sreplace(js,
    'intro:"This life-size wooden figure hangs on a cross. Can you find three features?"',
    'intro:"Over 1,000 years ago, a German archbishop commissioned this life-size wooden figure of Christ on the cross. It is one of the oldest Western sculptures to show Christ already dead — head drooping, eyes closed — instead of alive and triumphant. Why might a sculptor choose to show Christ at the moment of his death rather than in victory?"',
    'LM-17 intro')
js = sreplace(js,
    'context:"A crucifix (KROO-suh-fiks) is a cross with a figure of Christ on it."',
    ctx_array([
        ('Crucifix','KROO-suh-fiks','a cross with a figure of Christ carved or painted on it.'),
        ('Gold leaf','','paper-thin sheets of hammered gold, pressed onto a surface to make it shine like solid gold. The gold rays and oval around this cross are gold leaf, added in the 1600s.'),
        ('Polychrome','POL-ee-krome','painted in many colors. The paint on the wooden figure was renewed in the early 1900s.'),
    ]), 'LM-17 ctx')

# LM-18
print("LM-18...")
js = sreplace(js,
    'intro:"This carved stone half-circle sits above a church door, crowded with figures. Can you find three features?"',
    'intro:"Almost 900 years ago, a sculptor carved this crowded half-circle of stone above the main door of a French church. Every visitor had to pass under it to enter. Why would a sculptor crowd so many figures over the entrance to a place of worship?"',
    'LM-18 intro')
js = sreplace(js,
    'context:"Relief (rih-LEEF) is carving that rises from a flat background instead of standing free."',
    ctx_array([
        ('Tympanum','TIM-puh-num','the carved half-circle of stone above a church doorway.'),
        ('Relief','rih-LEEF','carving that rises from a flat background instead of standing free.'),
        ('Mandorla','man-DOR-la','an almond-shaped frame around a holy figure, used to set that figure apart.'),
    ]), 'LM-18 ctx')
js = sreplace(js, '{id:"stretch",label:"Stretched, narrow bodies",', '{id:"stretch",label:"Elongated figures",', 'LM-18 stretch')
js = sreplace(js, '{id:"mandorla",label:"A central figure in an almond frame",', '{id:"mandorla",label:"Central mandorla",', 'LM-18 mandorla')
js = sreplace(js, '{id:"bands",label:"Figures in bands",', '{id:"bands",label:"Stacked bands",', 'LM-18 bands')

# LM-19
print("LM-19...")
js = sreplace(js,
    'intro:"This stone statue looks like a real person standing in a church. Can you find three features?"',
    'intro:"Almost 800 years ago, a sculptor carved this life-size stone statue of a noblewoman named Uta. She had died close to 200 years before he began. Why would a sculptor make a statue of someone no one still alive had ever seen?"',
    'LM-19 intro')
js = sreplace(js,
    'context:"Polychrome (POL-ee-krome) means painted in many colors."',
    ctx_array([
        ('Polychrome','POL-ee-krome','painted in many colors. Traces of the original paint survive on Uta.'),
        ('Founder figure','','a carved statue of a person who gave money or land to help build a church, placed inside the building to honor them.'),
        ('Naturalism','','a style that aims to show people and things as they actually look, instead of in a stiff or formal way.'),
    ]), 'LM-19 ctx')
js = sreplace(js, '{id:"hand",label:"A hand lifting the collar",', '{id:"hand",label:"A natural gesture",', 'LM-19 hand')
js = sreplace(js, '{id:"crown",label:"A painted crown",', '{id:"crown",label:"Surviving paint",', 'LM-19 crown')

# LM-20
print("LM-20...")
js = sreplace(js,
    'intro:"This long, curved ceiling is covered with painted stories. Can you find three features?"',
    'intro:"About 900 years ago, painters in this Romanesque abbey church covered a long stone ceiling with scenes from the Bible. Instead of one huge picture, they divided the ceiling into rows, each holding several scenes. Why might the painters have divided the story into rows instead of painting one large scene?"',
    'LM-20 intro')
js = sreplace(js,
    'context:"A vault (VAWLT) is a ceiling built as a curved arch."',
    ctx_array([
        ('Romanesque','roh-muh-NESK','a medieval building style from about 900 to 1200. Thick walls, round arches and heavy stone give it a solid, massive feel, like Roman buildings before it.'),
        ('Vault','VAWLT','a ceiling built as a curved arch. Here, one long, rounded vault runs the length of the church.'),
        ('Register','','a horizontal band holding a row of scenes or figures. Several registers can be stacked one above another.'),
        ('Fresco','','a wall painting made by applying paint to fresh, wet plaster so the colors dry into the wall.'),
    ]), 'LM-20 ctx')
js = sreplace(js, '{id:"bands",label:"Bands of story",', '{id:"bands",label:"Registers",', 'LM-20 bands')

# LM-27
print("LM-27...")
js = sreplace(js, 'intro:"A king on horseback, indoors, high up a pillar — and nobody knows who he is. Can you find three features?"', 'intro:"Almost 800 years ago, a sculptor carved a king on horseback and attached him, life-size, to a pillar inside this German cathedral. He carries no weapon, no shield and no banner. Scholars have argued for centuries about who he is. Why would an artist leave out the clues that would identify a famous person?"', "LM-27 intro")
js = sreplace(js, 'context:"An equestrian (eh-KWES-tree-un) statue shows a person riding a horse."',
    ctx_array([
        ("Equestrian","eh-KWES-tree-un","a statue or picture of a person riding a horse."),
        ("Attribute","","an object a figure holds or wears that tells you who he or she is, such as a crown for a king or a sword for a knight."),
        ("Canopy","","a small roof carved over a statue, like a tiny architectural shelter."),
    ]), "LM-27 ctx")
js = sreplace(js, '{"id": "crown", "label": "A crown, and no weapon", "def": "A crown worn over long hair, on a rider who carries no sword, no shield and no armor"}', '{"id": "crown", "label": "A crown but no attributes", "def": "A crown is an attribute of a king. What other attributes would tell you MORE about this figure? What is missing?"}', "LM-27 crown")
js = sreplace(js, '{"id": "harness", "label": "A real horse\'s harness", "def": "A bridle of carved straps with a chain at the bit, and a mane dressed in a braid"}', '{"id": "harness", "label": "A real harness", "def": "Look at how carefully the straps, bridle and braided mane are carved. What does this tell you about the sculptor\'s method?"}', "LM-27 harness")
js = sreplace(js, '{"id": "perch", "label": "Not standing on the ground", "def": "A carved canopy above him and a leafy bracket under the hooves, both jutting from the pillar"}', '{"id": "perch", "label": "High on the pillar", "def": "The statue sits on a leafy bracket under a canopy, well above the heads of the people in the church. What does this placement say about who he is?"}', "LM-27 perch")

# Write output
if js == original:
    print("ERROR: no changes!")
    import sys; sys.exit(1)
else:
    with open("content/cards.js", "w", encoding="utf-8") as f:
        f.write(js)
    print(f"Done. {len(js)-len(original):+d} bytes")
