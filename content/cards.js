/* Art History Game: Middle School content.
   Five periods, 30 case slots each. A slot with playable:true is a finished card;
   every other slot is a placeholder until its card is built.
   Card IDs: EM, LM, RE, BA, MO + two digits. */
function placeholders(prefix){
  var a=[];
  for(var i=1;i<=30;i++){a.push({id:prefix+'-'+(i<10?'0':'')+i,title:'Title to come',playable:false})}
  return a;
}
var EM01={id:"EM-01",kind:"Sculpture",title:"Carved to Match",object:"The Four Tetrarchs",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"The Four Tetrarchs",date:"circa 300 C.E.",location:"St. Mark’s Basilica, Venice",artist:"artist unknown",
 headline:"Look closely at the four figures",
 alt:"Four armed figures carved in purple-red stone stand in two embracing pairs at the corner of a building. They wear matching short tunics, cloaks and flat-topped caps, and each grips a sword with a bird-headed hilt.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/The-tetrarchs.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/The-tetrarchs-detail.jpg",alt:"Close view of two of the carved faces and their flat-topped caps. Each face has large, round, deeply cut eyes, and the stone surface is worn and pitted.",caption:"Technique detail: carving in porphyry",credit:{url:"https://commons.wikimedia.org/wiki/File:Detail_of_the_Four_Tetrarchs,_ca._300;_Venice_(2).jpg",author:"Prof. Mortel",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the original."}},
 size:"Height: 130 cm / 51 in (4 ft 3 in). About two-thirds the height of a standard 80 in door.",
 intro:"Look at the four figures carved in this red stone. How did the sculptor shape them?",
 context:"Porphyry is a very hard, purple-red stone, which makes fine detail difficult to carve.",
 clues:[{id:"blocky",label:"Blocky bodies",def:"Stiff, boxy shapes, large heads"},{id:"matching",label:"Matching figures",def:"Same size, pose and clothing"},{id:"patterns",label:"Cut patterns",def:"Lines and shapes on cloth and armor"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Do these four look like four different people, or like one shape repeated?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Hard stone, repeated shapes and patterns cut in lines are features a detective can carry to the next case.",
 sourceNums:[1],
 credit:{url:"https://commons.wikimedia.org/wiki/File:The-tetrarchs.jpg",author:"Wooofer",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the original."}};
var EM02={id:"EM-02",kind:"Mosaic",wide:true,title:"Floating in Gold",object:"Apse mosaic, San Vitale",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Christ with Angels, Saint Vitalis and Bishop Ecclesius (apse mosaic)",date:"circa 547 C.E.",location:"Basilica of San Vitale, Ravenna",artist:"artists unknown",
 headline:"Look closely at the figures",
 alt:"A curved wall covered in tiny glass tiles. Christ sits on a blue globe against a gold background, wearing dark purple and holding a book. Two angels stand beside him, and a saint and a bishop stand at the outer sides, all facing forward on a strip of green ground with flowers.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/San-Vitale-apse.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/San-Vitale-apse-detail.jpg",alt:"Close view of small cut pieces of stone in cream, green, black and red-orange, set in curving rows with thin gaps of mortar between them.",caption:"Technique detail: mosaic tesserae",credit:{url:"https://commons.wikimedia.org/wiki/File:Ravenna,_San_Vitale_-_12536853624.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the original."}},
 size:"",
 intro:"Look at this curved wall covered in tiny pieces of glass. How did the artists make these figures feel holy rather than ordinary?",
 context:"Tesserae (teh-SER-ee) are the small cut pieces of glass or stone that make up a mosaic.",
 clues:[{id:"gold",label:"Gold background",def:"Glittering glass tiles instead of a sky"},{id:"faces",label:"Forward-facing figures",def:"Stiff poses and wide, steady eyes"},{id:"float",label:"Floating figures",def:"Little weight, shadow or solid ground"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Does Christ seem to sit in a real place, or somewhere outside of time?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Gold light, forward-facing figures and bodies that seem to float are features a detective can carry to the next case.",
 sourceNums:[2,3],
 credit:{url:"https://commons.wikimedia.org/wiki/File:Apse_mosaic_-_Basilica_of_San_Vitale_(Ravenna).jpg",author:"Petar Milo\u0161evi\u0107",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the original."}};
var EM03={id:"EM-03",kind:"Architecture",wide:true,title:"Old Stone, New Wall",object:"Arch of Constantine",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Arch of Constantine",date:"dedicated 315 C.E.",location:"Rome",artist:"artists unknown",
 headline:"Look closely at the carved figures",
 alt:"Part of a Roman stone arch. Two round carved panels sit at the top. Below them runs a long, narrow band of small standing figures gathered on both sides of a platform. Under the band, a round arched opening has a reclining figure carved in each upper corner.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Arch-of-Constantine.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/Arch-of-Constantine-detail.jpg",alt:"A carved stone panel. A winged figure holding a wreath flies above four standing figures in armor and robes, in front of a building with columns.",caption:"Technique detail: relief carving",credit:{url:"https://commons.wikimedia.org/wiki/File:Arch_of_Constantine_-_108.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the original."}},
 size:"Whole arch: about 20 m / 66 ft high. About as tall as a six-story building. This photo shows only a small part.",
 intro:"Look at this Roman arch. Carvings made at different times sit side by side on it. What differences can you spot?",
 context:"Spolia (SPOH-lee-uh) means older carvings or building parts reused on a new monument.",
 clues:[{id:"matching",label:"Matching figures",def:"Same size, pose and clothing"},{id:"blocky",label:"Blocky bodies",def:"Stiff, boxy shapes, large heads"},{id:"two",label:"Two styles",def:"Lifelike panels beside stiff ones"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might builders reuse older carvings on a brand-new monument?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rows of matching figures, blocky bodies and two styles on one wall are features a detective can carry to the next case.",
 sourceNums:[4,5],
 credit:{url:"https://commons.wikimedia.org/wiki/File:Arch_of_Constantine_-_102.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the original."}};
var EM04={id:"EM-04",kind:"Architecture",wide:true,title:"Drawn From Evidence",object:"Old St. Peter's Basilica",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Old St. Peter\u2019s Basilica (reconstruction drawing)",date:"begun circa 330 C.E.",location:"Rome",artist:"architect unknown",
 headline:"Look closely at the front of the church",
 alt:"A bird\u2019s-eye line drawing of a very long church with a tall central hall and lower side parts. Small round-topped windows sit high on the tall walls. A walled courtyard with covered walkways lies in front of the doors, with a fountain in the middle. At the far end, a wide arm runs across the church, with a row of arched windows and a half-round wall beyond it. A tall bell tower stands at the right, and a wide flight of steps climbs to the entrance at the front. Round buildings stand at the far left.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Old-St-Peters-detail.jpg",
 imageNote:"A drawing of how scholars imagined the church. Old St. Peter\u2019s was torn down in the early 1500s.",
 detail:{image:"public/images/artworks/Old-St-Peters.jpg",alt:"A line drawing of the inside of a very long church. Two rows of columns run down each side of a wide central hall toward a rounded arch at the far end. Above the columns, tall walls rise to a roof of wooden beams.",caption:"Technique detail: the inside, in a cut-away drawing",credit:{word:"Detail drawing",url:"https://commons.wikimedia.org/wiki/File:Fig_245_Old_St_Peter%27s.jpg",author:"A. Rosengarten",license:"Public domain",licenseUrl:"",changes:"Resized from the original."}},
 size:"Length: about 123 m / 403 ft from entrance to apse. The nave alone was as long as an American football field.",
 intro:"This church is gone. It was pulled down in the early 1500s, so no photograph of it exists. Everything in this drawing is a scholar\u2019s best reconstruction, put together from old descriptions, older drawings and what lies buried under the church that replaced it. What can a picture like this still tell you?",
 context:"A reconstruction is a drawing or model showing how a lost building probably looked, based on descriptions, old drawings and remains.",
 clues:[{id:"yard",label:"Open yard",def:"A walled courtyard with covered walks before the doors"},{id:"crossing",label:"Crossing arm",def:"A wide arm running across the far end of the church"},{id:"steps",label:"Steps to the doors",def:"A wide flight of steps climbing to the entrance"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"A reconstruction is an argument, not a photograph. Which parts of this drawing would you most want to see evidence for?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. An open yard, a crossing arm and steps to the doors are features a detective can carry to the next case.",
 sourceNums:[6,7],
 credit:{word:"Drawing",url:"https://commons.wikimedia.org/wiki/File:Monuments_of_the_early_church_(1901)_(14596792999).jpg",author:"Internet Archive Book Images (from Walter Lowrie, Monuments of the Early Church, 1901)",license:"No known copyright restrictions",licenseUrl:"https://www.flickr.com/commons/usage/",changes:"Resized from the original."}};
var EM07={id:"EM-07",kind:"Memorial marker",title:"Vines Carved in Stone",object:"Bewcastle Cross",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"The Bewcastle Cross",date:"late 7th or early 8th century C.E.",location:"Bewcastle, Cumbria, England",artist:"artist unknown",
 headline:"Look closely at the carved boxes",
 alt:"A tall, narrow stone pillar seen from below, standing beside a stone church tower under a blue sky. The top is broken off. The pillar is carved from top to bottom in separate boxes: curling vines with bunches of grapes and a bird, a round dial-like shape, a square of woven bands, more vines curling around grapes, and a large block of tangled knots near the bottom.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Bewcastle-Cross.jpg",
 imageNote:"This is one of the four sides of the shaft, photographed from below. The cross arms at the top are lost.",
 detail:{image:"public/images/artworks/Bewcastle-detail.jpg",alt:"Close view of the lower part of one side of the stone. A standing figure in a rounded niche holds a bird on one wrist. The reddish sandstone is worn smooth and spotted with pale lichen.",caption:"Technique detail: a figure carved in relief",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:The_7th_C_Bewcastle_Cross_-_St._John_the_Evangelist_-_geograph.org.uk_-_1833425.jpg",author:"Mike Quinn",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/",changes:""}},
 size:"Height of the surviving shaft: about 4.4 m / 14\u00bd ft. About one and a half basketball hoops high.",
 intro:"This stone pillar has stood in northern England for about 1,300 years. How did carvers cover a whole pillar with vines and knots?",
 context:"Shaft means the tall upright part of a cross. Here only the shaft survives.",
 clues:[{id:"knot",label:"Knotwork",def:"Bands that weave over and under"},{id:"vine",label:"Vines and creatures",def:"Curling vines with grapes, birds and animals"},{id:"panels",label:"Stacked panels",def:"Separate boxes of pattern, one above another"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"What might vines and endless knots have said to people who visited this memorial?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Knotwork, vines with creatures and stacked panels are features a detective can carry to the next case.",
 sourceNums:[8,9],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Bewcastle_cross_south_perspective_view.jpg",author:"Doug Sim",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Resized from the original."}};
var EM08={id:"EM-08",kind:"Stained glass",title:"Pieces of a Face",object:"The Lorscher Kopf",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Head of a Bearded Saint (the \u201cLorscher Kopf\u201d)",date:"9th\u201311th century C.E. (scholars disagree)",location:"Hessisches Landesmuseum Darmstadt, Germany (found at Lorsch Abbey)",artist:"artist unknown",
 headline:"Look closely at the face",
 alt:"A round arrangement of glass pieces held in thin dark strips of lead. Light-blue shards form a ring behind the head. Inside it, orange-brown fragments make up part of a bearded face with large, round eyes. Black gaps show where pieces are missing.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Lorscher-Kopf.jpg",
 imageNote:"Broken pieces of glass, put back together in modern times. Dark gaps show where pieces are missing.",
 detail:{image:"public/images/artworks/Lorscher-Kopf-detail.jpg",alt:"A bearded man\u2019s face with huge round eyes, a long straight nose and a beard drawn in many fine lines. A nimbus made of segments rises behind his head.",caption:"Technique detail: a black-and-white reconstruction of the whole face",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:GN-F2632a-Kg-35-28a.jpg",author:"Fotoabteilung-HLMD (Hessisches Landesmuseum Darmstadt)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the original."}},
 size:"Reconstructed panel: about 30 \u00d7 27 cm / 12 \u00d7 10\u00bd in. A little taller than a sheet of notebook paper.",
 intro:"This face was made of colored glass about 1,000 years ago, then broke into pieces. How did the artist build a face out of glass and lines?",
 context:"Stained glass is colored glass cut into pieces and held together by thin strips of lead.",
 clues:[{id:"faces",label:"Forward-facing figures",def:"Stiff poses and wide, steady eyes"},{id:"lines",label:"Lines for hair",def:"Hair and beard drawn as many thin, repeated lines"},{id:"lead",label:"Lead strips",def:"Thin dark strips of lead that hold each piece of glass"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might an artist give a holy figure eyes this large and steady?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A steady stare, hair drawn in lines and strips of lead are features a detective can carry to the next case.",
 sourceNums:[10],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Lorscher_Kopf.JPG",author:"Fotoabteilung-HLMD (Hessisches Landesmuseum Darmstadt)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the original."}};
var EM10={id:"EM-10",kind:"Stone coffin",wide:true,title:"Ten Stories, Two Rows",object:"Sarcophagus of Junius Bassus",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Sarcophagus of Junius Bassus",date:"359 C.E.",location:"Museum of the Treasury of St. Peter\u2019s Basilica, Vatican City",artist:"artist unknown",
 headline:"Look closely at the two rows",
 alt:"The front of a long white marble coffin against a black background, carved in two rows of framed scenes. Slim columns with leafy tops divide each row into five boxes. In the top row, standing men in long robes gather around a seated young man in the middle, whose feet rest on a small figure. The bottom row has arched or pointed tops over a bare man and woman beside a tree, a rider on a donkey, and a bearded man between two lions. Broken pieces of the lid sit on top, and a red rope hangs in front.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Junius-Bassus.jpg",
 imageNote:"This is the front of the marble coffin. Broken pieces of the lid sit on top.",
 detail:{image:"public/images/artworks/Junius-Bassus-detail.jpg",alt:"Close view of two boxes in the bottom row. In one, a young man in a long robe rides a donkey while a boy kneels in front of it, beside a leafy tree. In the next, a bearded man in a long robe stands between two lions, with a smaller figure on each side. The white stone is carved so deeply that the figures stand out from the background.",caption:"Technique detail: figures carved deep enough to stand out from the stone (photographed on a plaster cast)",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:1059_-_Roma,_Museo_d._civilt%C3%A0_Romana_-_Calco_sarcofago_Giunio_Basso_-_Foto_Giovanni_Dall%27Orto,_12-Apr-2008.jpg",author:"Giovanni Dall'Orto",license:"Free to use with credit to the photographer",licenseUrl:"https://commons.wikimedia.org/wiki/File:1059_-_Roma,_Museo_d._civilt%C3%A0_Romana_-_Calco_sarcofago_Giunio_Basso_-_Foto_Giovanni_Dall%27Orto,_12-Apr-2008.jpg",changes:"Resized from the original."}},
 size:"",
 intro:"This stone coffin was carved more than 1,600 years ago for a Roman city official. How did carvers fit so many stories onto one coffin?",
 context:"A sarcophagus (sar-KOF-uh-gus) is a stone coffin, often carved on the outside.",
 clues:[{id:"boxes",label:"Scenes in boxes",def:"Each story has its own framed space"},{id:"deep",label:"Deep carving",def:"Figures cut so deep they stand out from the stone"},{id:"folds",label:"Robes in folds",def:"Long robes with deep, heavy folds"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a family carve stories, and not only a name, on a coffin?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Scenes in boxes, deep carving and robes in folds are features a detective can carry to the next case.",
 sourceNums:[13,14,15],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Tesoro_di_san_pietro,_sarcofago_di_giunio_basso.JPG",author:"Sailko",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Resized from the Commons file."}};
var EM11={id:"EM-11",kind:"Architecture",wide:true,title:"Plain Outside, Bright Inside",object:"Santa Sabina",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Santa Sabina",date:"422\u2013432 C.E.",location:"Aventine Hill, Rome, Italy",artist:"architect unknown",
 headline:"Look closely at the outside of the church",
 alt:"A long church built of reddish-brown brick, seen from a garden corner under a blue sky. A tall central wall has a row of arched windows filled with pale lattice near the top. A lower sloping roof runs along its side. At the right end, a round curved wall holds one large arched window. In front are a green lawn, a low wall with climbing roses and a palm tree.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Santa-Sabina.jpg",
 imageNote:"This is the right side of the church and its curved end, seen from a garden.",
 detail:{image:"public/images/artworks/Santa-Sabina-nave.jpg",alt:"Looking down the long central space inside the church. Two rows of tall gray columns with leafy tops hold up rows of round arches. Tall arched windows line the walls high above. A flat, patterned ceiling stretches ahead toward a half-round end with a painted dome and a few windows. The floor is patterned gray and white marble.",caption:"Technique detail: rows of columns and arches line the long central space",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Basilica_di_Santa_Sabina_Nave.jpg",author:"NateBergin",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/",changes:"Resized from the Commons file."}},
 size:"The central space: about 48 m long and 13.5 m wide / 157 ft by 44 ft. About half the length of a football field.",
 intro:"This church has stood on a hill in Rome for about 1,600 years. How did builders make a plain brick building feel so open and bright inside?",
 context:"The apse (APS) is the half-round end of a church, behind the altar.",
 clues:[{id:"long",label:"Tall center, low sides",def:"A tall middle with lower parts on each side"},{id:"windows",label:"Windows up high",def:"Openings near the top of the tall wall"},{id:"apse",label:"Curved end",def:"A half-round wall at one end"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might builders place windows high up, where light can pour down into the room?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A tall middle with low sides, windows up high and a curved end are features a detective can carry to the next case.",
 sourceNums:[16,17],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Rom,_Basilika_Santa_Sabina,_Au%C3%9Fenansicht.jpg",author:"Dnalor 01",license:"CC BY-SA 3.0 Austria",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/at/",changes:"Resized from the original."}};
var EM12={id:"EM-12",kind:"Architecture",wide:true,title:"A Dome That Floats",object:"Hagia Sophia",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Hagia Sophia",date:"532\u2013537 C.E. (dome rebuilt in 562 C.E.)",location:"Istanbul, T\u00fcrkiye",artist:"architects Anthemius of Tralles and Isidore of Miletus",
 headline:"Look closely at the big roof",
 alt:"A huge church seen across a crowded park under a blue sky. A wide gray dome sits in the middle, with a ring of small windows around its base. Smaller domes and curved walls step down on either side, and a large red arch with rows of windows faces the viewer. Scaffolding covers part of the left side. Four tall, thin towers with pointed tops stand at the left and right edges. Palm trees and crowds of people fill the foreground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Hagia-Sophia.jpg",
 imageNote:"The thin towers, called minarets, were added after 1453, when the building became a mosque.",
 detail:{image:"public/images/artworks/Hagia-Sophia-section.jpg",alt:"A black-and-white drawing of the church sliced down the middle, so the inside shows. A big dome with a ring of small windows at its base rises over the center. Smaller domes and half-domes step down on both sides above rows of arches and columns. At the right, a porch and a statue of a rider on a horse stand beside the building.",caption:"Technique detail: a 1908 reconstruction drawing that slices the building open to show how the domes and arches fit together",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Hagia-Sophia-Laengsschnitt.jpg",author:"Wilhelm L\u00fcbke and Max Semrau, Grundri\u00df der Kunstgeschichte (1908)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}},
 size:"The dome: about 32 m / 105 ft across. A little longer than a basketball court.",
 intro:"This building went up in just five years, almost 1,500 years ago. How did builders hold up such a huge roof?",
 context:"A dome is a roof shaped like half of a ball.",
 clues:[{id:"dome",label:"Big round dome",def:"A huge half-ball roof high over the center"},{id:"ring",label:"Ring of windows",def:"Small windows circling the base of the dome"},{id:"step",label:"Domes stepping down",def:"Smaller domes and curves piled below the big one"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a builder want a huge roof to look as if it floats?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A big round dome, a ring of windows and domes stepping down are features a detective can carry to the next case.",
 sourceNums:[18,19,20],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Istanbul_Hagia_Sophia_IMG_7406_1800.jpg",author:"Alexxx1979",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Resized from the Commons file."}};
var EM13={id:"EM-13",kind:"Manuscript painting",wide:true,title:"Words Above, Story Below",object:"Vienna Genesis",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Vienna Genesis (a painted page from the story of Joseph, folio 15v)",date:"first half of the 6th century C.E.",location:"Austrian National Library, Vienna, Austria (made in the eastern Mediterranean)",artist:"artist unknown",
 headline:"Look closely at the painted page",
 alt:"A page of brownish purple parchment. Three lines of Greek writing run across the top. Below them, two bands of painted figures stand on thin ground lines. In the top band, an old man sits in a chair and holds a small child, a bending man and a woman in a yellow robe stand beside him, a boy in a white tunic stands alone, and a walking man stands beside a winged angel and a blue column. In the bottom band, men in tunics point and stride toward a brown mound, sheep graze, and a group of figures tumble and wrestle at the right near a small building.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Vienna-Genesis-Joseph.jpg",
 imageNote:"This is one page (folio 15v) of the book. The Greek writing above the picture was done in silver ink.",
 detail:{image:"public/images/artworks/Vienna-Genesis-musicians.jpg",alt:"Two young women with headbands lean over a yellow table. The one behind blows into a pair of thin pipes. The other, in a rose-pink cloak, taps four round, flat bowls on the table with a stick. A tall orange bottle with a ribbon stands on a post at the right. The paint is worn and flaking.",caption:"Technique detail: soft shading and thin outlines on another page of the same book (folio 17v)",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Double_aulos_and_the_oksivafon,_detail_from_Vienna,_%C3%96sterreichische_Nationalbibliothek,_Theol_Greek_31,_folio_17v,_6th_century.jpg",author:"Unknown artist (page reproduced by the Austrian National Library)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}},
 size:"",
 intro:"This book was painted about 1,500 years ago on purple-dyed parchment. How did painters tell a whole story on one page?",
 context:"Parchment is a writing surface made from animal skin.",
 clues:[{id:"rows",label:"Rows of figures",def:"Figures lined up in bands, one above another"},{id:"twice",label:"Same person twice",def:"One person shown again at a later moment"},{id:"words",label:"Words above the picture",def:"Lines of writing across the top, picture below"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a painter show the same person more than once on a single page?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rows of figures, one person shown twice and words above the picture are features a detective can carry to the next case.",
 sourceNums:[21,22,23],
 credit:{word:"Image",url:"https://commons.wikimedia.org/wiki/File:Miniatuur_van_Jozef_en_zijn_broers.jpg",author:"Emmelinebq",license:"CC0 1.0 (public domain dedication)",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",changes:""}};
var EM09={id:"EM-09",kind:"Wall painting",wide:true,title:"Three in a Row",object:"Lunette from the Monastery of Bawit",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. – 900 C.E.",
 work:"Lunette from the Monastery of Bawit (three seated saints and two riders)",date:"6th–7th century C.E.",location:"Coptic Museum, Cairo, Egypt",artist:"artist unknown",
 headline:"Look closely at the seated figures",
 alt:"A half-circle wall painting displayed in a museum. Three bearded men, each with a nimbus, sit side by side on a bench, each holding a book. At the left end a small rider with a nimbus sits on a dark brown horse, and at the right end another rider with a nimbus sits on a pale horse.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Bawit-lunette.jpg",
 imageNote:"Painted on a monastery wall in Egypt and now shown in a museum.",
 detail:{image:"public/images/artworks/Bawit-lunette-detail.jpg",alt:"A small rider with a nimbus sits on a dark brown horse. Dark outlines draw the face, body and horse, and lines of painted letters run above the rider’s head.",caption:"Technique detail: a rider outlined in paint, with a painted inscription",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:CairoCoptMuseumBawit12090.jpg",author:"Roland Unger",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Cropped from the photo above."}},
 size:"",
 intro:"This painting covered the top of a wall in a monastery in Egypt more than 1,300 years ago. How did the painter arrange the saints?",
 context:"A lunette (loo-NET) is a half-circle shaped space on a wall.",
 clues:[{id:"matching",label:"Matching figures",def:"Same size, pose and clothing"},{id:"faces",label:"Forward-facing figures",def:"Stiff poses and wide, steady eyes"},{id:"outline",label:"Dark outlines",def:"Thick dark lines that separate color from color"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Do the three saints look like portraits of three different people, or like one figure painted three times?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Matching figures, steady stares and dark outlines are features a detective can carry to the next case.",
 sourceNums:[11,12],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:CairoCoptMuseumBawit12090.jpg",author:"Roland Unger",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:""}};
window.DECKS=[
{id:"early-medieval",title:"Early Medieval",span:"circa 300 C.E. \u2013 900 C.E.",cards:placeholders('EM')},
{id:"late-medieval",title:"Late Medieval",span:"",cards:placeholders('LM')},
{id:"renaissance",title:"Renaissance",span:"",cards:placeholders('RE')},
{id:"baroque",title:"Baroque",span:"",cards:placeholders('BA')},
{id:"modern",title:"Modern",span:"",cards:placeholders('MO')}
];
var EM14={id:"EM-14",kind:"Ivory carving",title:"Looking Back to Rome",object:"Back cover of the Lorsch Gospels",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Back cover of the Lorsch Gospels (Christ between two angels)",date:"about 810 C.E.",location:"Museo Sacro, Vatican City (made at Charlemagne\u2019s court, probably Aachen)",artist:"artist unknown (Charlemagne\u2019s court school)",
 headline:"Look closely at the carved panels",
 alt:"Five carved ivory plaques fitted together on a dark background. Across the top, two flying angels hold a round medallion with a cross between them. Below, three tall panels stand side by side: a winged angel with a staff at the left, Christ in the center standing on animals and holding a book, and a winged angel with a staff at the right. A long strip across the bottom shows small figures in a row, with a seated man at the left and a seated woman with a child at the right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Lorsch-Ivory-Cover.jpg",
 imageNote:"Five carved ivory plaques, set side by side to make one book cover.",
 detail:{image:"public/images/artworks/Lorsch-Angel-Detail.jpg",alt:"A close view of one ivory plaque held in a twisted metal frame. A winged angel with a nimbus and curly hair stands under a round arch, holding a tall staff. The long robe is carved with soft folds, and a band of tiny beads runs around the arch.",caption:"Technique detail: the angel at the left, with curled hair and soft robe folds carved in ivory",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Ivory_back_cover_-_Codex_Aureus_of_Lorsch_(c._778-820)_Vatican_Library.jpg",author:"Carolingian court school (photograph from Bibliotheca Laureshamensis digital)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the Commons file."}},
 size:"",
 intro:"This book cover was carved from ivory about 1,200 years ago for a Gospel book made at Charlemagne\u2019s court. What did the carvers copy from the Roman world?",
 context:"Ivory is the hard, cream-colored material of elephant tusks.",
 clues:[{id:"folds",label:"Robes in folds",def:"Long robes with deep, heavy folds"},{id:"plaques",label:"Plaques in a frame",def:"Several carved pieces fitted into one cover"},{id:"arch",label:"Arch and columns",def:"A figure framed by a round arch and tall posts"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might carvers in Charlemagne\u2019s time copy the look of much older Roman ivories?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Heavy robe folds, plaques in a frame and figures under arches are features a detective can carry to the next case.",
 sourceNums:[24,25,27],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Ivory_back_cover_-_Codex_Aureus_of_Lorsch_(c._778-820)_Vatican_Library.jpg",author:"Carolingian court school (photograph from Bibliotheca Laureshamensis digital)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}};
var EM05={id:"EM-05",kind:"Icon painting",title:"Face to Face",object:"Saint Peter icon",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Saint Peter (icon)",date:"about 600 C.E.",location:"Saint Catherine\u2019s Monastery, Mount Sinai, Egypt",artist:"artist unknown",
 headline:"Look closely at the saint\u2019s face",
 alt:"A painting of a gray-haired, bearded man shown from the chest up, facing the viewer. A large gold nimbus glows behind his head. He wears a white robe and holds a tall staff with a cross and a bundle of keys. Above him, three small round portraits sit in a row against a dark background, with carved columns at each side.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Saint-Peter-Sinai.jpg",
 imageNote:"Saint Peter, painted in colored wax on a panel, with three small round portraits above his head.",
 detail:{image:"public/images/artworks/Saint-Peter-Detail.jpg",alt:"A close view of white and gray robe folds painted with thick, streaky strokes. Several thin dark keys lie against a darker patch near the center, and a pale orange hand curls beneath them. Small flecks of paint are missing across the surface.",caption:"Technique detail: thick, streaky strokes of wax paint shape the folds of the white robe beside the keys",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Peter-Sinai_(6th_Century).jpg",author:"Unknown artist (photograph by Michel Bakni)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the Commons file."}},
 size:"Panel: about 93 \u00d7 54 cm / 37 \u00d7 21 in. About as tall as a kitchen counter.",
 intro:"This painting of Saint Peter is about 1,400 years old. The painter made a panel that seems to look right back at you. How does it do that?",
 context:"An icon is a holy picture made for prayer. This one is painted in encaustic, which means colored powder mixed into hot wax.",
 clues:[{id:"nimbus",label:"Gold nimbus",def:"A large gold disk glowing behind the head"},{id:"stare",label:"Direct stare",def:"Wide eyes that look straight out at you"},{id:"medallions",label:"Small round portraits",def:"Circles above the figure, each holding a face"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"How does the painter make a flat panel feel like a living person who is looking back at you?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A gold nimbus, a direct stare and small round portraits are features a detective can carry to the next case.",
 sourceNums:[29,30,31],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Peter-Sinai_(6th_Century).jpg",author:"Unknown artist (photograph by Michel Bakni)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}};
var EM06={id:"EM-06",kind:"Manuscript page",title:"Letters as Pictures",object:"Lindisfarne Gospels, Matthew page",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Lindisfarne Gospels, opening page of Matthew (folio 27r)",date:"about 700 C.E.",location:"British Library, London (made on Lindisfarne, England)",artist:"probably Eadfrith, bishop of Lindisfarne",
 headline:"Look closely at the letters",
 alt:"A page from a hand-copied Gospel book. The first letters of the Latin word Liber are huge and curl down the left side, packed with colorful knots, spirals and tiny animal heads. The rest of the word and the lines below are tall, dark capitals set in colored panels. Rows of tiny red dots trace the letters, and a woven border frames the right and bottom edges.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Lindisfarne-Incipit.jpg",
 imageNote:"The opening of Matthew\u2019s Gospel. The first letters of the Latin word Liber, meaning \u201cbook,\u201d fill the page.",
 detail:{image:"public/images/artworks/Lindisfarne-Matthew.jpg",alt:"A page from the same book. A seated man with a gray-blue beard and a gold nimbus draws on a board. He wears a green robe marked with red fold lines and a purple sleeve, and sits on an orange cushion. A winged figure with a trumpet hovers above him, and a second figure peers out from behind a red curtain.",caption:"Technique detail: Saint Matthew from the same book, drawn with strong outlines and filled with flat color, with red strokes for the folds of his robe",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:St._Matthew_-_Lindisfarne_Gospels_(710-721),_f.25v_-_BL_Cotton_MS_Nero_D_IV.jpg",author:"Eadfrith of Lindisfarne (presumed); image from the British Library",license:"CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",changes:"Resized from the Commons file."}},
 size:"",
 intro:"This page opens the Gospel of Matthew in a hand-copied book made on Lindisfarne, an island off the coast of England, about 1,300 years ago. There is no scene on the page. So where is the art?",
 context:"Interlace is a pattern of ribbons that weave over and under each other, with no beginning and no end.",
 clues:[{id:"letters",label:"Giant first letters",def:"The first letters of the line are far bigger than the rest"},{id:"interlace",label:"Interlace knots",def:"Ribbons weaving over and under in tight knots"},{id:"dots",label:"Rows of red dots",def:"Tiny red dots tracing the edges of letters and shapes"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the maker have decorated the first words of the Gospel more richly than anything else on the page?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Giant letters, interlace knots and red dotted outlines are features a detective can carry to the next case.",
 sourceNums:[32,33],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:LindisfarneFol27rIncipitMatt.jpg",author:"Eadfrith of Lindisfarne (presumed); image from the British Library",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}};
var EM15={id:"EM-15",kind:"Metalwork",title:"Patterns in Wire",object:"Ardagh Chalice (copy)",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Ardagh Chalice (early 20th-century copy)",date:"original about 750 C.E.",location:"The Metropolitan Museum of Art, New York (original in Dublin)",artist:"original by an unknown Irish maker",
 headline:"Look closely at the cup",
 alt:"A wide silver cup with two handles, seen from a slight angle, standing on a round, flaring foot. A band of gold-colored woven patterns circles the bowl just below the rim, dotted with round blue and red studs. Beside a handle, three larger studs sit on a cloverleaf-shaped panel. The rest of the bowl is smooth, plain silver with faint engraved letters.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Ardagh-Chalice.jpg",
 imageNote:"A careful copy of the Ardagh Chalice, made in the early 1900s. The original was made in Ireland about 750 C.E.",
 detail:{image:"public/images/artworks/Ardagh-Chalice-Detail.jpg",alt:"A close view of one handle and the panels around it. Small squares of blue and red enamel are set in rows on the handle. Next to it, three round studs in blue, red and green sit on a cloverleaf panel packed with tiny woven wire patterns.",caption:"Technique detail: on this copy, fine twisted wires form woven panels and colored enamel studs sit beside them, as on the original",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:The_Ardagh_Chalice_MET_tem07658s2.jpg",author:"The Metropolitan Museum of Art (Rogers Fund, 1906)",license:"CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",changes:"Cropped from the Commons file."}},
 size:"This copy: about 16 cm / 6\u00bc in high and 19 cm / 7\u00bd in wide. About the size of a large soup bowl.",
 intro:"This silver cup was first made in Ireland about 1,250 years ago. The photograph shows a careful copy made in the early 1900s. The maker did not decorate the whole cup. Where did the decoration go, and where was the silver left plain?",
 context:"Filigree is decoration made from very thin wires of gold or silver, twisted into tiny patterns and fastened to the surface.",
 clues:[{id:"filigree",label:"Woven wire bands",def:"A band of tiny woven patterns circling the bowl"},{id:"studs",label:"Colored studs",def:"Round blue and red studs set into the metal"},{id:"plain",label:"Smooth silver",def:"Wide areas of plain, unadorned silver"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the maker have left most of the cup plain and put the richest decoration in a few bands?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Woven wire bands, colored studs and smooth silver beside rich decoration are features a detective can carry to the next case.",
 sourceNums:[34,35,36],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:The_Ardagh_Chalice_MET_tem07658s2.jpg",author:"The Metropolitan Museum of Art (Rogers Fund, 1906)",license:"CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",changes:"Resized from the Commons file."}};
/* Target zones, in percent of the photo (x, y from the top left). Ellipses use cx, cy, rx, ry; boxes use x0, y0, x1, y1. */
EM15.zones={
 filigree:[{x0:36,y0:34,x1:63.5,y1:42},{x0:64.5,y0:30,x1:82,y1:40.5},{x0:17.5,y0:26.5,x1:27.5,y1:35.5},{x0:38,y0:63,x1:58.5,y1:75},{x0:27.5,y0:46,x1:48,y1:59}],
 studs:[{cx:45.9,cy:38.5,rx:3.8,ry:5},{cx:64.7,cy:37.9,rx:3.8,ry:5},{cx:78.1,cy:33.8,rx:3.8,ry:5},{cx:81.9,cy:27.9,rx:3.5,ry:4.7},{cx:25,cy:34.6,rx:3.8,ry:5},{cx:16.9,cy:27.9,rx:3.5,ry:4.7},{cx:30.3,cy:49.2,rx:5.5,ry:7.2},{cx:41.9,cy:51.7,rx:5.5,ry:7.2},{cx:36.9,cy:62.1,rx:5.5,ry:7.2}],
 plain:[{x0:48,y0:50,x1:73,y1:62},{x0:30,y0:73,x1:68,y1:86}]
};
EM05.zones={
 nimbus:[{x0:19.5,y0:24,x1:37,y1:47},{x0:66,y0:24,x1:85,y1:47},{x0:33,y0:18.5,x1:67,y1:26.5}],
 stare:[{x0:37,y0:36.5,x1:62,y1:43.5}],
 medallions:[{cx:15.5,cy:9.3,rx:12.5,ry:7.4},{cx:51.7,cy:8.4,rx:13.5,ry:8},{cx:86.3,cy:8.4,rx:12.5,ry:7.6}]
};
EM06.zones={
 letters:[{x0:8.5,y0:2.5,x1:67,y1:43.5}],
 interlace:[{x0:82.5,y0:12,x1:89,y1:80},{x0:24,y0:76,x1:88,y1:81.5},{x0:10.5,y0:40,x1:24.5,y1:80},{x0:55.5,y0:12,x1:89,y1:16}],
 dots:[{x0:33,y0:39,x1:84.5,y1:77}]
};
var EM16={id:"EM-16",kind:"Manuscript page",title:"Hidden in the Swirls",object:"Book of Kells, Chi Rho page",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. – 900 C.E.",
 work:"Book of Kells, Chi Rho page (folio 34r)",date:"about 800 C.E.",location:"Trinity College Library, Dublin (made on Iona, Scotland, or at Kells, Ireland)",artist:"unknown Irish or Scottish monks",
 headline:"Look closely at the page",
 alt:"A full page from a hand-copied Gospel book, almost completely covered in decoration. Two huge letters, a slanting X and a looped P, spread across the page in purple and gold bands. Round patterns of curling lines like pinwheels fill the spaces around them. Tiny faces and figures are tucked in among the patterns, and a short line of ordinary-size letters sits at the bottom right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Kells-ChiRho.jpg",
 imageNote:"The opening of the story of Jesus’s birth in Matthew’s Gospel. The Greek letters Chi and Rho, the first two letters of “Christ,” fill the page.",
 detail:{image:"public/images/artworks/Kells-ChiRho-Detail.jpg",alt:"A close view of the lower middle of the page. A small human face with curly yellow hair looks out from inside a red-outlined loop. Below it, a cross-shaped panel is filled with fine patterns, and the first letters of the text line begin at the bottom right.",caption:"Technique detail: a small face with curly hair looks out from a loop of the letter P, beside a cross-shaped panel of fine patterns",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:KellsFol034rChiRhoMonogram.jpg",author:"Unknown Irish or Scottish monks; photographic reproduction",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the Commons file."}},
 size:"Each page is about 33 cm / 13 in high and 25.5 cm / 10 in wide. A little larger than a sheet of printer paper.",
 intro:"This page opens the story of Jesus’s birth in a hand-copied Gospel book, made about 1,200 years ago. Almost every inch is decorated. Look past the big letters. What else is hiding in the pattern?",
 context:"A monogram is a design made from letters joined together. Here, the Greek letters Chi (X) and Rho (P) are the first two letters of the word “Christ.”",
 clues:[{id:"monogram",label:"Giant letters",def:"Two huge letters, Chi and Rho, spread across the page"},{id:"spirals",label:"Swirling spirals",def:"Round patterns of curling lines, like pinwheels"},{id:"hidden",label:"Hidden creatures",def:"Tiny faces, figures and animals tucked into the pattern"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the makers have hidden tiny faces and animals inside the pattern, where a reader might take a long time to find them?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Giant letters, swirling spirals and hidden creatures are features a detective can carry to the next case.",
 sourceNums:[37,38,39],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:KellsFol034rChiRhoMonogram.jpg",author:"Unknown Irish or Scottish monks; photographic reproduction",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}};
EM16.zones={
 monogram:[{x0:26,y0:14,x1:50,y1:36},{x0:3,y0:8,x1:30,y1:32},{x0:42,y0:8,x1:80,y1:19},{x0:25,y0:36,x1:39,y1:76}],
 spirals:[{cx:88.2,cy:6.4,rx:7,ry:5},{cx:57.9,cy:19.9,rx:6.5,ry:5},{cx:61.4,cy:31.8,rx:6,ry:4.8},{cx:87.7,cy:41,rx:7,ry:5.2},{cx:8,cy:41.7,rx:7.5,ry:5.5},{cx:8.9,cy:80.9,rx:7.5,ry:5.5},{cx:29.4,cy:93,rx:7,ry:4}],
 hidden:[{cx:57.9,cy:60.3,rx:4.2,ry:3.8},{cx:34.3,cy:3.2,rx:3.6,ry:3},{cx:22.7,cy:35,rx:4,ry:3.5},{cx:17.4,cy:49.4,rx:4,ry:4},{cx:21.4,cy:59.4,rx:4,ry:4},{x0:22,y0:83.5,x1:44,y1:91.5}]
};
var EM17={id:"EM-17",kind:"Manuscript page",title:"A Writer in a Hurry",object:"Ebbo Gospels, Saint Matthew",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. – 900 C.E.",
 work:"Saint Matthew, Ebbo Gospels (folio 18 verso)",date:"about 816–841 C.E.",location:"Bibliothèque municipale, Épernay, France (made at Hautvillers)",artist:"unknown artist",
 headline:"Look closely at Matthew",
 alt:"A man with curly golden-brown hair sits hunched on a red cushioned seat, leaning over a large book on a stand. His eyes are wide. He holds a red pen in one hand and a white ink horn in the other. His white robe is covered in quick, jagged gray and white strokes, and a blue cloak hangs behind him. Behind him, hills sweep up to a skyline with columned buildings, a small tree, and a tiny winged figure at the upper right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Ebbo-Matthew.jpg",
 imageNote:"Saint Matthew, one of the four writers of the Gospels, at work on his book. Painted in France about 1,200 years ago.",
 detail:{image:"public/images/artworks/Ebbo-Matthew-Detail.jpg",alt:"A close view of Matthew’s head and hands. He has wild curly hair, wide eyes and a furrowed face. In one hand he holds a white ink horn, and in the other a red pen.",caption:"Technique detail: Matthew’s wild curls and worried face, drawn with quick, thin strokes of gold and brown",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Matthew2.jpg",author:"Unknown artist; photograph by Giraudon / Art Resource, NY",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the Commons file."}},
 size:"About 26 cm / 10¼ in high and 21 cm / 8¼ in wide. A little shorter than a sheet of printer paper.",
 intro:"This portrait opens the Gospel of Matthew in a book made in France about 1,200 years ago, for an archbishop. Matthew is not calm or posed. What makes him seem so alive?",
 context:"Carolingian describes art made under Charlemagne and his family, when artists studied and copied ancient art.",
 clues:[{id:"lines",label:"Streaky lines",def:"Quick, jagged strokes of paint across the robe"},{id:"tools",label:"Ink horn and pen",def:"A hollow horn that holds ink, and a pen to dip in it"},{id:"landscape",label:"Landscape behind",def:"Hills, columned buildings and a tiny tree in the distance"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the artist have drawn Matthew in a rush of restless lines, instead of the calm, smooth poses of ancient Roman art?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Streaky lines, writing tools and a landscape behind the figure are features a detective can carry to the next case.",
 sourceNums:[40,41,42],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Matthew2.jpg",author:"Unknown artist; photograph by Giraudon / Art Resource, NY",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}};
EM17.zones={
 lines:[{x0:14,y0:28,x1:68,y1:82}],
 tools:[{cx:66,cy:29.5,rx:7.5,ry:5.5},{x0:51,y0:32,x1:75,y1:47},{cx:76,cy:22,rx:3,ry:3}],
 landscape:[{x0:36,y0:0,x1:87,y1:10},{x0:4,y0:1.5,x1:19,y1:17},{x0:84,y0:1,x1:93,y1:13}]
};
var EM18={id:"EM-18",kind:"Pottery lid",title:"A Thinker in Clay",object:"Spong Man, urn lid",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Spong Man (cremation urn lid)",date:"about 450\u2013550 C.E.",location:"Norwich Castle Museum & Art Gallery, England (found at Spong Hill, Norfolk)",artist:"unknown Anglo-Saxon potter",
 headline:"Look closely at the figure",
 alt:"A small dark brown clay figure of a person seated on a high-backed chair, set on a round, flat lid. The figure holds the head between both hands, with the elbows resting on the knees. The head is bald and rounded, and the face is plain, with two small round eyes and a long, pinched nose. A few fine lines are scratched into the chair back and around the edge of the lid.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Spong-Man.jpg",
 imageNote:"A clay figure that once sat on top of a pot holding a person\u2019s ashes. Found in Norfolk, England, in 1979.",
 detail:{image:"public/images/artworks/Spong-Man-Detail.jpg",alt:"A close view of the head. The face is plain, with two small round eyes and a long, pinched nose. Both hands press against the sides of the head.",caption:"Technique detail: the face and hands, shaped by hand from clay with very few marks",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Spong_Man.JPG",author:"Geni",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the Commons file."}},
 size:"",
 intro:"This small clay figure sat on the lid of a pot that held a person\u2019s ashes, about 1,500 years ago. Very few Anglo-Saxon figures of people made in three dimensions survive. What is the figure doing?",
 context:"A cremation urn is a pot that holds a person\u2019s ashes after the body has been burned.",
 clues:[{id:"hands",label:"Hands to the head",def:"Both hands pressed against the sides of the head"},{id:"face",label:"Plain face",def:"A simple face with small round eyes and a long nose"},{id:"lines",label:"Scratched lines",def:"Fine lines cut into the clay with a tool"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the maker have shaped the lid as a person holding their head in their hands, instead of a plain cover?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A pose, a plain face and scratched lines are features a detective can carry to the next case.",
 sourceNums:[43,44],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Spong_Man.JPG",author:"Geni",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}};
EM18.zones={
 hands:[{cx:36.5,cy:19,rx:5,ry:5},{cx:53,cy:20,rx:4.5,ry:5},{x0:37,y0:22,x1:68,y1:44}],
 face:[{cx:44,cy:14.5,rx:7,ry:7}],
 lines:[{x0:23,y0:34,x1:38,y1:62},{x0:28,y0:73,x1:72,y1:81}]
};
var EM19={id:"EM-19",kind:"Tableware",title:"Emperor on the Dinner Table",object:"Roselle red-slip cup",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Cup with an emperor in a four-horse chariot (African Red Slip ware)",date:"about 375\u2013430 C.E.",location:"Museo Archeologico e d\u2019Arte della Maremma, Grosseto, Italy (found at the Roman forum of Roselle)",artist:"unknown potter in North Africa",
 headline:"Look closely at the cup",
 alt:"A shallow, orange-red clay dish with a broken edge, held upright on clear stands. In the middle, a small figure rides a chariot pulled by four horses, two on each side, raising one arm over the team. The scene stands out from the surface in low relief. Below it sits a leaf-shaped design, and thin grooved circles run around the rim.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Roselle-Quadriga-Bowl.jpg",
 imageNote:"A cup for use at the table, made in North Africa and found in Italy. The scene shows an emperor driving a four-horse chariot.",
 detail:{image:"public/images/artworks/Roselle-Quadriga-Detail.jpg",alt:"A close view of the four horses pulling the chariot, with the driver\u2019s lower body above them. The horses lift their front legs, and thin lines mark their harness straps and manes. A chariot wheel shows between the legs.",caption:"Technique detail: horses and wheels raised from the surface in low relief, with thin lines for manes and harness",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Coppa_in_terra_sigillata_africana_con_imperatore_su_quadriga,_375-430_dc_ca,_da_foro_romano_di_roselle.JPG",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/",changes:"Cropped from the Commons file."}},
 size:"",
 intro:"This red clay cup was made in North Africa about 1,600 years ago and used at a table in Italy. A tiny emperor drives a chariot across it. How did the potter make a scene stand out from a smooth surface?",
 context:"Slip is a watery mix of very fine clay that potters brush or dip onto a pot. This kind of pottery is named for its red slip.",
 clues:[{id:"emperor",label:"The emperor",def:"A figure driving the chariot, one arm raised"},{id:"horses",label:"Four horses",def:"Four horses pulling the chariot, with harness straps"},{id:"leaf",label:"Leaf design",def:"A leaf-shaped pattern in the lower part of the cup"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a potter put a scene of an emperor on a cup used at an ordinary table?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A raised figure, a team of horses and a leaf design are features a detective can carry to the next case.",
 sourceNums:[45,46,47],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Coppa_in_terra_sigillata_africana_con_imperatore_su_quadriga,_375-430_dc_ca,_da_foro_romano_di_roselle.JPG",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/",changes:"Resized from the Commons file."}};
EM19.zones={
 emperor:[{x0:29,y0:17,x1:58,y1:41}],
 horses:[{x0:13,y0:30,x1:80,y1:62}],
 leaf:[{x0:34,y0:66,x1:51,y1:90}]
};
var EM20={id:"EM-20",kind:"Burial artifact",title:"Red Stones in Gold",object:"Sutton Hoo purse lid",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Sutton Hoo purse lid",date:"early 7th century C.E.",location:"British Museum, London (found at Sutton Hoo, Suffolk, England)",artist:"unknown Anglo-Saxon craftsman",
 headline:"Look closely at the lid",
 alt:"A flat gold lid with a gently curved lower edge, mounted on a pale backing, with three hinges along the top. A border of tiny red cells alternating with blue-and-white checks runs around the edge. In the middle, two curved birds with hooked beaks face each other, each gripping a smaller bird. On either side of them, a figure with a face and arms stands between two curled beasts. Above these, two six-sided panels of fine gold patterns flank a panel of interlaced animals.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/SuttonHoo-PurseLid.jpg",
 imageNote:"The gold lid of a purse buried in a ship burial in England about 1,400 years ago. The pale backing is a modern display mount.",
 detail:{image:"public/images/artworks/SuttonHoo-PurseLid-Detail.jpg",alt:"A close view of the two central panels. Each shows a bird of prey with a hooked beak and a round blue-and-white eye, gripping a smaller bird in its claws. The red bodies are set in thin gold walls, and tiny gold feathers fill the gaps.",caption:"Technique detail: two birds built from red stones and glass set inside thin gold walls",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Sutton_hoo_purse_lid02017_(bird_of_pray).JPG",author:"Geni",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Used as provided on Commons."}},
 size:"About 19 cm / 7\u00bd in long and 8.3 cm / 3\u00bc in tall, not counting the hinges. About as long as a new pencil.",
 intro:"This gold lid covered a purse placed in an Anglo-Saxon ship burial about 1,400 years ago. The red shapes are tiny pieces of stone set into gold. What do you see in them?",
 context:"Cloisonn\u00e9 is a technique in which thin gold walls form tiny cells that hold pieces of colored stone or glass.",
 clues:[{id:"stones",label:"Red stone inlay",def:"Rows and shapes of red stone set in gold"},{id:"birds",label:"Birds of prey",def:"Curved birds with hooked beaks gripping smaller birds"},{id:"man",label:"Man between beasts",def:"A standing figure with an animal on each side"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a craftsman have put so much gold and stone into the lid of a small purse?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Red stone inlay, birds of prey and a figure between beasts are features a detective can carry to the next case.",
 sourceNums:[48,49],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Sutton_hoo_(1).JPG",author:"Jononmac46",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Resized from the Commons file."}};
EM20.zones={
 stones:[{x0:12,y0:16,x1:88,y1:23},{x0:4,y0:25,x1:11,y1:78},{x0:89,y0:25,x1:96,y1:78},{x0:14,y0:67,x1:88,y1:83}],
 birds:[{x0:35.5,y0:41,x1:64.5,y1:70}],
 man:[{x0:16,y0:45,x1:33,y1:71},{x0:68,y0:45,x1:85,y1:71}]
};
var EM21={id:"EM-21",kind:"Architecture",wide:false,title:"Layers in Stone",object:"Great Mosque of C\u00f3rdoba",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Puerta de San Esteban, Great Mosque of C\u00f3rdoba",date:"mosque begun about 785 C.E.; doorway remodeled 855 C.E.",location:"C\u00f3rdoba, Spain",artist:"builders unknown; for Abd al-Rahman I and Muhammad I",
 headline:"Look closely at the doorway",
 alt:"A tall, weathered wall of tan stone blocks with a stepped, notched top edge against a blue sky. In the center is a doorway with a dark metal door. Above it, a horseshoe-shaped arch is built of alternating red and white wedge-shaped stones, set inside a rectangular carved frame. Carved stone panels are set into the wall on both sides.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Cordoba-SanEsteban.jpg",
 imageNote:"The Puerta de San Esteban, a doorway in the mosque\u2019s west wall. An inscription dates its remodeling to 855 C.E.",
 detail:{image:"public/images/artworks/Cordoba-Hall-Detail.jpg",alt:"Inside a huge hall of columns. Rows of arches, striped red and white, rise in two levels over stone columns, with pale light coming from far down the hall.",caption:"Technique detail: two levels of arches built from alternating stone and red brick, resting on reused Roman columns",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Mosque_of_Cordoba_Spain.jpg",author:"Steven J. Dunlop",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Used as provided on Commons."}},
 size:"",
 intro:"This doorway belongs to a building begun as a mosque about 1,200 years ago. An inscription dates the doorway\u2019s remodeling to 855 C.E. Can you spot the details that make this entrance special?",
 context:"A horseshoe arch curves in past its halfway point, like the shape of a horseshoe.",
 clues:[{id:"arch",label:"Striped arch",def:"A curved arch made of red and white wedge-shaped stones"},{id:"frame",label:"Rectangular frame",def:"A narrow carved band that outlines the arch in a rectangle"},{id:"panels",label:"Carved panels",def:"Stone blocks with carved patterns set into the wall"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might builders have used red brick and pale stone in alternating stripes instead of plain stone?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A striped arch, a framing band and carved panels are features a detective can carry to the next case.",
 sourceNums:[50,51,52],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Puerta_de_San_Esteban_(Mezquita_de_C%C3%B3rdoba,_Espa%C3%B1a).jpg",author:"Jos\u00e9 Luis Filpo",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the Commons file."}};
EM21.zones={
 arch:[{x0:30,y0:42,x1:70,y1:63}],
 frame:[{x0:26,y0:38,x1:74,y1:42},{x0:25,y0:42,x1:29,y1:62},{x0:71,y0:42,x1:75,y1:62}],
 panels:[{x0:79,y0:40.5,x1:98,y1:51},{x0:3,y0:40.5,x1:22,y1:52},{x0:38,y0:29,x1:62,y1:37}]
};
var EM22={id:"EM-22",kind:"Ship burial",wide:true,title:"A Ship in the Ground",object:"Oseberg ship",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Oseberg ship",date:"built about 820 C.E.; buried 834 C.E.",location:"Museum of the Viking Age, Oslo, Norway (found at Oseberg, Norway)",artist:"Viking shipbuilders and carvers, names unknown",
 headline:"Look closely at the ship",
 alt:"A long, dark wooden ship on display inside a white, arched museum hall. Its front end sweeps up in a tall curve and ends in a spiral at the top. Rows of overlapping planks run along its side, and a tall mast stands in the middle of the open deck.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Oseberg-Ship.jpg",
 imageNote:"The Oseberg ship, photographed in the Viking Ship Museum in Oslo in 2016. It was dug out of its burial mound in 1904. The museum is closed for rebuilding and is due to reopen in 2027 as the Museum of the Viking Age.",
 detail:{image:"public/images/artworks/Oseberg-Carvings-Detail.jpg",alt:"A carved wooden panel in a museum case. Tangled animals with scale-like patterns on their bodies fill the panel, and two round faces look out from among them.",caption:"Technique detail: tangled animals with scaly bodies and round faces, carved in relief from wood",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Grave_goods_from_the_Oseberg_ship_burial._Viking_Ship_Museum,_Oslo,_Norway_(Vikingskipshuset_p%C3%A5_Bygd%C3%B8y)_November_2011.jpg",author:"Bochum1805",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/",changes:"Resized from the Commons file."}},
 size:"About 21 m / 70 ft long and 5 m / 16 ft wide, as measured after it was dug up. Nearly as long as two city buses end to end.",
 intro:"This wooden ship was buried under a mound of clay and stone in Norway in 834 C.E. Two women and many belongings were buried with it. Its makers shaped the front end with great care. Can you spot the details that were made by hand?",
 context:"The prow is the front end of a ship.",
 clues:[{id:"spiral",label:"Spiral curl",def:"A round curl at the very top of the ship\u2019s front end"},{id:"carving",label:"Carved prow",def:"Dark, tightly packed patterns cut into the wood of the front end"},{id:"planks",label:"Overlapping planks",def:"Long boards laid in overlapping rows along the side"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might people have chosen to bury a whole ship along with two women and their belongings?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A spiral curl, a carved prow and overlapping planks are features a detective can carry to the next case.",
 sourceNums:[53,54,76],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Osebergskipet_2016.jpg",author:"Petter Ulleland",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}};
EM22.zones={
 spiral:[{x0:73,y0:1,x1:83,y1:14}],
 carving:[{x0:74.5,y0:16,x1:83,y1:62},{x0:70,y0:84,x1:84,y1:98}],
 planks:[{x0:38,y0:70,x1:78,y1:90}]
};
var EM23={id:"EM-23",kind:"Casket",wide:true,title:"A Box of Whale Bone",object:"Franks Casket",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Franks Casket (also called the Auzon Casket)",date:"early 8th century C.E.",location:"British Museum, London (findspot recorded as Auzon, France)",artist:"unknown Anglo-Saxon carver",
 headline:"Look closely at the casket",
 alt:"A small casket of pale, carved bone seen from the front, with a clear plastic cover over its lid. Across the front, small figures are carved in low relief in two scenes side by side. Rows of angular runic letters frame the scenes along the top and bottom. A hole with a rough edge sits at the top center, where a metal fitting was once attached.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Franks-Casket.jpg",
 imageNote:"The front of the Franks Casket. The scene at left comes from a Germanic legend about a smith named Weland. The scene at right shows three kings visiting a mother and child.",
 detail:{image:"public/images/artworks/Franks-Casket-Weland-Detail.jpg",alt:"A close view of a carved scene in pale bone. A man at the left holds tools beside a low table. Two robed women stand in the middle, and a man at the right reaches toward several birds.",caption:"Technique detail: tiny figures carved in low relief into whale bone, with plant shapes and runes filling the gaps",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Franks_casket_03.jpg",author:"Michel wal",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Cropped from the Commons file."}},
 size:"About 23 cm / 9 in long, 19 cm / 7\u00bd in wide and 11 cm / 4\u00bc in high. A bit smaller than a shoebox.",
 intro:"This box was carved from whale bone about 1,300 years ago. Its front tells two stories, and a riddle in runes runs around the edge. Can you find the parts of the front that tell each story?",
 context:"Runes are angular letters used to write Old English and other early Germanic languages.",
 clues:[{id:"smith",label:"Smith\u2019s scene",def:"A carved scene at the left, where a figure holds tools"},{id:"kings",label:"Three kings",def:"Three figures in short tunics walking toward a seated mother and child"},{id:"runes",label:"Runic border",def:"Rows of angular letters carved around the scenes"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the carver have placed a story from Germanic legend and a story from the Bible side by side on the same box?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A smith\u2019s scene, three kings and a border of runes are features a detective can carry to the next case.",
 sourceNums:[55],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Franks_casket_03.jpg",author:"Michel wal",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Resized from the Commons file."}};
EM23.zones={
 smith:[{x0:14,y0:51,x1:49,y1:75}],
 kings:[{x0:49.5,y0:55,x1:70,y1:76},{x0:71,y0:52,x1:84,y1:76}],
 runes:[{x0:14,y0:41,x1:37,y1:51},{x0:61,y0:41,x1:86,y1:52},{x0:13,y0:75,x1:84,y1:84}]
};
var EM24={id:"EM-24",kind:"Architecture",wide:true,title:"A Dome Above a Rock",object:"Dome of the Rock",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Dome of the Rock (Qubbat al-Sakhra)",date:"completed about 691\u2013692 C.E.",location:"Haram al-Sharif (Temple Mount), Jerusalem",artist:"builders unknown; built for the caliph Abd al-Malik",
 headline:"Look closely at the building",
 alt:"An eight-sided building seen from a corner against a deep blue sky. A large, rounded gold dome with a small gold ornament on top rises from its center. The walls have a band of blue tile writing along the top, a row of arched windows set in green and blue tile patterns, and pale stone panels along the bottom. A porch with slender stone columns stands at the left.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Dome-of-the-Rock.jpg",
 imageNote:"The Dome of the Rock from the outside. The tiles on its walls were added in the 1500s and again in the 1960s, long after the building was finished.",
 detail:{image:"public/images/artworks/Dome-Mosaic-Detail.jpg",alt:"A close view of a mosaic of tiny colored pieces on a gold background. A jeweled vase with curved handles holds a large plant shape, and green vines with leaves curl around it.",caption:"Technique detail: a jeweled vase and curling vines made of tiny colored pieces, from the mosaics inside the building",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Arabischer_Maler_um_690_001.jpg",author:"Unknown artists (photograph from the Yorck Project)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}},
 size:"The dome is more than 20 m / 65 ft across. About as wide as two school buses are long.",
 intro:"This eight-sided building in Jerusalem was finished about 1,300 years ago, around a large rock at its center. The tiles on its outside walls are much newer, but the building\u2019s shape is from the beginning. Can you find three parts of the outside?",
 context:"An octagon is a shape with eight sides.",
 clues:[{id:"dome",label:"Gold dome",def:"A large, rounded roof covered in gold-colored metal"},{id:"arches",label:"Tiled arches",def:"A row of arched windows set in colorful tile patterns"},{id:"stone",label:"Pale stone wall",def:"Smooth, light-colored stone panels along the bottom of the walls"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might builders have covered the inside of a building with glittering mosaics of jewels and plants, but shown no people or animals?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A gold dome, tiled arches and pale stone walls are features a detective can carry to the next case.",
 sourceNums:[56,57],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Dome_of_the_Rock,_Jerusalem_(16197850416).jpg",author:"yeowatzup",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the Commons file."}};
EM24.zones={
 dome:[{x0:32,y0:10,x1:66,y1:40}],
 arches:[{x0:10,y0:54,x1:94,y1:71}],
 stone:[{x0:55,y0:71,x1:97,y1:92}]
};
var EM25={id:"EM-25",kind:"Wall painting",wide:true,title:"A Painted Wall of Saints",object:"Santa Maria Antiqua frescoes",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Wall paintings in Santa Maria Antiqua (Christ enthroned between saints)",date:"about 757\u2013767 C.E.",location:"Santa Maria Antiqua, Roman Forum, Rome",artist:"unknown painters; painted in the time of Pope Paul I",
 headline:"Look closely at the wall painting",
 alt:"A tall, weathered wall covered in paintings. A row of standing saints with gold nimbuses, each holding a book, stretches across the middle, with Christ seated on a throne at the center. Above them are framed story scenes, partly lost. Along the bottom is a band of painted curtains with swags and round ornaments. A small square stone structure stands at the foot of the wall.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Santa-Maria-Antiqua.jpg",
 imageNote:"A wall of Santa Maria Antiqua in the Roman Forum. Parts of the plaster have fallen away, but much of the paint is still bright.",
 detail:{image:"public/images/artworks/Santa-Maria-Antiqua-Basil.jpg",flex:29,alt:"A tall painted figure of a bearded saint in a dark robe, with a gold nimbus and large eyes. He holds a book. Greek letters beside his head give his name.",caption:"Technique detail: Saint Basil, painted on plaster with large eyes, a long face and a gold nimbus",credit:{word:"Detail photo (Saint Basil)",url:"https://commons.wikimedia.org/wiki/File:Agios_Basileios_Santa_Maria_Antiqua.jpg",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/",changes:"Used as provided on Commons."}},
 detail2:{image:"public/images/artworks/Santa-Maria-Antiqua-Hierarchs.jpg",alt:"Three standing figures with gold nimbuses, each holding a book. Greek letters between their heads give their names. Plaster is missing in places, and red and dark bands of color surround them.",caption:"Technique detail: the Three Holy Hierarchs, painted on plaster with Greek names beside each head",credit:{word:"Detail photo (three hierarchs)",url:"https://commons.wikimedia.org/wiki/File:Three_Holy_Hierarchs_Santa_Maria_Antiqua.jpg",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/",changes:"Used as provided on Commons."}},
 size:"",
 intro:"This wall was painted about 1,250 years ago inside a church in the Roman Forum. The church collapsed in an earthquake in 847 C.E. and was found again in 1900. Much of the paint survived. Can you find three parts of the painted wall?",
 context:"A nimbus is a solid gold disk painted behind a holy person\u2019s head.",
 clues:[{id:"christ",label:"Christ on a throne",def:"A seated figure at the center, holding a book"},{id:"saints",label:"Saints in a row",def:"Standing figures with gold nimbuses, each holding a book"},{id:"curtain",label:"Painted curtain",def:"A band of painted cloth with swags and round ornaments"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might painters have shown saints in a long row, all facing forward, instead of in a lively scene?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A seated Christ, a row of saints and a painted curtain are features a detective can carry to the next case.",
 sourceNums:[58,59],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:03_Santa_Maria_Antiqua_Mural.jpg",author:"NateBergin",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/",changes:"Resized from the Commons file."}};
EM25.zones={
 christ:[{x0:44,y0:41,x1:54.5,y1:68}],
 saints:[{x0:6,y0:41,x1:43.5,y1:68},{x0:54.5,y0:41,x1:99,y1:68}],
 curtain:[{x0:1,y0:72,x1:99,y1:93}]
};
var EM26={id:"EM-26",kind:"Icon painting",wide:false,title:"One Face, Two Sides",object:"Christ Pantocrator icon",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Christ Pantocrator (icon)",date:"6th century C.E. (about 600)",location:"Saint Catherine\u2019s Monastery, Mount Sinai, Egypt",artist:"unknown painter",
 headline:"Look closely at the painting",
 alt:"A painting of a man with long dark hair parted in the middle, a dark beard and large dark eyes, in front of a round gold nimbus. He wears a dark robe, raises one hand, and holds a gold book decorated with a dark cross and white dots. Pale buildings and a blue-gray sky fill the background.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Pantocrator-Sinai.jpg",
 imageNote:"A painting of Christ on a wooden panel. Look at how the two sides of the face differ.",
 detail:{image:"public/images/artworks/Pantocrator-Sinai-Face-Detail.jpg",alt:"A close view of a calm, bearded face with large dark eyes and long dark hair, set against a gold nimbus. The two sides of the face are not quite alike.",caption:"Technique detail: the face, painted in wax-based paint. The left and right halves differ in shape and expression.",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Jesus_Christ_3.jpg",author:"JoeyEspo984",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the Commons file."}},
 size:"About 84 cm / 33 in tall and 45.5 cm / 18 in wide. About as tall as a kitchen counter.",
 intro:"This painting on a wooden panel was made about 1,400 years ago and is kept at a monastery on Mount Sinai in Egypt. Take a long look at the face. Can you find three parts of the painting?",
 context:"Pantocrator is a Greek word meaning \u201cAll-Powerful.\u201d",
 clues:[{id:"face",label:"The face",def:"A calm, bearded face with large eyes"},{id:"hand",label:"Raised hand",def:"A hand lifted at the left, with fingers held up"},{id:"book",label:"Gold book",def:"A book with a gold cover, a dark cross and white dots"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the painter have made the two sides of the face a little different, instead of perfectly matching?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A face with two different sides, a raised hand and a jeweled book are features a detective can carry to the next case.",
 sourceNums:[30,31,60,61],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Jesus_Christ_3.jpg",author:"JoeyEspo984",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}};
EM26.zones={
 face:[{x0:28.5,y0:21,x1:62,y1:46}],
 hand:[{x0:17,y0:61.5,x1:38,y1:82}],
 book:[{x0:44,y0:57.5,x1:97,y1:85}]
};
var EM27={id:"EM-27",kind:"Architecture",wide:true,title:"Rounded Core, Pointed Edges",object:"Palatine Chapel, Aachen",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Palatine Chapel (Aachen Cathedral)",date:"begun about 790\u2013800 C.E.; consecrated 805 C.E.",location:"Aachen, Germany",artist:"Odo of Metz; built for Charlemagne",
 headline:"Look closely at the building",
 alt:"A large stone church seen from one side against a clear blue sky. In the middle stands an eight-sided building with a rounded, silvery-gray dome and a small lantern on top. A band of small rounded arches runs just below the dome. Around it rise tall, pointed windows with stone tracery, steep gray roofs, and a tall spire on a tower at the right. Houses and a leafy tree stand in the foreground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Aachen-Palatine-Chapel.jpg",
 imageNote:"The domed octagon in the middle is Charlemagne\u2019s chapel. The tall pointed parts around it were added from the 1300s on.",
 detail:{image:"public/images/artworks/Aachen-Interior-Detail.jpg",alt:"The inside of an eight-sided church. Rounded arches built of alternating light and dark stones rest on thick piers faced with gray and white marble slabs. A large gold chandelier hangs in the center, an upper gallery with dark metal railings rises above it, and rows of wooden chairs and visitors fill the foreground.",caption:"Technique detail: arches built from alternating light and dark stones, resting on piers faced with marble slabs",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Cathedral_in_Aachen_7.jpg",author:"Leon petrosyan",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:""}},
 size:"Height to the top of the cupola: about 31 m / 101 ft. About as tall as a ten-story building.",
 intro:"Charlemagne, the ruler of a large European empire, had this chapel built beside his palace more than 1,200 years ago. Later builders added new parts around it, so one photo shows more than one period. Can you find three parts of the outside?",
 context:"A palatine chapel is a church built beside a ruler\u2019s palace.",
 clues:[{id:"dome",label:"Domed roof",def:"A rounded roof with a small lantern on top"},{id:"arches",label:"Rounded arches",def:"A band of small, rounded arches just below the dome"},{id:"pointed",label:"Pointed windows",def:"Tall windows that end in a point, added in the 1300s or later"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a ruler choose to build a church whose shape and columns recall faraway Ravenna and Rome?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A domed roof, rounded arches and pointed windows are features a detective can carry to the next case.",
 sourceNums:[65,66],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Aachen_Cathedral_And_Palatine_Chapel,_Germany.jpg",author:"Jim Linwood",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the Commons file."}};
EM27.zones={
 dome:[{x0:41,y0:18,x1:59,y1:46}],
 arches:[{x0:41,y0:46,x1:59,y1:52}],
 pointed:[{x0:56.5,y0:63,x1:69.5,y1:76.5},{x0:70,y0:63,x1:79,y1:87},{x0:23.5,y0:42,x1:38.5,y1:58}]
};
var EM28={id:"EM-28",kind:"Architecture",wide:false,title:"A Hall Built for a King",object:"Santa Mar\u00eda del Naranco",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Santa Mar\u00eda del Naranco (royal hall of King Ramiro I)",date:"about 842\u2013850 C.E.",location:"Mount Naranco, Oviedo, Asturias, Spain",artist:"builders unknown; built for King Ramiro I",
 headline:"Look closely at the building",
 alt:"A tall stone building of two floors seen from a corner, with a low pitched roof of red tiles. The upper floor at the left opens to the air through three rounded arches on slender columns with twisted shafts. Below them, three small arched niches are set into the wall. Along the long side at the right, tall, thick strips of stone stand against the wall, and a flight of stone steps climbs to a doorway on the upper floor. Gray cloud fills the sky.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Naranco-Exterior.jpg",
 imageNote:"The building was restored in 1929\u20131934.",
 detail:{image:"public/images/artworks/Naranco-Nave.jpg",flex:38,alt:"The long upper hall seen from one end. A rounded stone vault covers the room, held up by rounded arches that cross it. Tall columns with twisted, rope-like shafts stand along both walls, and round carved medallions decorate the stone above the arches. At the far end, three arched openings let in daylight.",caption:"Technique detail: the vaulted upper hall, with rounded arches, columns with twisted shafts and round carved medallions",credit:{word:"Detail photo (interior)",url:"https://commons.wikimedia.org/wiki/File:Nave_superior_de_Santa_Mar%C3%ADa_del_Naranco_(Oviedo).jpg",author:"Jl FilpoC",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}},
 detail2:{image:"public/images/artworks/Naranco-Plan.png",flex:62,alt:"A flat drawing of the building\u2019s floor plan. A long rectangular room fills the middle, with a smaller room at each end shaded orange. Thick black squares and bars mark the piers and walls around the outside, and a set of steps shows along the top edge.",caption:"Technique detail: a floor plan showing a long central room with a smaller room at each end, ringed by thick piers and buttresses",credit:{word:"Detail photo (plan)",url:"https://commons.wikimedia.org/wiki/File:Planta_de_Santa_Mar%C3%ADa_del_Naranco.gif",author:"Jos\u00e9-Manuel Benito",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Converted from GIF to PNG."}},
 size:"",
 intro:"This stone building near Oviedo in Spain was built for King Ramiro I about 1,200 years ago, probably as a royal hall. It was used as a church only later. Can you find three parts of the outside?",
 context:"A buttress is a thick stone support built against a wall.",
 clues:[{id:"arches",label:"Rounded arches",def:"Three rounded arches that open the upper floor to the air"},{id:"buttress",label:"Buttresses",def:"Tall, thick strips of stone built against the long wall"},{id:"stairs",label:"Stone stairway",def:"A flight of steps that climbs to a doorway on the upper floor"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The upper floor has open arches and windows on all sides, but the lower floor has almost none. Why might a builder put the grandest room above, in the light?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rounded arches, thick buttresses and a stone stairway are features a detective can carry to the next case.",
 sourceNums:[67,68],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Iglesia_de_Santa_Maria_de_Naranco_2-501.jpg",author:"Emilio Rubio Villanueva (edited by MenkinAlRire)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}};
EM28.zones={
 arches:[{x0:20,y0:39,x1:37.5,y1:65}],
 buttress:[{x0:49,y0:22,x1:65,y1:70},{x0:80,y0:47,x1:87,y1:85}],
 stairs:[{x0:59.5,y0:70,x1:76,y1:89}]
};
var EM29={id:"EM-29",kind:"Wall painting",wide:true,title:"A Family on the Move",object:"The Flight into Egypt, Monastery of Saint John, M\u00fcstair",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"The Flight into Egypt (north wall of the nave, Monastery of Saint John)",date:"first half of the 9th century C.E.",location:"M\u00fcstair, Graub\u00fcnden, Switzerland",artist:"painters unknown",
 headline:"Look closely at the painting",
 alt:"A wall painting in orange, brown and cream. A wide band shaped like a rounded arch curves across the top. Under it, a woman in an orange robe holds a small child, and a solid orange disk is set behind each of their heads. At the right, a man with a beard and a third disk behind his head holds a rope that loops around the nose and neck of a brown animal. At the far left, another man carries a large bundle on his shoulder. Dark tall shapes of buildings stand behind the animal.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Mustair-Flight.jpg",
 imageNote:"Scanned from a printed book, so the colors may differ from the painting itself.",
 detail:{image:"public/images/artworks/Mustair-Mary-Detail.jpg",alt:"A close view of a woman with large dark eyes, wrapped in an orange cloth. A solid orange disk is set behind her head. She holds a small child, who has a smaller orange disk behind his head and points one hand outward. Dark outlines draw both faces.",caption:"Technique detail: Mary and the Child, each with a solid nimbus and dark painted outlines",credit:{word:"Detail",url:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg",author:"James Steakley",license:"Public domain (flat reproduction of a 9th-century painting)",licenseUrl:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg",changes:"Cropped from the photo above."}},
 size:"",
 intro:"This painting was made on the north wall of a monastery church in Switzerland more than 1,100 years ago. It shows the Flight into Egypt, the Gospel story of a family fleeing from danger. Can you find three features?",
 context:"A nimbus is a solid disk set behind the head of a holy figure.",
 clues:[{id:"nimbus",label:"Nimbus",def:"A solid disk behind a holy head; three figures here have one"},{id:"arch",label:"Rounded arch",def:"A wide, curved band across the top of the scene"},{id:"rope",label:"Rope",def:"A rope looped around the animal\u2019s nose and neck"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The painter has not shown the road, the sky or the distance, only the figures and a few buildings. What do you think the painter wanted you to notice first?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A nimbus, a rounded arch and a lead rope are features a detective can carry to the next case.",
 sourceNums:[70,71,72],
 credit:{word:"Scan",url:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg",author:"James Steakley (scan of a book plate; painter unknown)",license:"Public domain (flat reproduction of a 9th-century painting)",licenseUrl:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg",changes:"Scanned from Jean Hubert et al., Europe in the Dark Ages (Thames & Hudson, 1969), p. 150. Resized."}};
EM29.zones={
 nimbus:[{cx:39.4,cy:17.3,rx:9.7,ry:8.6},{cx:47.9,cy:28.4,rx:5.9,ry:5.8},{cx:89.2,cy:29.8,rx:8.6,ry:9.3}],
 arch:[{x0:8.4,y0:0,x1:61,y1:21}],
 rope:[{x0:62.5,y0:37.4,x1:87.5,y1:59.7}]
};
var EM30={id:"EM-30",kind:"Architecture",wide:true,title:"Plain Outside, Starry Inside",object:"Mausoleum of Galla Placidia",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Mausoleum of Galla Placidia",date:"about 425 C.E.",location:"Ravenna, Italy",artist:"builders unknown; built during the rule of Galla Placidia",
 headline:"Look closely at the building",
 alt:"A small building of reddish-brown brick seen from a corner, on a lawn under a pale sky. Two low wings with triangular gable ends and red tile roofs meet in front of a taller square block that rises behind them. A row of rounded arches is set into the brick walls, most with a narrow slit and none with a door. Tall pine trees stand behind.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/GallaPlacidia-Exterior.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/GallaPlacidia-Interior.jpg",flex:60,alt:"The inside of one arm of the building. A rounded, tunnel-shaped ceiling is covered in deep blue mosaic scattered with gold stars and flower-like circles. A wide band of green leaves and fruit frames the ceiling, with a small gold cross at its top. Below, a half-circle mosaic shows a seated figure among white sheep.",caption:"Technique detail: inside, a rounded ceiling covered in mosaic stars, with a Good Shepherd mosaic below",credit:{word:"Detail photo (interior)",url:"https://commons.wikimedia.org/wiki/File:Galla_Placidia_Ravenna_05.JPG",author:"Superchilum",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}},
 detail2:{image:"public/images/artworks/GallaPlacidia-Plan.png",flex:40,alt:"A flat black-and-white drawing of a floor plan in the shape of a cross, with four arms drawn in thick black walls and a few small rectangles inside. The label Plan K is printed below.",caption:"Technique detail: a floor plan in the shape of a cross",credit:{word:"Detail (plan)",url:"https://commons.wikimedia.org/wiki/File:Plan_of_Mausoleum_of_Galla_Placidia_(Ravenna)_by_A_history_of_architecture_on_the_comparative_method,_London_1905,_crop_page_181.jpg",author:"Banister Fletcher (crop by Paolo Villa)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped and converted to PNG."}},
 size:"",
 intro:"This small brick building in Ravenna, Italy, was built about 1,600 years ago as a mausoleum, a building made to hold a tomb. Can you find three features of the outside?",
 context:"A blind arch is an arch built into a wall, with no opening through it.",
 clues:[{id:"arches",label:"Blind arches",def:"Rounded arches set into the brick walls, most with no door"},{id:"gables",label:"Gable ends",def:"Triangular walls under the tile roofs of the two low wings"},{id:"tower",label:"Square tower",def:"A tall square block of brick rising behind the lower roofs"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The outside is plain brick, but the inside glitters with mosaic. Why might a builder keep the outside simple and save the richest decoration for inside?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Blind arches, gable ends and a square tower are features a detective can carry to the next case.",
 sourceNums:[73,74,75],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Mausoleum_of_Galla_Placidia_in_Ravenna.JPG",author:"Petar Milo\u0161evi\u0107",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}};
EM30.zones={
 arches:[{x0:15.6,y0:64.6,x1:31.3,y1:85.4},{x0:36.3,y0:63.5,x1:62.5,y1:85.4},{x0:67.5,y0:63.8,x1:87.5,y1:84.6}],
 gables:[{x0:12.5,y0:44.6,x1:32.5,y1:58.5},{x0:66.3,y0:44.2,x1:88.8,y1:56.9}],
 tower:[{x0:30,y0:19,x1:77,y1:53}]
};
EM01.zones={
 blocky:[{x0:8,y0:5,x1:82,y1:78}],
 matching:[{x0:10,y0:2,x1:78,y1:24}],
 patterns:[{x0:8,y0:50,x1:78,y1:64},{x0:8,y0:30,x1:78,y1:50}]
};
EM02.zones={
 gold:[{x0:27,y0:9,x1:67,y1:29},{x0:70,y0:20,x1:88,y1:34}],
 faces:[{x0:33,y0:31,x1:67,y1:52}],
 float:[{x0:10,y0:50,x1:88,y1:88}]
};
EM03.zones={
 matching:[{x0:8,y0:27,x1:92,y1:43}],
 blocky:[{x0:8,y0:27,x1:50,y1:43}],
 two:[{x0:8,y0:45,x1:32,y1:82},{x0:68,y0:45,x1:95,y1:82},{x0:50,y0:27,x1:92,y1:43}]
};
EM04.zones={
 yard:[{x0:33,y0:36,x1:72,y1:62}],
 crossing:[{x0:8,y0:0,x1:27,y1:18}],
 steps:[{x0:62,y0:74,x1:98,y1:97}]
};
EM07.zones={
 knot:[{x0:36,y0:30,x1:54,y1:40.5},{x0:35,y0:70,x1:55,y1:89}],
 vine:[{x0:39,y0:41,x1:54,y1:70},{x0:43,y0:8,x1:54,y1:29}],
 panels:[{x0:34,y0:5,x1:55,y1:90}]
};
EM08.zones={
 faces:[{x0:28,y0:30,x1:70,y1:62}],
 lines:[{x0:20,y0:35,x1:31,y1:52},{x0:50,y0:20,x1:68,y1:33},{x0:35,y0:62,x1:66,y1:82}],
 lead:[{x0:15,y0:22,x1:30,y1:82},{x0:66,y0:25,x1:86,y1:85},{x0:30,y0:20,x1:66,y1:30},{x0:33,y0:83,x1:67,y1:93}]
};
EM09.zones={
 matching:[{x0:26,y0:38,x1:70,y1:88}],
 faces:[{x0:28,y0:38,x1:68,y1:52}],
 outline:[{x0:8,y0:52,x1:32,y1:88},{x0:26,y0:38,x1:70,y1:88},{x0:70,y0:50,x1:90,y1:88}]
};
EM10.zones={
 boxes:[{x0:4,y0:36,x1:96,y1:62},{x0:4,y0:65,x1:96,y1:92}],
 deep:[{x0:10,y0:37,x1:60,y1:60},{x0:26,y0:66,x1:58,y1:90}],
 folds:[{x0:60,y0:37,x1:92,y1:60},{x0:62,y0:66,x1:96,y1:90}]
};
EM11.zones={
 long:[{x0:14,y0:16,x1:78,y1:66}],
 windows:[{x0:16,y0:28,x1:50,y1:48}],
 apse:[{x0:52,y0:17,x1:78,y1:64}]
};
EM12.zones={
 dome:[{x0:40,y0:25,x1:61,y1:37}],
 ring:[{x0:38,y0:34,x1:62,y1:41}],
 step:[{x0:28,y0:42,x1:72,y1:58}]
};
EM13.zones={
 rows:[{x0:3,y0:20,x1:88,y1:58},{x0:3,y0:58,x1:97,y1:96}],
 twice:[{x0:16,y0:32,x1:24,y1:56},{x0:48,y0:32,x1:57,y1:56},{x0:44,y0:78,x1:52,y1:92}],
 words:[{x0:5,y0:0,x1:92,y1:16}]
};
EM14.zones={
 folds:[{x0:5,y0:30,x1:28,y1:76},{x0:36,y0:30,x1:60,y1:76},{x0:70,y0:30,x1:92,y1:76}],
 plaques:[{x0:5,y0:3,x1:95,y1:19},{x0:5,y0:22,x1:95,y1:78},{x0:5,y0:80,x1:95,y1:96}],
 arch:[{x0:31,y0:24,x1:67,y1:78}]
};
window.DECKS[0].cards[0]=EM19;
window.DECKS[0].cards[1]=EM18;
window.DECKS[0].cards[2]=EM24;
window.DECKS[0].cards[3]=EM22;
window.DECKS[0].cards[4]=EM05;
window.DECKS[0].cards[5]=EM29;
window.DECKS[0].cards[6]=EM30;
window.DECKS[0].cards[7]=EM06;
window.DECKS[0].cards[8]=EM12;
window.DECKS[0].cards[9]=EM21;
window.DECKS[0].cards[10]=EM28;
window.DECKS[0].cards[11]=EM07;
window.DECKS[0].cards[12]=EM09;
window.DECKS[0].cards[13]=EM25;
window.DECKS[0].cards[14]=EM10;
window.DECKS[0].cards[15]=EM01;
window.DECKS[0].cards[16]=EM02;
window.DECKS[0].cards[17]=EM08;
window.DECKS[0].cards[18]=EM20;
window.DECKS[0].cards[19]=EM26;
window.DECKS[0].cards[20]=EM15;
window.DECKS[0].cards[21]=EM13;
window.DECKS[0].cards[22]=EM11;
window.DECKS[0].cards[23]=EM04;
window.DECKS[0].cards[24]=EM14;
window.DECKS[0].cards[25]=EM17;
window.DECKS[0].cards[26]=EM16;
window.DECKS[0].cards[27]=EM23;
window.DECKS[0].cards[28]=EM27;
window.DECKS[0].cards[29]=EM03;
window.DECKS[0].vocab=[{id:"VOC-01",after:16,word:"Composition",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"How an artist arranges the parts of a work so they fit together within its space.",look:["Where do the biggest or brightest parts sit?","Which lines or shapes lead your eye from one part to the next?","Is the arrangement balanced, with similar parts on each side, or does one side feel heavier?"],example:{id:"EM-01",points:["The four figures are arranged in two pairs. In each pair the figures embrace, which ties them together.","The two pairs match in size, clothing and stance. No one figure takes the center, so the arrangement feels balanced and steady.","The group is packed into one compact block, so it reads as a single unit rather than four separate people."]},sourceNums:[28],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{case:"EM-10"},{case:"EM-01"},{case:"EM-07"}]}},{id:"VOC-02",after:6,word:"Nimbus",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"A solid disk, like a plate or saucer, set behind the head of a holy figure. It is filled in, never a thin ring of light.",look:["Is the space behind the head a solid disk, or only a thin outline?","Is the disk gold, as it almost always is in early medieval art?","Do any words on or beside the disk name the holy person?"],example:{id:"EM-29",points:["Behind the head of each holy figure sits a solid disk, filled in like a plate standing on edge. That filled disk is a nimbus. It is filled right in, not drawn as a thin ring.","Three figures in this painting have one. Counting them tells you who the painter treated as holy.","The disks are plain inside, with no pattern on them. Their job is to mark the figures as holy, not to decorate the wall."]},sourceNums:[63,64],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{case:"EM-05"},{case:"EM-29"},{case:"EM-18"}]}},{id:"VOC-03",after:20,word:"Attribute",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"An object that goes with a particular person in art, so you can tell who it is.",look:["What is the figure holding, wearing or standing beside?","Does the same object appear with this person in other works?","What might the object tell you about the person\u2019s story?"],example:{id:"EM-05",points:["Saint Peter holds a bundle of keys against his chest, beside a tall cross. The keys are his attribute, so a viewer who knows his story can tell who he is.","Attributes often come from an event in a saint\u2019s life. They helped viewers recognize saints in paintings.","Look for the same attribute object in other works to help identify the subject.","A symbol stands for an idea, like a dove for peace or a dog for loyalty. An attribute is a symbol that belongs to one person, like keys for Saint Peter."]},sourceNums:[62],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:2,options:[{case:"EM-26"},{case:"EM-09"},{case:"EM-05"}]}},{id:"VOC-04",after:12,word:"Interlace",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"A pattern of ribbons or bands that weave over and under one another, usually with no beginning and no end.",look:["Follow one ribbon with your eye. Does it pass over, then under, then over again?","Can you find where a ribbon starts or stops, or does it run on without end?","Do any ribbons turn into animals, with a head, a leg or a tail hidden in the weave?"],example:{id:"EM-06",points:["The panels around the big letters are filled with narrow ribbons that cross over and under each other. Follow one with your eye and it carries you around the panel and back.","The crossings fall at even intervals, so the weave keeps a steady rhythm all the way across a panel.","Interlace shows nothing from the world. It is pure pattern, and here it fills the space that a picture fills in other kinds of painting."]},sourceNums:[77],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{case:"EM-07"},{case:"EM-06"},{case:"EM-22"}]}},{id:"VOC-05",after:24,word:"Nave, Transept and Apse",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"Three parts of an early Christian church. The nave is the long central hall. The transept is the arm that crosses it near the far end. The apse is the half-round recess beyond, behind the altar.",look:["Find the longest space first. The nave runs from the main doors toward the altar, and it is wider than the aisles beside it.","Look for an arm that crosses the building near the far end and juts out past the walls on both sides. That is the transept.","At the very end, look for a wall that curves instead of turning a corner. That is the apse."],locate:{heading:"Find each part",prompt:"For 3 bonus points, click each part on the plan. You earn a point for each one you find on your first try.",points:1,image:"public/images/artworks/OldStPeters-Plan.png",alt:"A floor plan of a long church. Four rows of columns divide a long rectangle into a wide central space with two narrower spaces on each side. Near the right end a tall arm crosses the whole building and juts out past the walls above and below. Beyond it a half-round wall bulges to the right, with a small altar enclosure inside.",caption:"The body of Old St. Peter\u2019s Basilica, Rome, begun circa 330 C.E. You played this building as case 24.",creditWord:"Plan",credit:{word:"Plan",url:"https://commons.wikimedia.org/wiki/File:Old_St_Peters_Basilica_plan.png",author:"Locutus Borg, English labelling by Amandajm",license:"Public domain",licenseUrl:"",changes:"Cropped to the body of the church; printed labels removed so the parts can be identified."},clues:[{id:"nave",label:"Nave",def:"The long central hall, wider than the spaces beside it"},{id:"transept",label:"Transept",def:"The arm crossing the building near the far end"},{id:"apse",label:"Apse",def:"The half-round recess beyond the crossing"}],zones:{nave:[{x0:4,y0:39,x1:61,y1:61}],transept:[{x0:63.5,y0:4,x1:81.5,y1:92}],apse:[{x0:82.5,y0:37,x1:95,y1:64}]}},sourceNums:[6,7]}];
window.DECKS[0].review={"id": "REV-EM", "title": "The Case File", "crumb": "Early Medieval Period, circa 300 C.E. – 900 C.E.", "lead": "Thirty cases are closed. Vasario has read every note you filed. Separately the cases are thirty objects; together they are a period, and a period has features. Here is what your evidence adds up to.", "traitsHead": "What the evidence shows", "traits": [{"id": "pattern", "claim": "Pattern is the thing, not decoration added to it", "note": "In this period a pattern is rarely a border around the real subject. Very often it is the subject. A page, a purse lid or a cup can be given over almost entirely to shapes that show nothing from the world.", "cases": ["EM-19", "EM-22", "EM-06", "EM-07", "EM-01", "EM-20", "EM-15", "EM-16"]}, {"id": "gold", "claim": "Gold replaces space", "note": "Where a Roman painter would have put a landscape or a room, these artists put gold. Nothing stands behind the figures, so they seem to float in front of something endless rather than stand somewhere.", "cases": ["EM-24", "EM-05", "EM-30", "EM-06", "EM-25", "EM-02", "EM-20", "EM-26", "EM-15", "EM-17", "EM-16", "EM-27"]}, {"id": "arch", "claim": "The round arch travels everywhere", "note": "From Rome to Cordoba to Aachen, across Christian and Islamic building alike, the same half-circle keeps appearing. It is the one shape that crosses every border in this period.", "cases": ["EM-24", "EM-29", "EM-30", "EM-21", "EM-28", "EM-14", "EM-27"]}, {"id": "frontal", "claim": "Figures face front and look straight out at you", "note": "They rarely turn, rarely glance aside and rarely do anything. The figure is not caught in a moment; it is presented to you, and it looks back.", "cases": ["EM-05", "EM-09", "EM-02", "EM-08"]}, {"id": "signs", "claim": "Bodies are signs, not studies", "note": "Nobody here was working from a model. Bodies are blocky, repeated and often identical to one another, because the point is what the figure means rather than how a particular person looked.", "cases": ["EM-18", "EM-09", "EM-01", "EM-03"]}, {"id": "nimbus", "claim": "A nimbus marks the holy", "note": "Holy figures are not drawn in a different style from everyone else. They are drawn the same way and then marked. The solid disk does all the work.", "cases": ["EM-05", "EM-29", "EM-06", "EM-09", "EM-25", "EM-08", "EM-26", "EM-14"]}, {"id": "rome", "claim": "Artists kept looking back to Rome", "note": "Rome had fallen, but it never went away. Carvers copied Roman drapery, builders reused Roman columns, and rulers put up buildings meant to look like the empire they claimed to inherit.", "cases": ["EM-21", "EM-25", "EM-10", "EM-11", "EM-14", "EM-17", "EM-27", "EM-03"]}], "work": {"head": "One last work", "kicker": "You have not seen this one.", "lede": "This is the Chapel of San Zeno in the church of Santa Prassede in Rome, finished about 820 C.E. It was not one of your cases. Look at it for a while before you read on.", "image": "public/images/artworks/SanZeno-Saints.jpg", "alt": "A small chapel end covered in gold mosaic. Under a barrel vault patterned with rings and stars, a half-round panel shows a lamb standing on a hill with four more lambs approaching. Below, four women stand facing forward in a row, each with a disk behind her head. Three of the disks are round; the one at the far left is square and blue.", "caption": "Chapel of San Zeno, Santa Prassede, Rome; about 817–824 C.E.", "credit": {"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Rom,_Santa_Prassede,_Mosaik_in_der_Zeno-Kapelle,_Bild_1.JPG", "author": "Dguendel", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/", "changes": "Resized from the Commons file."}, "detail": {"image": "public/images/artworks/SanZeno-Arch.jpg", "alt": "A wall of the same chapel. A round arch of gold mosaic rises over a window, with a standing figure in white on each side. Panels of green and gold plants sit below, and carved stone columns with leafy tops stand at each edge.", "caption": "Technique detail: a round arch over the window, carried on reused ancient columns", "credit": {"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Santa_Prassede_cappella_di_San_Zeno,_lato_s.JPG", "author": "Sailko", "license": "CC BY 2.5", "licenseUrl": "https://creativecommons.org/licenses/by/2.5/", "changes": "Resized from the Commons file."}}, "detail2": {"image": "public/images/artworks/SanZeno-Doorway.jpg", "alt": "The doorway into the chapel. Two dark polished stone columns with carved tops hold a heavy stone beam carved with leaves and rows of small shapes. Worn Roman letters are cut into the beam. Gold mosaic shows above.", "caption": "Technique detail: the doorway, built from Roman stone carried in and reused", "credit": {"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:SPrassedeSZenonePortale01.jpg", "author": "MM", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/", "changes": "Resized from the Commons file."}}, "prompt": "Write down everything you recognize. You are not being scored on this. Name the features you can see and say where you saw them before.", "placeholder": "I recognize…", "revealBtn": "Show what an art historian would say", "reveal": ["Every feature in your case file is here at once. The ground is gold, so there is no room and no sky. Four women stand in a row facing straight out, almost identical to one another, each marked by a disk behind the head. The vault above them is given over entirely to pattern. A round arch frames the whole thing, and the columns at the doorway are Roman stone, carried in and built into a ninth-century wall.", "Now look again at the woman on the far left. Her nimbus is square, not round. A square nimbus was not used for saints. It was the form reserved for someone who was not one, and almost always for the living. The letters beside her head name her: Theodora, mother of the pope who built this chapel.", "This is the whole Early Medieval period in one wall. Old Roman stone holding up new Christian gold, and a mother worked into the mosaic beside the saints, marked out by the shape of her nimbus as someone of a different order."], "closing": "You can now walk into a building made twelve hundred years ago and read it. That is what an art historian does."}, "sourceNums": [64, 78], "outro": "Early Medieval closed. The Late Medieval file opens next."};
