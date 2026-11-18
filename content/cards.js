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
 detail:{image:"public/images/artworks/The-tetrarchs-detail.jpg",alt:"Close view of two of the carved faces and their flat-topped caps. Each face has large, round, deeply cut eyes, and the stone surface is worn and pitted.",caption:"Detail: two of the faces, with large round eyes cut into hard purple-red stone",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Detail_of_the_Four_Tetrarchs,_ca._300;_Venice_(2).jpg",author:"Prof. Mortel",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized."}},
 size:"",
 intro:"These four figures are tetrarchs, co-rulers who shared power over the late Roman Empire around 300 C.E. They are carved from a rare purple-red stone so hard that fine detail is nearly impossible to cut. The sculptor gave all four the same simplified, blocky forms, so that no ruler stands out from the others.",
 context:[{term:"Porphyry",pron:"POR-fuh-ree",def:"A rare, extremely hard purple-red stone quarried in Egypt and prized for imperial use. Its hardness limits fine detail and favors simplified forms."},{term:"Tetrarch",pron:"TET-rark",def:"One of four co-rulers who shared power in the late Roman Empire, each governing a different region."},{term:"Incised",pron:"",def:"Cut into a surface with a sharp tool, leaving lines or shapes in the material."}],
 clues:[{id:"blocky",label:"Blocky forms",def:"Stiff, simplified bodies with oversized heads and broad shoulders, carved without naturalistic detail"},{id:"identical",label:"Identical figures",def:"All four tetrarchs carved at the same size, in the same pose, wearing the same clothing and armor"},{id:"incised",label:"Incised patterns",def:"Lines and geometric shapes cut into the surface of the clothing and armor"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Do these four look like four different people, or like one shape repeated?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Blocky forms, identical figures and incised patterns are features a detective can carry to the next case.",
 sourceNums:[1],
 credit:{url:"https://commons.wikimedia.org/wiki/File:The-tetrarchs.jpg",author:"Wooofer",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
var EM02={id:"EM-02",kind:"Mosaic",wide:true,title:"Floating in Gold",object:"Apse mosaic, San Vitale",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Christ with Angels, Saint Vitalis and Bishop Ecclesius (apse mosaic)",date:"circa 547 C.E.",location:"Basilica of San Vitale, Ravenna",artist:"artists unknown",
 headline:"Look closely at the figures",
 alt:"A curved wall covered in tiny glass tiles. Christ sits on a blue globe against a gold background, wearing dark purple and holding a book. Two angels stand beside him, and a saint and a bishop stand at the outer sides, all facing forward on a strip of green ground with flowers.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/San-Vitale-apse.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/San-Vitale-apse-detail.jpg",alt:"Close view of small cut pieces of stone in cream, green, black and red-orange, set in curving rows with thin gaps of mortar between them.",caption:"Detail: thousands of small cut pieces, called tesserae, set side by side to form the mosaic",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Ravenna,_San_Vitale_-_12536853624.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized."}},
 size:"",
 intro:"This mosaic covers the apse, the rounded wall at the end of the church, inside the Basilica of San Vitale in Ravenna. Thousands of tiny cut pieces of glass and stone form Christ seated among angels and saints. Every figure faces forward, holds a stiff pose, and floats against a glowing gold background with almost no shadow or solid ground.",
 context:[{term:"Tesserae",pron:"TESS-uh-ree",def:"The small, individually cut pieces of glass, stone or gold leaf that are set side by side to form a mosaic."},{term:"Hieratic",pron:"hy-uh-RAT-ik",def:"A formal, sacred style in which figures face the viewer directly, hold stiff poses, and are arranged by spiritual importance rather than naturalism."},{term:"Apse",pron:"",def:"A rounded recess at the end of a church, often covered by a half-dome and decorated with important images."}],
 clues:[{id:"gold",label:"Gold tesserae",def:"Thousands of tiny gold glass pieces set at slightly different angles, catching light to create a shimmering, otherworldly background"},{id:"hieratic",label:"Hieratic figures",def:"Every figure faces the viewer directly with wide, steady eyes and a stiff, upright pose, following a formal sacred style"},{id:"weightless",label:"Weightless arrangement",def:"The figures float against the gold background with almost no shadow, solid ground, or sense of physical weight"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Does Christ seem to sit in a real place, or somewhere outside of time?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Gold light, forward-facing figures and bodies that seem to float are features a detective can carry to the next case.",
 sourceNums:[2,3],
 credit:{url:"https://commons.wikimedia.org/wiki/File:Apse_mosaic_-_Basilica_of_San_Vitale_(Ravenna).jpg",author:"Petar Milo\u0161evi\u0107",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
var EM03={id:"EM-03",kind:"Architecture",wide:true,title:"Old Stone, New Wall",object:"Arch of Constantine",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Arch of Constantine",date:"dedicated 315 C.E.",location:"Rome",artist:"artists unknown",
 headline:"Look closely at the carved figures",
 alt:"Part of a Roman stone arch. Two round carved panels sit at the top. Below them runs a long, narrow band of small standing figures gathered on both sides of a platform. Under the band, a round arched opening has a reclining figure carved in each upper corner.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Arch-of-Constantine.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/Arch-of-Constantine-frieze.jpg",alt:"A close view of the long narrow band of carved figures in the middle of the arch. Small figures stand in rows, all about the same size, with large heads and simple, blocky bodies. They face a central platform.",caption:"Detail: the frieze made for Constantine, with small matching figures carved in a stiff, blocky style",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Arch_of_Constantine_-_102.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"This arch was built for the emperor Constantine in 315 C.E. to celebrate a military victory in Rome. Many of its carvings are much older, taken from monuments of earlier emperors and reused here on the new structure. The reused panels show lifelike, naturalistic figures. The newer carvings made for Constantine show stiffer figures with large heads and simple shapes, carved in a very different style.",
 context:[{term:"Triumphal arch",pron:"",def:"A freestanding arch built to honor a ruler or celebrate a military victory, often decorated with carved scenes."},{term:"Spolia",pron:"SPOH-lee-uh",def:"Older carvings or building parts taken from earlier monuments and reused on a new one, often to link the new ruler to the prestige of the past."},{term:"Classical",pron:"",def:"Of or from ancient Greek or Roman art and culture, or imitating their forms."}],
 clues:[{id:"matching",label:"Matching figures",def:"A row of figures all the same size, in similar poses and clothing"},{id:"blocky",label:"Blocky bodies",def:"Stiff, boxy figures with large heads, carved in a different style"},{id:"two",label:"Two styles side by side",def:"Lifelike older panels placed next to stiffer newer ones"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might builders reuse older carvings on a brand-new monument?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rows of matching figures, blocky bodies and two styles on one wall are features a detective can carry to the next case.",
 sourceNums:[4,5],
 credit:{url:"https://commons.wikimedia.org/wiki/File:Arch_of_Constantine_-_102.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/"}};
var EM04={id:"EM-04",kind:"Architecture",wide:true,title:"Drawn From Evidence",object:"Old St. Peter's Basilica",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Old St. Peter\u2019s Basilica (reconstruction drawing)",date:"begun circa 330 C.E.",location:"Rome",artist:"architect unknown",
 headline:"Look closely at the front of the church",
 alt:"A bird\u2019s-eye line drawing of a very long church with a tall central hall and lower side parts. Small round-topped windows sit high on the tall walls. A walled courtyard with covered walkways lies in front of the doors, with a fountain in the middle. At the far end, a wide arm runs across the church, with a row of arched windows and a half-round wall beyond it. A tall bell tower stands at the right, and a wide flight of steps climbs to the entrance at the front. Round buildings stand at the far left.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Old-St-Peters-detail.jpg",
 imageNote:"A drawing of how scholars imagined the church. Old St. Peter\u2019s was torn down in the early 1500s.",
 detail:{image:"public/images/artworks/Old-St-Peters-atrium.jpg",alt:"A close view of an open courtyard surrounded by covered walkways resting on rows of columns. A small fountain stands in the middle. The front wall of the church rises behind it with tall arched windows.",caption:"Detail: the atrium, an open yard surrounded by covered walks, with a fountain in the middle",credit:{word:"Detail drawing",url:"https://commons.wikimedia.org/wiki/File:Monuments_of_the_early_church_(1901)_(14596792999).jpg",author:"Internet Archive Book Images, from Walter Lowrie, Monuments of the Early Church (1901)",license:"No known copyright restrictions",licenseUrl:"https://www.flickr.com/commons/usage/",changes:"Cropped from the main image."}},
 size:"",
 intro:"The original Saint Peter's Basilica in Rome was built around 330 C.E. and stood for more than a thousand years before it was torn down in the early 1500s. No photograph of it exists. This image is a scholar's reconstruction, drawn from old written descriptions, earlier drawings and the remains found beneath the new Saint Peter's that replaced it.",
 context:[{term:"Reconstruction",pron:"",def:"A drawing or model showing how a lost building probably looked, based on written descriptions, older images and remains found at the site."},{term:"Atrium",pron:"",def:"An open courtyard just in front of a church, usually surrounded by covered walks."},{term:"Transept",pron:"",def:"The arm that runs across the body of a church, so that the whole plan takes the shape of a cross."}],
 clues:[{id:"atrium",label:"Atrium",def:"A walled courtyard with covered walks just before the doors of the church"},{id:"transept",label:"Transept",def:"A wide arm crossing the body of the church near the far end, giving the whole plan a cross-shape"},{id:"steps",label:"Steps to the doors",def:"A wide flight of steps climbing from the street to the entrance"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"A reconstruction is an argument, not a photograph. Which part of this drawing would you most want to see evidence for?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. An open atrium, a transept arm and steps to the doors are features a detective can carry to the next case.",
 sourceNums:[6,7],
 credit:{word:"Drawing",url:"https://commons.wikimedia.org/wiki/File:Monuments_of_the_early_church_(1901)_(14596792999).jpg",author:"Internet Archive Book Images (from Walter Lowrie, Monuments of the Early Church, 1901)",license:"No known copyright restrictions",licenseUrl:"https://www.flickr.com/commons/usage/"}};
var EM07={id:"EM-07",kind:"Memorial marker",title:"Vines Carved in Stone",object:"Bewcastle Cross",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"The Bewcastle Cross",date:"late 7th or early 8th century C.E.",location:"Bewcastle, Cumbria, England",artist:"artist unknown",
 headline:"Look closely at the carved panels",
 alt:"A tall, narrow stone pillar seen from below, standing beside a stone church tower under a blue sky. The top is broken off. The pillar is carved from top to bottom in separate boxes: curling vines with bunches of grapes and a bird, a round dial-like shape, a square of woven bands, more vines curling around grapes, and a large block of tangled knots near the bottom.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Bewcastle-Cross.jpg",
 imageNote:"This is one of the four sides of the shaft, photographed from below. The cross arms at the top are lost.",
 detail:{image:"public/images/artworks/Bewcastle-detail.jpg",alt:"Close view of the lower part of one side of the stone. A standing figure in a rounded niche holds a bird on one wrist. The reddish sandstone is worn smooth and spotted with pale lichen.",caption:"Detail: a different face of the cross, with a standing figure holding a bird in a rounded niche",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:The_7th_C_Bewcastle_Cross_-_St._John_the_Evangelist_-_geograph.org.uk_-_1833425.jpg",author:"Mike Quinn",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/"}},
 size:"",
 intro:"This stone cross shaft has stood in a churchyard at Bewcastle, in northern England, for about 1,300 years. Each of its four faces is carved with panels of vine scroll, interlace and figures, all in shallow relief. Only the shaft survives; the cross arms at the top are lost, so the carvings now run in tall stacked bands.",
 context:[{term:"Shaft",pron:"",def:"The tall, upright stone of a freestanding cross. On the Bewcastle Cross, only the shaft survives."},{term:"Vine scroll",pron:"",def:"A decorative pattern of spiraling vines, often with leaves, grapes, birds or animals woven into the curves."},{term:"Interlace",pron:"",def:"A pattern of bands that weave over and under one another in an unbroken line."}],
 clues:[{id:"knotwork",label:"Interlace knotwork",def:"Bands that weave over and under one another in a continuous pattern"},{id:"vines",label:"Vine scroll",def:"Spiraling vines with grapes, birds, and animals carved in shallow relief"},{id:"stacked",label:"Stacked panels",def:"Distinct carved panels arranged one above another, each with its own pattern or figure"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"What might vines and endless knots have said to people who visited this memorial?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Knotwork, vines with creatures and stacked panels are features a detective can carry to the next case.",
 sourceNums:[8,9],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Bewcastle_cross_south_perspective_view.jpg",author:"Doug Sim",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
var EM08={id:"EM-08",kind:"Stained glass",title:"Pieces of a Face",object:"The Lorscher Kopf",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Head of a Bearded Saint (the \u201cLorscher Kopf\u201d)",date:"9th\u201311th century C.E. (scholars disagree)",location:"Hessisches Landesmuseum Darmstadt, Germany (found at Lorsch Abbey)",artist:"artist unknown",
 headline:"Look closely at the face",
 alt:"A round arrangement of glass pieces held in thin dark strips of lead. Light-blue shards form a ring behind the head. Inside it, orange-brown fragments make up part of a bearded face with large, round eyes. Black gaps show where pieces are missing.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Lorscher-Kopf.jpg",
 imageNote:"Broken pieces of glass, put back together in modern times. Dark gaps show where pieces are missing.",
 detail:{image:"public/images/artworks/Lorscher-Kopf-detail.jpg",alt:"A bearded man's face with huge round eyes, a long straight nose and a beard drawn in many fine lines. A rounded shape rises behind his head.",caption:"Detail: a modern reconstruction of the complete face, showing what the broken fragment originally looked like",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:GN-F2632a-Kg-35-28a.jpg",author:"Fotoabteilung-HLMD (Hessisches Landesmuseum Darmstadt)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized."}},
 size:"",
 intro:"This fragment is one of the oldest known pieces of figural stained glass in Europe. Scholars disagree on its date, placing it somewhere between the 9th and 11th centuries. The artist built a face from shaped pieces of colored glass, held together by strips of lead called came, with finer details painted on in a dark glass paint. The glass broke apart centuries ago and was reassembled in modern times, leaving dark gaps where pieces are missing.",
 context:[{term:"Stained glass",pron:"",def:"Colored glass cut into shaped pieces and joined by strips of lead called came. Light passes through the glass, making the colors glow."},{term:"Grisaille",pron:"grih-ZY",def:"A dark paint applied to the surface of stained glass to add fine details such as facial features, hair and folds of clothing."},{term:"Figural",pron:"",def:"Containing recognizable human or animal figures, rather than only patterns or decoration."}],
 clues:[{id:"frontal",label:"Frontal gaze",def:"The face looks directly at the viewer with wide, steady eyes, following the same formal pose seen in mosaics and icons of this era"},{id:"lines",label:"Grisaille lines",def:"Thin, dark painted lines applied to the glass surface to define the hair, beard, eyebrows, and facial features"},{id:"lead",label:"Lead came",def:"Strips of lead that hold each shaped piece of glass in place, forming the structural skeleton of the panel"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might an artist give a holy figure eyes this large and steady?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A steady stare, hair drawn in lines and strips of lead are features a detective can carry to the next case.",
 sourceNums:[10],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Lorscher_Kopf.JPG",author:"Fotoabteilung-HLMD (Hessisches Landesmuseum Darmstadt)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
var EM10={id:"EM-10",kind:"Stone coffin",wide:true,title:"Ten Stories, Two Rows",object:"Sarcophagus of Junius Bassus",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Sarcophagus of Junius Bassus",date:"359 C.E.",location:"Museum of the Treasury of St. Peter\u2019s Basilica, Vatican City",artist:"artist unknown",
 headline:"Look closely at the two rows",
 alt:"The front of a long white marble coffin against a black background, carved in two rows of framed scenes. Slim columns with leafy tops divide each row into five boxes. In the top row, standing men in long robes gather around a seated young man in the middle, whose feet rest on a small figure. The bottom row has arched or pointed tops over a bare man and woman beside a tree, a rider on a donkey, and a bearded man between two lions. Broken pieces of the lid sit on top, and a red rope hangs in front.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Junius-Bassus.jpg",
 imageNote:"This is the front of the marble coffin. Broken pieces of the lid sit on top.",
 detail:{image:"public/images/artworks/Junius-Bassus-detail-top.jpg",alt:"Close view of the middle of the top row. A young man in a long robe sits on a seat between two bearded men, with a small reclining figure under his feet. Three more men in draped robes stand to the right. The white marble is carved so deeply that the figures stand out from the background.",caption:"Detail: part of the top row, where the figures are carved deeply enough to stand out from the stone",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Tesoro_di_san_pietro,_sarcofago_di_giunio_basso.JPG",author:"Sailko",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Cropped."}},
 size:"",
 intro:"This marble coffin was carved in 359 C.E. for Junius Bassus, a Roman official who became a Christian shortly before he died. Its front is divided into ten boxes in two rows, each framed by columns and each showing a different scene from the Bible or from early Christian tradition. The figures are carved so deeply that they stand out from the stone.",
 context:[{term:"Sarcophagus",pron:"sar-KOF-uh-gus",def:"A stone coffin, usually decorated with carved scenes or patterns on its outer sides."},{term:"High relief",pron:"",def:"Sculpture carved so deeply that the figures stand far out from the background, almost like freestanding statues."},{term:"Register",pron:"",def:"A horizontal row or band of images, stacked above or below other rows."}],
 clues:[{id:"scenes",label:"Columned panels",def:"Ten separate scenes arranged in two rows of five, each framed by carved columns"},{id:"deep",label:"High relief figures",def:"Figures carved so deeply that they project from the background, appearing nearly three-dimensional"},{id:"robes",label:"Draped robes",def:"Figures dressed in long garments with deeply carved folds that suggest weight and movement"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a family carve stories, and not only a name, on a coffin?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Scenes in boxes, deep carving and robes in folds are features a detective can carry to the next case.",
 sourceNums:[13,14,15],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Tesoro_di_san_pietro,_sarcofago_di_giunio_basso.JPG",author:"Sailko",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
var EM11={id:"EM-11",kind:"Architecture",wide:true,title:"Plain Outside, Bright Inside",object:"Santa Sabina",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Santa Sabina",date:"422\u2013432 C.E.",location:"Aventine Hill, Rome, Italy",artist:"architect unknown",
 headline:"Look closely at the outside of the church",
 alt:"A long church built of reddish-brown brick, seen from a garden corner under a blue sky. A tall central wall has a row of arched windows filled with pale lattice near the top. A lower sloping roof runs along its side. At the right end, a round curved wall holds one large arched window. In front are a green lawn, a low wall with climbing roses and a palm tree.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Santa-Sabina.jpg",
 imageNote:"This is the right side of the church and its curved end, seen from a garden.",
 detail:{image:"public/images/artworks/Santa-Sabina-clerestory.jpg",alt:"A row of ten tall arched windows, each filled with a pale lattice pattern, set high in a plain brick wall. The windows cover the upper band of the long central wall of the church.",caption:"Detail: the clerestory, a row of arched windows set high in the brick wall of the central space",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Rom,_Basilika_Santa_Sabina,_Au%C3%9Fenansicht.jpg",author:"Dnalor 01",license:"CC BY-SA 3.0 Austria",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/at/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Santa-Sabina-nave.jpg",alt:"Looking down the long central space inside the church. Two rows of tall gray columns with leafy tops hold up rows of round arches. Tall arched windows line the walls high above. A flat, patterned ceiling stretches ahead toward a half-round end with a painted dome and a few windows. The floor is patterned gray and white marble.",caption:"Detail: rows of columns and arches line the long, bright nave inside the church",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Basilica_di_Santa_Sabina_Nave.jpg",author:"NateBergin",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/",changes:"Resized from the Commons file."}},
 size:"",
 intro:"Santa Sabina, built between 422 and 432 C.E. on the Aventine Hill in Rome, is one of the best-preserved early Christian basilicas. Its basilica form \u2014 a rectangular plan borrowed from Roman civic buildings \u2014 has a tall central space flanked by lower side spaces, separated by rows of columns. Large arched windows set high in the upper walls flood the interior with light, while the plain brick outside has almost no windows at ground level.",
 context:[{term:"Basilica",pron:"",def:"A rectangular building with a tall central space flanked by lower side spaces, separated by columns. A Roman civic design adopted for early Christian churches."},{term:"Clerestory",pron:"KLEER-stor-ee",def:"The upper wall of a building, raised above a lower adjoining space and pierced with windows to let light pour down into the central space."},{term:"Nave",pron:"",def:"The long central space of a church, where the congregation gathers \u2014 like a ship. It is related to our English word navy."}],
 clues:[{id:"tall",label:"Basilica form",def:"A tall central space flanked by lower side spaces, following the rectangular plan of a Roman civic building"},{id:"windows",label:"Clerestory windows",def:"A band of windows set high in the upper walls, flooding the interior with natural light"},{id:"curved",label:"Rounded east end",def:"The far end of the building curves into a rounded, half-dome shape where the altar stands"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might builders place windows high up, where light can pour down into the room?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A tall middle with low sides, windows up high and a curved end are features a detective can carry to the next case.",
 sourceNums:[16,17],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Rom,_Basilika_Santa_Sabina,_Au%C3%9Fenansicht.jpg",author:"Dnalor 01",license:"CC BY-SA 3.0 Austria",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/at/"}};
var EM12={id:"EM-12",kind:"Architecture",wide:true,title:"A Dome That Floats",object:"Hagia Sophia",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Hagia Sophia",date:"532\u2013537 C.E. (dome rebuilt in 562 C.E.)",location:"Istanbul, T\u00fcrkiye",artist:"architects Anthemius of Tralles and Isidore of Miletus",
 headline:"Look closely at the building",
 alt:"A huge church seen across a crowded park under a blue sky. A wide gray dome sits in the middle, with a ring of small windows around its base. Smaller domes and curved walls step down on either side, and a large red arch with rows of windows faces the viewer. Scaffolding covers part of the left side. Four tall, thin towers with pointed tops stand at the left and right edges. Palm trees and crowds of people fill the foreground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Hagia-Sophia.jpg",
 imageNote:"The thin towers, called minarets, were added after 1453, when the building became a mosque.",
 detail:{image:"public/images/artworks/Hagia-Sophia-section.jpg",alt:"A black-and-white drawing of the church sliced down the middle, so the inside shows. A big dome with a ring of small windows at its base rises over the center. Smaller domes and half-domes step down on both sides above rows of arches and columns. At the right, a porch and a statue of a rider on a horse stand beside the building.",caption:"Detail: a 1908 drawing that slices the church open to show the dome, pendentives and arches",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Hagia-Sophia-Laengsschnitt.jpg",author:"Wilhelm L\u00fcbke and Max Semrau, Grundri\u00df der Kunstgeschichte (1908)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"This church in Constantinople (now Istanbul) was built from 532 to 537 C.E. for the Byzantine emperor Justinian, by the architects Anthemius of Tralles and Isidore of Miletus. Its great innovation was a huge dome carried on pendentives, with a ring of windows around its base, so that the roof seems to float on light instead of resting on heavy walls.",
 context:[{term:"Dome",pron:"",def:"A rounded vault forming a roof, rising from a circular or square base."},{term:"Byzantine",pron:"",def:"Of or relating to the Eastern Roman Empire, whose capital was Constantinople. Byzantine art is known for gold backgrounds, formal poses and holy subjects such as Christ and the saints."},{term:"Pendentive",pron:"PEN-den-tiv",def:"A curved triangle of masonry that lets a round dome rest on a square space. Look for them in the cross-section drawing."}],
 clues:[{id:"dome",label:"Central dome",def:"The wide, rounded roof at the center, resting on very little solid wall"},{id:"windows",label:"Ring of windows",def:"A band of small windows circling the base of the dome"},{id:"domes",label:"Half-domes",def:"Smaller curved roofs stepping down beside the central dome"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a builder want a huge roof to look as if it floats?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A dome, a ring of windows and half-domes are features a detective can carry to the next case.",
 sourceNums:[18,19,20,173],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Istanbul_Hagia_Sophia_IMG_7406_1800.jpg",author:"Alexxx1979",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
var EM13={id:"EM-13",kind:"Manuscript painting",wide:true,title:"Words Above, Story Below",object:"Vienna Genesis",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Vienna Genesis (a painted page from the story of Joseph, folio 15v)",date:"first half of the 6th century C.E.",location:"Austrian National Library, Vienna, Austria (made in the eastern Mediterranean)",artist:"artist unknown",
 headline:"Look closely at the painted page",
 alt:"A page of brownish purple parchment. Three lines of Greek writing run across the top. Below them, two bands of painted figures stand on thin ground lines. In the top band, an old man sits in a chair and holds a small child, a bending man and a woman in a yellow robe stand beside him, a boy in a white tunic stands alone, and a walking man stands beside a winged angel and a blue column. In the bottom band, men in tunics point and stride toward a brown mound, sheep graze, and a group of figures tumble and wrestle at the right near a small building.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Vienna-Genesis-Joseph.jpg",
 imageNote:"This is one page (folio 15v) of the book. The Greek writing above the picture was done in silver ink.",
 detail:{image:"public/images/artworks/Vienna-Genesis-Joseph-detail.jpg",alt:"An old man with gray hair and a beard sits in a yellow-backed chair. Another figure leans toward him, bringing two small children forward. A woman in a yellow robe stands at the right. The paint uses soft shading and thin outlines.",caption:"Detail: an old man seated in a chair receives two small children brought to him, painted in soft shading and thin outlines",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Miniatuur_van_Jozef_en_zijn_broers.jpg",author:"Emmelinebq",license:"CC0 1.0 (public domain dedication)",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Vienna-Genesis-musicians.jpg",alt:"Two young women with headbands lean over a yellow table. The one behind blows into a pair of thin pipes. The other, in a rose-pink cloak, taps four round, flat bowls on the table with a stick. A tall orange bottle with a ribbon stands on a post at the right. The paint is worn and flaking.",caption:"Detail: soft shading and thin outlines, on another page of the same book (folio 17v)",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Double_aulos_and_the_oksivafon,_detail_from_Vienna,_%C3%96sterreichische_Nationalbibliothek,_Theol_Greek_31,_folio_17v,_6th_century.jpg",author:"Unknown artist (page reproduced by the Austrian National Library)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Resized from the Commons file."}},
 size:"",
 intro:"This painted page is from a book made in the first half of the 6th century C.E., somewhere in the eastern Mediterranean. The painter scraped and dyed the animal skin a rich purple before writing on it in silver Greek letters. Below the writing, figures from the story of Joseph move through two horizontal bands, and the same person appears more than once to show different moments in the story. The book now sits in the Austrian National Library in Vienna.",
 context:[{term:"Parchment",pron:"",def:"Animal skin \u2014 sheep, goat or calf \u2014 scraped, stretched and dried for use as a writing surface. This book's parchment was dyed purple, a rare and costly treatment."},{term:"Continuous narrative",pron:"",def:"A storytelling technique in which the same figure appears more than once in a single picture, shown at different moments in the story."},{term:"Manuscript",pron:"",def:"A book or document written and decorated by hand, before the invention of printing."}],
 clues:[{id:"registers",label:"Narrative registers",def:"Horizontal bands, each showing a different episode of the story"},{id:"continuous",label:"Continuous narrative",def:"The same character appearing at different moments without separate frames"},{id:"script",label:"Silver script on purple",def:"Greek text in silver ink on purple-dyed parchment, a luxury combination"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter show the same person more than once on a single page?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rows of figures, one person shown twice and words above the picture are features a detective can carry to the next case.",
 sourceNums:[21,22,23],
 credit:{word:"Image",url:"https://commons.wikimedia.org/wiki/File:Miniatuur_van_Jozef_en_zijn_broers.jpg",author:"Emmelinebq",license:"CC0 1.0 (public domain dedication)",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"}};
var EM09={id:"EM-09",kind:"Wall painting",wide:true,title:"Facing Forward",object:"Niche from the Monastery of Apa Apollo at Bawit",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. – 900 C.E.",
 work:"Niche from the Monastery of Apa Apollo at Bawit (Christ, Mary and the Christ child, and apostles)",date:"6th–7th century C.E.",location:"Coptic Museum, Cairo, Egypt",artist:"artist unknown",
 headline:"Look closely at the figures",
 alt:"A half-dome wall painting in a museum. Christ sits inside a large oval of light, holding a book, with angels and winged creatures around him. Below, Mary and the Christ child sit on a throne in the center of a row of standing apostles, each with a nimbus.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Bawit-niche.jpg",
 imageNote:"Painted on a monastery wall in Egypt and now shown in a museum.",
 detail:{image:"public/images/artworks/Bawit-apostles-detail.jpg",alt:"Mary and the Christ child sit on a throne at the left, beside a row of standing men with nimbuses who hold books. Each figure faces forward and is drawn with dark outlines.",caption:"Detail: Mary and the Christ child beside a row of apostles, each facing forward and drawn with dark outlines",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Mural_from_Apa_Apollo_in_Bawit_-_Detail.jpg",author:"Votpuske",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped."}},
 size:"",
 intro:"This painted niche comes from the Monastery of Apa Apollo at Bawit in Egypt and dates to the 6th or 7th century C.E. Above, Christ sits enthroned inside a glowing oval, surrounded by angels and winged creatures. Below, Mary and the Christ child sit among standing apostles who stare straight out at the viewer. Every figure is drawn with bold, dark outlines.",
 context:[{term:"Niche",pron:"NEESH",def:"A hollow, arched space set into a wall or building, designed to hold a statue."},{term:"Frontal",pron:"",def:"Describing a figure shown facing directly toward the viewer, with the head, shoulders and body aligned straight ahead."},{term:"Nimbus",pron:"",def:"A round disk of gold or yellow light placed behind the head of a figure, to signify holiness. A square nimbus often signifies the holy person is still living at the time the work was created."}],
 clues:[{id:"matching",label:"Matching figures",def:"A row of apostles of similar size, standing in nearly identical poses and holding books"},{id:"frontal",label:"Frontal poses",def:"Each figure faces directly toward the viewer with a steady, wide-eyed gaze"},{id:"outlines",label:"Bold outlines",def:"Strong, dark lines defining each figure and separating areas of color"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Do the apostles look like portraits of different people, or like one figure painted many times?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Matching figures, steady stares and dark outlines are features a detective can carry to the next case.",
 sourceNums:[11,12],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Mural_from_Apa_Apollo_in_Bawit_-_Detail.jpg",author:"Votpuske",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
window.DECKS=[
{id:"early-medieval",intro:"public/intro/early-medieval.html",title:"Early Medieval",span:"circa 300 C.E. \u2013 900 C.E.",cards:placeholders('EM')},
{id:"late-medieval",intro:"public/intro/late-medieval.html",title:"Late Medieval",span:"circa 900 C.E. \u2013 1400 C.E.",cards:placeholders('LM')},
{id:"renaissance",intro:"public/intro/renaissance.html",title:"Renaissance",span:"",cards:placeholders('RE')},
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
 detail:{image:"public/images/artworks/Lorsch-Angel-Detail.jpg",alt:"A close view of one ivory plaque held in a twisted metal frame. A winged angel with a nimbus and curly hair stands under a round arch, holding a tall staff. The long robe is carved with soft folds, and a band of tiny beads runs around the arch.",caption:"Detail: the angel on the left, with curled hair and heavy drapery folds carved in ivory",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Ivory_back_cover_-_Codex_Aureus_of_Lorsch_(c._778-820)_Vatican_Library.jpg",author:"Carolingian court school (photograph from Bibliotheca Laureshamensis digital)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"This book cover was carved from ivory about 810 C.E. at the court of Charlemagne, the Frankish king who united much of western Europe. He deliberately revived the art of ancient Rome, and his court carvers studied Roman sculptures and imitated their techniques: the heavy folds of the robes, the arch-and-column framing around each figure, and the arrangement of figures across five joined panels.",
 context:[{term:"Carolingian",pron:"care-oh-LIN-jee-un",def:"Of or relating to the dynasty of Charlemagne and his successors, who ruled much of western Europe from about 750 to 900 C.E. and sponsored a deliberate revival of Roman art and learning."},{term:"Drapery",pron:"",def:"The representation of cloth or clothing in a work of art, especially the folds and creases that suggest the shape of the body beneath."},{term:"Classical",pron:"",def:"Of or from ancient Greek or Roman art and culture, or imitating their forms."}],
 clues:[{id:"drapery",label:"Classical drapery",def:"Deep carved folds imitating Roman sculptural robes"},{id:"plaques",label:"Five-part composition",def:"Five ivory plaques fitted together in a single frame"},{id:"arch",label:"Triumphal arch framing",def:"Arch-and-column structure borrowed from Roman triumphal arches"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might carvers in Charlemagne\u2019s time copy the look of much older Roman ivories?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Heavy robe folds, plaques in a frame and figures under arches are features a detective can carry to the next case.",
 sourceNums:[24,25,27],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Ivory_back_cover_-_Codex_Aureus_of_Lorsch_(c._778-820)_Vatican_Library.jpg",author:"Carolingian court school (photograph from Bibliotheca Laureshamensis digital)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
var EM05={id:"EM-05",kind:"Icon painting",title:"Face to Face",object:"Saint Peter icon",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Saint Peter (icon)",date:"about 600 C.E.",location:"Saint Catherine\u2019s Monastery, Mount Sinai, Egypt",artist:"artist unknown",
 headline:"Look closely at the saint\u2019s face",
 alt:"A painting of a gray-haired, bearded man shown from the chest up, facing the viewer. A large gold nimbus glows behind his head. He wears a white robe and holds a tall staff with a cross and a bundle of keys. Above him, three small round portraits sit in a row against a dark background, with carved columns at each side.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Saint-Peter-Sinai.jpg",
 imageNote:"An upright panel about 93 cm (37 in) tall, with three small round portraits across the top.",
 detail:{image:"public/images/artworks/Saint-Peter-Detail.jpg",alt:"A close view of white and gray robe folds painted with thick, streaky strokes. Several thin dark keys lie against a darker patch near the center, and a pale orange hand curls beneath them. Small flecks of paint are missing across the surface.",caption:"Detail: Peter\u2019s keys and hand, framed by the folds of his white robe",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Peter-Sinai_(6th_Century).jpg",author:"Unknown artist (photograph by Michel Bakni)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"This icon of Saint Peter was painted about 600 C.E. by an unknown artist, who mixed colored pigments into hot wax, a method called encaustic. It was kept at Saint Catherine\u2019s Monastery on Mount Sinai, where its remote setting helped it survive. Peter holds a cross-topped staff and keys. The painter gives him a calm, direct gaze and a gold nimbus, so the panel seems to look back at you.",
 context:[{term:"Icon",pron:"",def:"A holy picture, usually painted on a wooden panel, made for prayer."},{term:"Nimbus",pron:"",def:"A round disk of gold or yellow light placed behind the head of a figure, to signify holiness. A square nimbus often signifies the holy person is still living at the time the work was created."},{term:"Roundel",pron:"",def:"A small circular frame holding a portrait."}],
 clues:[{id:"nimbus",label:"Gold nimbus",def:"A large gold disk behind the head"},{id:"frontal",label:"Frontal gaze",def:"Eyes that look straight out at you"},{id:"roundel",label:"Roundel portraits",def:"Three small circles across the top, each holding a face"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"How does the painter make a flat panel feel like a living person who is looking back at you?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A gold nimbus, a direct stare and small round portraits are features a detective can carry to the next case.",
 sourceNums:[29,30,31],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Peter-Sinai_(6th_Century).jpg",author:"Unknown artist (photograph by Michel Bakni)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
var EM06={id:"EM-06",kind:"Manuscript page",title:"Letters as Pictures",object:"Lindisfarne Gospels, Matthew page",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Lindisfarne Gospels, opening page of Matthew (folio 27r)",date:"about 700 C.E.",location:"British Library, London (made on Lindisfarne, England)",artist:"probably Eadfrith, bishop of Lindisfarne",
 headline:"Look closely at the letters",
 alt:"A page from a hand-copied Gospel book. The first letters of the Latin word Liber are huge and curl down the left side, packed with colorful knots, spirals and tiny animal heads. The rest of the word and the lines below are tall, dark capitals set in colored panels. Rows of tiny red dots trace the letters, and a woven border frames the right and bottom edges.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Lindisfarne-Incipit.jpg",
 imageNote:"A single upright page, about 36.5 cm (14\u00bd in) tall, from a book of 259 leaves.",
 detail:{image:"public/images/artworks/Lindisfarne-Matthew.jpg",alt:"A page from the same book. A seated man with a gray-blue beard and a gold nimbus draws on a board. He wears a green robe marked with red fold lines and a purple sleeve, and sits on an orange cushion. A winged figure with a trumpet hovers above him, and a second figure peers out from behind a red curtain.",caption:"Detail: a different page from the same book, with Saint Matthew, a winged figure above him and a second figure behind a curtain",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:St._Matthew_-_Lindisfarne_Gospels_(710-721),_f.25v_-_BL_Cotton_MS_Nero_D_IV.jpg",author:"Eadfrith of Lindisfarne (presumed); image from the British Library",license:"CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"}},
 size:"",
 intro:"This page opens the Gospel of Matthew in a hand-copied book made on Lindisfarne, an island off the coast of England, about 700 C.E. The maker was probably Eadfrith, the island\u2019s bishop, working to honor God and Saint Cuthbert. There is no scene here, only letters and patterns: the first letters of the Latin word Liber, meaning \u201cbook,\u201d swell into giant forms packed with woven knots, spirals and tiny animal heads.",
 context:[{term:"Manuscript",pron:"",def:"A book or document written out by hand."},{term:"Illuminated",pron:"",def:"Decorated by hand with colors, patterns or gold."},{term:"Interlace",pron:"",def:"A pattern of bands that weave over and under one another in an unbroken line."}],
 clues:[{id:"giant",label:"Giant first letters",def:"The opening letters are vastly larger than the rest of the text"},{id:"interlace",label:"Interlace knots",def:"Ribbons weaving over and under in tight, continuous knots"},{id:"dots",label:"Rows of red dots",def:"Tiny red dots outlining the edges of letters and shapes"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might the maker have decorated the first words of the Gospel more richly than anything else on the page?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Giant letters, interlace knots and red dotted outlines are features a detective can carry to the next case.",
 sourceNums:[32,33,172],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:LindisfarneFol27rIncipitMatt.jpg",author:"Eadfrith of Lindisfarne (presumed); image from the British Library",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
var EM15={id:"EM-15",kind:"Metalwork",title:"Patterns in Wire",object:"Ardagh Chalice (copy)",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Ardagh Chalice (early 20th-century copy)",date:"original about 750 C.E.",location:"The Metropolitan Museum of Art, New York (original in Dublin)",artist:"original by an unknown Irish maker",
 headline:"Look closely at the cup",
 alt:"A wide silver cup with two handles, seen from a slight angle, standing on a round, flaring foot. A band of gold-colored woven patterns circles the bowl just below the rim, dotted with round blue and red studs. Beside a handle, three larger studs sit on a cloverleaf-shaped panel. The rest of the bowl is smooth, plain silver with faint engraved letters.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Ardagh-Chalice.jpg",
 imageNote:"An early-20th-century copy of the Ardagh Chalice. The original was made in Ireland about 750 C.E.",
 detail:{image:"public/images/artworks/Ardagh-Chalice-Detail.jpg",alt:"A close view of one handle and the panels around it. Small squares of blue and red enamel are set in rows on the handle. Next to it, three round studs in blue, red and green sit on a cloverleaf panel packed with tiny woven wire patterns.",caption:"Detail: fine twisted wires form woven panels and colored enamel studs sit beside them, around one of the handles",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:The_Ardagh_Chalice_MET_tem07658s2.jpg",author:"The Metropolitan Museum of Art (Rogers Fund, 1906)",license:"CC0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the Commons file."}},
 size:"",
 intro:"The Ardagh Chalice is a silver cup made in Ireland around 750 C.E., one of the finest surviving examples of early medieval Irish metalwork. The original is kept in Dublin; the picture here shows an early-20th-century copy held by the Metropolitan Museum of Art in New York. The maker decorated the chalice with narrow bands of fine twisted-wire patterns and colored enamel studs, set against wide areas of plain silver. The design balances rich decoration against smooth, undecorated metal.",
 context:[{term:"Filigree",pron:"",def:"Decoration made from fine threads of gold or silver wire, twisted, coiled and soldered to a metal surface."},{term:"Enamel",pron:"",def:"A glassy coating made by fusing powdered minerals onto metal with heat, adding permanent color to metalwork."},{term:"Chalice",pron:"",def:"A tall cup, often richly decorated, used to hold wine in a Christian communion service."}],
 clues:[{id:"filigree",label:"Filigree bands",def:"Fine twisted-wire decoration concentrated at the foot and rim"},{id:"studs",label:"Enamel studs",def:"Glass fused to metal, set at intervals around the cup"},{id:"plain",label:"Plain silver fields",def:"Undecorated metal surfaces left as a deliberate design contrast"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might the maker have left most of the cup plain and put the richest decoration in a few bands?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Woven wire bands, colored studs and smooth silver beside rich decoration are features a detective can carry to the next case.",
 sourceNums:[34,35,36],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:The_Ardagh_Chalice_MET_tem07658s2.jpg",author:"The Metropolitan Museum of Art (Rogers Fund, 1906)",license:"CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"}};
/* Target zones, in percent of the photo (x, y from the top left). Ellipses use cx, cy, rx, ry; boxes use x0, y0, x1, y1. */
EM15.zones={
 filigree:[{x0:36,y0:34,x1:63.5,y1:42},{x0:64.5,y0:30,x1:82,y1:40.5},{x0:17.5,y0:26.5,x1:27.5,y1:35.5},{x0:38,y0:63,x1:58.5,y1:75},{x0:27.5,y0:46,x1:48,y1:59}],
 studs:[{cx:45.9,cy:38.5,rx:3.8,ry:5},{cx:64.7,cy:37.9,rx:3.8,ry:5},{cx:78.1,cy:33.8,rx:3.8,ry:5},{cx:81.9,cy:27.9,rx:3.5,ry:4.7},{cx:25,cy:34.6,rx:3.8,ry:5},{cx:16.9,cy:27.9,rx:3.5,ry:4.7},{cx:30.3,cy:49.2,rx:5.5,ry:7.2},{cx:41.9,cy:51.7,rx:5.5,ry:7.2},{cx:36.9,cy:62.1,rx:5.5,ry:7.2}],
 plain:[{x0:48,y0:50,x1:73,y1:62},{x0:30,y0:73,x1:68,y1:86}]
};
EM05.zones={
 nimbus:[{x0:19.5,y0:24,x1:37,y1:47},{x0:66,y0:24,x1:85,y1:47},{x0:33,y0:18.5,x1:67,y1:26.5}],
 frontal:[{x0:37,y0:36.5,x1:62,y1:43.5}],
 roundel:[{cx:15.5,cy:9.3,rx:12.5,ry:7.4},{cx:51.7,cy:8.4,rx:13.5,ry:8},{cx:86.3,cy:8.4,rx:12.5,ry:7.6}]
};
EM06.zones={
 giant:[{x0:8.5,y0:2.5,x1:67,y1:43.5}],
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
 detail:{image:"public/images/artworks/Kells-ChiRho-Detail.jpg",alt:"A close view of the lower middle of the page. A small human face with curly yellow hair looks out from inside a red-outlined loop. Below it, a cross-shaped panel is filled with fine patterns, and the first letters of the text line begin at the bottom right.",caption:"Detail: a small face with curly hair peeks out from a loop of the letter P, beside a cross-shaped panel of fine patterns",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:KellsFol034rChiRhoMonogram.jpg",author:"Unknown Irish or Scottish monks; photographic reproduction",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"This page was painted about 800 C.E. by monks working on the small island of Iona, off the coast of Scotland, or at the monastery of Kells in Ireland. It opens the Gospel of Matthew's account of the birth of Christ, and the painters packed almost every inch with tight spirals, woven patterns and tiny hidden figures. Two Greek letters, Chi and Rho, the first two letters of the word Christ, take up most of the page.",
 context:[{term:"Monogram",pron:"",def:"A design made from two or more letters combined into one symbol."},{term:"Insular",pron:"",def:"The art style developed in monasteries of Ireland and Britain between about 500 and 900 C.E., known for dense spirals, woven patterns and tiny hidden figures tucked into the decoration."},{term:"Scriptorium",pron:"scrip-TOR-ee-um",def:"A room in a medieval monastery where monks copied and decorated handwritten books."}],
 clues:[{id:"monogram",label:"Chi Rho monogram",def:"Two Greek letters combined into one symbol, filling the entire page"},{id:"spirals",label:"Spiral ornament",def:"Tightly curling patterns that radiate outward from central points"},{id:"hidden",label:"Hidden figures",def:"Tiny faces, animals, and human figures tucked into the decoration"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might the makers have hidden tiny faces and animals inside the pattern, where a reader might take a long time to find them?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Giant letters, swirling spirals and hidden creatures are features a detective can carry to the next case.",
 sourceNums:[37,38,39],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:KellsFol034rChiRhoMonogram.jpg",author:"Unknown Irish or Scottish monks; photographic reproduction",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
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
 detail:{image:"public/images/artworks/Ebbo-Matthew-Detail.jpg",alt:"A close view of Matthew's head and hands. He has wild curly hair, wide eyes and a furrowed face. In one hand he holds a white ink horn, and in the other a red pen.",caption:"Detail: Matthew's wild curls and furrowed face, drawn with quick strokes of gold and brown",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Matthew2.jpg",author:"Unknown artist; photograph by Giraudon / Art Resource, NY",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"This page of Saint Matthew was painted between 816 and 841 C.E. at Hautvillers, near Reims in France, for Archbishop Ebbo. Matthew sits hunched over his book, writing fast, his eyes wide and his robes rippling in jagged strokes. Painters at the courts of Charlemagne and his heirs revived the lifelike figure drawing of ancient Rome, but the artist of this page added a new restless energy, as if Matthew is caught in a burst of divine inspiration.",
 context:[{term:"Naturalism",pron:"",def:"A style in art that tries to show figures and objects as they would look in life, with bodies in natural poses and cloth falling in natural folds."},{term:"Evangelist",pron:"",def:"One of the four writers of the Gospels \u2014 Matthew, Mark, Luke and John. In medieval manuscripts, each Gospel opens with a portrait of its evangelist at work."},{term:"Illumination",pron:"",def:"The art of decorating a handwritten book with pictures, patterns and gold, so that each page becomes a work of art."}],
 clues:[{id:"brushwork",label:"Agitated brushwork",def:"Quick, jagged strokes of paint across the robe, suggesting motion and urgency"},{id:"evangelist",label:"Evangelist at work",def:"Matthew writing with a pen in one hand and an ink horn nearby"},{id:"landscape",label:"Classical landscape",def:"Hills, columned buildings, and a tiny tree in the distance behind the figure"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might the artist have drawn Matthew in a rush of restless lines, instead of the calm, smooth poses of ancient Roman art?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Streaky lines, writing tools and a landscape behind the figure are features a detective can carry to the next case.",
 sourceNums:[40,41,42],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Saint_Matthew2.jpg",author:"Unknown artist; photograph by Giraudon / Art Resource, NY",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
EM17.zones={
 brushwork:[{x0:14,y0:28,x1:68,y1:82}],
 evangelist:[{cx:66,cy:29.5,rx:7.5,ry:5.5},{x0:51,y0:32,x1:75,y1:47},{cx:76,cy:22,rx:3,ry:3}],
 landscape:[{x0:36,y0:0,x1:87,y1:10},{x0:4,y0:1.5,x1:19,y1:17},{x0:84,y0:1,x1:93,y1:13}]
};
var EM18={id:"EM-18",kind:"Pottery lid",title:"A Thinker in Clay",object:"Spong Man, urn lid",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Spong Man (cremation urn lid)",date:"about 450\u2013550 C.E.",location:"Norwich Castle Museum & Art Gallery, England (found at Spong Hill, Norfolk)",artist:"unknown Anglo-Saxon potter",
 headline:"Look closely at the figure",
 alt:"A small dark brown clay figure of a person seated on a high-backed chair, set on a round, flat lid. The figure holds the head between both hands, with the elbows resting on the knees. The head is bald and rounded, and the face is plain, with two small round eyes and a long, pinched nose. A few fine lines are scratched into the chair back and around the edge of the lid.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Spong-Man.jpg",
 imageNote:"The view shows the figure from the front and slightly to one side; it once sat on a pot of ashes and was found in Norfolk, England, in 1979.",
 detail:{image:"public/images/artworks/Spong-Man-Detail.jpg",alt:"A close view of the head. The face is plain, with two small round eyes and a long, pinched nose. Both hands press against the sides of the head.",caption:"Detail: the face and hands, shaped in clay with very few marks",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Spong_Man.JPG",author:"Geni",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped."}},
 size:"",
 intro:"Between about 450 and 550, an Anglo-Saxon potter made this small clay figure to sit on the lid of a pot holding a person\u2019s ashes. The potter is unknown. It was found in 1979 in a large cemetery at Spong Hill, in Norfolk, England. Norwich Castle Museum calls it the only three-dimensional human figure of its period found in England. A seated figure shaped in the round, with its head in its hands, is rare for these centuries.",
 context:[{term:"Cremation urn",pron:"",def:"A pot that holds a person\u2019s ashes after the body has been burned."},{term:"In the round",pron:"",def:"Sculpture made to be viewed from all sides, not attached to a wall or background."},{term:"Incised",pron:"",def:"Cut into a surface with a pointed tool; an incised line is a cut line, not a painted one."}],
 clues:[{id:"gesture",label:"The gesture",def:"Both hands pressed against the sides of the head"},{id:"face",label:"A plain face",def:"A spare face with small round eyes and a long, pinched nose"},{id:"lines",label:"Incised lines",def:"Fine lines cut into the clay with a tool"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might the maker have shaped the lid as a person holding their head in their hands, instead of a plain cover?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A gesture of both hands at the head, a plain face and incised lines are features a detective can carry to the next case.",
 sourceNums:[43,44,169],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Spong_Man.JPG",author:"Geni",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
EM18.zones={
 gesture:[{cx:36.5,cy:19,rx:5,ry:5},{cx:53,cy:20,rx:4.5,ry:5},{x0:37,y0:22,x1:68,y1:44}],
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
 imageNote:"The view looks straight into the cup, whose rim is chipped and cracked; it was found in the Roman forum area at Roselle, in Italy.",
 detail:{image:"public/images/artworks/Roselle-Quadriga-Detail.jpg",alt:"A close view of the four horses pulling the chariot, with the driver\u2019s lower body above them. The horses lift their front legs, and thin lines mark their harness straps and manes. A chariot wheel shows between the legs.",caption:"Detail: the four horses and the chariot wheels, raised from the surface of the clay",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Coppa_in_terra_sigillata_africana_con_imperatore_su_quadriga,_375-430_dc_ca,_da_foro_romano_di_roselle.JPG",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/",changes:"Cropped."}},
 size:"",
 intro:"A potter in North Africa made this red clay cup between about 375 and 430. We do not know the potter\u2019s name, but the design is clear: an emperor driving a four-horse chariot, raised from the smooth surface in low relief. The cup crossed the Mediterranean and was found among the ruins of the Roman forum at Roselle, in Italy. It was made for use at the table, yet it carries a picture of an emperor.",
 context:[{term:"Slip",pron:"",def:"A watery mix of very fine clay that potters brush or dip onto a pot; this kind of pottery is named for its red slip."},{term:"Quadriga",pron:"kwah-DREE-guh",def:"A chariot drawn by a team of four horses."},{term:"Relief",pron:"",def:"A design that rises above its background surface; low relief rises only slightly."}],
 clues:[{id:"charioteer",label:"The charioteer",def:"A figure standing in the chariot, one arm raised"},{id:"quadriga",label:"The quadriga",def:"A team of four horses, fitted with harness straps, drawing the chariot"},{id:"foliate",label:"A leaf pattern",def:"A leaf shape with a central stem and rows of short ribs, in the lower part of the cup"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might a potter put a scene of an emperor on a cup used at an ordinary table?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A charioteer, a team of four horses and a leaf pattern are features a detective can carry to the next case.",
 sourceNums:[45,46,47],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Coppa_in_terra_sigillata_africana_con_imperatore_su_quadriga,_375-430_dc_ca,_da_foro_romano_di_roselle.JPG",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"}};
EM19.zones={
 charioteer:[{x0:29,y0:17,x1:58,y1:41}],
 quadriga:[{x0:13,y0:30,x1:80,y1:62}],
 foliate:[{x0:34,y0:66,x1:51,y1:90}]
};
var EM20={id:"EM-20",kind:"Burial artifact",title:"Red Stones in Gold",object:"Sutton Hoo purse lid",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Sutton Hoo purse lid",date:"early 7th century C.E.",location:"British Museum, London (found at Sutton Hoo, Suffolk, England)",artist:"unknown Anglo-Saxon craftsman",
 headline:"Look closely at the lid",
 alt:"A flat gold lid with a gently curved lower edge, mounted on a pale backing, with three hinges along the top. A border of tiny red cells alternating with blue-and-white checks runs around the edge. In the middle, two curved birds with hooked beaks face each other, each gripping a smaller bird. On either side of them, a figure with a face and arms stands between two curled beasts. Above these, two six-sided panels of fine gold patterns flank a panel of interlaced animals.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/SuttonHoo-PurseLid.jpg",
 imageNote:"The gold lid of a purse buried in a ship burial in England about 1,400 years ago. The pale backing is a modern display mount.",
 detail:{image:"public/images/artworks/SuttonHoo-PurseLid-Detail.jpg",alt:"A close view of the two central panels. Each shows a bird of prey with a hooked beak and a round blue-and-white eye, gripping a smaller bird in its claws. The red bodies are set in thin gold walls, and tiny gold feathers fill the gaps.",caption:"Detail: two birds of prey with red garnet bodies set inside thin gold walls",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Sutton_hoo_purse_lid02017_(bird_of_pray).JPG",author:"Geni",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Used as provided on Commons."}},
 size:"",
 intro:"This gold lid once covered a purse, buried in an Anglo-Saxon ship grave at Sutton Hoo, in England, around 625 C.E. The surface is set with thin gold walls forming tiny cells, each filled with a precisely cut red garnet or a piece of colored glass. Among the geometric patterns, the craftsman worked panels of stylized animals: birds of prey gripping smaller birds, and a standing man flanked by two beasts. The design is mirrored exactly on the left and right.",
 context:[{term:"Cloisonn\u00e9",pron:"klwah-zuh-NAY",def:"A metalwork technique in which thin strips of gold are soldered to a surface to form tiny cells, each filled with a precisely cut piece of garnet, colored glass or enamel. The gold walls catch the light between the stones."},{term:"Zoomorphic",pron:"zoh-uh-MOR-fik",def:"Using animal shapes as decoration, often stylized or combined into patterns rather than shown realistically."},{term:"Inlay",pron:"",def:"A material such as stone, glass or shell set into cells or recesses in another material to form a pattern or picture."}],
 clues:[{id:"garnets",label:"Cloisonné garnets",def:"Precisely cut pieces of deep red garnet set into tiny gold cells, with the gold walls catching light between the stones"},{id:"birds",label:"Zoomorphic birds",def:"Curved birds of prey with hooked beaks, each gripping a smaller bird in its talons, mirrored on both sides of the lid"},{id:"beasts",label:"Man between beasts",def:"A standing human figure flanked by two animals, a composition found across many cultures from ancient Mesopotamia to early medieval Europe"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a craftsman have put so much gold and stone into the lid of a small purse?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Red stone inlay, birds of prey and a figure between beasts are features a detective can carry to the next case.",
 sourceNums:[48,49],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Sutton_hoo_(1).JPG",author:"Jononmac46",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
EM20.zones={
 garnets:[{x0:12,y0:16,x1:88,y1:23},{x0:4,y0:25,x1:11,y1:78},{x0:89,y0:25,x1:96,y1:78},{x0:14,y0:67,x1:88,y1:83}],
 birds:[{x0:35.5,y0:41,x1:64.5,y1:70}],
 beasts:[{x0:16,y0:45,x1:33,y1:71},{x0:68,y0:45,x1:85,y1:71}]
};
var EM21={id:"EM-21",kind:"Architecture",wide:false,title:"Layers in Stone",object:"Great Mosque of C\u00f3rdoba",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Puerta de San Esteban, Great Mosque of C\u00f3rdoba",date:"mosque begun about 785 C.E.; doorway remodeled 855 C.E.",location:"C\u00f3rdoba, Spain",artist:"builders unknown; for Abd al-Rahman I and Muhammad I",
 headline:"Look closely at the doorway",
 alt:"A tall, weathered wall of tan stone blocks with a stepped, notched top edge against a blue sky. In the center is a doorway with a dark metal door. Above it, a horseshoe-shaped arch is built of alternating red and white wedge-shaped stones, set inside a rectangular carved frame. Carved stone panels are set into the wall on both sides.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Cordoba-SanEsteban.jpg",
 imageNote:"The Puerta de San Esteban, a doorway in the mosque\u2019s west wall.",
 detail:{image:"public/images/artworks/Cordoba-Hall-Detail.jpg",alt:"Inside a huge hall of columns. Rows of arches, striped red and white, rise in two levels over stone columns, with pale light coming from far down the hall.",caption:"Detail: the mosque\u2019s prayer hall, with two levels of striped horseshoe arches resting on reused Roman columns",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Mosque_of_Cordoba_Spain.jpg",author:"Steven J. Dunlop",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"This doorway belongs to the Great Mosque of C\u00f3rdoba in Spain, begun about 785 C.E. for Abd al-Rahman I, the first Umayyad emir of C\u00f3rdoba. A carved inscription records that a later emir, Muhammad I, had the doorway remodeled in 855 C.E. Its builders turned structure into decoration: the arch alternates red brick with pale stone, and a rectangular frame outlines the whole entrance.",
 context:[{term:"Horseshoe arch",pron:"",def:"An arch that curves in past its widest point, narrowing before it meets the wall, like a horseshoe. It is a signature form of Islamic architecture in Spain."},{term:"Voussoir",pron:"voo-SWAR",def:"One of the wedge-shaped stones that fit together to form an arch."},{term:"Alfiz",pron:"al-FEEZ",def:"A rectangular frame built around an arch."}],
 clues:[{id:"striped",label:"Striped arch",def:"Alternating red and white voussoirs forming a horseshoe arch over the doorway"},{id:"frame",label:"Rectangular frame",def:"A carved border that outlines the arch in a rectangle"},{id:"panels",label:"Carved stone panels",def:"Blocks of stone with carved patterns set into the wall beside and above the arch"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might builders have used red brick and pale stone in alternating stripes instead of plain stone?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A striped arch, a framing band and carved panels are features a detective can carry to the next case.",
 sourceNums:[50,51,52],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Puerta_de_San_Esteban_(Mezquita_de_C%C3%B3rdoba,_Espa%C3%B1a).jpg",author:"Jos\u00e9 Luis Filpo",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/"}};
EM21.zones={
 striped:[{x0:30,y0:42,x1:70,y1:63}],
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
 imageNote:"The view looks along the ship from its prow, in a museum hall; the ship is about 21 m (70 ft) long.",
 detail:{image:"public/images/artworks/Oseberg-Carvings-Detail.jpg",alt:"A carved wooden panel in a museum case. Tangled animals with scale-like patterns on their bodies fill the panel, and two round faces look out from among them.",caption:"Detail: tangled animals with scaly bodies and round faces, carved in wood",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Grave_goods_from_the_Oseberg_ship_burial._Viking_Ship_Museum,_Oslo,_Norway_(Vikingskipshuset_p%C3%A5_Bygd%C3%B8y)_November_2011.jpg",author:"Bochum1805",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/"}},
 size:"",
 intro:"The Oseberg ship was built about 820 and, in 834, buried under a mound of clay and stone in Norway. Two women were laid to rest inside it, along with many possessions. Its unknown makers built the hull from overlapping planks and carved the prow with tightly packed patterns, ending in a tall spiral. The ship was dug out of its mound in 1904, more than a thousand years later.",
 context:[{term:"Prow",pron:"",def:"The front end of a ship."},{term:"Hull",pron:"",def:"The main body of a ship, the part that sits in the water."},{term:"Clinker-built",pron:"",def:"Made with overlapping planks, each edge resting over the one below."}],
 clues:[{id:"spiral",label:"The spiral",def:"A tightly coiled curl at the very top of the prow"},{id:"relief",label:"Relief carving",def:"Dark, tightly packed patterns carved into the wood of the prow"},{id:"clinker",label:"Clinker planking",def:"Long planks laid in overlapping rows along the hull"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might people have chosen to bury a whole ship along with two women and their belongings?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A spiral curl, a carved prow and overlapping planks are features a detective can carry to the next case.",
 sourceNums:[53,54,76],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Osebergskipet_2016.jpg",author:"Petter Ulleland",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
EM22.zones={
 spiral:[{x0:73,y0:1,x1:83,y1:14}],
 relief:[{x0:74.5,y0:16,x1:90,y1:62},{x0:70,y0:84,x1:84,y1:99}],
 clinker:[{x0:40,y0:66,x1:89,y1:95}]
};
var EM23={id:"EM-23",kind:"Casket",wide:true,title:"A Box of Whale Bone",object:"Franks Casket",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Franks Casket (also called the Auzon Casket)",date:"early 8th century C.E.",location:"British Museum, London (findspot recorded as Auzon, France)",artist:"unknown Anglo-Saxon carver",
 headline:"Look closely at the casket",
 alt:"A small casket of pale, carved bone seen from the front, with a clear plastic cover over its lid. Across the front, small figures are carved in low relief in two scenes side by side. Rows of angular runic letters frame the scenes along the top and bottom. A hole with a rough edge sits at the top center, where a metal fitting was once attached.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Franks-Casket.jpg",
 imageNote:"The front of the Franks Casket. The scene at left comes from a Germanic legend about a smith named Weland. The scene at right shows three kings visiting a mother and child.",
 detail:{image:"public/images/artworks/Franks-Casket-Weland-Detail.jpg",alt:"A close view of a carved scene in pale bone. A man at the left holds tools beside a low table. Two robed women stand in the middle, and a man at the right reaches toward several birds.",caption:"Detail: the Weland scene, with tiny figures carved in low relief into whale bone",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Franks_casket_03.jpg",author:"Michel wal",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"This box was carved from whale bone by an Anglo-Saxon craftsman in the early 8th century C.E. Its front tells two different stories side by side: at the left, a scene from the Germanic legend of Weland the Smith; at the right, the Adoration of the Magi from the Bible. A riddle written in angular letters runs around the edge, and the riddle itself is about the whale whose bone was used to make the box.",
 context:[{term:"Runes",pron:"",def:"Angular letters used to write Old English and other early Germanic languages. Their straight lines were designed to be carved into hard materials such as wood, bone and stone."},{term:"Anglo-Saxon",pron:"",def:"Of or relating to the Germanic peoples who settled in England from the 5th century C.E. onward. Anglo-Saxon artists often blended their own traditions with Christian subjects."},{term:"Low relief",pron:"",def:"Sculpture that is only slightly raised from a flat background, so the figures look almost painted onto the surface."}],
 clues:[{id:"weland",label:"Weland the Smith",def:"A scene from Germanic legend: a figure at left holds tools at a forge"},{id:"magi",label:"Adoration of the Magi",def:"Three figures approach a seated mother and child, a scene from the Bible"},{id:"runes",label:"Runic inscription",def:"Angular letters carved around the edge of the scenes"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might the carver have placed a story from Germanic legend and a story from the Bible side by side on the same box?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A smith's scene, three kings and a border of runes are features a detective can carry to the next case.",
 sourceNums:[55],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Franks_casket_03.jpg",author:"Michel wal",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
EM23.zones={
 weland:[{x0:14,y0:51,x1:49,y1:75}],
 magi:[{x0:49.5,y0:55,x1:70,y1:76},{x0:71,y0:52,x1:84,y1:76}],
 runes:[{x0:14,y0:41,x1:37,y1:51},{x0:61,y0:41,x1:86,y1:52},{x0:13,y0:75,x1:84,y1:84}]
};
var EM24={id:"EM-24",kind:"Architecture",wide:true,title:"A Dome Above a Rock",object:"Dome of the Rock",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Dome of the Rock (Qubbat al-Sakhra)",date:"completed about 691\u2013692 C.E.",location:"Haram al-Sharif (Temple Mount), Jerusalem",artist:"builders unknown; built for the caliph Abd al-Malik",
 headline:"Look closely at the building",
 alt:"An eight-sided building seen from a corner against a deep blue sky. A large, rounded gold dome with a small gold ornament on top rises from its center. The walls have a band of blue tile writing along the top, a row of arched windows set in green and blue tile patterns, and pale stone panels along the bottom. A porch with slender stone columns stands at the left.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Dome-of-the-Rock.jpg",
 imageNote:"The view looks at the building from the outside, near one corner; its wall tiles were added in the 1500s and again in the 1960s.",
 detail:{image:"public/images/artworks/Dome-Mosaic-Detail.jpg",alt:"A close view of a mosaic of tiny colored pieces on a gold background. A jeweled vase with curved handles holds a large plant shape, and green vines with leaves curl around it.",caption:"Detail: a jeweled vase and curling vines in the mosaics inside the building",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Arabischer_Maler_um_690_001.jpg",author:"Unknown artists (photograph from the Yorck Project)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"In 691 or 692, the Umayyad caliph Abd al-Malik completed this shrine in Jerusalem around a large rock that stands at its center. The builders are unknown. They raised an eight-sided building under a rounded dome more than 20 meters wide, and decorated the inside with mosaics of vines, vessels and jewels, with no human figures. The colorful tiles on the outside are much newer, but the building\u2019s shape dates from the beginning.",
 context:[{term:"Octagonal",pron:"",def:"Having the shape of an octagon, a figure with eight sides."},{term:"Sheathed",pron:"",def:"Covered with a thin outer layer, like the metal skin on the dome."},{term:"Mosaic",pron:"",def:"A picture or pattern made of thousands of small pieces of colored stone or glass set into plaster."}],
 clues:[{id:"dome",label:"The crowning dome",def:"A large, rounded roof sheathed in gold-colored metal"},{id:"arches",label:"Tiled arches",def:"A row of arched windows framed by colorful, patterned tilework"},{id:"stone",label:"Stone paneling",def:"Smooth, light-colored stone panels along the base of the walls"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Why might builders have covered the inside of a building with glittering mosaics of jewels and plants, but shown no people or animals?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A crowning dome, tiled arches and stone paneling are features a detective can carry to the next case.",
 sourceNums:[56,57,170],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Dome_of_the_Rock,_Jerusalem_(16197850416).jpg",author:"yeowatzup",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/"}};
EM24.zones={
 dome:[{x0:32,y0:10,x1:66,y1:40}],
 arches:[{x0:10,y0:54,x1:94,y1:71}],
 stone:[{x0:55,y0:71,x1:97,y1:92}]
};
var EM25={id:"EM-25",kind:"Wall painting",wide:true,title:"A Painted Wall of Saints",object:"Santa Maria Antiqua frescoes",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Wall paintings in Santa Maria Antiqua (Christ enthroned between saints)",date:"about 757\u2013767 C.E.",location:"Santa Maria Antiqua, Roman Forum, Rome",artist:"unknown painters; painted in the time of Pope Paul I",
 headline:"Look closely at the wall",
 alt:"A tall, weathered wall covered in paintings. A row of standing saints with gold nimbuses, each holding a book, stretches across the middle, with Christ seated on a throne at the center. Above them are framed story scenes, partly lost. Along the bottom is a band of painted curtains with swags and round ornaments. A small square stone structure stands at the foot of the wall.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Santa-Maria-Antiqua.jpg",
 imageNote:"A wall of Santa Maria Antiqua in the Roman Forum. Parts of the plaster have fallen away, but much of the paint is still bright.",
 detail:{image:"public/images/artworks/Santa-Maria-Antiqua-Basil.jpg",flex:29,alt:"A tall painted figure of a bearded saint in a dark robe, with a gold nimbus and large eyes. He holds a book. Greek letters beside his head give his name.",caption:"Detail: Saint Basil, one of the saints to the right of Christ, with large eyes and a long face",credit:{word:"Detail photo (Saint Basil)",url:"https://commons.wikimedia.org/wiki/File:Agios_Basileios_Santa_Maria_Antiqua.jpg",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"}},
 detail2:{image:"public/images/artworks/Santa-Maria-Antiqua-Hierarchs.jpg",alt:"Three standing figures with gold nimbuses, each holding a book. Greek letters between their heads give their names. Plaster is missing in places, and red and dark bands of color surround them.",caption:"Detail: three saints standing to the right of Christ, with Greek names beside each head",credit:{word:"Detail photo (three hierarchs)",url:"https://commons.wikimedia.org/wiki/File:Three_Holy_Hierarchs_Santa_Maria_Antiqua.jpg",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"}},
 size:"",
 intro:"This wall stands in Santa Maria Antiqua, a church in the Roman Forum that was buried in 847 C.E., after an earthquake, and was not dug out until the early 1900s. Christ sits enthroned at the center, with saints standing in a row on either side. Greek letters beside each head name the saint, and a painted curtain runs along the bottom.",
 context:[{term:"Enthroned",pron:"",def:"Seated on a throne, usually in a central, raised position that shows authority."},{term:"Inscription",pron:"",def:"Writing or lettering on a work of art, often naming a figure or scene."}],
 clues:[{id:"throne",label:"Enthroned Christ",def:"A central figure seated on a throne and holding a book, placed above and apart from the standing saints"},{id:"saints",label:"Standing saints",def:"Figures arranged in a row on either side of the enthroned Christ, each holding a book and named by a Greek inscription"},{id:"curtain",label:"Painted curtain",def:"A decorative band of painted fabric with draped swags and round ornaments running along the base of the wall"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might painters have shown saints in a long row, all facing forward, instead of in a lively scene?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A seated Christ, a row of saints and a painted curtain are features a detective can carry to the next case.",
 sourceNums:[58,59],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:03_Santa_Maria_Antiqua_Mural.jpg",author:"NateBergin",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"}};
EM25.zones={
 throne:[{x0:44,y0:41,x1:54.5,y1:68}],
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
 imageNote:"A painting of Christ on a wooden panel.",
 detail:{image:"public/images/artworks/Pantocrator-Sinai-Face-Detail.jpg",alt:"A close view of a calm, bearded face with large dark eyes and long dark hair, set against a gold nimbus. The two sides of the face are not quite alike.",caption:"Detail: the face, where the left and right halves differ in shape and expression",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Jesus_Christ_3.jpg",author:"JoeyEspo984",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the Commons file."}},
 size:"",
 intro:"This painting on a wooden panel was made about 600 C.E. at the monastery of Saint Catherine, on Mount Sinai in Egypt. The painter mixed colored pigments into hot beeswax, a method that has preserved the surface for about 1,400 years. The figure is Christ, shown as both judge and savior, raising one hand and holding a jeweled Gospel book. The two sides of his face are not quite alike.",
 context:[{term:"Pantocrator",pron:"pan-TOK-ruh-tor",def:"An image of Christ as judge and savior, facing the viewer directly and holding a Gospel book."},{term:"Encaustic",pron:"en-KAW-stik",def:"A painting method in which colored pigments are mixed with hot beeswax, producing a durable surface with a slight glow."},{term:"Nimbus",pron:"",def:"A round disk of gold or yellow light placed behind the head of a figure, to signify holiness. A square nimbus often signifies the holy person is still living at the time the work was created."},{term:"Byzantine",pron:"",def:"Of or relating to the Eastern Roman Empire, whose capital was Constantinople. Byzantine art is known for gold backgrounds, formal poses and holy subjects such as Christ and the saints."}],
 clues:[{id:"face",label:"Asymmetric face",def:"Two halves of the face differ: one calm and gentle, the other sterner and more shadowed, suggesting mercy and judgment"},{id:"hand",label:"Blessing hand",def:"A specific gesture of blessing, a convention persisting across centuries of icon painting"},{id:"book",label:"Gospel book",def:"Identified as the Gospels, signaling Christ's role as teacher and source of divine law, another Pantocrator convention"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might the painter have made the two sides of the face a little different, instead of perfectly matching?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A face with two different sides, a raised hand and a jeweled book are features a detective can carry to the next case.",
 sourceNums:[30,31,60,61],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Jesus_Christ_3.jpg",author:"JoeyEspo984",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
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
 detail:{image:"public/images/artworks/Aachen-Dome-Detail.jpg",alt:"A close view of the original chapel at the center of the building. An eight-sided drum of pale stone holds a silvery-gray dome topped by a small windowed lantern. A band of small rounded arches on short columns runs just below the dome.",caption:"Detail: the domed octagon at the center, with the lantern on top and a band of small rounded arches below the dome",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Aachen_Cathedral_And_Palatine_Chapel,_Germany.jpg",author:"Jim Linwood",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Aachen-Interior-Detail.jpg",alt:"The inside of an eight-sided church. Rounded arches built of alternating light and dark stones rest on thick piers faced with gray and white marble slabs. A large gold chandelier hangs in the center, an upper gallery with dark metal railings rises above it, and rows of wooden chairs and visitors fill the foreground.",caption:"Detail: inside, rounded arches of alternating light and dark stone rest on piers faced with marble slabs",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Cathedral_in_Aachen_7.jpg",author:"Leon petrosyan",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}},
 size:"",
 intro:"Charlemagne, the most powerful ruler in Western Europe, had this palatine chapel built beside his palace at Aachen between about 790 and 805 C.E. The original chapel is the domed octagon at the center, with alternating light-and-dark stone arches inspired by earlier churches at Ravenna in Italy. Over the centuries, later builders added the tall pointed structures around it in a different style.",
 context:[{term:"Palatine chapel",pron:"",def:"A private church built for a ruler and the royal court, usually inside or beside the palace."},{term:"Lantern",pron:"",def:"A small windowed tower on top of a dome that lets light into the space below."},{term:"Carolingian",pron:"care-oh-LIN-jee-un",def:"Of or relating to the dynasty of Charlemagne and his successors, who ruled much of western Europe from about 750 to 900 C.E. and sponsored a deliberate revival of Roman art and learning."}],
 clues:[{id:"dome",label:"Domed roof",def:"The rounded roof of the original chapel, with a lantern on top"},{id:"arches",label:"Rounded arches",def:"A band of small arches with curved tops, just below the dome"},{id:"windows",label:"Pointed windows",def:"Tall windows ending in a point, part of later additions"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a ruler choose to build a church whose shape and columns recall faraway Ravenna and Rome?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A domed roof, rounded arches and pointed windows are features a detective can carry to the next case.",
 sourceNums:[65,66],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Aachen_Cathedral_And_Palatine_Chapel,_Germany.jpg",author:"Jim Linwood",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/"}};
EM27.zones={
 dome:[{x0:41,y0:18,x1:59,y1:46}],
 arches:[{x0:41,y0:46,x1:59,y1:52}],
 windows:[{x0:56.5,y0:63,x1:69.5,y1:76.5},{x0:70,y0:63,x1:79,y1:87},{x0:23.5,y0:42,x1:38.5,y1:58}]
};
var EM28={id:"EM-28",kind:"Architecture",wide:false,title:"A Hall Built for a King",object:"Santa Mar\u00eda del Naranco",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"Santa Mar\u00eda del Naranco (royal hall of King Ramiro I)",date:"about 842\u2013850 C.E.",location:"Mount Naranco, Oviedo, Asturias, Spain",artist:"builders unknown; built for King Ramiro I",
 headline:"Look closely at the building",
 alt:"A tall stone building of two floors seen from a corner, with a low pitched roof of red tiles. The upper floor at the left opens to the air through three rounded arches on slender columns with twisted shafts. Below them, three small arched niches are set into the wall. Along the long side at the right, tall, thick strips of stone stand against the wall, and a flight of stone steps climbs to a doorway on the upper floor. Gray cloud fills the sky.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Naranco-Exterior.jpg",
 imageNote:"The building was restored in 1929\u20131934.",
 detail:{image:"public/images/artworks/Naranco-Nave.jpg",flex:38,alt:"The long upper hall seen from one end. A rounded stone vault covers the room, held up by rounded arches that cross it. Tall columns with twisted, rope-like shafts stand along both walls, and round carved medallions decorate the stone above the arches. At the far end, three arched openings let in daylight.",caption:"Detail: the barrel-vaulted upper hall, with rounded arches, columns with twisted shafts and carved medallions",credit:{word:"Detail photo (interior)",url:"https://commons.wikimedia.org/wiki/File:Nave_superior_de_Santa_Mar%C3%ADa_del_Naranco_(Oviedo).jpg",author:"Jl FilpoC",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"This stone hall on Mount Naranco, near Oviedo in Spain, was built between 842 and 850 C.E. for King Ramiro I of Asturias as the royal hall of his palace. It became a church only centuries later. Its builders covered the upper hall with a stone barrel vault and added buttresses along the long walls, while the upper floor opens to the light on all four sides.",
 context:[{term:"Buttress",pron:"",def:"A projecting stone support built against a wall to strengthen it against the outward push of a vault or roof."},{term:"Barrel vault",pron:"",def:"A continuous arched ceiling shaped like a tunnel. Look for it in the interior detail photo."},{term:"Arcade",pron:"",def:"A row of arches carried on columns or piers, often running along the front or side of a building."}],
 clues:[{id:"arches",label:"Open arcade",def:"A row of three rounded arches opening the upper floor to the outside air"},{id:"buttresses",label:"Buttresses",def:"Thick stone supports projecting from the long wall"},{id:"stairway",label:"External staircase",def:"A flight of stone steps climbing to the upper-floor entrance"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"The upper floor has open arches and windows on all sides, but the lower floor has almost none. Why might a builder put the grandest room above, in the light?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. An open arcade, buttresses and an outside stairway are features a detective can carry to the next case.",
 sourceNums:[67,68],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Iglesia_de_Santa_Maria_de_Naranco_2-501.jpg",author:"Emilio Rubio Villanueva (edited by MenkinAlRire)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
EM28.zones={
 arches:[{x0:20,y0:39,x1:37.5,y1:65}],
 buttresses:[{x0:49,y0:22,x1:65,y1:70},{x0:80,y0:47,x1:87,y1:85}],
 stairway:[{x0:59.5,y0:70,x1:76,y1:89}]
};
var EM29={id:"EM-29",kind:"Fresco wall painting",wide:true,title:"A Family on the Move",object:"The Flight into Egypt, Monastery of Saint John, M\u00fcstair",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",
 work:"The Flight into Egypt (north wall of the nave, Monastery of Saint John)",date:"about 800 C.E.",location:"M\u00fcstair, Graub\u00fcnden, Switzerland",artist:"painters unknown",
 headline:"Look closely at the painting",
 alt:"A wall painting in orange, brown and cream. A wide band shaped like a rounded arch curves across the top. Under it, a woman in an orange robe holds a small child, and a solid orange disk is set behind each of their heads. At the right, a man with a beard and a third disk behind his head holds a rope that loops around the nose and neck of a brown animal. At the far left, another man carries a large bundle on his shoulder. Dark tall shapes of buildings stand behind the animal.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Mustair-Flight.jpg",
 imageNote:"A straight-on view of the scene, scanned from a printed book, so the colors may differ from the original.",
 detail:{image:"public/images/artworks/Mustair-Mary-Detail.jpg",alt:"A close view of a woman with large dark eyes, wrapped in an orange cloth. A solid orange disk is set behind her head. She holds a small child, who has a smaller orange disk behind his head and points one hand outward. Dark outlines draw both faces.",caption:"Detail: Mary holding the Child, who points outward with one hand",credit:{word:"Detail",url:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg",author:"James Steakley",license:"Public domain (flat reproduction of a 9th-century painting)",licenseUrl:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg"}},
 size:"",
 intro:"Painted about 800 C.E. by unknown artists, this fresco fills a wall of the monastery church of Saint John in M\u00fcstair, Switzerland. It shows the Flight into Egypt, when Mary, Joseph and the infant Jesus flee danger, as told in the Gospel of Matthew. Solid orange nimbuses mark the holy figures, and the figures overlap in a crowded group, so the family seems to move across the wall.",
 context:[{term:"Fresco",pron:"",def:"A wall painting made by applying paint to fresh, wet plaster, so the colors dry into the surface."},{term:"Round arch",pron:"",def:"A half-circle arch resting on two supports, common in Roman and early medieval building."},{term:"Carolingian",pron:"care-oh-LIN-jee-un",def:"Of or relating to the dynasty of Charlemagne and his successors, who ruled much of western Europe from about 750 to 900 C.E. and sponsored a deliberate revival of Roman art and learning."}],
 clues:[{id:"nimbus",label:"Nimbus",def:"A solid disk behind a holy head; three figures here have one"},{id:"arch",label:"Rounded arch",def:"A broad, curved band across the top of the scene"},{id:"rope",label:"Lead rope",def:"A rope looped around the animal\u2019s head and neck, held at the right"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The painter has not shown the road, the sky or the distance, only the figures and a few buildings. What do you think the painter wanted you to notice first?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A nimbus, a rounded arch and a lead rope are features a detective can carry to the next case.",
 sourceNums:[70,71,72,171],
 credit:{word:"Scan",url:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg",author:"James Steakley (scan of a book plate; painter unknown)",license:"Public domain (flat reproduction of a 9th-century painting)",licenseUrl:"https://commons.wikimedia.org/wiki/File:Meister_von_M%C3%BCstair_003.jpg"}};
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
 imageNote:"Seen from a corner; the building was once attached to the porch of the church of Santa Croce.",
 detail:{image:"public/images/artworks/GallaPlacidia-Interior.jpg",alt:"The inside of one arm of the building. A rounded, tunnel-shaped ceiling is covered in deep blue mosaic scattered with gold stars and flower-like circles. A wide band of green leaves and fruit frames the ceiling, with a small gold cross at its top. Below, a half-circle mosaic shows a seated figure among white sheep.",caption:"Detail: inside, a rounded ceiling covered in mosaic stars, with the Good Shepherd mosaic below",credit:{word:"Detail photo (interior)",url:"https://commons.wikimedia.org/wiki/File:Galla_Placidia_Ravenna_05.JPG",author:"Superchilum",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"Built about 425 C.E. by unknown builders, this small brick building in Ravenna, Italy, is named for the empress Galla Placidia, its likely patron, though she was probably buried in Rome. Its cross-shaped plan is plain outside, with blind arches, gable ends and a square tower. Inside, mosaics of tiny glass pieces cover the ceiling in gold stars on deep blue, so a modest exterior hides a glittering interior.",
 context:[{term:"Mausoleum",pron:"",def:"A building made to hold one or more tombs."},{term:"Blind arch",pron:"",def:"An arch set into a wall with no opening behind it."},{term:"Mosaic",pron:"",def:"A picture or pattern made of thousands of small pieces of colored stone or glass set into plaster."}],
 clues:[{id:"blind",label:"Blind arches",def:"Arches set into the brick walls with no opening behind them"},{id:"gable",label:"Gable ends",def:"The triangular shape where each wing's walls meet the sloped roof"},{id:"tower",label:"Square tower",def:"A tall, square block of brick rising above the lower wings"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The outside is plain brick, but the inside glitters with mosaic. Why might a builder keep the outside simple and save the richest decoration for inside?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Blind arches, gable ends and a square tower are features a detective can carry to the next case.",
 sourceNums:[73,74,75],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Mausoleum_of_Galla_Placidia_in_Ravenna.JPG",author:"Petar Milo\u0161evi\u0107",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
EM30.zones={
 blind:[{x0:15.6,y0:64.6,x1:31.3,y1:85.4},{x0:36.3,y0:63.5,x1:62.5,y1:85.4},{x0:67.5,y0:63.8,x1:87.5,y1:84.6}],
 gable:[{x0:12.5,y0:44.6,x1:32.5,y1:58.5},{x0:66.3,y0:44.2,x1:88.8,y1:56.9}],
 tower:[{x0:30,y0:19,x1:77,y1:53}]
};
EM01.zones={
 blocky:[{x0:8,y0:5,x1:82,y1:78}],
 identical:[{x0:10,y0:2,x1:78,y1:24}],
 incised:[{x0:8,y0:50,x1:78,y1:64},{x0:8,y0:30,x1:78,y1:50}]
};
EM02.zones={
 gold:[{x0:27,y0:9,x1:67,y1:29},{x0:70,y0:20,x1:88,y1:34}],
 hieratic:[{x0:33,y0:31,x1:67,y1:52}],
 weightless:[{x0:10,y0:50,x1:88,y1:88}]
};
EM03.zones={
 matching:[{x0:8,y0:27,x1:92,y1:43}],
 blocky:[{x0:8,y0:27,x1:50,y1:43}],
 two:[{x0:8,y0:45,x1:32,y1:82},{x0:68,y0:45,x1:95,y1:82},{x0:50,y0:27,x1:92,y1:43}]
};
EM04.zones={
 atrium:[{x0:33,y0:30,x1:78,y1:72}],
 transept:[{x0:8,y0:0,x1:37,y1:20}],
 steps:[{x0:40,y0:82,x1:92,y1:100}]
};
EM07.zones={
 knotwork:[{x0:36,y0:30,x1:54,y1:40.5},{x0:35,y0:70,x1:55,y1:89}],
 vines:[{x0:39,y0:41,x1:54,y1:70},{x0:43,y0:8,x1:54,y1:29}],
 stacked:[{x0:34,y0:5,x1:55,y1:90}]
};
EM08.zones={
 frontal:[{x0:28,y0:30,x1:70,y1:62}],
 lines:[{x0:20,y0:35,x1:31,y1:52},{x0:50,y0:20,x1:68,y1:33},{x0:35,y0:62,x1:66,y1:82}],
 lead:[{x0:15,y0:22,x1:30,y1:82},{x0:66,y0:25,x1:86,y1:85},{x0:30,y0:20,x1:66,y1:30},{x0:33,y0:83,x1:67,y1:93}]
};
EM09.zones={
 matching:[{x0:15,y0:54,x1:80,y1:83}],
 frontal:[{x0:41,y0:22,x1:56,y1:40},{x0:43,y0:55,x1:53,y1:70},{x0:15,y0:54,x1:80,y1:67}],
 outlines:[{x0:37,y0:20,x1:60,y1:52},{x0:15,y0:54,x1:80,y1:83}]
};
EM10.zones={
 scenes:[{x0:4,y0:36,x1:96,y1:62},{x0:4,y0:65,x1:96,y1:92}],
 deep:[{x0:10,y0:37,x1:60,y1:60},{x0:26,y0:66,x1:58,y1:90}],
 robes:[{x0:60,y0:37,x1:92,y1:60},{x0:62,y0:66,x1:96,y1:90}]
};
EM11.zones={
 tall:[{x0:14,y0:16,x1:78,y1:66}],
 windows:[{x0:16,y0:28,x1:50,y1:48}],
 curved:[{x0:52,y0:17,x1:78,y1:64}]
};
EM12.zones={
 dome:[{x0:40,y0:25,x1:61,y1:37}],
 windows:[{x0:38,y0:34,x1:62,y1:41}],
 domes:[{x0:28,y0:42,x1:72,y1:58}]
};
EM13.zones={
 registers:[{x0:3,y0:20,x1:88,y1:58},{x0:3,y0:58,x1:97,y1:96}],
 continuous:[{x0:16,y0:32,x1:24,y1:56},{x0:48,y0:32,x1:57,y1:56},{x0:44,y0:78,x1:52,y1:92}],
 script:[{x0:5,y0:0,x1:92,y1:16}]
};
EM14.zones={
 drapery:[{x0:5,y0:30,x1:28,y1:76},{x0:36,y0:30,x1:60,y1:76},{x0:70,y0:30,x1:92,y1:76}],
 plaques:[{x0:5,y0:3,x1:95,y1:19},{x0:5,y0:22,x1:95,y1:78},{x0:5,y0:80,x1:95,y1:96}],
 arch:[{x0:31,y0:24,x1:67,y1:78}]
};
var LM01={id:"LM-01",kind:"Architecture",wide:true,title:"A Square of Miracles",object:"Pisa Cathedral and its bell tower",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Pisa Cathedral and the Leaning Tower",date:"cathedral begun 1064 C.E., bell tower begun 1173 C.E.",location:"Piazza del Duomo, Pisa, Italy",artist:"Buscheto, Rainaldo and later builders",
 headline:"Look closely at the buildings",
 alt:"A large cathedral of gray and white striped marble seen from a corner across a green lawn under a blue sky. Its tall front, on the left, rises in stepped rows of small arches topped by a triangular gable, with dark green doors at the bottom. A dome wrapped in scaffolding rises behind the roof. At the right edge, a round white tower made of stacked rows of arches leans to one side.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Pisa-Cathedral-Tower.jpg",
 imageNote:"The ground beneath the whole square is soft river silt. The bell tower began to lean before it was finished and has been drifting ever since.",
 detail:{image:"public/images/artworks/Pisa-Cathedral-Interior.jpg",alt:"The long central hall inside the cathedral, seen from the entrance. Two rows of tall columns carry rounded arches built of alternating light and dark stone. High above, a flat gold ceiling is divided into square panels. At the far end, a half-round wall glows gold with a seated figure.",caption:"Detail: inside, arches and walls alternate bands of light and dark stone",credit:{word:"Detail photo (interior)",url:"https://commons.wikimedia.org/wiki/File:Pisa_Cathedral_Interior.jpg",author:"Eric Kilby",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/"}},
 size:"",
 intro:"In 1064, the sea-trading republic of Pisa began this cathedral under the architect Buscheto. He drew on the Roman buildings he had seen along the Mediterranean — thick walls, round arches, and a solid, massive feel. The bell tower beside it was begun more than a century later, in 1173, on ground that proved too soft to hold it straight. The builders left almost no wall plain: a few patterns repeat across every surface of both buildings.",
 context:[{term:"Arcade",pron:"",def:"A row of arches carried on columns or piers, often running along the front or side of a building."},{term:"Romanesque",pron:"roh-muh-NESK",def:"A medieval building style from about 900 to 1200. Thick walls, round arches, and sturdy stone piers give it a solid, massive feel, like Roman buildings before it."},{term:"Campanile",pron:"kam-puh-NEE-lay",def:"An Italian bell tower, built as a separate tower next to a church. Pisa’s is the most famous — it began to lean before it was finished."}],
 clues:[{id:"arches",label:"Tiers of arcades",def:"Rows of small round arches stacked level above level"},{id:"stripes",label:"Banded marble",def:"Light and dark stone laid in alternating horizontal stripes"},{id:"diamonds",label:"Diamond-shaped stone panels",def:"Panels of colored stone fitted flush into the marble walls"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The walls would stand just as firmly without stripes, diamonds or rows of arches. Why might the builders have added them?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rows of arches, striped marble and diamond shapes are features a detective can carry to the next case.",
 sourceNums:[79,80,81,82],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Cathedral_and_Bell_Tower,_Square_of_Miracles,_Pisa_(29409772904).jpg",author:"Ray in Manila",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/"}};
LM01.zones={
 arches:[{x0:13.4,y0:16.6,x1:26.6,y1:25.8},{x0:12.2,y0:26.3,x1:28.1,y1:35.8},{x0:6.9,y0:36.4,x1:34.7,y1:47.2},{x0:4.7,y0:47.4,x1:35.0,y1:58.4},{x0:4.5,y0:59.0,x1:35.5,y1:70.5},{x0:36.5,y0:59.0,x1:50.0,y1:72.0},{x0:50.0,y0:61.5,x1:67.0,y1:77.0},{x0:67.0,y0:65.0,x1:82.0,y1:73.0},{x0:30.0,y0:28.0,x1:44.0,y1:44.0},{x0:44.0,y0:36.0,x1:57.0,y1:50.0},{x0:62.0,y0:43.0,x1:88.0,y1:60.0},{x0:87.5,y0:26.5,x1:99.5,y1:83.0}],
 stripes:[{x0:36.0,y0:57.0,x1:66.0,y1:84.0},{x0:62.0,y0:43.0,x1:88.0,y1:83.0},{x0:3.5,y0:58.0,x1:36.0,y1:84.0},{x0:30.0,y0:28.0,x1:44.0,y1:44.0},{x0:44.0,y0:36.0,x1:57.0,y1:50.0},{x0:6.9,y0:36.4,x1:34.7,y1:58.4}],
 diamonds:[{x0:6.4,y0:64.1,x1:9.0,y1:68.1},{x0:13.6,y0:63.2,x1:16.2,y1:67.2},{x0:22.2,y0:62.2,x1:25.0,y1:66.4},{x0:31.5,y0:60.6,x1:34.5,y1:65.2},{x0:37.5,y0:61.1,x1:39.7,y1:64.7},{x0:40.7,y0:61.7,x1:42.9,y1:65.3},{x0:45.7,y0:62.4,x1:47.9,y1:66.0},{x0:48.2,y0:62.8,x1:50.2,y1:66.2},{x0:50.4,y0:63.1,x1:52.4,y1:66.5},{x0:53.3,y0:64.4,x1:55.3,y1:67.6},{x0:57.6,y0:65.4,x1:59.6,y1:68.6},{x0:60.7,y0:66.5,x1:62.7,y1:69.7},{x0:63.5,y0:67.1,x1:65.5,y1:70.3},{x0:62.7,y0:48.9,x1:65.1,y1:52.3},{x0:66.8,y0:48.2,x1:69.2,y1:51.6},{x0:71.0,y0:47.3,x1:73.4,y1:50.7},{x0:75.8,y0:46.5,x1:78.2,y1:49.9},{x0:80.6,y0:45.4,x1:83.0,y1:48.8},{x0:68.6,y0:58.1,x1:70.4,y1:60.7},{x0:74.0,y0:57.4,x1:75.8,y1:60.0},{x0:79.8,y0:56.6,x1:81.6,y1:59.2},{x0:67.5,y0:67.6,x1:70.3,y1:71.6},{x0:73.1,y0:67.2,x1:75.9,y1:71.2},{x0:76.1,y0:67.3,x1:78.5,y1:70.9},{x0:79.1,y0:66.7,x1:81.9,y1:70.7},{x0:84.3,y0:66.3,x1:86.7,y1:69.9},{x0:86.1,y0:66.5,x1:88.1,y1:69.7}]};
var LM02={id:"LM-02",kind:"Embroidery",wide:true,title:"Stitched in Wool",object:"A scene from the Bayeux Tapestry",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"The Bayeux Tapestry (battle scenes)",date:"made in the 1070s C.E.",location:"Bayeux Tapestry Museum, Bayeux, France",artist:"Artists unknown",
 headline:"Look closely at how it is made",
 alt:"A section of an embroidered band showing a battle, photographed in warm light. On the left, mounted soldiers in dotted mail shirts ride red, brown and dark horses past fallen figures. On the right, a row of soldiers on foot stand behind a line of tall kite-shaped shields. Narrow strips above and below the scene hold small animals, diagonal stripes and fallen soldiers, and a few Latin letters are stitched at the upper left.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Bayeux-Hastings-Band.jpg",
 imageNote:"The whole embroidery is about 70 m (230 ft) long but only 50 cm (20 in) tall \u2014 longer than two basketball courts.",
 detail:{image:"public/images/artworks/Bayeux-Scene55-Eustace.jpg",alt:"A close view of embroidered cloth. A rider in a pointed helmet and a shirt of ring-patterned mail stretches one arm out to point. He sits on a deep blue horse, with a second, tan horse beside it. Latin letters are stitched into the empty space around them, and a banner with a cross flies near the top. The threads are blue, rust-red and tan on pale linen.",caption:"Detail: up close, the colors are filled with rows of tiny stitches, and each shape is edged with a darker thread",credit:{word:"Detail photo (scene 55)",url:"https://commons.wikimedia.org/wiki/File:Bayeux_Tapestry_scene55_Eustach.jpg",author:"Myrabella",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"}},
 size:"",
 intro:"In 1066, William of Normandy invaded England and defeated the last Anglo-Saxon king at the Battle of Hastings. About ten years later, Odo of Bayeux — William’s half-brother and bishop — commissioned this seventy-meter embroidered band to tell the story. Although it celebrates a Norman victory, scholars believe English hands stitched it in Canterbury. It is called a tapestry, but it is not one — the scenes are sewn onto finished cloth, not woven into it.",
 context:[{term:"Embroidery",pron:"",def:"A picture or pattern sewn onto finished cloth with needle and colored thread. Unlike a tapestry, the image is added after the cloth is already made."},{term:"Narrative",pron:"",def:"A story told in pictures as well as words. The Bayeux embroidery runs its narrative along a single long band."},{term:"Patron",pron:"",def:"The person or group who pays for a work of art and shapes what it shows. Here the patron was Bishop Odo of Bayeux, William the Conqueror’s half-brother."}],
 clues:[{id:"outlines",label:"Outlined shapes",def:"Shapes edged in dark thread and filled in with flat color"},{id:"borders",label:"Border bands",def:"Narrow strips above and below the main scene, filled with small animals and patterns"},{id:"rings",label:"Ring pattern",def:"Armor drawn as rows of small repeating ovals"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Every figure is outlined and filled with flat color, and strips of animals frame the story above and below. What does this way of making a picture do well when the story runs along a band about 70 meters long?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Outlined shapes, border bands and a ring pattern are features a detective can carry to the next case.",
 sourceNums:[83,151],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Bayeux_Tapestry_4.jpg",author:"Gabriel Seah",license:"Public domain",licenseUrl:""}};
LM02.zones={
 outlines:[{x0:0,y0:26.6,x1:32.2,y1:75.5},{x0:22.5,y0:40.4,x1:50.8,y1:77.7},{x0:71.3,y0:33,x1:87.9,y1:62.8},{x0:90.8,y0:26.6,x1:97.7,y1:64.9},{x0:60.5,y0:26.6,x1:74.2,y1:60.6}],
 borders:[{x0:0,y0:4.3,x1:100,y1:19.1},{x0:0,y0:83,x1:100,y1:97.9}],
 rings:[{x0:85.9,y0:54.3,x1:96.7,y1:71.3},{x0:12.7,y0:28.7,x1:19.5,y1:47.9},{x0:7.8,y0:71.3,x1:19.5,y1:80.9},{x0:38.1,y0:71.3,x1:54.7,y1:84},{x0:34.2,y0:35.1,x1:39.1,y1:71.3},{x0:55.7,y0:50,x1:63.5,y1:75.5},{x0:63.5,y0:52.1,x1:68.4,y1:71.3},{x0:70.3,y0:58.5,x1:81.1,y1:79.8}]};
var LM03={id:"LM-03",kind:"Mosaic",wide:true,title:"Gold All Around",object:"Christ Pantocrator at Monreale",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Christ Pantocrator (apse mosaic)",date:"late 12th century C.E.",location:"Monreale Cathedral, near Palermo, Sicily, Italy",artist:"Artists unknown",
 headline:"Look closely at the gold",
 alt:"A huge figure of Christ fills a curved wall, seen from the chest up and facing the viewer. He has long brown hair and a beard, and a gold disk with a cross inside it frames his head. His right hand is raised. He wears a blue cloak over a robe of gold and red lines. The whole background is gleaming gold, with Greek letters on either side of his head and a richly patterned border around the curve.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Monreale-Pantocrator.jpg",
 imageNote:"The mosaic is more than 20 meters (65 feet) across. It fills the curved half-dome of the apse above the main altar.",
 detail:{image:"public/images/artworks/Monreale-Pantocrator-Face.jpg",alt:"A close view of the face. Long, calm eyes look straight out. The cheeks, nose and brow are drawn with curving lines of light and dark color, and the hair and beard are made of wavy bands. Behind the head, the gold disk shows tiny speckled tiles and a cross with a jeweled pattern.",caption:"Detail: up close, the face and hair are drawn with curving lines made of tiny tiles",credit:{word:"Detail photo (face)",url:"https://commons.wikimedia.org/wiki/File:Christ_Pantocrator_-_Cathedral_of_Monreale_-_Italy_2015_(2).JPG",author:"Jos\u00e9 Luiz Bernardes Ribeiro",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"Around 1174, William II \u2014 king of Sicily \u2014 began a new cathedral at Monreale, overlooking Palermo. He brought Byzantine craftsmen from Constantinople to cover its walls with gold mosaics. This figure of Christ as ruler of all fills the half-dome above the altar, more than 20 meters across. Norman kings had ruled Sicily for less than a century, and William\u2019s cathedral deliberately mixed three worlds: Western Christian stonework, Byzantine mosaic, and Islamic arabesque carving.",
 context:[{term:"Pantocrator",pron:"pan-TOK-ruh-tor",def:"An image of Christ as judge and savior, facing the viewer directly and holding a Gospel book."},{term:"Mosaic",pron:"",def:"A picture or pattern made of thousands of small pieces of colored stone or glass set into plaster."},{term:"Byzantine",pron:"",def:"Of or relating to the Eastern Roman Empire, whose capital was Constantinople. Byzantine art is known for gold backgrounds, formal poses and holy subjects such as Christ and the saints."}],
 clues:[{id:"gold",label:"Gold background",def:"A flat field of shining gold behind the figure, with no sky or landscape"},{id:"folds",label:"Folds drawn as lines",def:"Cloth shown as bands of straight, parallel lines instead of soft shadows"},{id:"nimbus",label:"Nimbus with a cross",def:"A disk behind the head with a cross set inside it"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The makers could have shown a sky, a landscape or a room behind Christ. Why might they have chosen a wall of gold instead?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A gold background, folds drawn as lines and a nimbus with a cross are features a detective can carry to the next case.",
 sourceNums:[84,85,86,152],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Christ_Pantocrator_-_Cathedral_of_Monreale_-_Italy_2015.JPG",author:"Jos\u00e9 Luiz Bernardes Ribeiro",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
LM03.zones={
 gold:[{x0:30,y0:22,x1:50,y1:50},{x0:79,y0:20,x1:88,y1:48},{x0:33,y0:50,x1:46,y1:58}],
 folds:[{x0:29,y0:60,x1:68,y1:90},{x0:68,y0:50,x1:90,y1:93},{x0:30,y0:64,x1:45,y1:77}],
 nimbus:[{cx:62.9,cy:35.5,rx:15,ry:20.5}]};
var LM04={id:"LM-04",kind:"Architecture",wide:true,title:"Towers of Arches",object:"Durham Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Durham Cathedral",date:"begun 1093 C.E., with later additions",location:"Durham, England",artist:"Builders unknown",
 headline:"Look closely at the towers",
 alt:"A large stone cathedral seen from far away, rising above green trees under a cloudy sky. Two matching square towers stand at the right, each ringed with rows of small arches and topped with pointed corner pinnacles. A tall pointed window sits between them. A taller, plainer square tower rises from the middle of the long roof. At the left end, two slim stone spires point up into the sky.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Durham-Exterior.jpg",
 imageNote:"Seen from the side, with the two west towers at the right. The cathedral stands on a peninsula at a bend in the River Wear and has been a UNESCO World Heritage Site since 1986.",
 detail:{image:"public/images/artworks/Durham-Vault.jpg",alt:"Looking straight up at the ceiling. Ribs of stone cross each other in an X shape between round arches, dividing the ceiling into sections.",caption:"Detail: looking up, ribs of stone cross in an X shape between round arches",credit:{word:"Detail photo (ceiling)",url:"https://commons.wikimedia.org/wiki/File:Durham_Cathedral%27s_Ceiling_-_geograph.org.uk_-_6973053.jpg",author:"Andy Beecroft",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/"}},
 size:"",
 intro:"In 1093, Bishop William of Saint-Calais began a new cathedral at Durham, England, to house the shrine of Saint Cuthbert. Norman builders raised it in the Romanesque style, with thick walls and round arches. Inside, they roofed the great hall with ribbed stone vaults that use pointed arches, among the first in a Norman building. It was an early step toward the Gothic style.",
 context:[{term:"Arcade",pron:"",def:"A row of arches carried on columns or piers, often running along the front or side of a building."},{term:"Rib vault",pron:"",def:"A stone ceiling held up by arched ribs that cross one another and carry the weight down to the columns."},{term:"Pinnacle",pron:"",def:"A small pointed tower or spike set on top of a wall, tower or buttress."}],
 clues:[{id:"arcades",label:"Rows of round arches",def:"Round-topped openings set side by side in a row, called an arcade"},{id:"towers",label:"Tall square towers",def:"Towers with four flat sides and flat tops, rising above the roof"},{id:"points",label:"Pointed shapes",def:"Spires, pinnacles and a tall window that rise to a sharp point at the top"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Round arches and pointed shapes appear on the same building. What might that tell you about how it was built?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rows of round arches, tall square towers and pointed shapes are features a detective can carry to the next case.",
 sourceNums:[87,88,89,153],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Durham_MMB_02_Cathedral.jpg",author:"mattbuck",license:"CC BY-SA 2.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.0/"}};
LM04.zones={
 arcades:[{x0:58.5,y0:41.5,x1:74.3,y1:53},{x0:45,y0:53,x1:58,y1:57.5},{x0:45,y0:60.5,x1:58,y1:68.5},{x0:33,y0:49,x1:39,y1:55}],
 towers:[{x0:39.8,y0:21.8,x1:50.3,y1:53.4},{x0:58.3,y0:32.6,x1:74.5,y1:71.5}],
 points:[{x0:18.7,y0:41.3,x1:25.4,y1:53},{x0:32.8,y0:42,x1:39,y1:49},{x0:58.3,y0:32.4,x1:74.5,y1:37.5},{x0:66.9,y0:55,x1:70.2,y1:65}]};
var LM05={id:"LM-05",kind:"Relief sculpture",wide:true,title:"Framed in Stone",object:"Annunciation relief at Conques",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Annunciation relief",date:"early 12th century C.E.",location:"Abbey Church of Sainte-Foy, Conques, France",artist:"Artist unknown",
 headline:"Look closely at the wall",
 alt:"Part of an old stone wall inside a church, seen up close. Two tall arched windows stand at the left and right, each framed by rings of wedge-shaped stones. Between and above them, a carved block holds two small standing figures under little arches. Thin red lines run along the joints between the wall stones.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Conques-Interior.jpg",
 imageNote:"Part of the church\u2019s inner wall, with the relief set between two windows. The carved panel is about 2 meters (7 feet) tall.",
 detail:{image:"public/images/artworks/Conques-Detail.jpg",alt:"A close view of the carved block. Two figures stand side by side, each under a small round arch with a flat disk behind the head. On the left, a winged figure leans forward and points, holding a scroll with letters. On the right, a woman in a long robe raises one hand. Slim columns with leafy tops separate and frame them. Above them, the stone is carved as a wall with notched battlements and rows of small blocks.",caption:"Detail: the angel Gabriel, with his scroll, at the left and Mary, with one hand raised, at the right",credit:{word:"Detail photo (relief)",url:"https://commons.wikimedia.org/wiki/File:Conques_-_Abbatiale_Sainte-Foy_-_131.jpg",author:"Antoine Garnier",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"Between about 1105 and 1115, an unnamed sculptor carved this Annunciation \u2014 the angel Gabriel telling Mary she will bear Christ \u2014 for the abbey church of Sainte-Foy at Conques, in southern France. Pilgrims traveled long distances to honor the relics of Saint Faith, a young martyr. Instead of standing stiff and square, these stone figures lean, turn and gesture like real people.",
 context:[{term:"Voussoir",pron:"voo-SWAR",def:"One of the wedge-shaped stones that fit together to form an arch."},{term:"Annunciation",pron:"",def:"The Bible scene in which the angel Gabriel tells Mary she will bear the Son of God."},{term:"Relief",pron:"",def:"Carving that rises from a flat background instead of standing free."}],
 clues:[{id:"arches",label:"Rings of arch stones",def:"Wedge-shaped stones laid side by side to form curved rings above the windows"},{id:"frame",label:"Figures framed by columns",def:"Two people carved in one block, standing between slim columns under small arches"},{id:"pose",label:"Bodies that lean and turn",def:"Figures that bend forward, shift their weight and raise a hand, instead of standing stiff and square"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Gabriel leans toward Mary, and Mary raises a hand. How does their way of standing help tell the story, compared with figures who stand stiff and square?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Rings of arch stones, figures framed by columns and bodies that lean and turn are features a detective can carry to the next case.",
 sourceNums:[90,91],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Conques_-_Abbatiale_Sainte-Foy_10.jpg",author:"Christophe.Finot",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/"}};
LM05.zones={
 arches:[{x0:0,y0:24,x1:41,y1:61},{x0:70,y0:23,x1:100,y1:62}],
 frame:[{x0:44.5,y0:27,x1:67.5,y1:50},{x0:44.5,y0:50,x1:67.5,y1:81.5}],
 pose:[{x0:46,y0:38,x1:55.5,y1:80},{x0:57,y0:38,x1:65.5,y1:80}]};
var LM06={id:"LM-06",kind:"Wall painting",title:"Drawn in Bold Lines",object:"Christ in Majesty from Sant Climent de Taüll",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Christ in Majesty (apse painting)",date:"c. 1123 C.E.",location:"Sant Climent de Taüll, Catalonia, Spain (now in Barcelona)",artist:"Master of Taüll (real name unknown)",
 headline:"Look closely at the painting",
 alt:"A tall view into a curved wall painted in bright colors, seen in a museum. At the center, Christ sits facing us inside a large blue oval ringed with bands of red and white. He raises one hand and holds an open book. Winged figures and animals fill yellow and blue spaces on either side. Above the oval, a hand points out of a round frame, and a white lamb stands in another round frame higher up. Below, a row of standing figures with disks behind their heads stand under little arches. Every figure is outlined in thick dark lines.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Tahull-Apse.jpg",
 imageNote:"Seen as displayed in a museum in Barcelona. The original wall painting came from a village church in the Pyrenees.",
 detail:{image:"public/images/artworks/Tahull-Christ-Detail.jpg",alt:"A closer view of the painting's center. Christ sits inside a tall blue oval, facing front. He has long dark hair, a beard and a disk with a cross behind his head. His right hand is raised, and his left hand holds an open book with Latin letters. His robe shows rows of small red dots and bands of gray and blue. Winged figures fill the yellow and green spaces beside him.",caption:"Detail: Christ seated inside the blue oval, one hand raised and the other holding an open book",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Meister_aus_Tahull_001.jpg",author:"The Yorck Project (2002), 10.000 Meisterwerke der Malerei",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"In 1123, Bishop Ramon of Roda consecrated the village church of Sant Climent de Ta\u00fcll, in the Catalan Pyrenees. The curved space at the end of the church had been painted by an artist now called the Master of Ta\u00fcll, whose real name is lost. He built this Christ in Majesty from flat, bright color and bold dark outlines. The painting was later bought for a Barcelona museum, where it now hangs.",
 context:[{term:"Apse",pron:"",def:"A rounded recess at the end of a church, often covered by a half-dome and decorated with important images."},{term:"Christ in Majesty",pron:"",def:"A picture of Christ seated and facing the viewer as ruler of heaven, often inside an oval frame."},{term:"Mandorla",pron:"man-DOR-luh",def:"An oval frame of light around a holy figure; the word means \u201calmond\u201d in Italian."}],
 clues:[{id:"outlines",label:"Thick dark outlines",def:"Heavy dark lines that trace the edges of faces, hands and robes"},{id:"rings",label:"Frames made of colored rings",def:"Oval and round frames built from bands of color, each holding a figure inside"},{id:"dots",label:"Dots and patterned bands",def:"Rows of small dots on robes and strips filled with repeating shapes"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Christ is drawn much larger than the figures around him and sits alone inside the biggest oval. Why might the painter have shown the figures at such different sizes?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Thick dark outlines, frames made of colored rings and dots and patterned bands are features a detective can carry to the next case.",
 sourceNums:[92,93],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:(Barcelona)_Frescos_of_Sant_Climent_de_Ta%C3%BCll.jpg",author:"Didier Descouens",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
LM06.zones={
 outlines:[{x0:55,y0:70,x1:82,y1:88},{x0:34,y0:40,x1:63,y1:67},{x0:17,y0:70,x1:42,y1:82}],
 rings:[{x0:42,y0:25.5,x1:58.5,y1:35.5},{x0:31,y0:40,x1:66,y1:68},{x0:44.5,y0:5.5,x1:61.5,y1:19}],
 dots:[{x0:35,y0:47,x1:62,y1:64},{x0:17,y0:64,x1:84,y1:70},{x0:32,y0:57,x1:41,y1:61},{x0:56.5,y0:57,x1:66,y1:61.5}]};
var LM07={id:"LM-07",kind:"Manuscript painting",wide:true,title:"Outside the Frame",object:"A feast in the Luttrell Psalter",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Luttrell Psalter (feasting scene)",date:"c. 1325–1340 C.E.",location:"England (Lincolnshire); now in the British Library, London",artist:"Artists unknown",
 headline:"Look closely at the page",
 alt:"A feast painted on parchment. Seven people sit behind a long white table inside a dark blue panel dotted with white and closed in by an orange border. Two wear black hoods, two women wear veils, and one man in a hat with two points lifts a cup. Dishes, bowls, loaves and spoons are laid across the table. Outside the panel, a bearded man in a yellow tunic carries two bowls toward the table, and a kneeling man in a purple robe reaches out one arm. At the far left, a blue vine with orange and green leaves curls down the margin.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Luttrell-Dining.jpg",
 imageNote:"The servant stands outside the painted panel. The manuscript has about 300 parchment pages and is now in the British Library in London.",
 detail:{image:"public/images/artworks/Luttrell-Servant.jpg",alt:"A bearded servant in a long yellow tunic with a belt and a small pouch. He leans forward and holds out two dark bowls with both hands. He wears pointed black shoes and thin pinkish leggings. At the top right, part of a diner in a dark hood sits behind the table.",caption:"Detail: a servant in a yellow tunic carrying two bowls toward the table",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Luttrell_servant.jpg",author:"Unknown artists (Luttrell Psalter, British Library Add MS 42130)",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"Around 1325 to 1340, Sir Geoffrey Luttrell, a wealthy landowner in Lincolnshire, England, commissioned this prayer book. Its anonymous artists filled the margins with farm work, games and feasting, an unusual choice for a book of prayers. Here, a feast is served at a table, probably in Sir Geoffrey\u2019s own household, and a servant carries food from outside the painted frame.",
 context:[{term:"Psalter",pron:"SAWL-ter",def:"A handwritten book of psalms, the songs and prayers of the Bible."},{term:"Marginalia",pron:"mar-jin-AY-lee-uh",def:"Small pictures painted in the margins of a page, around the main text or scene."},{term:"Illumination",pron:"",def:"The decoration of a handwritten page with painted scenes, patterned borders and often gold leaf."}],
 clues:[{id:"panel",label:"Diapered panel",def:"A rectangle of dark blue dotted with white, closed in by an orange border"},{id:"work",label:"Figures in the margin",def:"Servants doing ordinary jobs, such as carrying bowls and serving a meal, while they stand outside the panel"},{id:"vine",label:"Vine border",def:"A blue stem that loops and curls, with orange and green leaves, running down the side of the page"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"The diners sit behind the table, but the dishes look as if they are seen from above. Why might the artist have drawn the table top this way?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A dark panel with a border, people at everyday work and a curling vine with leaves are features a detective can carry to the next case.",
 sourceNums:[94,95],
 credit:{word:"Image",url:"https://commons.wikimedia.org/wiki/File:Dining_room_scene_from_the_Luttrell_Psalter_(detail).jpg",author:"Unknown artists (Luttrell Psalter, British Library Add MS 42130); cropped by Chiswick Chap",license:"Public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
LM07.zones={
 panel:[{x0:27,y0:0,x1:98.5,y1:42}],
 work:[{x0:14,y0:19,x1:30,y1:97},{x0:39.5,y0:48,x1:58,y1:99}],
 vine:[{x0:0,y0:0,x1:13.5,y1:90}]};
var LM08={id:"LM-08",kind:"Architecture",title:"Points, Circles and Rows",object:"Notre-Dame de Paris, west front",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Notre-Dame de Paris (west front)",date:"begun 1163 C.E.",location:"Paris, France",artist:"Maurice de Sully (bishop) and later builders",
 headline:"Look closely at the front",
 alt:"The front of a huge stone cathedral seen straight on under a gray sky. Two tall square towers rise on either side, each with two tall narrow openings. Below them, a middle level holds a large round window with stone spokes, flanked by pairs of arched windows. A long row of small stone statues runs across the whole front. At ground level, three tall doorways end in points and are ringed with carved figures, with a crowd of people standing below.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/NotreDame-West.jpg",
 imageNote:"Seen straight on from the square. The row of statues is the Gallery of Kings, rebuilt in the 1800s after the French Revolution destroyed the originals.",
 detail:{image:"public/images/artworks/NotreDame-Tympanum.jpg",alt:"A close view of one tall doorway of the cathedral, ending in a point. Rings of small carved figures follow the curve of the pointed arch, one ring inside the next. Inside the rings, a flat triangle of stone shows a seated crowned woman holding a child, with angels and other figures beside her, above two rows of smaller scenes. Tall carved figures stand on either side of the dark double doorway.",caption:"Detail: one of the three doorways, with rings of carved figures around its pointed arch",credit:{word:"Detail photo (doorway)",url:"https://commons.wikimedia.org/wiki/File:Paris,_Notre_Dame_--_2014_--_1482.jpg",author:"Dietmar Rabich",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"In 1163, Bishop Maurice de Sully began a great new cathedral for Paris. Its west front, the face the public sees first, was begun around 1200, and both towers were finished by about 1250. Builders divided the front into clear levels: three pointed doorways, a long row of statues, a huge round window and two towers rising about 69 meters (226 feet).",
 context:[{term:"Facade",pron:"",def:"The front of a building, the side people see first."},{term:"Rose window",pron:"",def:"A large round window filled with stone bars that spread out from the center like the petals of a flower."},{term:"Portal",pron:"",def:"A large, grand doorway, often framed by carved figures."}],
 clues:[{id:"pointed",label:"Pointed arches",def:"Arches that rise to a point at the top instead of curving in a half circle"},{id:"rose",label:"Rose window",def:"A huge round window filled with stone bars that spread out like the petals of a flower"},{id:"statues",label:"A row of statues",def:"A long band of stone figures standing side by side across the front"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the round arches at Durham. Look at the doorways, the windows and the openings in the towers here: how many times can you find a pointed top, and why might the builders have repeated it?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Pointed arches, a rose window and a row of statues are features a detective can carry to the next case.",
 sourceNums:[96,154],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Cath%C3%A9drale_Notre-Dame_de_Paris_-_12.jpg",author:"Carlos Delgado",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
LM08.zones={
 pointed:[{x0:19,y0:20,x1:33,y1:38.5},{x0:66,y0:21,x1:79,y1:38},{x0:15.5,y0:77,x1:35,y1:93.5},{x0:38.5,y0:77,x1:61,y1:93.5},{x0:64.5,y0:77,x1:82,y1:93.5}],
 rose:[{x0:41,y0:55,x1:58.5,y1:69},{x0:22,y0:55,x1:30,y1:61},{x0:70,y0:55,x1:78,y1:61}],
 statues:[{x0:11,y0:71,x1:88,y1:76.5}]};
var LM09={id:"LM-09",kind:"Architecture and stained glass",wide:true,title:"Walls of Colored Glass",object:"Sainte-Chapelle, upper chapel",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Sainte-Chapelle (upper chapel)",date:"consecrated 1248 C.E.",location:"Paris, France",artist:"Built for King Louis IX of France",
 headline:"Look closely at the chapel",
 alt:"The inside of a tall chapel, seen from a corner. Very tall windows fill the walls, made of small pieces of glass in red, blue and purple that form many tiny pictures. Thin, gold-edged columns rise between the windows and spread into ribs across a dark blue ceiling dotted with small stars. Candle holders hang near the lower edge of the windows.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/SC-Interior.jpg",
 imageNote:"Seen from a corner of the upper chapel. About two-thirds of the stained glass is original; the rest has been reconstructed.",
 detail:{image:"public/images/artworks/SC-Ceiling.jpg",alt:"Looking straight up inside the chapel. Tall windows of red, blue and purple glass curve around the room on every side. Thin ribs of stone rise from the columns and meet in the dark, star-dotted ceiling. A carved and gilded canopy with angels stands at the bottom of the picture.",caption:"Detail: looking up, thin ribs of stone rise from the columns and spread across the star-dotted ceiling",credit:{"word": "Detail photo (ceiling)", "url": "https://commons.wikimedia.org/wiki/File:Santa_Capilla,_Par%C3%ADs,_Francia,_2022-11-01,_DD_62-64_HDR.jpg", "author": "Diego Delso", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"King Louis IX of France built the Sainte-Chapelle in Paris, completed in 1248, to house the Crown of Thorns and other relics of Christ\u2019s suffering. In the upper chapel, slender stone columns carry the roof, so the walls could become almost entirely colored glass. Fifteen windows, each about 15 meters (50 feet) tall, hold 1,113 scenes from the Old and New Testaments.",
 context:[{term:"Stained glass",pron:"",def:"Pieces of colored glass held together with strips of lead to form a picture or pattern."},{term:"Lancet",pron:"",def:"A tall, narrow window with a pointed top, common in Gothic buildings."},{term:"Rib",pron:"",def:"A thin, curved band of stone that crosses a ceiling and helps carry its weight."}],
 clues:[{id:"windows",label:"Stained-glass walls",def:"Very tall windows that stretch up the room so that glass, not solid stone, forms most of the wall"},{id:"pieces",label:"Lead patterns",def:"Many small pieces of colored glass, joined by dark lines into diamonds, circles and ovals"},{id:"columns",label:"Columns and ribs",def:"Thin shafts of stone that stretch upward between the windows and spread into ribs on the ceiling"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the thick stone walls of Durham Cathedral. What has taken the place of the wall in this room, and how does that change the height and the light?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Tall windows, red and blue glass and slender columns are features a detective can carry to the next case.",
 sourceNums:[98,99,155],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:2017-07-29_France,_Paris_DSC_2711_DxO_2.jpg", "author": "Laurens R. Krol", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"}};
LM09.zones={
 windows:[{x0:28,y0:3,x1:42.5,y1:81},{x0:56,y0:36,x1:73.5,y1:88},{x0:0.5,y0:0,x1:26,y1:73}],
 pieces:[{x0:3,y0:8,x1:25,y1:48},{x0:57,y0:45,x1:72,y1:80},{x0:75,y0:30,x1:90,y1:80}],
 columns:[{x0:43,y0:34,x1:47,y1:88},{x0:27,y0:2,x1:30.5,y1:78},{x0:52.5,y0:42,x1:55.5,y1:90}]};
var LM10={id:"LM-10",kind:"Sculpture",wide:true,title:"Cloth, Curls and Turns",object:"Standing statues, Reims Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Standing statues (west front)",date:"13th century C.E.",location:"Reims Cathedral, Reims, France",artist:"Unknown sculptors",
 headline:"Look closely at the figures",
 alt:"A row of stone statues standing side by side beside a doorway, each on its own small carved base under a leafy capital. The figures wear long robes and cloaks that fall in deep folds, and most hold a book. Their heads tilt a little and their hair is carved in curls. At the right, one figure wears a pointed bishop's hat and holds a staff.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Reims-Statues.jpg",
 imageNote:"Statues beside one doorway of the cathedral. Each stands on its own small carved base under a leafy capital.",
 detail:{image:"public/images/artworks/Reims-Detail.jpg",alt:"A close view of one young stone figure with curly hair. The head tilts slightly. One hand rests on the chest and the other holds a small book at the waist. A long cloak falls in deep folds down the body.",caption:"Detail: a young figure with curly hair, head tilted, one hand at the chest and a small book at the waist"},
 size:"",
 intro:"In 1211, Archbishop Aubry de Humbert laid the first stone of a new cathedral at Reims, where French kings were crowned. In the decades that followed, unnamed sculptors filled its doorways with life-size saints. These figures stand on their own bases, tilt their heads, shift their weight and wear robes carved in deep folds, a more lifelike look than earlier doorway statues.",
 context:[{term:"Drapery",pron:"",def:"The cloth of a figure\u2019s robes and cloak, as shown in art."},{term:"Jamb figure",pron:"JAM FIG-yer",def:"A tall statue carved beside the main door of a Gothic church, standing on its own small base."},{term:"Contrapposto",pron:"kon-truh-POS-toh",def:"A natural standing pose in which a figure\u2019s weight rests on one leg, so the hips and shoulders tilt in opposite directions."}],
 clues:[{id:"folds",label:"Hanging folds of cloth",def:"Long robes and cloaks carved with deep folds that fall in lines and curves"},{id:"stance",label:"Bodies that shift and turn",def:"Figures who tilt the head, shift their weight or bend an arm instead of standing straight and stiff"},{id:"faces",label:"Faces with curling hair",def:"Calm, gentle faces framed by carved curls of hair"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the carved figures at Conques. What do these figures do with their bodies and their cloth that is different?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Hanging folds, shifting bodies and gentle faces are features a detective can carry to the next case.",
 sourceNums:[100,156],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:2016_statues_nde_la_fa%C3%A7ade_de_la_cath%C3%A9drales_de_Reims,_soleil_couchant.jpg", "author": "Philippe Alès", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM10.zones={
 folds:[{x0:44,y0:45,x1:53.4,y1:69},{x0:30,y0:38,x1:40,y1:69},{x0:59.4,y0:44,x1:69.4,y1:65}],
 stance:[{x0:59.4,y0:17,x1:68.8,y1:43},{x0:43.7,y0:22,x1:53.4,y1:44},{x0:30.6,y0:24,x1:40,y1:44}],
 faces:[{x0:22.8,y0:25,x1:26.6,y1:31.5},{x0:33,y0:24,x1:36.9,y1:32},{x0:46,y0:22,x1:50,y1:31},{x0:60.6,y0:16.5,x1:64.7,y1:24.5}]};
var LM11={id:"LM-11",kind:"Sculpture",wide:true,title:"Crowds in Marble",object:"Pulpit of the Pisa Baptistery",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. – 1400 C.E.",
 work:"Pulpit of the Baptistery",date:"1260 C.E.",location:"Baptistery, Pisa, Italy",artist:"Nicola Pisano",
 headline:"Look closely at the pulpit",
 alt:"A carved marble pulpit standing on columns inside a round stone building with bands of light and dark stone. Two large flat panels crowded with small figures wrap around the top, and a stone eagle spreads its wings above. Under the panels, arches made of three curves rest on columns with leafy tops, and small carved figures fill the spaces between the arches. A wooden staircase leads up at the right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Pisano-Pulpit.jpg",
 imageNote:"Seen inside the Pisa Baptistery. The pulpit has six sides, with carved scenes from the life of Christ.",
 detail:{image:"public/images/artworks/Pisano-Detail.jpg",alt:"A close view of the corner of the pulpit. Two flat marble panels are packed with figures: a woman lying down with a baby and sheep at the left, and kneeling figures with a horse at the right. Below, a standing nearly bare figure stands at the corner between two arches made of three curves.",caption:"Detail: one corner, with the Nativity at the left, the Adoration of the Magi at the right and a nude figure below",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Pisa.Baptistery.pulpit02.jpg", "author": "JoJan", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"Nicola Pisano signed and dated this marble pulpit, a six-sided stand for preaching, in 1260 for the Baptistery of Pisa. Its program draws on a sermon by the city\u2019s archbishop, Federico Visconti. Nicola packed the panels with figures, echoing the crowded scenes on ancient Roman stone coffins, while the arches beneath keep Gothic three-lobed shapes. The pulpit was an early blend of Classical and Gothic ideas.",
 context:[{term:"Pulpit",pron:"",def:"A raised stand in a church where a speaker reads and preaches."},{term:"Trefoil arch",pron:"TREE-foyl ARCH",def:"An arch made of three curved lobes, used often in Gothic design."},{term:"Classical",pron:"",def:"Of or from ancient Greek or Roman art and culture, or imitating their forms."}],
 clues:[{id:"panels",label:"Crowded panels",def:"Flat marble panels packed with so many figures that there is almost no empty space"},{id:"arches",label:"Arches on columns",def:"Arches made of three curved lobes, resting on columns with carved leaves at the top"},{id:"faces",label:"Roman-style faces",def:"Strong, heavy faces with beards and curly hair, like late Roman and Early Medieval sculpture"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the single figures at Reims. What changes when many figures share one flat space?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Crowded panels, arches on columns and Roman-style faces are features a detective can carry to the next case.",
 sourceNums:[101,157],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Pisa_Battistero_di_San_Giovanni_Interno_Pulpito_3.jpg", "author": "Zairon", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"}};
LM11.zones={
 panels:[{x0:44,y0:21,x1:66,y1:46},{x0:22.5,y0:22,x1:40,y1:47}],
 arches:[{x0:24,y0:51,x1:38,y1:67},{x0:46,y0:51,x1:64,y1:67}],
 faces:[{x0:23,y0:30,x1:38,y1:41},{x0:51,y0:22,x1:60,y1:30},{x0:38,y0:49,x1:44,y1:58}]};
var LM12={id:"LM-12",kind:"Panel painting",title:"Gold, Rows and Patterns",object:"Santa Trinita Maest\u00e0",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Virgin and Child Enthroned, and Prophets (Santa Trinita Maest\u00e0)",date:"c. 1290\u20131300 C.E.",location:"Uffizi Gallery, Florence, Italy",artist:"Cimabue",
 headline:"Look closely at the painting",
 alt:"A very tall painted wooden panel with a pointed top, covered in gold. Mary sits in the center in a dark blue robe, holding the child Jesus. Four angels with nimbi stand stacked one above another on each side, with colorful wings behind them. Mary’s throne looks like a small building with columns, arches and patterned bands. Below it, four bearded men hold scrolls under round arches.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Cimabue-Maesta.jpg",
 imageNote:"The panel stands 385 cm (12 ft 7 in) tall, about 2\u00bd feet taller than a basketball hoop.",
 detail:{image:"public/images/artworks/Cimabue-Detail.jpg",alt:"A close view of two bearded men holding scrolls with writing, each with a nimbus, standing under a round arch between two patterned columns. The gold background behind them is covered in tiny squares and lines, and rings of dots circle their heads. The man at the right wears a red cloak and a small striped hat.",caption:"Detail: two prophets holding scrolls under a round arch",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Cimabue_Uffizi_02.JPG", "author": "Miguel Hermoso Cuesta", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"Around 1290 to 1300, the painter Cimabue made this altarpiece for the Vallombrosan monks of the Church of Santa Trinita in Florence. It shows Mary enthroned, with angels stacked at her sides and four Old Testament prophets below. Cimabue kept the gold background and formal layout of Byzantine icons, but softened the faces with gentle shading, an early step away from rigid tradition.",
 context:[{term:"Maest\u00e0",pron:"my-ess-TAH",def:"A picture of Mary and the Christ child enthroned in majesty, often surrounded by angels."},{term:"Tempera",pron:"",def:"Paint made by mixing colored powder with egg yolk, used on wood panels before oil paint."},{term:"Prophet",pron:"",def:"A person in the Bible who speaks God\u2019s message; here, four prophets hold scrolls under the throne."},{term:"Byzantine",pron:"",def:"Of or relating to the Eastern Roman Empire, whose capital was Constantinople. Byzantine art is known for gold backgrounds, formal poses and holy subjects such as Christ and the saints."}],
 clues:[{id:"gold",label:"A gold background",def:"A flat background of gold, with tiny patterns marked into the surface"},{id:"angels",label:"Angels stacked in rows",def:"Angels placed one above another on each side of the throne, with wings behind them"},{id:"throne",label:"A throne of patterned shapes",def:"A huge seat built like a small building, with columns, arches and bands of pattern"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the crowded panels of the Pisa pulpit. How does each artist fill a flat space with figures?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A gold background, figures stacked in rows and a patterned throne are features a detective can carry to the next case.",
 sourceNums:[102,103],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Cimabue_Trinita_Madonna.jpg", "author": "Cimabue (painter); reproduction image from Wikimedia Commons", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}};
LM12.zones={
 gold:[{x0:38,y0:6.5,x1:62,y1:10},{x0:39,y0:78,x1:56,y1:81},{x0:11.5,y0:80.3,x1:24.6,y1:83},{x0:76.7,y0:80,x1:91,y1:83}],
 angels:[{x0:9,y0:17,x1:36,y1:28},{x0:8,y0:30,x1:25,y1:40},{x0:6.5,y0:40,x1:21,y1:75},{x0:67,y0:17,x1:96,y1:28},{x0:77,y0:29,x1:92,y1:40},{x0:77,y0:39,x1:94,y1:74}],
 throne:[{x0:16.5,y0:47.5,x1:29.5,y1:69},{x0:71,y0:48,x1:84,y1:69},{x0:37,y0:68.5,x1:62,y1:73.5}]};
var LM13={id:"LM-13",kind:"Fresco wall painting",wide:true,title:"Leans, Slopes and Tears",object:"Lamentation, Arena Chapel",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Lamentation (The Mourning of Christ)",date:"c. 1305 C.E.",location:"Arena (Scrovegni) Chapel, Padua, Italy",artist:"Giotto di Bondone",
 headline:"Look closely at the wall painting",
 alt:"A wall painting with a deep blue sky and a bare, rocky hillside that slopes down from the upper right. At the lower left, many mourners with gold nimbi kneel, bend and stand around the body of Christ, holding his head, hands and feet. Many winged angels with nimbi twist and swoop through the sky above, and a leafless tree grows on the hilltop at the right. A green and red border frames the scene.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Giotto-Lamentation.jpg",
 imageNote:"One scene on the wall of the Arena Chapel in Padua, which stands on the site of an ancient Roman arena.",
 detail:{image:"public/images/artworks/Giotto-Angels-Detail.jpg",alt:"A close view of angels in a deep blue sky, each with a gold nimbus and golden wings. One dives headfirst with arms spread wide, and another presses both hands to its cheeks with a face twisted in tears.",caption:"Detail: angels diving through the blue sky, one with both hands pressed to its face",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Giotto_di_Bondone_-_No._36_Scenes_from_the_Life_of_Christ_-_20._Lamentation_((detail)_-_WGA09223.jpg", "author": "Giotto di Bondone (painter); reproduction image from the Web Gallery of Art", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"Enrico Scrovegni, a wealthy banker of Padua, built the Arena Chapel and hired Giotto to cover its walls with scenes from the lives of Mary and Christ. The chapel was likely consecrated in 1305. In this Lamentation, mourners kneel, crouch and reach toward the body of Christ, and angels twist through the sky in grief. Giotto gave his figures weight and feeling instead of formal calm.",
 context:[{term:"Lamentation",pron:"",def:"A Christian subject showing the mourning over the body of Christ after he was taken down from the cross."},{term:"Naturalism",pron:"",def:"A style in art that tries to show figures and objects as they would look in life, with bodies in natural poses and cloth falling in natural folds."},{term:"Modeling",pron:"",def:"The use of light and shadow to make a figure look rounded and solid, as if it has real weight."}],
 clues:[{id:"lean",label:"Mourners leaning in",def:"Figures who bend, kneel and crouch toward the center, so their bodies show their sorrow"},{id:"slope",label:"A slanting rock",def:"A bare hillside that slopes down from the upper right, pointing the eye toward the main figures"},{id:"angels",label:"Angels in the sky",def:"Winged figures that dive through the blue sky, showing grief with their faces and hands"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the angels on Cimabue\u2019s throne painting. How does each painter show feeling through bodies and poses?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Leaning bodies, a slanting rock and crying angels are features a detective can carry to the next case.",
 sourceNums:[104,158,159],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Giotto_-_Scrovegni_-_-36-_-_Lamentation_(The_Mourning_of_Christ)_adj.jpg", "author": "Giotto di Bondone (painter); reproduction image from the Web Gallery of Art", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}};
LM13.zones={
 lean:[{x0:45.5,y0:46,x1:72,y1:65},{x0:4,y0:48.5,x1:22,y1:69},{x0:16,y0:63,x1:35,y1:78},{x0:44,y0:61,x1:68,y1:76}],
 slope:[{x0:68,y0:33,x1:96,y1:48},{x0:4,y0:36,x1:46,y1:52},{x0:33,y0:58,x1:46,y1:69}],
 angels:[{x0:7,y0:4,x1:23,y1:13},{x0:25.5,y0:6,x1:41.5,y1:18},{x0:39,y0:12,x1:54.5,y1:23},{x0:51.5,y0:6,x1:64,y1:13},{x0:64,y0:12,x1:78,y1:24},{x0:53,y0:24,x1:65,y1:34}]};
var LM14={id:"LM-14",kind:"Fresco wall painting",wide:true,title:"Dances, Shops and Towers",object:"Effects of Good Government in the City",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Effects of Good Government in the City",date:"1338\u20131339 C.E.",location:"Palazzo Pubblico, Siena, Italy",artist:"Ambrogio Lorenzetti",
 headline:"Look closely at the wall painting",
 alt:"A very wide wall painting of a crowded city. In the lower left, women in long dresses dance in a ring in the street, while riders on horses move through an archway beside them. Open shops line the street at the center and right, with a donkey and people carrying goods. Above them, houses and towers in pink, gray, red and green rise in crowded rows, and workers stand on a roof at the top center. A dark blue sky fills the top edge.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Lorenzetti-City.jpg",
 imageNote:"Parts of this fresco were repainted in later centuries, and this picture is also a digitally retouched copy.",
 detail:{image:"public/images/artworks/Lorenzetti-Dancers.jpg",alt:"A close view of women in long dresses dancing in a ring in the street, holding hands, with one of them holding a small round drum. Beside them an open arched shop shows people at work, with hanging stockings overhead, and a man stands by a donkey.",caption:"Detail: close up, dancers in the street and an open shop with goods hanging inside",credit:{"word": "Detail photo (dancers)", "url": "https://commons.wikimedia.org/wiki/File:Lorenzetti,_Ambrogio._Effeti_del_buon_governo_in_citt%C3%A0.jpg", "author": "Ambrogio Lorenzetti (painter); digitally retouched reproduction image on Wikimedia Commons", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}},
 size:"",
 intro:"In 1338, Siena’s governing council — nine wealthy merchants known as the Council of Nine — hired Ambrogio Lorenzetti to decorate the walls of the room where they met. On this wall he painted Siena itself: its streets, its buildings, and its people at work and play. Most paintings of this era showed saints and Bible stories; a painting of daily city life at this scale was unusual.",
 context:[{term:"Patron",pron:"",def:"The person or group who pays for a work of art and shapes what it shows; here the patron is the Council of Nine, Siena’s merchant governing council."},{term:"Civic",pron:"",def:"Relating to a city and its citizens; a civic subject celebrates public life rather than saints or scripture."},{term:"Personification",pron:"",def:"A human figure in art that stands for an idea — such as a winged woman representing Security, Justice, or Peace."}],
 clues:[{id:"dancers",label:"Dancers in the street",def:"Women in fancy dress linked hand in hand, dancing in the open street"},{id:"shops",label:"Shops and builders at work",def:"Open shop fronts where people sell goods, and workers building on a roof"},{id:"towers",label:"Tall city buildings",def:"Crowded houses and towers in many colors, rising high above the street"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Giotto’s fresco shows one sacred moment, while this one shows many ordinary moments at once. How does the painter keep so many scenes from getting lost?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Dancing in the street, shops and builders at work, and tall city buildings are features a detective can carry to the next case.",
 sourceNums:[105,106,140],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Lorenzetti,_Ambrogio._Effeti_del_buon_governo_in_citt%C3%A0.jpg", "author": "Ambrogio Lorenzetti (painter); digitally retouched reproduction image on Wikimedia Commons", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}};
LM14.zones={
 dancers:[{x0:31.5,y0:65,x1:44,y1:96},{x0:44,y0:67,x1:55,y1:96}],
 shops:[{x0:55,y0:58,x1:64,y1:90},{x0:70.6,y0:52,x1:80,y1:77},{x0:57,y0:8.5,x1:65.5,y1:17}],
 towers:[{x0:18,y0:0,x1:26,y1:20},{x0:31,y0:11.5,x1:40,y1:40.5},{x0:67.5,y0:19,x1:74,y1:42},{x0:52.5,y0:3,x1:56,y1:25}]};
var LM15={id:"LM-15",kind:"Enamel on metal",wide:true,title:"Tiny Scenes in Blue and Gold",object:"Verdun Altar",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Verdun Altar",date:"completed 1181 C.E., rearranged 1330 C.E.",location:"Klosterneuburg Abbey, Klosterneuburg, Austria",artist:"Nicholas of Verdun",
 headline:"Look closely at the altar",
 alt:"A wide gold altar panel covered in rows of small scenes. Three rows of little arched pictures fill the center, each with a deep blue background and golden figures. Bands of Latin lettering run between the rows, and patterned borders and round gold studs frame the whole panel. A small gold shrine sits above it.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Verdun-Altar.jpg",
 imageNote:"This is the central panel of a larger altar.",
 detail:{image:"public/images/artworks/Verdun-Detail1.jpg",alt:"A close view of two small arched scenes framed in gold. At the left, a winged angel in a long robe speaks to a woman, with gold figures on a deep blue background. At the right, a man and two women gather around a baby inside a small building with a tiled roof. Gold Latin letters run around each frame.",caption:"Detail: close up, two small scenes with figures drawn in gold lines on blue, framed by Latin letters",credit:{"word": "Detail photo (left)", "url": "https://commons.wikimedia.org/wiki/File:Verdun_Altar_(Stift_Klosterneuburg)_2015-07-25-028.jpg", "author": "Hans A. Rosbach", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"Around 1181, the metalworker Nicholas of Verdun made this glowing panel for the abbey of Klosterneuburg, near Vienna. Its forty-five enamel scenes are arranged in three rows, and each New Testament scene in the middle row is deliberately flanked, above and below, by two Old Testament scenes that medieval viewers were taught to recognize as its 'previews.' Enamel is powdered glass melted onto metal, so each scene glows like a tiny stained-glass window.",
 context:[{term:"Enamel",pron:"",def:"Colored glass ground to powder and melted onto metal, where it hardens into a smooth, glassy surface."},{term:"Typology",pron:"",def:"A medieval way of reading the Bible in which Old Testament stories are treated as 'previews' of New Testament ones, and often shown together in art."},{term:"Register",pron:"",def:"A horizontal row or band in a work of art that holds a group of scenes or figures."}],
 clues:[{id:"gold",label:"Gold lines",def:"Shining gold lines that draw the figures and divide the surface into small spaces"},{id:"scenes",label:"Small framed scenes",def:"Many tiny pictures in neat rows, each set under its own little arch and framed in gold"},{id:"blue",label:"Strong blue",def:"A deep, glassy blue that fills the spaces around the figures"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the stained glass at the Sainte-Chapelle. How do thin lines of metal help each artist build a picture out of colored glass?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Gold lines, small framed scenes and a strong blue are features a detective can carry to the next case.",
 sourceNums:[107,108,141],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Verdun_Altar_(Stift_Klosterneuburg)_2015-07-25-005.jpg", "author": "Hans A. Rosbach", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}};
LM15.zones={
 gold:[{x0:7,y0:27,x1:10,y1:81},{x0:11,y0:28.7,x1:92,y1:31.2},{x0:11,y0:44.3,x1:92,y1:46.8},{x0:11,y0:59,x1:92,y1:61.2},{x0:11,y0:74.5,x1:92,y1:77}],
 scenes:[{x0:13,y0:64,x1:90,y1:74.5},{x0:13,y0:33.5,x1:90,y1:44.5},{x0:13,y0:48.5,x1:90,y1:59.5}],
 blue:[{x0:39.4,y0:35,x1:44,y1:43},{x0:56,y0:50,x1:61,y1:59},{x0:39.5,y0:66,x1:44.5,y1:74},{x0:73.5,y0:66,x1:80,y1:74}]};
var LM16={id:"LM-16",kind:"Panel painting",wide:true,title:"Blue Angels and Stamped Gold",object:"The Wilton Diptych",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"The Wilton Diptych",date:"c. 1395\u20131399 C.E.",location:"National Gallery, London, England",artist:"Artist unknown",
 headline:"Look closely at the painting",
 alt:"A hinged painting of two panels standing open in gold frames. On the left, two crowned kings and a man in a rough brown cloak holding a lamb stand against a gold background, while a young crowned king in a gold robe kneels in front of them. On the right, Mary in a deep blue cloak holds the baby Jesus, surrounded by many angels in blue robes with flower wreaths and tall white and dark wings. A flag with a red cross flies above them, and flowers cover the ground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Wilton-Diptych.jpg",
 imageNote:"The two hinged panels are shown standing open; each is about 53 cm (21 in) tall.",
 detail:{image:"public/images/artworks/Wilton-Angels.jpg",alt:"A close view of four angels in a row, each in a bright blue robe with a gold-trimmed collar and a wreath of white flowers in curly golden hair. Tall white and gray wings rise behind them. A small white stag with gold antlers, set in a dark oval badge, is pinned to the chest of each blue robe. Thin cracks run across the paint.",caption:"Detail: close up, four angels in blue with flower wreaths and a white stag badge pinned to each robe",credit:{"word": "Detail photo (angels)", "url": "https://commons.wikimedia.org/wiki/File:Anonimo_inglese_o_francese,_dittico_wilton,_1395-99_ca._06_madonna_col_bambino_e_11_angeli_4.jpg", "author": "Sailko", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"}},
 size:"",
 intro:"Around 1395, Richard II of England commissioned this small folding painting to carry with him in private prayer. When open, the left panel shows Richard himself kneeling before three saints who present him to Mary and the Christ child on the right. Around her stand eleven angels — and every single angel wears Richard’s own personal emblem, a small white hart, pinned to its chest.",
 context:[{term:"Diptych",pron:"DIP-tik",def:"A painting made of two panels joined by hinges, so it can open and close like a book."},{term:"Ultramarine",pron:"",def:"A deep blue pigment made from lapis lazuli, a rare stone imported from Afghanistan. In 1400 a pound of ultramarine cost more than a laborer earned in a year."},{term:"Emblem",pron:"",def:"A small picture or sign that stands for a particular person or family; Richard II’s own emblem was a white hart (an adult male deer), which he gave to his retainers as a mark of loyalty."}],
 clues:[{id:"gold",label:"Gold leaf stamped with patterns",def:"A background covered in gold leaf, which is gold beaten into very thin sheets, with tiny repeating patterns pressed into it"},{id:"angels",label:"Angels in blue",def:"Many angels in matching blue robes, with flower wreaths in their hair and tall wings behind them"},{id:"robes",label:"Robes with patterns and badges",def:"Rich robes woven with gold patterns, and small badges pinned to the clothes"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Cimabue\u2019s throne painting, made about a century earlier. What has stayed the same, and what has changed?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Stamped gold leaf, angels in blue and patterned robes with badges are features a detective can carry to the next case.",
 sourceNums:[109,142],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Anonimo_inglese_o_francese,_dittico_wilton,_1395-99_ca._01.jpg", "author": "Sailko", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"}};
LM16.zones={
 gold:[{x0:8,y0:9,x1:44,y1:26},{x0:56,y0:9.5,x1:92,y1:14.5}],
 angels:[{x0:72.5,y0:27,x1:92.5,y1:42},{x0:71,y0:43.6,x1:91,y1:85},{x0:55,y0:27,x1:63,y1:49},{x0:55,y0:49,x1:65,y1:76.5}],
 robes:[{x0:8,y0:36,x1:20.6,y1:78},{x0:17.5,y0:47,x1:41,y1:85},{x0:74,y0:35,x1:89.5,y1:41}]};
var LM17={id:"LM-17",kind:"Wood sculpture",wide:true,title:"Weight, Stillness and Simple Shapes",object:"Gero Cross",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Gero Cross",date:"c. 970 C.E.",location:"Cologne Cathedral, Cologne, Germany",artist:"Unknown sculptor, made for Archbishop Gero",
 headline:"Look closely at the crucifix",
 alt:"A tall, narrow gold setting inside a stone church, framed by two black columns and a pointed black roof. Rays of gold burst out around a large gold oval, and a tall gold cross stands in front of it. A small wooden figure of Christ hangs on the cross with his arms stretched out. A blue wall fills the space behind, and candles burn on each side below.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Gero-Cross.jpg",
 imageNote:"The carved figure is about 1.88 m (6 ft 2 in) tall. The gold rays and frame around it were added in the 1600s.",
 detail:{image:"public/images/artworks/Gero-Detail.jpg",alt:"A close view of the carved wooden head and chest of Christ hanging on a gold cross. The head droops forward and to one side, the eyes are closed, and the beard and long hair are carved in simple lines. The arms stretch out along the cross, and a round gold nimbus set with small colored stones sits behind the head.",caption:"Detail: Christ\u2019s head, drooping forward and to one side, with closed eyes",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Gerokreuz_detail_20050903.jpg", "author": "Elke Wetzig (Elya)", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"Between 969 and 976, Archbishop Gero of Cologne commissioned this life-size oak crucifix, which still hangs in Cologne Cathedral. At about 1.88 meters (6 ft 2 in) tall, it is among the oldest surviving large sculptures of the Crucifixion. Instead of a living, triumphant Christ, the sculptor showed him slumped and dead, with a drooping head and closed eyes, a new emphasis on his human suffering.",
 context:[{term:"Crucifix",pron:"",def:"A cross with a figure of Christ carved or painted on it."},{term:"Gold leaf",pron:"",def:"Paper-thin sheets of hammered gold, pressed onto a surface to make it shine like solid gold."},{term:"Polychrome",pron:"",def:"Painted in many colors."}],
 clues:[{id:"weight",label:"A sagging body",def:"A body that hangs heavily from the outstretched arms, with the head dropped forward"},{id:"eyes",label:"Closed eyes",def:"Shut eyelids that make the face look still and tired"},{id:"shapes",label:"Simple carved shapes",def:"Large, smooth forms in the arms, chest and cloth, carved with few small details"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the mourners in Giotto\u2019s Lamentation, made more than three centuries later. How does each artist show weight and feeling in a body?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A sagging body, closed eyes and simple carved shapes are features a detective can carry to the next case.",
 sourceNums:[110,111],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:K%C3%B6ln_-_Dom_in_-_Gerokreuz_02_ies.jpg", "author": "Frank Vincentz", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}};
LM17.zones={
 weight:[{x0:48.2,y0:43,x1:51.4,y1:48.5},{x0:48.4,y0:48.5,x1:51.7,y1:64},{x0:42.3,y0:37.5,x1:48,y1:41.5},{x0:51.4,y0:36.8,x1:57,y1:41},{x0:48.4,y0:38.5,x1:50.3,y1:43}],
 eyes:[{x0:48.6,y0:40.6,x1:50.1,y1:42.5}],
 shapes:[{x0:48.4,y0:49.5,x1:51.7,y1:55},{x0:48.6,y0:55,x1:51.4,y1:64},{x0:42.3,y0:37.5,x1:48,y1:41.5},{x0:51.4,y0:36.8,x1:57,y1:41}]};
var LM18={id:"LM-18",kind:"Stone relief",wide:true,title:"Long Bodies, an Almond Frame and Bands",object:"Last Judgment Tympanum, Autun Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Last Judgment Tympanum",date:"c. 1130\u20131146 C.E.",location:"Cathedral of Saint-Lazare, Autun, France",artist:"Artist unknown",
 headline:"Look closely at the doorway",
 alt:"A tall stone church doorway under a rounded arch, with two dark wooden doors and a single tall statue standing between them. Above the doors, a half-circle of crowded carving shows one large figure seated inside an almond-shaped frame, with smaller figures in bands on each side and a row of slim figures along the bottom. Wide arches of carved circles and leafy scrolls surround the half-circle.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Autun-Portal.jpg",
 imageNote:"The carved half-circle above the doors, seen from the front. Christ\u2019s head was cut off in 1766 and returned to its place in 1948.",
 detail:{image:"public/images/artworks/Autun-Lintel.jpg",alt:"A close view of the lower left part of the carving. A row of slim standing figures, some holding tall curved staffs, fills the bottom band, with a line of Latin letters carved above it. In the band above, bare figures stand among robed figures and an angel with large wings.",caption:"Detail: the lower left of the carving, with slim figures in a row under a line of Latin letters",credit:{"word": "Detail photo (figures)", "url": "https://commons.wikimedia.org/wiki/File:Autun,_Cath%C3%A9drale_Saint-Lazare_PM_48394.jpg", "author": "PMRMaeyaert", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"Around 1130 to 1146, sculptors at Autun Cathedral in France carved this Last Judgment above the main doorway of a church built to house the bones of Saint Lazarus. An inscription under Christ\u2019s feet reads \u201cGislebertus made this,\u201d though scholars debate who he was. Christ sits huge and alone at the center, while long, thin figures fill the rows around him.",
 context:[{term:"Tympanum",pron:"TIM-puh-num",def:"The carved half-circle of stone above a church doorway."},{term:"Mandorla",pron:"man-DOR-luh",def:"An almond-shaped frame around a holy figure, used to set that figure apart."},{term:"Last Judgment",pron:"",def:"The Christian belief, and the artwork subject, in which Christ judges every soul at the end of time."}],
 clues:[{id:"stretch",label:"Elongated figures",def:"Tall, slim bodies with long arms and legs, stretched beyond ordinary proportions"},{id:"mandorla",label:"Central mandorla",def:"One large figure seated inside an almond-shaped frame (a mandorla), which sets him apart from everyone else"},{id:"bands",label:"Stacked bands",def:"Figures arranged in horizontal rows, with one band stacked above another"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the almond frame around Christ in the Ta\u00fcll painting. How does each artist, one in paint and one in stone, show that this figure matters most?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Stretched bodies, an almond frame around the main figure and figures in bands are features a detective can carry to the next case.",
 sourceNums:[112,113,160,161],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Autun_-_Cath%C3%A9drale_Saint-Lazare_-_Portail_principal_-_01.jpg", "author": "Benjamin Smith", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM18.zones={
 stretch:[{x0:28,y0:52,x1:50,y1:57.2},{x0:50,y0:52,x1:73,y1:57.2},{x0:44,y0:29,x1:55.5,y1:51}],
 mandorla:[{x0:44,y0:29,x1:55.5,y1:51}],
 bands:[{x0:28,y0:29,x1:44,y1:52},{x0:55.5,y0:29,x1:73,y1:52},{x0:28,y0:51.8,x1:73,y1:57.2}]};
var LM19={id:"LM-19",kind:"Polychrome (painted) statue",title:"A Face, a Collar and a Crown",object:"Uta, Naumburg Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Uta (founder figure)",date:"c. 1250 C.E.",location:"Naumburg Cathedral, Naumburg, Germany",artist:"Naumburg Master (real name unknown)",
 headline:"Look closely at the statue",
 alt:"Two painted stone statues stand against a wall inside a church. At the right, a woman in a gold crown and a white head cloth wears a long cloak in red, blue-green and gray. She lifts one edge of the cloak up beside her face with one hand and holds the front of it with the other. At the left stands a man in a long robe with a red belt, holding a shield with a gold edge. A stone column rises at the far right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Uta-Naumburg.jpg",
 imageNote:"Uta stands at the right, beside her husband Ekkehard at the left. Twelve founder statues like these stand in the cathedral\u2019s west choir.",
 detail:{image:"public/images/artworks/Uta-Detail.jpg",alt:"A close view of the woman’s head and shoulders. She has a narrow face with wide eyes, and a white cloth wraps under her chin below a gold crown with small leaf-like shapes along the top. She lifts the stiff edge of her cloak up beside her cheek. Her other hand, wearing a ring, rests on the front of the cloak. Paint has worn away in patches.",caption:"Detail: Uta\u2019s face and crown, with one hand lifting the edge of her cloak",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Naumburg_2013-08-04k.jpg", "author": "Rabe!", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"Around 1245 to 1250, a sculptor known only as the Naumburg Master carved twelve life-size statues of the cathedral\u2019s founders for its west choir in Germany. This figure, Uta, was the wife of Margrave Ekkehard II and lived roughly two centuries earlier, so no one alive had seen her face. Even so, the sculptor gave her an individual face and a natural gesture.",
 context:[{term:"Founder figure",pron:"",def:"A carved statue honoring a person who gave money or land to help build a church, placed inside the building."},{term:"Polychrome",pron:"",def:"Painted in many colors; traces of the original paint survive on Uta."},{term:"Naturalism",pron:"",def:"A style in art that tries to show figures and objects as they would look in life, with bodies in natural poses and cloth falling in natural folds."}],
 clues:[{id:"face",label:"An individual face",def:"A face carved to look like one particular person, with its own eyes, mouth and expression"},{id:"hand",label:"A natural gesture",def:"A natural gesture, with one hand raising the edge of a cloak up beside the face"},{id:"crown",label:"Surviving paint",def:"A crown covered in gold paint, with small leaf-like shapes along its top edge"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the stretched figures at Autun, made more than a century earlier. How does each artist make a figure look like a particular person, or not?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. An individual face, a natural gesture and a painted crown are features a detective can carry to the next case.",
 sourceNums:[114,115,162,163],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Naumburg_2013-08-04j.jpg", "author": "Rabe!", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM19.zones={
 face:[{x0:45.5,y0:16.8,x1:56.5,y1:21.5}],
 hand:[{x0:43,y0:21,x1:53.5,y1:27.5}],
 crown:[{x0:44.5,y0:12.8,x1:57.5,y1:17.2}]};
var LM20={id:"LM-20",kind:"Fresco wall painting",wide:true,title:"Story Bands, Earth Colors and Long Figures",object:"Nave Vault Paintings, Saint-Savin",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Nave vault paintings",date:"c. 1100 C.E.",location:"Abbey Church of Saint-Savin-sur-Gartempe, France",artist:"Artist unknown",
 headline:"Look closely at the ceiling",
 alt:"A view looking up at part of a long, curved church ceiling covered in painted scenes. The scenes run in three horizontal bands, with many tall, slim figures in robes standing, walking and gesturing. The colors are reds, yellow-browns and soft greens on a pale background. A painted strip with round medallions runs down the middle, parts of the paint have flaked away, and pale arches show along the bottom edge.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/SaintSavin-Vault.jpg",
 imageNote:"The paintings cover the curved ceiling of the nave, the long main space of the church. Some of the paint has been lost.",
 detail:{image:"public/images/artworks/SaintSavin-Ark.jpg",alt:"A close view of a painted wooden ship with a carved animal-head prow, in dark red-brown with many curved planks. Three rows of arched windows rise above the hull, with faces and animals looking out. A person stands at each end of the top row. A bird flies above at the right, and a tall figure in a long robe stands at the right edge. Bands of yellow-brown and green fill the background.",caption:"Detail: Noah\u2019s ark, a ship with an animal-head prow and rows of windows",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Saint-savin_arche_noah1.jpg", "author": "B. Welleschik", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"Between about 1095 and 1115, painters whose names are lost covered the nave ceiling of the abbey church at Saint-Savin-sur-Gartempe, France, with scenes from Genesis and Exodus, including Noah, Abraham and Joseph. The vault is about 42 meters (138 feet) long, and 44 of its original 61 scenes survive. The church is a UNESCO World Heritage Site, listed in 1983.",
 context:[{term:"Vault",pron:"",def:"A ceiling built as a curved arch; here, one long rounded vault runs the length of the nave."},{term:"Register",pron:"",def:"A horizontal band holding a row of scenes or figures; several registers can be stacked one above another."},{term:"Fresco",pron:"",def:"A wall painting made by applying paint to fresh, wet plaster, so the colors dry into the surface."}],
 clues:[{id:"bands",label:"Registers",def:"Scenes painted in long horizontal bands, one band above another, so the story reads like a strip"},{id:"colors",label:"Earth colors",def:"A palette of browns, reds, yellows and muted greens, like the colors of soil and clay"},{id:"figures",label:"Long figures",def:"Tall, slim figures with long bodies, shaped mostly by dark outlines"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.","Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the single large Christ at Ta\u00fcll. How does each painter organize a wall or ceiling to guide your eye?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Bands of story, earth colors and long figures are features a detective can carry to the next case.",
 sourceNums:[116,117,164],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Saint-Savin-120-Mittelschiff-Deckenfresken-2008-gje.jpg", "author": "Gerd Eichmann", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM20.zones={
 bands:[{x0:0,y0:49,x1:100,y1:70},{x0:0,y0:72,x1:100,y1:88},{x0:0,y0:3,x1:100,y1:40}],
 colors:[{x0:0,y0:73,x1:40,y1:88},{x0:44,y0:73,x1:82,y1:88},{x0:0,y0:3,x1:100,y1:40}],
 figures:[{x0:5,y0:51,x1:13,y1:70},{x0:46,y0:51,x1:53,y1:70},{x0:71,y0:51,x1:85,y1:70}]};
var LM21={id:"LM-21",kind:"Architecture",title:"Pointed Arches, Stone Ribs and High Windows",object:"Nave of Chartres Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Nave of Notre-Dame de Chartres",date:"rebuilt c. 1194\u20131220 C.E.",location:"Chartres, France",artist:"Architect unknown",
 headline:"Look closely at the nave and its ceiling",
 alt:"A view down the long main space of a stone church toward a distant altar. Pale stone columns rise on both sides. Along the bottom of each wall stands a row of tall pointed arches. Above them runs a narrow band of small arches, and above that a row of tall stained-glass windows in deep blue and red. The ceiling is a series of curved bays crossed by thin raised bands of stone that meet at round gilded bosses. Rows of wooden chairs stand on the stone floor, and trays of lit red candles stand in the foreground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Chartres-Nave.jpg",
 imageNote:"The view looks east along the nave, the long main space of the church, toward the altar; the vaults rise about 37 m (120 ft) above the floor.",
 detail:{image:"public/images/artworks/Chartres-Vault.jpg",alt:"A close view looking straight up at the church ceiling. Thin raised bands of stone curve up from the corners and cross each other at the top of each bay. Where they meet, a round boss is carved and painted with gold petals around a dark center. The stone between the bands is laid in small blocks and lit a warm cream and pink.",caption:"Detail: the stone ribs meeting at a painted and gilded boss",credit:{"word": "Detail photo (vault)", "url": "https://commons.wikimedia.org/wiki/File:Chartres_Notre-Dame_Interior_018_2856.jpg", "author": "Ludvig14", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "changes": "Cropped."}},
 size:"",
 intro:"In 1194, a fire destroyed most of the old cathedral at Chartres, a pilgrimage town in northern France. Its builders rebuilt the main hall on a bold new structural idea. The old thick walls had held everything up. In the new design, the weight of the stone ceiling runs down thin ribs onto narrow stone piers, leaving the walls themselves free to open up into tall stained-glass windows.",
 context:[{term:"Pointed arch",pron:"",def:"An arch that rises to a point at the top instead of curving in a smooth half-circle. The pointed shape sends weight more straight down, with less push outward."},{term:"Rib vault",pron:"",def:"A stone ceiling made of curved sections joined by raised stone bands called ribs. The ribs carry the ceiling’s weight down to the piers and columns below."},{term:"Clerestory",pron:"KLEER-stor-ee",def:"The upper wall of a building, raised above a lower adjoining space and pierced with windows to let light pour down into the central space."}],
 clues:[{"id": "arches", "label": "Pointed arches", "def": "Arches that rise to a point at the top instead of curving in a smooth half-circle"}, {"id": "ribs", "label": "Stone ribs", "def": "Thin raised bands of stone that cross the ceiling and meet at its highest points"}, {"id": "windows", "label": "High windows", "def": "Tall stained-glass windows set in the top level of the wall, the clerestory"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Durham Cathedral, where the weight is carried by thick walls. Here the weight runs down the ribs and the columns. What happens to a wall once it no longer has to hold everything up?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Pointed arches, stone ribs and high windows are features a detective can carry to the next case.",
 sourceNums:[118,119,143],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Chartres_Notre-Dame_Interior_018_2856.jpg", "author": "Ludvig14", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM21.zones={
 arches:[{x0:3,y0:40,x1:24,y1:60},{x0:77,y0:39,x1:97,y1:58},{x0:29,y0:52,x1:40,y1:63}],
 ribs:[{x0:35,y0:0,x1:62,y1:10},{x0:38,y0:17,x1:60,y1:26},{x0:40,y0:28,x1:58,y1:36}],
 windows:[{x0:12,y0:6,x1:25,y1:27},{x0:74,y0:6,x1:86,y1:27},{x0:26,y0:20,x1:35,y1:36},{x0:67,y0:24,x1:74,y1:39}]};
var LM22={id:"LM-22",kind:"Architecture",title:"Stretched Arches, Thin Piers and Doubled Supports",object:"Choir of Beauvais Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Choir of the Cathedral of Saint-Pierre",date:"begun 1225 C.E.; the vault fell in 1284",location:"Beauvais, France",artist:"Architect unknown",
 headline:"Look closely at the supports and the arches",
 alt:"A view into the tall choir of a stone church. Very slender stone supports rise from the floor and run up past the top of the picture without a break. Behind them stand tall, narrow pointed arches, far taller than they are wide. Above those runs a band of small arches, and above that are rows of stained-glass windows in blue, red and white. An altar with yellow cloth stands at the center, with rows of wooden chairs in front of it.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Beauvais-Choir.jpg",
 imageNote:"The ceiling lies above the top edge of the picture; at about 47 m (155 ft), it is the tallest Gothic stone vault ever built.",
 detail:{image:"public/images/artworks/Beauvais-Piers.jpg",alt:"A close view of four slender stone supports standing in two close pairs. Between and behind them rise very tall narrow pointed arches. A band of small arches on short columns runs across the middle, and bright stained-glass windows with circular patterns glow above and below it.",caption:"Detail: slender piers standing in close pairs, added after the collapse",credit:{"word": "Detail photo (piers)", "url": "https://commons.wikimedia.org/wiki/File:Beauvais_Cath%C3%A9drale_Saint-Pierre_Innen_Chor_3.jpg", "author": "Zairon", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "changes": "Cropped."}},
 size:"",
 intro:"In 1225, the builders of Beauvais Cathedral in northern France set out to build the tallest church in the world. They pushed every Gothic idea \u2014 pointed arches, rib vaults, flying buttresses \u2014 further than any builder before them. The vault rose 47 m (155 ft), higher than any stone vault ever raised. In 1284 it collapsed. When the choir was rebuilt, new piers were set in close pairs where a single pier had stood alone.",
 context:[{term:"Choir",pron:"",def:"The eastern end of a church, around the altar, often with its own tall arches and vaulting."},{term:"Pier",pron:"",def:"An upright stone support, thicker than a column, that carries the weight of what stands above it."},{term:"Flying buttress",pron:"",def:"An arched stone prop on the outside of a church, which carries the outward push of the vault down to the ground."}],
 clues:[{"id": "doubled", "label": "Doubled supports", "def": "Piers standing in close pairs, where a single pier would usually stand alone"}, {"id": "stretched", "label": "Stretched arches", "def": "Pointed arches pulled far taller than they are wide"}, {"id": "smallarches", "label": "Band of small arches", "def": "A narrow row of small arches running across the wall, between the tall arches below and the windows above"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Chartres. Both cathedrals use the same ideas, but Beauvais pushes them further than the stone could bear. When the builders added the extra piers, what did they gain, and what did they give up?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Doubled supports, stretched arches and a band of small arches are features a detective can carry to the next case.",
 sourceNums:[120,121,144],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Beauvais_Cath%C3%A9drale_Saint-Pierre_Innen_Chor_3.jpg", "author": "Zairon", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM22.zones={
 doubled:[{x0:41,y0:32,x1:46,y1:68},{x0:27,y0:32,x1:32,y1:68},{x0:54,y0:32,x1:59,y1:68},{x0:67,y0:32,x1:72,y1:68}],
 stretched:[{x0:34,y0:25,x1:40,y1:37},{x0:47,y0:25,x1:53,y1:37},{x0:60,y0:25,x1:66,y1:37}],
 smallarches:[{x0:33,y0:41,x1:40,y1:48},{x0:46,y0:41,x1:53,y1:48},{x0:59,y0:41,x1:66,y1:48}]};
var LM23={id:"LM-23",kind:"Timber architecture",wide:true,title:"Stacked Roofs, Dragon Heads and Upright Boards",object:"Borgund Stave Church",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Borgund Stave Church",date:"c. 1180\u20131200 C.E.",location:"Borgund, L\u00e6rdal, Norway",artist:"Builders unknown",
 headline:"Look closely at the roofs and the walls",
 alt:"A dark wooden church standing in a grassy graveyard below a green mountain. Its roofs are stacked one above another, each smaller than the one below, rising to a slim tower with a spire. Every roof and much of the wall is covered in small overlapping wooden tiles. Carved animal heads on long necks rise from the roof peaks. Below the roofs the walls are made of upright wooden boards set side by side. Pale gravestones stand in the grass in front.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Borgund-Church.jpg",
 imageNote:"Coatings of tar have protected the timber for centuries, which is why the wood is almost black.",
 detail:{image:"public/images/artworks/Borgund-Dragons.jpg",alt:"A close view of the top of the wooden tower. Two carved animal heads on long curved necks rise from the roof ridges and face outward, their surfaces cut with looping ribbon patterns. Between them a small shingled tower rises to a point, and a square panel below is pierced with carved interlacing vines.",caption:"Detail: carved heads and interlace on the tower. The heads in place today may be later replacements.",credit:{"word": "Detail photo (tower)", "url": "https://commons.wikimedia.org/wiki/File:Borgund_stave_church_exterior_20230926-5.jpg", "author": "Bj\u00f8rn Erik Pedersen", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "changes": "Cropped."}},
 size:"",
 intro:"Around 1180, builders in a Norwegian valley raised this church entirely of timber. Norway had been Christian for less than two centuries, and the carpenters who made it drew on skills their grandfathers had used to build Viking longships. The uprights are called staves \u2014 tall pine posts standing on a stone foundation. The dragon heads at the roof peaks and the carved vines on the doors use a decorative language centuries older than Norway\u2019s conversion to Christianity.",
 context:[{term:"Stave",pron:"",def:"An upright wooden post. A stave church is built on a frame of tall staves, with walls of upright boards instead of stacked logs."},{term:"Interlace",pron:"",def:"A pattern of bands that weave over and under one another in an unbroken line."},{term:"Finial",pron:"FIN-ee-ul",def:"A decorative figure or shape set at the top of a roof or spire. The dragon-shaped finials at Borgund stand where the carved prows of Viking ships once stood."}],
 clues:[{"id": "roofs", "label": "Stacked roofs", "def": "Roofs set one above another, each smaller than the one below it"}, {"id": "dragons", "label": "Dragon heads", "def": "Carved animal heads rising from the roof peaks, like the prows of Viking ships"}, {"id": "boards", "label": "Upright boards", "def": "Walls made of tall wooden boards standing side by side, not stacked logs"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Durham and Chartres. All three buildings had to hold up a roof and keep out the weather. What did timber let these builders do that stone did not?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Stacked roofs, dragon heads and upright boards are features a detective can carry to the next case.",
 sourceNums:[122,123,145],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Borgund_stavkyrkje_2022c.jpg", "author": "Tulipasylvestris", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM23.zones={
 roofs:[{x0:22,y0:48,x1:40,y1:62},{x0:48,y0:38,x1:68,y1:52},{x0:58,y0:56,x1:76,y1:70}],
 dragons:[{x0:36,y0:21,x1:42,y1:28},{x0:43,y0:15,x1:49,y1:22},{x0:47,y0:19,x1:53,y1:26},{x0:33,y0:31,x1:40,y1:38}],
 boards:[{x0:44,y0:73,x1:60,y1:85},{x0:62,y0:73,x1:74,y1:84}]};
var LM24={id:"LM-24",kind:"Architecture",wide:true,title:"Open Arches, a Lacy Walkway and a Patterned Wall",object:"Doge\u2019s Palace, Venice",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Doge\u2019s Palace, lagoon front",date:"begun c. 1340 C.E.",location:"Venice, Italy",artist:"Architect unknown",
 headline:"Look closely at the three levels of the wall",
 alt:"A large stone palace seen from below along its waterfront side. At ground level a row of wide pointed arches stands open to the street. Above them runs a second row of slimmer arches on columns, with round carved openings between their tops, forming a covered walkway. Above that rises a solid wall faced in pink and white stone laid in a diamond pattern, with a few tall windows. At the near corner a carved group of two figures stands beneath a small statue. The sky is clear blue.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Doges-Facade.jpg",
 imageNote:"The view looks up at the south-west corner from the waterfront, with Saint Mark\u2019s Basilica at the far left.",
 detail:{image:"public/images/artworks/Doges-Corner.jpg",alt:"A close view of the palace's corner. Two carved figures stand on either side of a tree on the angle of the building, with a small winged figure on a pedestal above them. Behind and above rise slim columns with deeply carved leafy capitals, a stone balcony rail, and the pink and white diamond-patterned wall. Wide pointed arches open below.",caption:"Detail: the carved corner group of Adam and Eve, with the Archangel Michael above. 14th century.",credit:{"word": "Detail photo (corner)", "url": "https://commons.wikimedia.org/wiki/File:Venice,_Palazzo_Ducale,_Adam_and_Eve,_Michael.jpg", "author": "Armin Kleiner", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"In 1340, Venice began a new front for the palace of its elected ruler. It is not a church or a fortress, but the public face of a city built on trade with the Eastern Mediterranean. The building draws on three worlds Venetian merchants knew: Gothic pointed arches from the West, patterned stone from Byzantium, and latticed walkways from the Islamic world. Most stone buildings put their heaviest walls at the bottom. This one does the opposite.",
 context:[{term:"Doge",pron:"DOHZH",def:"The title of the elected leader of Venice, who held the office for life. The Doge’s Palace was both his home and the meeting place of the Venetian government."},{term:"Loggia",pron:"LOJ-ee-uh",def:"A covered walkway with one side open to the air, carried on a row of columns and arches."},{term:"Facade",pron:"",def:"The main outward-facing front of a building, often the side most carefully designed to impress the viewer."}],
 clues:[{"id": "arches", "label": "Open arches below", "def": "A row of wide pointed arches at ground level, open to the street"}, {"id": "loggia", "label": "Lacy upper walkway", "def": "A second row of slimmer arches on columns, with carved openings between their tops"}, {"id": "pattern", "label": "Patterned wall on top", "def": "A solid upper wall faced in pink and white stone laid in a diamond pattern"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Durham and Chartres, churches built to carry weight down to the ground. This is a government building, and it puts its heaviest-looking wall on top. What might the builders have wanted people to feel as they walked underneath?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Open arches, a lacy walkway and a patterned wall are features a detective can carry to the next case.",
 sourceNums:[124,125,146],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Doge%27s_Palace_from_Molo,_Venice_-_Venezia_300_77.jpg", "author": "FrDr", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM24.zones={
 arches:[{x0:30,y0:80,x1:52,y1:96},{x0:55,y0:78,x1:72,y1:94},{x0:75,y0:80,x1:88,y1:95}],
 loggia:[{x0:40,y0:48,x1:60,y1:66},{x0:63,y0:33,x1:82,y1:55},{x0:25,y0:62,x1:38,y1:78}],
 pattern:[{x0:30,y0:12,x1:48,y1:34},{x0:50,y0:3,x1:62,y1:18},{x0:78,y0:2,x1:92,y1:14}]};
var LM25={id:"LM-25",kind:"Ivory carving",title:"A Graceful Sway",object:"Virgin and Child from the Sainte-Chapelle",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Virgin and Child from the Sainte-Chapelle",date:"c. 1260\u20131279 C.E.",location:"Mus\u00e9e du Louvre, Paris",artist:"Carver unknown",
 headline:"Look closely at the way she stands",
 alt:"A small standing statue carved in cream-white ivory, shown in a museum case. A woman in a long robe and cloak holds a child on her left arm. She wears a rounded cap with a veil falling beside her face, and she turns her head slightly toward the child, who sits on her raised arm and reaches a hand toward her shoulder. A narrow gold belt crosses her waist on a slant, rising toward the child's side instead of running level, and below it her body swings out that way. From that side the cloak falls in long curved folds that sweep down and across the front of the robe toward the opposite side, while on that other side the cloth hangs in a plain, almost straight line to the floor. Thin gold borders and lines of gold pattern run along the hems and the neckline, and a small dark red stone is set at her breast. She stands on a shallow many-sided base carved with a row of diamond shapes. Her head does not sit above the middle of that base.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/SainteChapelle-Virgin.jpg",
 imageNote:"Photographed in its case at the Louvre. The statuette is 41 cm (16 in) tall, small enough to hold in two hands.",
 detail:{image:"public/images/artworks/SainteChapelle-Virgin-Detail.jpg",alt:"A close view of the upper part of the same statue. The woman's face is seen nearly in profile, her eyes lowered toward the child. She wears a rounded cap over a veil with a decorated edge. The child sits on her arm, smiling, holding a round fruit in one hand and reaching the other up to touch her shoulder. Gold patterns run along her neckline, down the front edge of her cloak, and around the child's collar and cuffs. A dark red stone is set at her breast and another at the child's. Fine cracks run through the ivory.",caption:"Detail: the faces of mother and child, with gold patterns along the neckline and the cloak\u2019s edge",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Vierge_%C3%A0_l%27Enfant_de_la_Sainte-Chapelle_(Louvre,_OA_57)_detail2.jpg", "author": "Tangopaso", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"}},
 size:"",
 intro:"Between about 1260 and 1279, an unknown carver cut this statuette from a single elephant tusk. It belonged to the treasury of the Sainte-Chapelle, the royal chapel built by King Louis IX, and appears in the treasury\u2019s earliest inventory. Instead of standing straight, Mary sways at the hip as she turns toward her child, and her drapery follows the movement. The ivory keeps the natural curve of the tusk.",
 context:[{term:"Hanchement",pron:"ahnsh-MAHN",def:"A French term for the pose in which a standing figure shifts her weight onto one hip."},{term:"S-curve",pron:"",def:"The shallow S shape a standing figure makes when the body bends one way at the hips and the other way at the shoulders."},{term:"Gilding",pron:"",def:"Decoration with a thin layer of gold."}],
 clues:[{"id": "belt", "label": "A belt on a slant", "def": "A narrow gold belt crossing her waist"}, {"id": "folds", "label": "Cloth falling across", "def": "Long folds of the cloak pouring down across the front of the robe"}, {"id": "tilt", "label": "A leaning body", "def": "The line of the whole figure, from her head down to the base"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the Gero Cross and the Reims statues. This statue was cut from a single curved tusk, and the Louvre says the figure keeps that curve. Which came first: the carver\u2019s idea of how a body should stand, or the shape of the material?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A tilted belt, cloth falling across the body and a leaning line are features a detective can carry to the next case.",
 sourceNums:[126,127],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Louvre_Virgen_Sainte_Chapelle.JPG", "author": "Miguel Hermoso Cuesta", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}};
LM25.zones={
 belt:[{x0:38,y0:31,x1:68,y1:39}],
 folds:[{x0:43,y0:40,x1:71,y1:53},{x0:37,y0:53,x1:63,y1:67},{x0:31,y0:67,x1:57,y1:81}],
 tilt:[{x0:28,y0:3,x1:51,y1:17},{x0:25,y0:91,x1:82,y1:99}]};
var LM26={id:"LM-26",kind:"Tomb effigy",wide:true,title:"A Young Face, an Open Book and Long Folds of Cloth",object:"Tomb effigy of Eleanor of Aquitaine",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Tomb effigy of Eleanor of Aquitaine",date:"c. 1204 C.E.",location:"Fontevraud Abbey, Anjou, France",artist:"Carver unknown",
 headline:"Look closely at the figure lying on the tomb",
 alt:"Two life-size painted stone figures lie side by side on low tomb chests in a bare stone church. The figure in front is a woman. She lies flat on her back, her head on a pillow at the left and her feet at the right. A white cloth covers her hair, wraps under her chin and frames her face, and a narrow decorated band crosses her forehead. Her face is smooth, oval and young, and her eyes are open. She holds an open book upright in both hands above her chest, as though reading it. A blue cloak lies across her body, and long folds of cream and red cloth run the length of her legs to her feet. The side of the tomb chest beneath her is carved to look like a hanging curtain. Behind her lies a second figure, a man wearing a crown, his eyes closed and his hands resting on his body.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Fontevraud-Eleanor.jpg",
 imageNote:"The stone is tuffeau, a pale local limestone, and the effigies have been repainted more than once, so today\u2019s colors are not a guide to how the tomb looked in 1204.",
 detail:{image:"public/images/artworks/Fontevraud-Eleanor-Detail.jpg",alt:"A close view of the heads of the same two figures, seen from above. In front, the woman's face is smooth and oval with open eyes and a straight nose, framed by a white cloth that passes under her chin, with a jewelled band across her forehead and worn blue and red paint on the pillow behind her. Her hands hold the open book at the right edge of the view. Behind her, the crowned man lies with his head on a long pillow, his eyes closed. Paint survives in patches on both figures.",caption:"Detail: the queen's face and the paint that survives, with Henry II behind her. Photographed in 2025.",credit:{"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:2025_Abtei_Fontevraud_-_Grabstelle_(Eleonore_von_Aquitanien).jpg", "author": "Stefan Oemisch", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"}},
 size:"",
 intro:"Eleanor of Aquitaine was Queen of France, then Queen of England, and mother of Richard the Lionheart. She died in 1204 at about 82. The abbey records say she commissioned this effigy before her death, choosing how she would be seen for the rest of time. Her husband, Henry II, lies behind her, shown in death, eyes closed and hands folded. She is shown alive, awake, and reading.",
 context:[{term:"Effigy",pron:"",def:"A carved figure of a dead person, placed on a tomb to stand for them."},{term:"Gisant",pron:"zhee-ZAHN",def:"A tomb effigy shown lying down, as if asleep or at rest. From the French verb for 'lying.'"},{term:"Patron",pron:"",def:"The person or group who pays for and shapes a work of art. Here the patron was Eleanor herself: she chose how she would be shown after her death."}],
 clues:[{"id": "face", "label": "A smooth young face", "def": "An oval face with open eyes, calm and unlined, framed by a white cloth that passes under the chin"}, {"id": "book", "label": "An open book", "def": "A book held upright in both hands above her chest, as though she were reading it"}, {"id": "folds", "label": "Long folds of cloth", "def": "Folds of cloak and robe that run the length of the body, following it as it lies flat"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Uta of Naumburg and set her face beside Eleanor\u2019s. Eleanor chose how she would be seen for the rest of time. Why a book?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A young face, an open book and long folds of cloth are features a detective can carry to the next case.",
 sourceNums:[128,129,147],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Gisant_de_l%27Abbaye_de_Fontevraud_DSC_1778.jpg", "author": "GuyFrancis", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}};
LM26.zones={
 face:[{x0:11,y0:12,x1:22,y1:26}],
 book:[{x0:24,y0:12,x1:34,y1:27}],
 folds:[{x0:30,y0:28,x1:45,y1:41},{x0:45,y0:30,x1:60,y1:46},{x0:58,y0:33,x1:72,y1:48}]};
var LM27={id:"LM-27",kind:"Stone sculpture",title:"A Crown, a Carved Harness and a Perch on the Wall",object:"The Bamberg Rider",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"The Bamberg Rider",date:"c. 1225\u20131237 C.E.",location:"Bamberg Cathedral, Bavaria, Germany",artist:"Sculptor unknown",
 headline:"Look closely at the rider and at where he stands",
 alt:"A life-size stone statue of a young man on horseback, set against the pillar of a church. The horse stands facing right, its head turned slightly toward the viewer, with a braided mane, a bridle of carved straps and a chain at the bit. The rider sits upright. He wears a crown over long wavy hair, a tunic and a cloak fastened at the shoulder, and he carries no sword, shield or armor. He holds the reins in one hand and the cord of his cloak in the other, and his head is turned away from the way the horse is walking, so that he looks out to one side. Above him, jutting from the pillar, hangs a small canopy carved as a stone building with gables, pointed arches and pinnacles. Below, the horse's hooves rest on a bracket carved with deep curling leaves, which projects from the pillar well above the floor. The stone is pale and bare.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Bamberg-Rider.jpg",
 imageNote:"The statue is life-size and stands high on a pillar of the cathedral. Traces of color show it was once painted.",
 detail:{image:"public/images/artworks/Bamberg-Rider-Detail2.jpg",alt:"A close view of the rider's head and shoulders. He wears a crown, a broad band studded with raised bosses and topped with small carved leaves. His hair falls in long carved waves on either side of his face. The brow is furrowed, the eyes are open and turned to one side, and the mouth is closed. At his shoulder a cord crosses his chest, and he holds its carved clasp between the fingers of one hand. Behind him the tracery of the stone canopy is out of focus; at the right edge is the horse's ear and mane.",caption:"Detail: the rider\u2019s crown and long wavy hair, with his eyes turned to one side",credit:{"word": "Detail photo (face)", "url": "https://commons.wikimedia.org/wiki/File:Detail_Bamberger_Reiter.jpg", "author": "Holger Uwe Schmitt", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "changes": "Cropped."}},
 size:"",
 intro:"Around 1225 to 1237, an unknown sculptor carved this life-size king on horseback and attached him to a pillar inside Bamberg Cathedral in Germany. He is believed to be the first life-size equestrian statue made since ancient times. The rider wears a crown but carries no sword, shield or banner, and scholars still debate who he is. Saint Stephen of Hungary is among the likeliest candidates.",
 context:[{term:"Equestrian",pron:"",def:"A statue or picture of a person riding a horse."},{term:"Attribute",pron:"AT-ri-byoot",def:"An object a figure holds or wears that identifies who they are, such as keys for Saint Peter or a sword for a knight."},{term:"Canopy",pron:"",def:"A small roof carved over a statue, like a tiny architectural shelter."}],
 clues:[{"id": "crown", "label": "A crown but no attributes", "def": "A crown on the head of a figure who carries no weapon, shield or banner"}, {"id": "harness", "label": "A real harness", "def": "Straps, a bridle and a braided mane, carved in fine detail"}, {"id": "perch", "label": "High on the pillar", "def": "A leafy bracket and a stone canopy, set high above the floor"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Scholars have proposed several riders, from Saint Stephen of Hungary to a Hohenstaufen king, and none is proven. What evidence would you need to settle it?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A crown, a carved harness and a perch on the wall are features a detective can carry to the next case.",
 sourceNums:[130,131,165,166],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:2020-07-03_07-05_Franken_102_Bamberg,_Dom,_Bamberger_Reiter_(50126573137).jpg", "author": "Allie Caulfield", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"}};
LM27.zones={
 crown:[{x0:37,y0:24,x1:48,y1:31}],
 harness:[{x0:61,y0:31,x1:81,y1:48},{x0:53,y0:46,x1:67,y1:53}],
 perch:[{x0:31,y0:5,x1:57,y1:24},{x0:13,y0:76,x1:68,y1:88}]};
var LM28={id:"LM-28",kind:"Panel painting",wide:true,title:"Raised Gold Words, an Olive Branch and a Figure Drawing Back",object:"The Annunciation, from Siena Cathedral",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Annunciation with Saint Ansanus",date:"1333 C.E.",location:"Galleria degli Uffizi, Florence",artist:"Simone Martini and Lippo Memmi",
 headline:"Look closely at what passes between the two figures",
 alt:"A large altarpiece of three painted panels in a tall gold frame with pointed gables, spires and four round portraits of prophets along the top. The background of every panel is plain gold. In the wide center panel an angel kneels at the left, in a white and gold robe, with great patterned wings still spread and his cloak swirling behind him as though he has just landed. He wears a wreath of dark olive leaves with a small crown, and holds a branch of olive in his lower hand. His mouth is open, and a line of gold letters rises from it across the gold background toward the woman opposite. Between them a slim vase holds white lilies. At the right a woman in a deep blue cloak sits on an inlaid throne. She presses back against it and pulls the cloak across her body, one hand at her throat, her thumb still holding her place in a red book. Above the center a white dove flies down in a ring of winged heads. A young saint with a banner stands in the left panel and a veiled saint with a cross and a palm in the right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Martini-Annunciation.jpg",
 imageNote:"Painted for the altar of Saint Ansanus in Siena Cathedral; the three panels together are about 305 cm (10 ft) wide and 265 cm (8 ft 8 in) high.",
 detail:{flex:58,image:"public/images/artworks/Martini-Annunciation-Detail.jpg",alt:"A close view of the center of the painting. At the left the angel's head is seen in profile, wearing a wreath of dark olive leaves set with a small jewelled crown, his mouth open and a thin gold halo behind him. From his mouth a line of Latin capitals rises across the plain gold background, the letters standing up from the surface and catching the light. At the right edge the words reach the face of the woman, under the tooled rays of her halo. Below, a dark olive branch and the pale trumpets of lilies cross the gold.",caption:"Detail: the angel’s greeting rising across the gold from his mouth toward Mary: AVE GRATIA PLENA DOMINVS TECVM.",credit:{"word": "Detail photo (the greeting)", "url": "https://commons.wikimedia.org/wiki/File:Simone_Martini_%E2%80%94_Annunciation_with_St._Margaret_and_St._Ansanus.jpg", "author": "Gleb Simonov", "license": "CC0 1.0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"}},
 size:"",
 intro:"In 1333, the Sienese painters Simone Martini and his brother-in-law Lippo Memmi signed and dated this altarpiece for Siena Cathedral. It shows the Annunciation: an angel tells a young woman named Mary that she will bear a son. Most earlier painters showed Mary quiet and accepting. Simone shows her frightened, pulling back, her thumb still marking her place in her book. The angel\u2019s words rise across the gold in raised Latin letters that catch the light.",
 context:[{term:"Annunciation",pron:"",def:"The moment told in the Gospel of Luke when the angel Gabriel appears to Mary and tells her she will bear Jesus."},{term:"Gold ground",pron:"",def:"A background covered in gold leaf instead of a painted sky or room. Gold grounds set holy figures apart from any ordinary place."},{term:"Altarpiece",pron:"",def:"A painting or sculpted work placed above the altar of a church, often made of several panels joined side by side."}],
 clues:[{"id": "words", "label": "Words written in gold", "def": "A line of Latin capitals crossing the gold background from the angel's mouth toward the woman, raised up from the surface"}, {"id": "olive", "label": "An olive branch", "def": "A wreath of olive leaves on the angel's head, and a branch of olive held in his lower hand"}, {"id": "recoil", "label": "A figure drawing back", "def": "The woman pressing back into her throne and pulling her cloak across her body, her thumb still holding her place in a book"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to Giotto\u2019s Lamentation, painted nearly thirty years earlier. Giotto gives his figures weight and real ground to stand on; Simone gives his a marble floor and a sky of solid gold. Which would a person kneeling at this altar in 1333 have found more convincing, and why?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Raised gold words, an olive branch and a figure drawing back are features a detective can carry to the next case.",
 sourceNums:[132,133,148],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Simone_Martini_%E2%80%94_Annunciation_with_St._Margaret_and_St._Ansanus.jpg", "author": "Gleb Simonov", "license": "CC0 1.0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"}};
LM28.zones={
 words:[{x0:44,y0:51,x1:65,y1:58}],
 olive:[{x0:37,y0:50,x1:44,y1:56},{x0:42,y0:59,x1:48,y1:72}],
 recoil:[{x0:57,y0:59,x1:73,y1:72},{x0:52,y0:72,x1:70,y1:86}]};
var LM29={id:"LM-29",kind:"Tapestry",wide:true,title:"A Giant Reader, Two Rows of Scenes and Backgrounds That Switch",object:"The Apocalypse Tapestry",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"The Apocalypse Tapestry",date:"1377\u20131382 C.E.",location:"Ch\u00e2teau d\u2019Angers, France",artist:"Designed by Jean Bondol; woven in Paris",
 headline:"Look closely at how the story is laid out",
 alt:"A very long woven hanging displayed along a dark gallery wall, seen at an angle so that it runs away into the distance. At the left a huge seated figure in a red robe sits under a tall carved canopy, holding an open scroll; he is several times the size of the figures beside him. To his right the hanging is divided into framed scenes stacked in two rows, one above the other, which continue down the wall as far as the picture goes. The background behind the figures in each scene is either deep red or dark blue scattered with small flowers, and it changes from one to the other from scene to scene. A pale strip of sky runs above the upper row and a strip of flowered ground below the lower row. The wool has faded to soft browns, greens and pale blues.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Angers-Apocalypse.jpg",
 imageNote:"Originally about 140 m (460 ft) long and 6 m (20 ft) high, and about seventy of its ninety woven scenes survive.",
 detail:{flex:44,image:"public/images/artworks/Angers-Apocalypse-Detail2.jpg",alt:"A close view of another scene. A bearded man in a red cloak stands praying inside a small arched building at the left. Beside him a walled city collapses into rubble, its towers and roofs falling sideways. Winged demons and birds tumble through a dark blue background covered in a pattern of curling stems and red flowers. At the right two small groups of people stand on a pale green hillside, watching and turning away. The edges of the hanging are worn and pale.",caption:"Detail: the fall of the city, woven against a blue ground patterned with stems and flowers.",credit:{"word": "Detail photo (the fall of Babylon)", "url": "https://commons.wikimedia.org/wiki/File:Angers-_Apocalypse_(11).JPG", "author": "R\u00e9mi Jouan", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"In 1377, Louis I of Anjou — brother of the king of France — commissioned a tapestry longer than a football field. Jean Bondol designed it; weavers in Paris turned the designs into wool. Its subject is the Apocalypse, the visions of John of Patmos from the last book of the Christian Bible. At the start of each section John sits enormous, holding a scroll, while his visions run down the wall beside him.",
 context:[{term:"Tapestry",pron:"",def:"A picture woven into cloth on a loom, not stitched on afterwards."},{term:"Apocalypse",pron:"",def:"The visions told in the last book of the Christian Bible, Revelation, in which a man named John sees how the world will end."},{term:"Register",pron:"",def:"A horizontal row or band in a work of art that holds a group of scenes or figures."}],
 clues:[{"id": "reader", "label": "A giant seated reader", "def": "One huge figure, far larger than anyone in the scenes, seated under a carved canopy with an open scroll"}, {"id": "rows", "label": "Two rows of scenes", "def": "Framed scenes stacked in two rows, one above the other, running away down the wall"}, {"id": "switch", "label": "Backgrounds that switch", "def": "The background behind the figures changing from red to blue and back again, scene by scene"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the Bayeux Tapestry. Its pictures were stitched onto cloth that had already been woven; here the pictures are the cloth, built thread by thread on the loom. Which method do you think would be harder to correct after a mistake?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A giant reader, two rows of scenes and backgrounds that switch are features a detective can carry to the next case.",
 sourceNums:[134,135,149],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:France-001407_-_Apocalypse_Tapestry_(15369796881).jpg", "author": "Dennis G. Jarvis", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"}};
LM29.zones={
 reader:[{x0:3,y0:39,x1:19,y1:66}],
 rows:[{x0:25,y0:10,x1:46,y1:33},{x0:25,y0:40,x1:46,y1:63}],
 switch:[{x0:48,y0:14,x1:60,y1:33},{x0:62,y0:18,x1:74,y1:36}]};
var LM30={id:"LM-30",kind:"Panel painting",title:"A Face Built in Shadow, Heavy Hands and a Working Desk",object:"Saint Jerome, from the Chapel of the Holy Cross",playable:true,
 crumb:"Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.",
 work:"Saint Jerome",date:"c. 1360\u20131365 C.E.",location:"N\u00e1rodn\u00ed galerie, Prague",artist:"Master Theodoric",
 headline:"Look closely at how the man is built",
 alt:"A square painted panel, almost filled by a single man seen from the waist up. He wears a wide red cardinal's hat and a heavy red cloak, and he turns to his right to look down at a book he holds open in both hands. His face is lined and deeply shadowed under the brows and cheekbones, with a short gray curled beard. His hands are large and bony, with raised knuckles and veins, pressed against the green jewelled cover of the book. Behind his shoulder stands a wooden writing desk with a sloping top, a rolled scroll, a dark round inkwell and a long pen. The whole background is gold, pressed into a close diamond pattern that stands up from the surface, and a wide band of the same worked gold runs round the panel as a frame.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Theodoric-Jerome.jpg",
 imageNote:"Painted for the Chapel of the Holy Cross at Karl\u0161tejn Castle; the panel is about 115 \u00d7 104 cm (45 \u00d7 41 in).",
 detail:{image:"public/images/artworks/Theodoric-Jerome-Detail.jpg",alt:"A second panel of the same set, showing a bishop or pope seen from the waist up, reading a red book held in both hands. He wears a tall white mitre patterned with gold, and a broad band of gold discs down his chest. The point of the mitre rises above the painted field and is carried straight on over the gold frame at the top of the panel. Behind him a writing desk holds books and papers. The background is gold worked in a diamond pattern.",caption:"Detail: another panel from the same chapel, in which the bishop\u2019s mitre breaks out of the gold frame",credit:{"word": "Detail photo (a second panel)", "url": "https://commons.wikimedia.org/wiki/File:Master_Theodoricus_1-IMG_3356.JPG", "author": "PetrDejmek", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}},
 size:"",
 intro:"Around 1360, Master Theodoric — court painter to Emperor Charles IV — painted this panel of Saint Jerome for a chapel at Karlštejn Castle in Bohemia. It was one of 129 he made for the same small room. Jerome was the scholar who translated the Bible into Latin. His face is not drawn in outline the way earlier painters built a face — it is built up from shadow and light, so the head seems to turn in real space.",
 context:[{term:"Modeling",pron:"",def:"The use of light and shadow to make a flat painting look solid and rounded."},{term:"Panel painting",pron:"",def:"A painting made on a flat wooden board, often framed and hung in a church or chapel."},{term:"Attribute",pron:"AT-ri-byoot",def:"An object a figure holds or wears that identifies who they are, such as keys for Saint Peter or a sword for a knight."}],
 clues:[{"id": "face", "label": "A face built in shadow", "def": "Deep shadow under the brows, beside the nose and below the cheekbones, so the head looks solid rather than drawn in outline"}, {"id": "hands", "label": "Heavy hands", "def": "Large bony hands with raised knuckles and veins, pressed against the covers of the book"}, {"id": "desk", "label": "A working desk behind", "def": "A wooden writing desk behind his shoulder, with a rolled scroll, a dark inkwell and a long pen"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.", "Choose any two features to write about. For each, write at least one sentence about your own observations or what you find most interesting."],
 closing:"Think back to the Christ at Ta\u00fcll, painted more than two hundred years earlier. That one is built from lines: a dark outline with flat color inside. This one is built from shadow, and the outlines have nearly disappeared. This is the last case in the file. What has changed between the first case and this one?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A face built in shadow, heavy hands and a working desk are the last features in the Late Medieval file.",
 sourceNums:[136,137,150],
 credit:{"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Meister_Theoderich_von_Prag_002.jpg", "author": "The Yorck Project", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}};
LM30.zones={
 face:[{x0:33,y0:22,x1:63,y1:50}],
 hands:[{x0:44,y0:54,x1:63,y1:67},{x0:70,y0:56,x1:87,y1:72}],
 desk:[{x0:70,y0:16,x1:96,y1:52}]};
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
window.DECKS[1].cards[0]=LM01;
window.DECKS[1].cards[1]=LM04;
window.DECKS[1].cards[2]=LM08;
window.DECKS[1].cards[3]=LM02;
window.DECKS[1].cards[4]=LM06;
window.DECKS[1].cards[5]=LM03;
window.DECKS[1].cards[6]=LM20;
window.DECKS[1].cards[7]=LM07;
window.DECKS[1].cards[8]=LM09;
window.DECKS[1].cards[9]=LM18;
window.DECKS[1].cards[10]=LM19;
window.DECKS[1].cards[11]=LM27;
window.DECKS[1].cards[12]=LM05;
window.DECKS[1].cards[13]=LM10;
window.DECKS[1].cards[14]=LM11;
window.DECKS[1].cards[15]=LM12;
window.DECKS[1].cards[16]=LM13;
window.DECKS[1].cards[17]=LM17;
window.DECKS[1].cards[18]=LM16;
window.DECKS[1].cards[19]=LM14;
window.DECKS[1].cards[20]=LM21;
window.DECKS[1].cards[21]=LM23;
window.DECKS[1].cards[22]=LM26;
window.DECKS[1].cards[23]=LM15;
window.DECKS[1].cards[24]=LM24;
window.DECKS[1].cards[25]=LM28;
window.DECKS[1].cards[26]=LM22;
window.DECKS[1].cards[27]=LM29;
window.DECKS[1].cards[28]=LM25;
window.DECKS[1].cards[29]=LM30;
window.DECKS[1].vocab=[{"id": "VOC-10", "after": 7, "word": "Stylized", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "def": "Figures and scenes shown according to a fixed, repeated pattern, rather than observed from life \u2014 flat, facing forward, and evenly spaced.", "look": ["Are figures repeated with little variation between them?", "Is everyone facing forward, with little sense of weight or motion?", "Does the background stay flat and symbolic \u2014 gold or pattern \u2014 rather than a believable space?"], "example": {"id": "LM-06", "points": ["Every figure is drawn with a thick dark outline and filled in with flat color, the same way all across the painting. Nobody is shaded or rounded.", "Christ is drawn far larger than the figures around him. Size here shows who matters most, not who is standing closest.", "The frames, rings, dots and bands repeat in even rows rather than describing a real place. There is no room, no sky and no ground to stand on."]}, "sourceNums": [92, 93], "recognize": {"prompt": "For 3 bonus points, identify this work. You have seen it before.", "points": 3, "correct": 1, "options": [{"case": "LM-03"}, {"case": "LM-06"}, {"case": "LM-20"}]}}, {"id": "VOC-12", "after": 10, "word": "Romanesque", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "def": "A medieval style of about 900 to 1200, known for thick walls, round arches and a solid, massive look, in its buildings and in the figures carved and painted on them.", "look": ["Are the walls thick and heavy, with small openings?", "Do the arches curve in a smooth half-circle?", "Do the figures follow a simple, strong pattern that fills the space they are given?"], "example": {"id": "LM-18", "points": ["Christ sits huge and alone at the center, far larger than the figures around him.", "The long, thin figures are stretched beyond ordinary proportions, in the same way all across the relief.", "The figures sit in stacked horizontal bands, one above another, filling the half-circle of stone above the doorway."]}, "sourceNums": [167], "recognize": {"prompt": "For 3 bonus points, identify this work. You have seen it before.", "points": 3, "correct": 1, "options": [{"case": "LM-21"}, {"case": "LM-18"}, {"case": "LM-28"}]}}, {"id": "VOC-07", "after": 17, "word": "Naturalism", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "def": "Figures that look weighed down by gravity, caught in a real emotion, or standing in a believable space \u2014 rather than held to a flatter, more symbolic way of showing the human figure.", "look": ["Does the body seem to have real weight, leaning or sagging the way a real body would?", "Do the faces show a particular emotion, or a calm, unchanging expression?", "Do figures overlap or turn in space, or do they stand side by side on the same flat plane?"], "example": {"id": "LM-13", "points": ["The mourners lean, slope and bend around Christ\u2019s body the way grieving people actually do, not in a fixed pose.", "Several faces show open grief \u2014 mouths open, brows pulled down \u2014 rather than the calm, composed expressions common earlier in the deck.", "The group is built in overlapping rows, so some figures read as nearer and some farther, rather than lined up flat across the picture."]}, "sourceNums": [104], "recognize": {"prompt": "For 3 bonus points, identify this work. You have seen it before.", "points": 3, "correct": 1, "options": [{"case": "LM-03"}, {"case": "LM-13"}, {"case": "LM-06"}]}}, {"id": "VOC-13", "after": 21, "word": "Gothic", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "def": "A medieval style that began in northern France in the twelfth century, known for pointed arches, ribbed stone ceilings and walls opened up into tall windows.", "look": ["Do the arches rise to a point?", "Do thin ribs carry the weight of the ceiling down onto slim piers?", "Is the wall opened up into tall windows, rather than thick and solid?"], "example": {"id": "LM-21", "points": ["After the 1194 fire, the builders rebuilt the main hall with pointed arches in place of round ones.", "The weight of the stone ceiling runs down thin ribs onto narrow piers, not through thick walls.", "Freed from carrying the load, the upper wall opens into tall stained-glass windows."]}, "sourceNums": [168], "recognize": {"prompt": "For 3 bonus points, identify this work. You have seen it before.", "points": 3, "correct": 1, "options": [{"case": "LM-18"}, {"case": "LM-21"}, {"case": "LM-14"}]}}, {"id": "VOC-08", "after": 23, "word": "Patronage", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "def": "Who paid for a work, and what their reasons tell us about why it was made the way it was.", "look": ["Does the record name who ordered or paid for the piece?", "Does knowing who paid for it change what you think the work was meant to do \u2014 comfort, impress, remember, instruct?", "Would a different patron likely have asked for something different?"], "example": {"id": "LM-26", "points": ["The abbey\u2019s own records say Eleanor ordered this figure of herself before she died \u2014 she was her own patron.", "Because she commissioned it herself, she could decide how she wanted to be remembered: shown alive and reading, not simply lying in death like her husband beside her.", "That is a different kind of patronage than a king or bishop paying an artist to honor someone else \u2014 here, the subject and the patron are the same person."]}, "sourceNums": [128, 129], "recognize": {"prompt": "For 3 bonus points, identify this work. You have seen it before.", "points": 3, "correct": 1, "options": [{"case": "LM-19"}, {"case": "LM-26"}, {"case": "LM-16"}]}}, {"id": "VOC-09", "after": 30, "word": "Formal Elements", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "def": "The basic visual building blocks every work of art is made from \u2014 line, shape, color, space and texture.", "look": ["Where do you see line doing real work \u2014 an edge, a fold, a border?", "Where does color carry meaning rather than just decoration?", "Does the picture suggest real depth, or stay flat on purpose?"], "example": {"id": "LM-28", "points": ["Line: the angel\u2019s greeting crosses the gold background as a line of raised Latin letters, running from his mouth toward Mary.", "Color: gold leaf fills the whole background, and the deep blue of Mary\u2019s cloak stands out sharply against it.", "Space: the background is flat gold, with no sky or room behind the figures, so the scene is held outside any ordinary place."]}, "sourceNums": [132, 133], "recognize": {"prompt": "For 3 bonus points, identify this work. You have seen it before.", "points": 3, "correct": 1, "options": [{"case": "LM-12"}, {"case": "LM-28"}, {"case": "LM-21"}]}}];
window.DECKS[1].review={"id": "REV-LM", "title": "The Case File", "crumb": "Late Medieval Period, circa 900 C.E. \u2013 1400 C.E.", "lead": "Thirty more cases are closed, and Vasario has read every note you filed. The first file showed you a period that held still for six hundred years. This one does not. What you have gathered here is a record of things changing \u2014 and of a few things refusing to. Here is what it adds up to.", "traitsHead": "What the evidence shows", "traits": [{"id": "weight", "claim": "Stone learns to let go of weight", "note": "At the start of this file a wall holds everything up, and the windows are small holes cut into it. By the end the weight runs down ribs and piers instead, the wall has turned into glass, and at Beauvais the builders found out exactly where the limit was.", "cases": ["LM-04", "LM-08", "LM-09", "LM-21", "LM-22", "LM-23", "LM-24"]}, {"id": "bend", "claim": "Bodies learn to bend", "note": "Figures stop standing square to the front. They lean toward one another, turn at the hip, let cloth fall across the body and take a shape that a living person could actually hold.", "cases": ["LM-05", "LM-10", "LM-13", "LM-25", "LM-26"]}, {"id": "face", "claim": "A face becomes a particular person", "note": "Early in the file a face is a type, made the same way every time. Later, carvers and painters start making faces that could belong to one person and nobody else \u2014 and in two of these cases we are still arguing about who that person was.", "cases": ["LM-19", "LM-26", "LM-27", "LM-30"]}, {"id": "surface", "claim": "One bright picture, four different crafts", "note": "Wool sewn onto finished cloth, colored glass held in lead, powdered glass melted onto metal, wool woven into the cloth on a loom. Four workshops, four completely different sets of hands, all reaching for the same thing: a picture that glows.", "cases": ["LM-02", "LM-09", "LM-15", "LM-29"]}, {"id": "story", "claim": "A story needs more than one moment", "note": "A single picture holds a single moment. To tell a whole story, these artists ran it along a band, stacked it in rows up a ceiling, broke it into framed scenes, or filled one wall with many small moments happening at once.", "cases": ["LM-02", "LM-07", "LM-14", "LM-20", "LM-29"]}, {"id": "patron", "claim": "The people who paid begin to appear in the record", "note": "Names arrive. A queen orders her own tomb figure and settles how she will be seen for the rest of time. A duke orders a weaving longer than a football field. An emperor fills a private chapel behind nineteen locks. The work stops being anonymous.", "cases": ["LM-19", "LM-26", "LM-29", "LM-30"]}, {"id": "gold", "claim": "Gold holds on, and then lets go", "note": "For most of this file the space behind a holy figure is gold: no sky, no room, nowhere to stand. It is still gold in the last century of the period. What changes is the figure in front of it, which stops being built from outlines and starts being built from shadow.", "cases": ["LM-03", "LM-06", "LM-12", "LM-16", "LM-28", "LM-30"]}], "work": {"head": "One last work", "kicker": "You have not seen this one.", "lede": "This is an altarpiece painted by Giotto and his assistants between about 1315 and 1320, for the old basilica of St Peter in Rome. It is painted on both sides. Look at it for a while before you read on.", "image": "public/images/artworks/Stefaneschi-Peter.jpg", "alt": "A wide altarpiece of three tall painted panels, each topped by a pointed wooden gable, standing side by side in a plain wooden frame. The background of every panel is gold. In the center panel a bearded man in a red cloak over white robes sits on a high throne, raising one hand and holding a long staff. Two angels stand behind the throne. At his feet two much smaller figures kneel on a patterned floor, one on each side. The one at the left, in pale robes patterned all over with small flowers, holds up a small gold model of a three-gabled altarpiece. The one at the right, in a dark blue cloak, holds an open book. The left panel shows two standing saints, one with a staff and a red book, the other holding a green book. The right panel shows two more standing saints, one bearded in a green cloak, one in pink and blue. Below the left panel a narrow strip shows three small seated figures against gold; below the center and right panels the matching strips are missing, leaving bare wood.", "caption": "The Stefaneschi Triptych, the side showing Saint Peter enthroned; Giotto and assistants, about 1315\u20131320 C.E. Pinacoteca Vaticana, Rome.", "credit": {"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Giotto._The_Stefaneschi_Triptych_(verso)_c.1330__220x245cm._Pinacoteca,_Vatican..jpg", "author": "Giotto and assistants (painters); reproduction image from Wikimedia Commons", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}, "detail": {"image": "public/images/artworks/Stefaneschi-Model.jpg", "alt": "A close view of the kneeling figure at the foot of the throne. He wears cream-colored robes patterned all over with small red and gold flowers, and a tall jewelled headdress. He looks up and holds out, in both hands, a small gold model of this same altarpiece: three panels with pointed gables, with tiny figures painted inside each one. Behind him a young man in blue and gold rests a hand on his shoulder, and a small dark dragon lies under that man's feet. The whole paint surface is covered in a fine web of cracks.", "caption": "Detail: the kneeling cardinal holds up a model of this very altarpiece, with tiny figures painted inside its three gables.", "credit": {"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Giotto,_polittico_stefaneschi,_san_pietro_in_cattedra,_1320_ca.,_cardinale_stefaneschi_che_dona_il_trittico,_02.jpg", "author": "Sailko", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"}}, "detail2": {"image": "public/images/artworks/Stefaneschi-Christ.jpg", "alt": "The other side of the same altarpiece, again three panels under pointed gables on a gold ground. In the center a bearded figure in a blue robe sits on a high throne beneath a carved canopy, raising one hand, surrounded by rows of angels, with two small figures kneeling at the foot of the throne. The left panel shows a crowd gathered around a man being crucified upside down between two tall stone monuments. The right panel shows a kneeling man about to be beheaded by a soldier, with a crowd, horsemen and a hillside behind. Across the bottom runs a continuous row of standing figures in bright robes, with a seated woman and child at the center.", "caption": "Detail: the other side of the same panel, painted front and back so it could be read from both sides of the altar.", "credit": {"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Giotto._The_Stefaneschi_Triptych_(recto)_c.1330__220x245cm._Pinacoteca,_Vatican..jpg", "author": "Giotto and assistants (painters); reproduction image from Wikimedia Commons", "license": "Public domain", "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"}}, "prompt": "Write down everything you recognize. You are not being scored on this. Name the features you can see and say where you saw them before.", "placeholder": "I recognize\u2026", "revealBtn": "Show what an art historian would say", "reveal": ["Nearly every feature in your case file is here at once. The ground is gold: no sky, no room, nowhere for anyone to stand. The most important figure is the largest and sits dead center, square to the front, while the two kneeling men are shrunk to a third his size \u2014 size here means importance, not distance. And yet look at the cloth. The red cloak has real weight; it falls and pools on the step. The two kneeling faces are not a type: they are particular, and you could pick them out of a crowd. The older way of showing a figure and the newer way are sitting in the same picture.", "Now look at what the kneeling man on the left is holding. It is this altarpiece \u2014 three panels, three pointed gables, tiny figures painted inside each one. He is Cardinal Jacopo Caetani degli Stefaneschi, and he paid for it. He had himself painted into his own gift, in the act of handing it over, at the feet of the saint he was giving it to. He kneels again on the other side. This is patronage made visible: not a name in a record somewhere, but the man himself, inside the picture, holding the thing he bought.", "One more thing. This panel is painted on both sides because it stood where it could be seen from both sides; the Vatican's own catalogue says it was meant for the priest and for the congregation alike. And the church it was painted for was the old basilica of St Peter in Rome \u2014 the building you studied as case 24 of the Early Medieval file. That building was pulled down in the sixteenth century to make room for the St Peter's that stands there today. The painting survived. The building did not."], "closing": "Two files are closed. You can now set two objects three hundred years apart side by side and say what changed between them, and what refused to. That is what an art historian does."}, "sourceNums": [138, 139], "outro": "Late Medieval closed. The Renaissance file opens next."};
window.DECKS[0].vocab=[{id:"VOC-01",after:16,word:"Composition",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"How an artist arranges the parts of a work so they fit together within its space.",look:["Where do the biggest or brightest parts sit?","Which lines or shapes lead your eye from one part to the next?","Is the arrangement balanced, with similar parts on each side, or does one side feel heavier?"],example:{id:"EM-01",points:["The four figures are arranged in two pairs. In each pair the figures embrace, which ties them together.","The two pairs match in size, clothing and stance. No one figure takes the center, so the arrangement feels balanced and steady.","The group is packed into one compact block, so it reads as a single unit rather than four separate people."]},sourceNums:[28],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{case:"EM-10"},{case:"EM-01"},{case:"EM-07"}]}},{id:"VOC-02",after:6,word:"Nimbus",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"A round disk of gold or yellow light placed behind the head of a figure, to signify holiness. A square nimbus often signifies the holy person is still living at the time the work was created.",look:["Is the space behind the head a solid disk, or only a thin outline?","Is the disk gold, as it almost always is in early medieval art?","Do any words on or beside the disk name the holy person?"],example:{id:"EM-29",points:["Behind the head of each holy figure sits a solid disk, filled in like a plate standing on edge. That filled disk is a nimbus. It is filled right in, not drawn as a thin ring.","Three figures in this painting have one. Counting them tells you who the painter treated as holy.","The disks are plain inside, with no pattern on them. Their job is to mark the figures as holy, not to decorate the wall."]},sourceNums:[63,64],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{case:"EM-05"},{case:"EM-29"},{case:"EM-18"}]}},{id:"VOC-03",after:20,word:"Attribute",pron:"AT-ri-byoot",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"An object that goes with a particular person in art, so you can tell who it is.",look:["What is the figure holding, wearing or standing beside?","Does the same object appear with this person in other works?","What might the object tell you about the person\u2019s story?"],example:{id:"EM-05",points:["Saint Peter holds a bundle of keys against his chest, beside a tall cross. The keys are his attribute, so a viewer who knows his story can tell who he is.","Attributes often come from an event in a saint\u2019s life. They helped viewers recognize saints in paintings.","Look for the same attribute object in other works to help identify the subject.","A symbol stands for an idea, like a dove for peace or a dog for loyalty. An attribute is a symbol that belongs to one person, like keys for Saint Peter."]},sourceNums:[62],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:2,options:[{case:"EM-26"},{case:"EM-09"},{case:"EM-05"}]}},{id:"VOC-04",after:12,word:"Interlace",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"A pattern of ribbons or bands that weave over and under one another, usually with no beginning and no end.",look:["Follow one ribbon with your eye. Does it pass over, then under, then over again?","Can you find where a ribbon starts or stops, or does it run on without end?","Do any ribbons turn into animals, with a head, a leg or a tail hidden in the weave?"],example:{id:"EM-06",points:["The panels around the big letters are filled with narrow ribbons that cross over and under each other. Follow one with your eye and it carries you around the panel and back.","The crossings fall at even intervals, so the weave keeps a steady rhythm all the way across a panel.","Interlace shows nothing from the world. It is pure pattern, and here it fills the space that a picture fills in other kinds of painting."]},sourceNums:[77],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{case:"EM-07"},{case:"EM-06"},{case:"EM-22"}]}},{id:"VOC-05",after:24,word:"Nave, Transept and Apse",crumb:"Early Medieval Period, circa 300 C.E. \u2013 900 C.E.",def:"Three parts of an early Christian church. The nave is the long central hall. The transept is the arm that crosses it near the far end. The apse is the half-round recess beyond, behind the altar.",look:["Find the longest space first. The nave runs from the main doors toward the altar, and it is wider than the aisles beside it.","Look for an arm that crosses the building near the far end and juts out past the walls on both sides. That is the transept.","At the very end, look for a wall that curves instead of turning a corner. That is the apse."],locate:{heading:"Find each part",prompt:"For 3 bonus points, click each part on the plan. You earn a point for each one you find on your first try.",points:1,image:"public/images/artworks/OldStPeters-Plan.png",alt:"A floor plan of a long church. Four rows of columns divide a long rectangle into a wide central space with two narrower spaces on each side. Near the right end a tall arm crosses the whole building and juts out past the walls above and below. Beyond it a half-round wall bulges to the right, with a small altar enclosure inside.",caption:"The body of Old St. Peter\u2019s Basilica, Rome, begun circa 330 C.E. You played this building as case 24.",creditWord:"Plan",credit:{word:"Plan",url:"https://commons.wikimedia.org/wiki/File:Old_St_Peters_Basilica_plan.png",author:"Locutus Borg, English labelling by Amandajm",license:"Public domain",licenseUrl:""},clues:[{id:"nave",label:"Nave",def:"The long central hall, wider than the spaces beside it"},{id:"transept",label:"Transept",def:"The arm crossing the building near the far end"},{id:"apse",label:"Apse",def:"The half-round recess beyond the crossing"}],zones:{nave:[{x0:4,y0:39,x1:61,y1:61}],transept:[{x0:63.5,y0:4,x1:81.5,y1:92}],apse:[{x0:82.5,y0:37,x1:95,y1:64}]}},sourceNums:[6,7]}];
window.DECKS[0].review={"id": "REV-EM", "title": "The Case File", "crumb": "Early Medieval Period, circa 300 C.E. – 900 C.E.", "lead": "Thirty cases are closed. Vasario has read every note you filed. Separately the cases are thirty objects; together they are a period, and a period has features. Here is what your evidence adds up to.", "traitsHead": "What the evidence shows", "traits": [{"id": "pattern", "claim": "Pattern is the thing, not decoration added to it", "note": "In this period a pattern is rarely a border around the real subject. Very often it is the subject. A page, a purse lid or a cup can be given over almost entirely to shapes that show nothing from the world.", "cases": ["EM-19", "EM-22", "EM-06", "EM-07", "EM-01", "EM-20", "EM-15", "EM-16"]}, {"id": "gold", "claim": "Gold replaces space", "note": "Where a Roman painter would have put a landscape or a room, these artists put gold. Nothing stands behind the figures, so they seem to float in front of something endless rather than stand somewhere.", "cases": ["EM-24", "EM-05", "EM-30", "EM-06", "EM-25", "EM-02", "EM-20", "EM-26", "EM-15", "EM-17", "EM-16", "EM-27"]}, {"id": "arch", "claim": "The round arch travels everywhere", "note": "From Rome to Cordoba to Aachen, across Christian and Islamic building alike, the same half-circle keeps appearing. It is the one shape that crosses every border in this period.", "cases": ["EM-24", "EM-29", "EM-30", "EM-21", "EM-28", "EM-14", "EM-27"]}, {"id": "frontal", "claim": "Figures face front and look straight out at you", "note": "They rarely turn, rarely glance aside and rarely do anything. The figure is not caught in a moment; it is presented to you, and it looks back.", "cases": ["EM-05", "EM-09", "EM-02", "EM-08"]}, {"id": "signs", "claim": "Bodies are signs, not studies", "note": "Nobody here was working from a model. Bodies are blocky, repeated and often identical to one another, because the point is what the figure means rather than how a particular person looked.", "cases": ["EM-18", "EM-09", "EM-01", "EM-03"]}, {"id": "nimbus", "claim": "A nimbus marks the holy", "note": "Holy figures are not drawn in a different style from everyone else. They are drawn the same way and then marked. The solid disk does all the work.", "cases": ["EM-05", "EM-29", "EM-06", "EM-09", "EM-25", "EM-08", "EM-26", "EM-14"]}, {"id": "rome", "claim": "Artists kept looking back to Rome", "note": "Rome had fallen, but it never went away. Carvers copied Roman drapery, builders reused Roman columns, and rulers put up buildings meant to look like the empire they claimed to inherit.", "cases": ["EM-21", "EM-25", "EM-10", "EM-11", "EM-14", "EM-17", "EM-27", "EM-03"]}], "work": {"head": "One last work", "kicker": "You have not seen this one.", "lede": "This is the Chapel of San Zeno in the church of Santa Prassede in Rome, finished about 820 C.E. It was not one of your cases. Look at it for a while before you read on.", "image": "public/images/artworks/SanZeno-Saints.jpg", "alt": "A small chapel end covered in gold mosaic. Under a barrel vault patterned with rings and stars, a half-round panel shows a lamb standing on a hill with four more lambs approaching. Below, four women stand facing forward in a row, each with a disk behind her head. Three of the disks are round; the one at the far left is square and blue.", "caption": "Chapel of San Zeno, Santa Prassede, Rome; about 817–824 C.E.", "credit": {"word": "Photo", "url": "https://commons.wikimedia.org/wiki/File:Rom,_Santa_Prassede,_Mosaik_in_der_Zeno-Kapelle,_Bild_1.JPG", "author": "Dguendel", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"}, "detail": {"image": "public/images/artworks/SanZeno-Arch.jpg", "alt": "A wall of the same chapel. A round arch of gold mosaic rises over a window, with a standing figure in white on each side. Panels of green and gold plants sit below, and carved stone columns with leafy tops stand at each edge.", "caption": "Detail: a round arch over the window, carried on reused ancient columns", "credit": {"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:Santa_Prassede_cappella_di_San_Zeno,_lato_s.JPG", "author": "Sailko", "license": "CC BY 2.5", "licenseUrl": "https://creativecommons.org/licenses/by/2.5/"}}, "detail2": {"image": "public/images/artworks/SanZeno-Doorway.jpg", "alt": "The doorway into the chapel. Two dark polished stone columns with carved tops hold a heavy stone beam carved with leaves and rows of small shapes. Worn Roman letters are cut into the beam. Gold mosaic shows above.", "caption": "Detail: the doorway, built from Roman stone carried in and reused", "credit": {"word": "Detail photo", "url": "https://commons.wikimedia.org/wiki/File:SPrassedeSZenonePortale01.jpg", "author": "MM", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"}}, "prompt": "Write down everything you recognize. You are not being scored on this. Name the features you can see and say where you saw them before.", "placeholder": "I recognize…", "revealBtn": "Show what an art historian would say", "reveal": ["Every feature in your case file is here at once. The ground is gold, so there is no room and no sky. Four women stand in a row facing straight out, almost identical to one another, each marked by a disk behind the head. The vault above them is given over entirely to pattern. A round arch frames the whole thing, and the columns at the doorway are Roman stone, carried in and built into a ninth-century wall.", "Now look again at the woman on the far left. Her nimbus is square, not round. A square nimbus was not used for saints. It was the form reserved for someone who was not one, and almost always for the living. The letters beside her head name her: Theodora, mother of the pope who built this chapel.", "This is the whole Early Medieval period in one wall. Old Roman stone holding up new Christian gold, and a mother worked into the mosaic beside the saints, marked out by the shape of her nimbus as someone of a different order."], "closing": "You can now walk into a building made twelve hundred years ago and read it. That is what an art historian does."}, "sourceNums": [64, 78], "outro": "Early Medieval closed. The Late Medieval file opens next."};

window.DECKS[2].span="circa 1400 C.E. – 1600 C.E.";

var RE01={id:"RE-01",kind:"Gilt bronze relief",title:"A Contest That Opened a New Age",object:"Sacrifice of Isaac",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Sacrifice of Isaac (competition panel)",date:"1401 C.E.",location:"Bargello Museum, Florence",artist:"Lorenzo Ghiberti",
 headline:"Look closely at the panel",
 alt:"A small gilt bronze panel in the shape of a quatrefoil, a four-lobed Gothic frame. In the upper right, a bearded man raises a knife above a kneeling nude boy, while a winged angel reaches in from the upper right to stop him. A ram stands in rocks between them. Below, two servants wait with a donkey at a stream.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Ghiberti-Isaac-1401.jpg",
 imageNote:"A gilt bronze competition panel for the Florence Baptistery’s second set of doors. The four-lobed frame was a Gothic form already in use on the Baptistery’s earlier doors; the figures inside pointed to a new age.",
 detail:{image:"public/images/artworks/Ghiberti-North-Doors.jpg",alt:"A tall photograph of one valve of a pair of ornate bronze doors on a building in Florence. The door is divided into a vertical grid of panels. Each panel holds a four-lobed quatrefoil frame, and inside each quatrefoil is a scene from the Bible carved in low bronze relief: figures standing, kneeling and gathered in groups. Carved foliage, flowers, fruit and small human heads decorate the strips of metal between the panels.",caption:"Detail: the finished North Doors of the Florence Baptistery, the commission Ghiberti won after the 1401 contest. He spent more than twenty years casting these doors, with twenty-eight scenes from the Life of Christ, each framed in its own quatrefoil.",credit:{word:"Detail photo",url:"",author:"Deror avi",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Downloaded at original size."}},
 detail2:{image:"public/images/artworks/Ghiberti-Isaac-1401-Detail.jpg",alt:"Very close surface view of a section of the bronze panel. Every curl of hair, fold of cloth and muscle is modeled in gleaming gilt metal. Small nicks and warm reflections show the real surface of the fire-gilded bronze.",caption:"Detail: a very close view of the gilt-bronze surface, showing the fineness of Ghiberti's modeling",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Ghiberti\u0027s_Competition_Panel_Close_Up.jpg",author:"Lorenzo Ghiberti (photograph by Eric Parker)",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Close view of the surface."}},
 size:"Height: 45 cm / 17.7 in. Width: 38 cm / 15 in. About the size of a laptop screen.",
 intro:"In 1401, Florence held a contest to choose a sculptor for the next bronze doors of its ancient Baptistery. Seven young artists cast small panels showing Abraham ready to sacrifice his son Isaac. The judges chose the panel by Lorenzo Ghiberti, just twenty years old. His winning design used the pointed, four-lobed frame of Gothic art, but inside it he carved bodies in the calm, muscular style of ancient Rome — a first work of a new age.",
 context:[{term:"Renaissance",pron:"REN-uh-sahns",def:"A French word meaning ‘rebirth.’ A long period of new art, learning and science in Italy and northern Europe, from about 1400 to 1600, when artists and thinkers looked back to the ancient Greeks and Romans and worked to match or surpass them."},{term:"Quatrefoil",pron:"KWAT-ruh-foyl",def:"A frame or ornament in the shape of four joined lobes, like a four-leaf clover. The quatrefoil was a favorite shape of the Gothic Middle Ages and was still in use when Ghiberti designed this panel."},{term:"Classical revival",pron:"",def:"The Renaissance return to the art and ideas of ancient Greece and Rome. Artists studied ancient statues, buildings and writings and tried to match their calm, muscular figures and balanced forms."}],
 clues:[{id:"frame",label:"Four-lobed Gothic frame",def:"The outer shape of the panel is a quatrefoil, four joined curves that come to four gentle points. The same shape already framed the scenes on the Baptistery’s earlier doors."},{id:"drama",label:"Abraham and the angel",def:"Abraham raises his knife above Isaac, who kneels on an altar. The angel reaches in from the upper right to stop him, and a ram waits in the rocks to be sacrificed in Isaac’s place."},{id:"figures",label:"Figures in the Classical style",def:"Ghiberti's Isaac kneels in the pose of an ancient Greek athlete, nude and muscular, with weight shifted onto one leg. His body revives the sculpture of ancient Rome inside a medieval Gothic frame."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a young sculptor keep the old Gothic frame but fill it with figures in the style of ancient Rome?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A four-lobed Gothic frame, the drama of Abraham and the angel, and figures in the Classical style are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"",author:"Lorenzo Ghiberti",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE01.zones={
 frame:[{x0:0,y0:0,x1:99,y1:15},{x0:85,y0:15,x1:99,y1:85},{x0:0,y0:15,x1:15,y1:85},{x0:0,y0:85,x1:99,y1:99}],
 drama:[{x0:30,y0:15,x1:95,y1:60}],
 figures:[{x0:35,y0:30,x1:85,y1:62}]
};

var RE02={id:"RE-02",kind:"Marble statue",title:"A Knight Who Stands Like a Real Person",object:"Saint George",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Saint George",date:"about 1415–17 C.E.",location:"Bargello National Museum, Florence (made for the Orsanmichele church)",artist:"Donatello",
 headline:"Look closely at the statue",
 alt:"A marble statue of a young knight standing in a niche between two decorated columns. He wears armor under a cloak that falls in soft folds across his shoulders, and he rests one hand on a tall shield in front of him. His feet are apart, one knee slightly bent, and his curly-haired head is turned a little to one side.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Donatello-St-George.jpg",
 imageNote:"A marble knight, about 6 feet 10 inches (209 cm) tall, made for an outdoor Florence church. This is the original.",
 detail:{image:"public/images/artworks/Donatello-St-George-Detail.jpg",alt:"A close view of the knight's head and shoulders. Curls of hair are carved separately on top of the head, the brow is furrowed, and the deep-set eyes look off to one side.",caption:"Detail: curls, a furrowed brow and deep-set eyes carved in marble",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Donatello,_St._George_(cropped).jpg",author:"unknown (cropped reproduction)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"This marble knight was carved in Florence between 1415 and 1417 by the sculptor Donatello. It stood in one of fourteen outdoor hollows on the walls of the Orsanmichele church, each holding a statue of a saint paid for by one of the city's guilds. Saint George stands with his weight shifted onto one leg, so that his body curves slightly, and his head turns as if hearing a sound. The original is now kept at the Bargello Museum in Florence.",
 context:[{term:"Guild",pron:"",def:"A trade or craft association. Fourteen Florence guilds commissioned statues of their patron saints for the outside walls of Orsanmichele."},{term:"Contrapposto",pron:"kon-truh-POH-stoh",def:"A pose in which a figure stands with its weight resting on one leg, so the hips and shoulders tilt in opposite directions and the body curves slightly. The pose was recovered from ancient Greek and Roman sculpture."},{term:"Niche",pron:"NEESH",def:"A hollow, arched space set into a wall or building, designed to hold a statue."}],
 clues:[{id:"contrapposto",label:"Contrapposto stance",def:"Weight shifted onto one leg, with the body bent slightly and the head turned"},{id:"drapery",label:"Soft drapery",def:"The cloak falling in soft folds across the shoulders"},{id:"face",label:"Watchful face",def:"Carved curls, a furrowed brow and eyes looking off to one side"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a sculptor want a stone knight to look relaxed and alert, as if he could move, and not stiff and still?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A contrapposto stance, soft drapery and a watchful face are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:St._Georg,_Donatello,_1416-17,_Bargello_Florenz-03.jpg",author:"Rufus46",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
RE02.zones={
 contrapposto:[{x0:26,y0:56,x1:70,y1:99.5}],
 drapery:[{x0:32,y0:20,x1:68,y1:50}],
 face:[{x0:34,y0:7,x1:56,y1:22}]
};

var RE03={id:"RE-03",kind:"Architecture",wide:true,title:"Arches in a Calm, Even Row",object:"Ospedale degli Innocenti",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Ospedale degli Innocenti (Hospital of the Innocents)",date:"begun 1419 C.E.",location:"Florence",artist:"Filippo Brunelleschi",
 headline:"Look closely at the building",
 alt:"A long, pale building front in Florence. A row of round arches on slender gray columns runs along the ground floor, with a round blue-and-white plaque between each pair of arches. Above it, evenly spaced windows with small triangular tops line the upper wall under a tiled roof.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Innocenti-Arcade.jpg",
 imageNote:"A long row of arches on slender columns runs across the front of this Florence hospital. The blue-and-white plaques between the arches were added by a later artist.",
 detail:{image:"public/images/artworks/Innocenti-Arches-Detail.jpg",alt:"Close view of two round arches meeting at a column with a carved leafy top. Gray stone outlines each arch against the white wall, and a blue-and-white round plaque with a baby in swaddling cloth sits above each arch.",caption:"Detail: a close view of two arches of the arcade, where gray stone outlines each arch, column and round plaque against the white wall",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Ospedale_degli_Innocenti,_Particolare.jpg",author:"Giacomo Augusto",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Innocenti-Cloister.jpg",alt:"A courtyard inside the same building, with pale walls. Round arches on slender gray columns run around all four sides. A large, twisting brown sculpture and two mirrored spheres stand on the paving.",caption:"Detail: the same arcade design continues around an inner courtyard of the hospital (the large sculpture is a 2019 artwork by Tony Cragg, not part of the building)",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Spedale_degli_innocenti,_chiostro_degli_uomini_01_con_scultura_di_tony_cragg,_stack,_2019-157.jpg",author:"Sailko (edited by MenkinAlRire)",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the Commons file."}},
 intro:"In 1419 the Silk Guild of Florence commissioned the architect Filippo Brunelleschi to design this building, a hospital that would take in abandoned children. The massive, towering arches of earlier Medieval cathedrals were intended to lift the eye to heaven. Here the arches are smaller and the columns slender, sized to the people who walk beneath them. Brunelleschi planned every part of the front to fit together in a calm, repeating rhythm, so the eye moves evenly across the whole building.",
 context:[{term:"Arcade",pron:"",def:"A row of arches carried on columns or piers, often running along the front or side of a building."},{term:"Classical",pron:"",def:"Of or from ancient Greek or Roman art and culture, or imitating their forms."},{term:"Proportion",pron:"",def:"The careful relationship between the sizes of the parts of a building or work of art, so that each part fits with every other."}],
 clues:[{id:"arcade",label:"Arcade of round arches",def:"Half-circle arches side by side along the ground floor, each one the same size as the next"},{id:"columns",label:"Slender columns",def:"Thin columns with carved tops holding up the arches"},{id:"proportion",label:"Measured proportion",def:"Windows, plaques and openings sized and spaced in a steady rhythm across the whole front"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a builder want a place for abandoned children to feel calm and orderly, and not grand and towering?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. An arcade, slender columns and measured proportion are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Ospedale_degli_Innocenti_Florenz.jpg",author:"Ricardalovesmonuments",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped."}};
RE03.zones={
 arcade:[{x0:9,y0:57,x1:99.5,y1:78}],
 columns:[{x0:9,y0:73,x1:99.5,y1:99.5}],
 proportion:[{x0:1,y0:29,x1:99.5,y1:47},{x0:9,y0:56,x1:99.5,y1:65}]
};

var RE04={id:"RE-04",kind:"Oil painting",title:"A Room Full of Tiny Things",object:"The Arnolfini Portrait",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Arnolfini Portrait",date:"1434 C.E.",location:"National Gallery, London",artist:"Jan van Eyck",
 headline:"Look closely at the painting",
 alt:"A man in a dark hat and a fur-trimmed cloak and a woman in a long green gown stand side by side in a bedroom, holding hands. A brass chandelier with one lit candle hangs above them, and a round mirror hangs on the back wall. A small shaggy dog stands at their feet, a pair of wooden shoes lies at the left, and daylight comes in through a window on the left.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Arnolfini-Portrait.jpg",
 imageNote:"The painter signed his name on the back wall, just above the round mirror.",
 detail:{image:"public/images/artworks/Arnolfini-Mirror-Detail.jpg",alt:"A round mirror in a dark frame with ten tiny scenes set around its edge. In the curved glass the whole room is reflected again, very small, with two figures standing in the doorway. The painter's flowing signature runs above it, and a string of beads hangs at the left.",caption:"Detail: the whole room painted again, tiny, in a curved mirror, with ten small scenes set around its frame",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Jan_van_Eyck_-_Portrait_of_Giovanni_Arnolfini_and_his_Wife_(detail)_-_WGA7695.jpg",author:"Jan van Eyck (Web Gallery of Art)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"Jan van Eyck painted this portrait of Giovanni Arnolfini, a merchant from the Italian city of Lucca, and his wife in the Flemish city of Bruges in 1434. Van Eyck worked in slow-drying paints that let him build up tiny details one thin layer at a time: the texture of fur, the gleam of the brass chandelier, the painted frame of the mirror on the back wall. The painting is one of the earliest great works of the Northern Renaissance.",
 context:[{term:"Oil paint",pron:"",def:"Paint made from powdered pigments mixed with slow-drying oil, usually linseed. The oil lets painters blend soft colors and build up tiny details one thin layer at a time."},{term:"Symbol",pron:"",def:"An object in art that stands for an idea. A dog can stand for loyalty, a single lit candle for the presence of God, a pair of shoes set aside for holy ground."},{term:"Panel painting",pron:"",def:"A painting made on a wooden board, often oak or poplar, prepared with a smooth white ground before the painter begins."}],
 clues:[{id:"symbols",label:"Symbolic objects",def:"The small dog, the single lit candle in the brass chandelier and the pair of shoes set aside, each one standing for an idea"},{id:"textures",label:"Oil-paint textures",def:"Fur trim, green wool and folds of cloth painted in thin layers so you can almost feel them"},{id:"light",label:"Soft window light",def:"Daylight from the window falling gently across the back of the room"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter spend so much care on a chandelier, a pair of shoes and a small dog?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Symbolic objects, oil-paint textures and soft window light are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_Portrait.jpg",author:"Jan van Eyck (National Gallery Photographic Department)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE04.zones={
 symbols:[{x0:36,y0:1,x1:65,y1:19},{x0:42,y0:24,x1:58,y1:36},{x0:0,y0:85,x1:15,y1:98},{x0:7,y0:51,x1:13,y1:56}],
 textures:[{x0:54,y0:30,x1:99,y1:98},{x0:7,y0:25,x1:50,y1:78}],
 light:[{x0:3,y0:0,x1:13,y1:48}]
};

var RE05={id:"RE-05",kind:"Marble sculpture",title:"Two Figures That Make One Triangle",object:"Pietà",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Pietà",date:"1498–99 C.E.",location:"St. Peter’s Basilica, Rome",artist:"Michelangelo",
 headline:"Look closely at the sculpture",
 alt:"A white marble sculpture of a seated woman in a hooded veil holding a man’s lifeless body across her lap. Her head is bowed over him. Her wide robe spreads out around her knees and falls in deep folds to the base. The group stands on a stone base in front of panels of orange-brown and green marble.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Michelangelo-Pieta.jpg",
 imageNote:"A sculpture of two figures carved in white stone, kept in St. Peter's Basilica in Rome. Michelangelo signed his name across the sash on Mary's chest \u2014 the only work he ever signed.",
 detail:{image:"public/images/artworks/Pieta-Body-Detail.jpg",alt:"Close view of the lower half of the sculpture. The polished marble of the man's body rests across the woman's lap. Her hand supports his side. Her robe falls in many deep, heavy folds across her lap and down to the stone base.",caption:"Detail: the polished marble of Christ's body and the deep folds of Mary's robe, cropped from the main image",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Michelangelo_Pieta_ret_w.jpg",author:"Stanislav Traykov (retouched version)",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"Michelangelo carved this sculpture in Rome between 1498 and 1499, when he was twenty-three years old. He chose a single block of white stone from the quarries at Carrara and polished it to a finish so smooth that the folds of cloth almost look soft. Mary holds the body of her son, Jesus, across her lap after the crucifixion. Her figure is carved larger than his, so the two of them settle together in a single calm triangle.",
 context:[{term:"Piet\u00e0",pron:"pee-ay-TAH",def:"A type of religious art showing Mary holding the body of her son, Jesus, after the crucifixion. The word is Italian for 'pity.'"},{term:"Marble",pron:"",def:"A hard, smooth white or pale stone that can be carved and polished to a fine finish. Michelangelo worked with white marble from the quarries at Carrara, in northern Italy."},{term:"Composition",pron:"",def:"The way the parts of a work of art are arranged. Here Michelangelo sets two figures inside a single triangle so the eye rests inside its outline."}],
 clues:[{id:"composition",label:"Triangle composition",def:"Mary's bowed head at the top, with her wide robe and her son's body spreading across the base, holding both figures inside one calm outline"},{id:"polish",label:"Polished marble",def:"Faces and skin worked to a glass-smooth finish, with no chisel marks left on the surface"},{id:"drapery",label:"Deep drapery",def:"The robe falling in thick, heavy folds across Mary's lap and down to the base"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a sculptor want two figures to fit inside one calm triangle, rather than spread them out around the body as Giotto did in the Lamentation?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A triangle composition, polished marble and deep drapery are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Michelangelo_Pieta_ret_w.jpg",author:"Stanislav Traykov (retouched version)",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"}};
RE05.zones={
 composition:[{x0:10,y0:13,x1:90,y1:85}],
 polish:[{x0:28,y0:33,x1:84,y1:68},{x0:48,y0:18,x1:60,y1:31}],
 drapery:[{x0:22,y0:60,x1:70,y1:84}]
};

var RE06={id:"RE-06",kind:"Panel painting",title:"A Garden Where the Lines Dance",object:"Primavera",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"La Primavera (Spring)",date:"about 1477–82 C.E.",location:"Uffizi Gallery, Florence",artist:"Sandro Botticelli",
 headline:"Look closely at the painting",
 alt:"A wide painting of nine figures in an orange grove, with flowers scattered across the grass. At the left, a young man in a red cloak reaches up toward the branches. Three women in thin white dresses dance in a circle beside him. In the center, a woman in a red cloak stands under an arch of leaves, and a winged child with a bow hovers above her. At the right, a woman in a flowered dress walks forward, while a pale blue-gray figure reaches out from the trees to grasp a fleeing woman.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Primavera.jpg",
 imageNote:"A very large panel painting, about ten feet wide and nearly seven feet tall. It was made for a young Medici cousin to hang in his Florence townhouse.",
 detail:{image:"public/images/artworks/Primavera-Venus-Detail.jpg",alt:"Close view of a woman in the center of the painting. Her head tilts gently to one side, and a thin veil lies over her long, wavy hair. She wears a see-through white dress with gold trim and a red cloak, and she raises one hand.",caption:"Detail: Venus at the center, a thin veil over her hair and fine curling lines along every strand, cropped from the main image",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project_-_Venus.jpg",author:"Sandro Botticelli (photograph by Google Art Project)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Primavera-Flora-Detail.jpg",alt:"Close view of two figures on the right side of the painting. One woman wears a dress covered with small painted flowers and holds a fold of the cloth full of roses. Beside her, a second woman in a thin, see-through gown turns, while a blue-gray figure reaches toward her from the trees.",caption:"Detail: on the right, Flora in her flowered dress beside Chloris, who turns as Zephyrus reaches from the trees, cropped from the main image",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project_(cropped)_(Chloris%2BZephyrus%3DFlora).jpg",author:"Sandro Botticelli (photograph by Google Art Project)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"Sandro Botticelli painted Primavera in Florence around 1480 for a young cousin of Lorenzo de' Medici, the city's ruler. In an orange grove near the sea, nine figures from the old Greek and Roman stories stand side by side across the panel. Venus, the goddess of love, stands at the center under an arch of leaves; her son Cupid aims an arrow above her. Each figure is outlined in long, curving lines so clear the eye can follow one across the whole painting.",
 context:[{term:"Mythology",pron:"",def:"Old stories of gods and goddesses from the Greek and Roman worlds. Renaissance painters often returned to these stories after a thousand years of mostly Christian subjects."},{term:"Tempera",pron:"",def:"A paint made by mixing powdered pigments with egg yolk. It dries quickly and gives bright, clear colors. Botticelli painted Primavera in tempera on a large wooden panel."},{term:"Allegory",pron:"",def:"A painting where each figure or object stands for an idea. In Primavera, Venus stands for love, Flora for spring, and the dancing Graces for the beauties of a well-ordered life."}],
 clues:[{id:"outlines",label:"Flowing lines",def:"Long, curving outlines on arms, hair and thin cloth that lead the eye across the whole painting"},{id:"garden",label:"Flowering grove",def:"Hundreds of flowers across the grass, roses spilling from a dress, and oranges hanging in the trees"},{id:"row",label:"Row of mythic figures",def:"Nine figures from the old Greek and Roman stories, standing and dancing side by side across the front of the panel"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter arrange figures in a row across a garden, drawing each one in long, flowing lines, rather than crowd them close together?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Flowing lines, a flowering grove and a row of mythic figures are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg",author:"Sandro Botticelli (photograph by Google Art Project)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE06.zones={
 outlines:[{x0:16,y0:24,x1:46,y1:90},{x0:70,y0:22,x1:97,y1:92}],
 garden:[{x0:3,y0:80,x1:99,y1:99},{x0:59,y0:30,x1:76,y1:78}],
 row:[{x0:4,y0:18,x1:98,y1:92}]
};

var RE07={id:"RE-07",kind:"Architecture",title:"A Building Worked Out Like a Puzzle",object:"Tempietto",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Tempietto (San Pietro in Montorio)",date:"begun 1502 C.E.",location:"San Pietro in Montorio, Rome",artist:"Donato Bramante",
 headline:"Look closely at the building",
 alt:"A small round stone chapel standing in a courtyard. A ring of tall, plain gray columns surrounds the round walls and holds up a curved balcony with a stone railing. Above the balcony, a round upper wall with shell-shaped hollows supports a dome covered in ribbed metal, with a small knob at the very top. Wide, curved steps circle the base.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Tempietto.jpg",
 imageNote:"A small round chapel built on the spot where tradition says Saint Peter was crucified. Commissioned by the Spanish royal family, it stands in the courtyard of San Pietro in Montorio.",
 detail:{image:"public/images/artworks/Tempietto-Columns-Detail.jpg",alt:"Close view of the lower half of the chapel. A ring of plain gray stone columns with simple square caps surrounds the round inner wall. Above the columns, a carved horizontal band shows small panels with religious symbols. A stone-balustered balcony sits above the band. Niches and a doorway are visible between the columns.",caption:"Detail: the ring of Doric columns, with plain shafts and simple square caps, carrying the carved stone band and the balcony above, cropped from the main image",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Tempietto_del_Bramante_Vorderseite.jpg",author:"Peter1936F",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Tempietto-Plan.png",alt:"A black-and-white floor plan seen from above. Three circles nest around a round center. A ring of sixteen small dark circles, the columns, sits between the outer circles and the inner walls. A scale bar at the bottom runs from 0 to 10 meters.",caption:"Detail: a floor plan of the chapel, seen from above, shows a ring of sixteen columns around a round inner room (the scale bar is 10 m)",credit:{word:"Floor plan",url:"https://commons.wikimedia.org/wiki/File:Grundriss_vom_Tempietto_di_Bramante.svg",author:"JTSH26",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Floor plan from Wikimedia Commons."}},
 size:"",
 intro:"Donato Bramante began this small stone chapel in Rome in 1502, on the spot where tradition says Saint Peter was crucified. The design is a round temple in the ancient Roman style, with every proportion worked out by Bramante himself. Sixteen slender columns ring the base, carrying a carved stone band, a ringed balcony and a smooth dome. The whole stands on three circular steps, each narrower than the one below, so the eye climbs ring by ring from the courtyard to the sky.",
 context:[{term:"Doric order",pron:"",def:"The simplest of the three ancient Greek column styles. A Doric column has no base, a plain round shaft, and a simple square cap at the top. The horizontal band above a row of Doric columns is divided into small panels."},{term:"Centrally planned",pron:"",def:"A building designed around a single center point, so the plan looks the same from every side. The Tempietto is a circle; a square or an equal-armed cross can also be centrally planned."},{term:"High Renaissance",pron:"",def:"The brief, balanced peak of Renaissance art and architecture, from about 1495 to 1520, when painters, sculptors and architects worked with perfect proportion, calm order and clear classical forms."}],
 clues:[{id:"layers",label:"Narrowing tiers",def:"Each level is narrower than the one below, from the wide steps at the ground to the small finial at the top of the dome"},{id:"curves",label:"Ringed form",def:"The same round shape returns at larger and smaller sizes, from the circular steps to the crown of the dome"},{id:"doric",label:"Ring of Doric columns",def:"A ring of sixteen plain columns with simple square capitals, carrying the carved stone band and the balcony above"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a builder work out every part to answer to the others, so that nothing could be added or removed, rather than let the building grow piece by piece?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Narrowing tiers, a ringed form and a ring of Doric columns are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Tempietto_del_Bramante_Vorderseite.jpg",author:"Peter1936F",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
RE07.zones={
 layers:[{x0:12,y0:1,x1:88,y1:99}],
 curves:[{x0:30,y0:33,x1:73,y1:41},{x0:24,y0:15,x1:76,y1:31},{x0:1,y0:88,x1:98,y1:99}],
 doric:[{x0:14,y0:57,x1:86,y1:86}]
};

var RE08={id:"RE-08",kind:"Fresco wall painting",title:"A Wall That Opens Into a Chapel",object:"The Holy Trinity",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Holy Trinity",date:"about 1426–28 C.E.",location:"Santa Maria Novella, Florence",artist:"Masaccio",
 headline:"Look closely at the painting",
 alt:"A tall wall painting in a pink-and-white painted frame. Two fluted columns and a round arch frame a deep, arched chapel whose ceiling is covered in rows of square boxes. Inside the chapel, a bearded man in red and blue stands behind a crucified figure. Two standing figures in purple and red robes stand beside the cross. Two kneeling figures in red and blue robes kneel outside the arch. Below, on a stone ledge, a skeleton lies on a tomb.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Trinity.jpg",
 imageNote:"A very large wall painting in Santa Maria Novella, a Dominican church in Florence. The wall is flat, but Masaccio made it look like a deep side chapel carved into it.",
 detail:{image:"public/images/artworks/Trinity-Ceiling.jpg",alt:"Close view of the top of the painting. A pink round arch frames a curved ceiling covered in rows of small boxes. The boxes are larger at the front and smaller and closer together toward the back, where a figure in red and blue stands.",caption:"Detail: the coffered ceiling, where the painted boxes shrink and crowd together toward the back of the chapel",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Masaccio,_trinit%C3%A0,_dettaglio_2.jpg",author:"Masaccio (scan of a reproduction in John T. Spike, Masaccio, 2002)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Close view of the ceiling area of the fresco."}},
 detail2:{image:"public/images/artworks/Trinity-Donors-Detail.jpg",alt:"Close view of the lower half of the painting. On the left, a man in a red cloak and hood kneels with hands clasped. Inside the arch, a woman in dark purple stands beside the cross, and a young man in a rose robe stands on the other side. On the right, a woman in a dark blue veil kneels with hands clasped.",caption:"Detail: the Lenzi donors kneel outside the arch, with Mary and John the Evangelist inside, cropped from the main image",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Masaccio_-_Trinity_-_Santa_Maria_Novella.jpg",author:"Oursana (as assumed on Commons)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"Masaccio finished this large wall painting in Florence around 1427, when he was in his mid-twenties. He painted it directly onto the wet plaster of a church wall, which has stayed flat for six hundred years. Yet when the viewer stands in front of it, a deep chapel seems to open into the wall: columns step back, the ceiling shrinks toward the distance, and five figures stand at clearly different depths. On the ledge below, a painted skeleton reminds the viewer that all flesh must die.",
 context:[{term:"Fresco",pron:"",def:"A painting made directly on fresh, wet plaster. The colors soak into the plaster and dry with the wall, becoming part of the building. A fresco cannot be moved."},{term:"Linear perspective",pron:"",def:"A way of drawing on a flat surface that makes the space look deep and real. Lines that are parallel in the real world are drawn so they meet at a single point in the distance, pulling the eye into the picture."},{term:"Donor portrait",pron:"",def:"A picture of the person (or family) who paid for a religious artwork, placed within the painting as a kneeling witness to the holy scene. Here the Lenzi family kneels outside the arch at the front."}],
 clues:[{id:"coffers",label:"Shrinking coffers",def:"Ceiling boxes that grow smaller and closer together toward the back of the chapel, pulling the eye into the distance"},{id:"architecture",label:"Painted architecture",def:"A rose arch, carved capitals and pairs of columns shaded to look like a solid stone chapel built into the wall"},{id:"donors",label:"Kneeling donors",def:"A man in red on the left and a woman in black on the right, kneeling outside the arch as witnesses to the holy scene"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter want a flat wall to feel like a deep chapel the viewer could step into?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Shrinking coffers, painted architecture and kneeling donors are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:Masaccio_-_Trinity_-_Santa_Maria_Novella.jpg",author:"Oursana (as assumed on Commons)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE08.zones={
 coffers:[{x0:26,y0:17,x1:75,y1:33}],
 architecture:[{x0:18,y0:11,x1:82,y1:30},{x0:8,y0:18,x1:20,y1:62},{x0:79,y0:18,x1:93,y1:62}],
 donors:[{x0:4,y0:52,x1:22,y1:75},{x0:78,y0:52,x1:96,y1:75}]
};

var RE09={id:"RE-09",kind:"Oil painting",title:"A Winter World Seen From Above",object:"Hunters in the Snow",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Hunters in the Snow",date:"1565 C.E.",location:"Kunsthistorisches Museum, Vienna",artist:"Pieter Bruegel the Elder",
 headline:"Look closely at the painting",
 alt:"A winter landscape seen from a hilltop. In the lower left, three hunters with spears and a pack of dogs trudge down a snowy slope past tall, bare, dark trees. Beside them, people gather around a fire outside a brick inn. Far below, a wide valley holds frozen ponds with many tiny skaters, a village with a church tower, a mill and a stone bridge. Jagged snowy mountains rise in the distance under a gray-green sky, and black birds fly overhead.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Hunters.jpg",
 imageNote:"An oil painting on wood panel, about five feet wide. Bruegel painted six such panels showing the months of the year. This one, for December and January, is kept in Vienna.",
 detail:{image:"public/images/artworks/Hunters-Mill.jpg",alt:"Close view of the lower right of the painting. A stone bridge with two arches crosses a frozen pond beside a mill with deep snow on its roofs. A tiny figure carries a bundle of sticks across the bridge. Two women in white caps stand on the ice, joined by a thin line. Dark figures stand on the ice farther back.",caption:"Detail: the mill and frozen pond in the middle distance, where Bruegel paints the figures smaller and softer so the eye can measure how far it has traveled into the picture",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_(Detail,_Mill).jpg",author:"Pieter Bruegel the Elder (edited by Zorr\u00f3Aszter)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Close view, cropped from the main image."}},
 detail2:{image:"public/images/artworks/Hunters-Fire.jpg",alt:"Close view of the lower left of the painting. Outside a brick building, three people work around a small fire on the snow: one leans over a round object on a stand, one reaches into the fire with a long tool, and one bends over holding a bundle of straw. A small child in a dark cap stands at the right. Streaky brushstrokes show in the flames and smoke.",caption:"Detail: villagers tending a small fire outside the inn, one of many scenes of everyday life Bruegel places throughout the landscape",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:Hunters_in_the_snow,_1565_-_detail1.jpg",author:"Karmakolle",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",changes:"Close view, cropped from the main image."}},
 size:"",
 intro:"Pieter Bruegel the Elder painted this winter scene in Antwerp in 1565, one of six panels showing the months of the year \u2014 this one for December and January. Three hunters trudge home with their dogs across a snow-covered hilltop. Below them a whole village lives through the shortest, coldest days of the year: skaters cross a frozen pond, children slide and play, people stoke a small fire outside an inn. In the distance, jagged, snow-topped mountains fade into a gray-green sky.",
 context:[{term:"Landscape",pron:"",def:"A painting whose main subject is a stretch of natural or lived-in land \u2014 hills, fields, villages, mountains or sea \u2014 rather than a particular person or event. Bruegel's winter scene is one of the first great Northern landscapes in European art."},{term:"Atmospheric perspective",pron:"",def:"A way of showing depth by changing color rather than by drawing converging lines. As the land stretches into the distance, Bruegel paints it in paler blues and grays and softens its edges, as the eye really sees distant air and haze."},{term:"Northern Renaissance",pron:"",def:"The Renaissance as it unfolded in the Low Countries and northern Europe \u2014 Flanders, the Netherlands, Germany \u2014 from the late 1400s into the 1500s. Northern painters favored detailed landscapes, oil paint and scenes of everyday life, often without the classical mythology of the Italian South."}],
 clues:[{id:"slope",label:"Tilted hillside",def:"The ground drops steeply from the hunters' feet into the valley below, a high vantage point that lets the whole winter scene unfold at once"},{id:"atmosphere",label:"Blue distance",def:"Mountains and sky painted in paler blues and grays, as if seen through the real haze of distant winter air"},{id:"life",label:"Villagers at every distance",def:"People working and playing throughout the painting \u2014 tending a fire at left, skating on the frozen ponds, crossing the bridge \u2014 shown at every scale from large to tiny"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter choose a high viewpoint that shows a whole village at work, rather than a close view of only the hunters?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A tilted hillside, blue distance and villagers at every distance are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Image",url:"https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_-_opt.jpg",author:"Pieter Bruegel the Elder (retouched image)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE09.zones={
 slope:[{x0:3,y0:45,x1:62,y1:98}],
 atmosphere:[{x0:25,y0:8,x1:98,y1:40}],
 life:[{x0:1,y0:55,x1:20,y1:70},{x0:20,y0:55,x1:60,y1:82},{x0:55,y0:50,x1:98,y1:72},{x0:75,y0:72,x1:99,y1:98}]
};

var RE10={id:"RE-10",kind:"Fresco wall painting",title:"A Grand Hall Full of Thinkers",object:"The School of Athens",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The School of Athens",date:"1509–11 C.E.",location:"Vatican Palace, Rome",artist:"Raphael",
 headline:"Look closely at the painting",
 alt:"A huge wall painting under a curved arch in a decorated room. Inside the painting, a series of tall stone arches and vaulted ceilings recedes toward a bright blue sky. Statues stand in recesses at left and right. On a wide flight of steps, dozens of robed figures stand, lean, kneel and recline in groups. Two men in the center, one in red and one in blue, walk side by side. A patterned floor of squares and rectangles runs across the foreground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/School.jpg",
 imageNote:"A very large fresco in the Stanza della Segnatura, Pope Julius II's private library in the Vatican Palace. The painted hall is eighteen feet tall and more than twenty-five feet wide.",
 detail:{image:"public/images/artworks/School-Pythagoras.jpg",alt:"Close view of the lower left of the painting. A bearded man in a pink robe and white cloak kneels beside a stone block, writing in a large book. A curly-haired boy beside him holds a small black tablet marked with a diagram. Around them stand a man in a turban-like cap, a long-haired figure in white, and a bearded man in an orange robe holding a slate.",caption:"Detail: Pythagoras writes at the lower left, surrounded by students; the figure in the white turban behind him is the Arab philosopher Averroes",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Cropped_image_of_Pythagoras_from_Raphael%27s_School_of_Athens.jpg",author:"Raphael (cropped reproduction)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/School-Raphael.jpg",alt:"Close view of the far right of the painting. A young man in a black cap looks straight out of the painting, circled in yellow. Beside him, an older man in a gray-white cap looks out toward the viewer's right. In front of them, a figure in a gold and blue cloak stands with his back to us, and a bearded man in a red cap looks to the left.",caption:"Detail: Raphael himself (circled), traditionally identified as the young man in the black cap at the far right of the crowd, looking out at the viewer",credit:{word:"Detail photo",url:"https://commons.wikimedia.org/wiki/File:The_School_of_Athens_by_Raphael_in_the_Apostolic_Palace.jpg",author:"Bradley Weber",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Cropped, brightened and circled."}},
 size:"",
 intro:"Raphael painted this wall in Pope Julius II's private library between 1509 and 1511, when he was in his mid-twenties. He gathered more than fifty of the greatest Greek and Roman thinkers into a single imagined hall: Plato and Aristotle at the center, Pythagoras writing at lower left, Euclid bent over a diagram at lower right. The painter himself stands with them at the far right, looking out. Every line of the grand classical building meets at a single spot between the two central philosophers.",
 context:[{term:"Humanism",pron:"",def:"The intellectual movement at the heart of the Renaissance, which placed human reason, dignity and the study of ancient Greek and Roman writers at the center of learning. Raphael paints the greatest ancient thinkers as if they were gathered together in a single hall."},{term:"Idealization",pron:"",def:"Showing figures or buildings not as any one real person or place looked, but as they ideally should: calm, dignified and perfectly balanced. Raphael gives every philosopher a strong, composed body and sets them in a hall more perfectly proportioned than any that existed."},{term:"Vanishing point",pron:"",def:"The single spot in a picture where all the lines that are parallel in the real world \u2014 floor edges, tops of walls, rows of arches \u2014 are drawn to meet. In this painting the vanishing point falls between the heads of Plato and Aristotle."}],
 clues:[{id:"structure",label:"Receding classical hall",def:"Barrel vaults, round arches and coffered ceilings that recede toward the far wall, modeled on the great buildings of ancient Rome"},{id:"philosophers",label:"Groups of philosophers",def:"Clusters of thinkers scattered across the steps and the foreground, each busy with a different idea \u2014 reading, writing, arguing or lecturing"},{id:"vp",label:"A single vanishing point",def:"The spot between Plato and Aristotle where the floor lines, arches and ceiling bands all meet, pulling the whole scene together"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter gather so many different thinkers into one grand hall, rather than paint each one alone?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A receding classical hall, groups of philosophers and a single vanishing point are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"https://commons.wikimedia.org/wiki/File:The_School_of_Athens_by_Raphael_in_the_Apostolic_Palace.jpg",author:"Bradley Weber",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/"}};
RE10.zones={
 structure:[{x0:0,y0:5,x1:99,y1:38}],
 philosophers:[{x0:2,y0:69,x1:19,y1:95},{x0:35,y0:47,x1:55,y1:70},{x0:40,y0:65,x1:62,y1:85},{x0:62,y0:64,x1:83,y1:95},{x0:80,y0:55,x1:99,y1:85}],
 vp:[{x0:44,y0:30,x1:58,y1:48}]
};

var RE11={id:"RE-11",kind:"Oil painting",title:"A Smile With No Hard Edges",object:"Mona Lisa",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Mona Lisa",date:"about 1503–19 C.E.",location:"Louvre, Paris",artist:"Leonardo da Vinci",
 headline:"Look closely at the painting",
 alt:"A half-length portrait of a woman with long dark hair under a thin veil, seated and turned slightly to her right, with a faint smile. Her face and chest glow in warm tones against a dark dress. Her folded hands rest on the arm of a chair at the bottom. Behind her, a winding landscape of rocky hills, a path and water fades into a blue-green haze beneath a pale sky.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/MonaLisa.jpg",
 imageNote:"A small portrait in oil on a poplar panel, only 30 inches tall \u2014 much smaller than most visitors to the Louvre expect. The sitter was Lisa Gherardini; \"Mona\" comes from an old Italian title, ma donna, meaning \"my lady.\"",
 detail:{image:"public/images/artworks/MonaLisa-Face.jpg",alt:"A close view of Mona Lisa’s face: the famous half-smile, the corners of the mouth and the eyes fading softly into shadow with no hard line. The fine web of cracks across the paint surface is more than five hundred years of age showing through.",caption:"Detail: Mona Lisa’s face — the smile, lip edges and eye corners where Leonardo’s sfumato is unmistakable",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Leonardo_di_ser_Piero_da_Vinci_-_Portrait_de_Mona_Lisa_(dite_La_Joconde)_-_Louvre_779_-_Detail_(hands).jpg",author:"Leonardo da Vinci (photographic reproduction)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/MonaLisa-Landscape.jpg",alt:"Close view of part of the background landscape. Dark, softly blurred shapes of trees and hills sit above flat bands of muted green, brown and gray land and water. A web of fine cracks covers the surface, and a small, low structure that may be a bridge sits near the bottom center.",caption:"Detail: part of the hazy landscape behind her, painted in thin, soft layers of muted green and brown (the fine cracks come from the paint's age)",credit:{word:"Detail image",url:"https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_-_Mona_Lisa_(detail)_-_WGA12715.jpg",author:"Leonardo da Vinci (via the Web Gallery of Art)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 size:"",
 intro:"Leonardo da Vinci began this small portrait of a Florentine silk merchant's wife, Lisa Gherardini, around 1503 and kept working on it for the rest of his life. He carried the panel with him through Italy and finally to France, where he died in 1519. Lisa sits turned partway toward the viewer, her folded hands resting on the arm of a chair. Behind her, a winding path, rocky hills and distant water fade softly into a blue-green haze.",
 context:[{term:"Sfumato",pron:"sfoo-MAH-toh",def:"An Italian word meaning 'smoky.' A technique Leonardo made famous: edges are blurred so softly that one shade fades into the next with no hard line between them, as if seen through a thin veil of smoke."},{term:"Three-quarter view",pron:"",def:"A pose in a portrait where the sitter turns partway toward the viewer, so you see most of the face plus the side of the nose and one ear. Leonardo's Mona Lisa set this as the standard portrait pose for centuries after."}],
 clues:[{id:"pose",label:"Three-quarter pose",def:"The body turned partway toward the viewer, with the folded hands forming a wide base that leads the eye up through the shoulders to the face"},{id:"sfumato",label:"Sfumato edges",def:"Light fading smoothly into shadow around the eyes, mouth, jaw and fingers, with no hard outline anywhere"},{id:"landscape",label:"Hazy distant landscape",def:"Rocky hills and winding water fading into blue-green haze behind her, painted so the eye reads real distance"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter leave the edges soft and the smile hard to pin down, rather than draw every feature in a clear line?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. A three-quarter pose, sfumato edges and a hazy landscape are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Image",url:"https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_-_Mona_Lisa_(Louvre,_Paris).jpg",author:"Leonardo da Vinci (photographic reproduction)",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE11.zones={
 pose:[{x0:6,y0:11,x1:95,y1:98}],
 sfumato:[{x0:35,y0:22,x1:58,y1:40}],
 landscape:[{x0:62,y0:18,x1:97,y1:55},{x0:3,y0:20,x1:33,y1:62}]
};

var RE12={id:"RE-12",kind:"Architecture",wide:true,title:"A Dome That Could Not Be Built",object:"Dome of Florence Cathedral",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Dome of Florence Cathedral (Santa Maria del Fiore)",date:"1420–1436 C.E.",location:"Florence",artist:"Filippo Brunelleschi",
 headline:"Look closely at the building",
 alt:"A view of the city of Florence from across the Arno River. The red-brick dome of the Cathedral rises above the rooftops, topped by a small white marble tower with a gold ball. Beside it stands a tall, slender bell tower (Giotto’s Campanile) and the striped marble body of the cathedral. Round windows show on the sides of the eight-sided wall below the dome. Hazy hills rise behind the city.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Florence-Dome.jpg",
 imageNote:"The Florence Cathedral (Santa Maria del Fiore) seen from across the Arno River. The dome sits on an eight-sided base with a large round window on each side. Next to it rises Giotto’s Campanile, the free-standing bell tower built in the 1300s.",
 detail:{image:"public/images/artworks/Florence-Dome-Detail.jpg",alt:"A close view of the dome, cropped from the main image. The eight-sided marble base below the dome shows large round windows; from the base, eight white stone ribs curve up over the red-tiled dome to a small white marble lantern crowned with a gold ball.",caption:"Detail: a close view of the dome, cropped from the main image — the red-tiled surface, the eight white stone ribs, the round windows on the base, and the marble lantern on top",credit:{word:"Photo",url:"",author:"Stefano Vigorelli",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/Dome-Herringbone-Detail.jpg",alt:"A ground-level brick reconstruction in a park, showing the eight-sided base of Brunelleschi’s dome at roughly life-sized scale. Red bricks laid in zig-zag diagonal lines rise up the walls; small round openings appear near the top of several faces.",caption:"Detail: a modern reconstruction in a Florence park (Parco dell’Anconella) showing the shape of Brunelleschi’s dome at ground level — the eight-sided base, round windows, and the zig-zag brickwork pattern Brunelleschi used higher up",credit:{word:"Photo",url:"",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/",changes:"Downloaded at original size."}},
 size:"Height: about 114 m / 375 ft from the cathedral floor to the top of the lantern. Inner diameter at the base: about 42 m / 138 ft — wider than a doubles tennis court is long.",
 intro:"Filippo Brunelleschi finished the dome of the Florence Cathedral in 1436, more than a hundred years after the cathedral itself had been begun. The church had been left with a vast hole at the top because no one had figured out how to build a dome wide enough to cover it. Brunelleschi designed an octagonal brick vault, more than 140 feet across, that rose ring by ring with no wooden scaffolding from the ground. His dome is still the largest brick-and-mortar dome ever built.",
 context:[{term:"Drum",pron:"",def:"The tall, round or many-sided wall that holds up a dome. The Florence Cathedral’s drum is octagonal — eight-sided — with a large round window on each of its faces."},{term:"Herringbone brickwork",pron:"",def:"A brickwork pattern in which the bricks are laid in a zig-zag of diagonal lines, like the bones of a fish. Brunelleschi used it to lock millions of bricks together as the dome rose, letting each ring stay in place without wooden supports from the ground."},{term:"Oculus",pron:"OCK-yuh-lus",def:"A round window or opening in a wall or dome; Latin for ‘eye.’ The drum of the Florence dome has eight oculi, one on each face, that let daylight into the space below the dome."}],
 clues:[{id:"drum",label:"Octagonal drum",def:"The eight-sided marble wall just below the dome, pierced with a large round window on each of its faces"},{id:"oculi",label:"Round oculi",def:"The circular windows set into the sides of the drum, bringing daylight into the space below the dome"},{id:"bricks",label:"Herringbone brick dome",def:"The red-brick dome itself, built in a zig-zag pattern that let each ring of brick hold its place without wooden supports from the ground"}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a builder borrow a brick pattern from ancient Rome to solve a problem no one else of his day could solve?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. An octagonal drum, round oculi and a herringbone brick dome are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"",author:"Stefano Vigorelli",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}};
RE12.zones={
 drum:[{x0:65,y0:38,x1:84,y1:53}],
 oculi:[{x0:66,y0:38,x1:84,y1:46}],
 bricks:[{x0:66,y0:14,x1:84,y1:38}]
};

var RE13={id:"RE-13",kind:"Gilt bronze relief",wide:true,title:"Twenty-Seven Years in Gold",object:"Gates of Paradise",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Gates of Paradise (East Doors, Florence Baptistery)",date:"1425–1452 C.E.",location:"Museo dell’Opera del Duomo, Florence (replicas on the Baptistery)",artist:"Lorenzo Ghiberti",
 headline:"Look closely at the panel",
 alt:"A gilt bronze panel from Ghiberti’s East Doors. In the center, three tall round arches fall back into the distance over a tiled floor. Groups of robed figures stand in the foreground: an old man leaning on another, a woman between younger figures, two dogs at a trough. On the right, an elderly man sits blessing a kneeling young man. Small distant figures and a landscape are carved in the upper right, nearly flat against the background. Decorative strips of standing figures and carved heads frame the panel on either side.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Gates-Isaac-Jacob-Esau.jpg",
 imageNote:"A single panel from Ghiberti’s East Doors (the Gates of Paradise). This panel tells the story of Isaac, Esau, and Jacob from the book of Genesis in several scenes at once, inside one deep, arched hall.",
 detail:{image:"public/images/artworks/Gates-of-Paradise.jpg",alt:"A view of the full Gates of Paradise as installed in the Museo dell’Opera del Duomo in Florence. Two tall golden door valves stand side by side, each divided into five large square panels. Decorative strips with small standing figures and carved heads run between the panels. A group of marble statues of the Baptism of Christ stands on a shelf above the doors.",caption:"Detail: the Gates of Paradise as a whole, with Ghiberti’s ten Bible scenes arranged in two columns of five. The panel on the main image is the third panel down on the left door.",credit:{word:"Photo",url:"",author:"Yair-haklai",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Downloaded at original size."}},
 size:"Each panel: about 79 × 79 cm (31 × 31 in). Height of the whole doors: about 5.2 m / 17 ft.",
 intro:"Twenty-four years after winning the 1401 contest, Lorenzo Ghiberti was given a second commission: a new set of bronze doors for the east side of the Florence Baptistery. He abandoned the four-lobed Gothic frame of his North Doors and set his new scenes in ten large square panels. Each panel shows one story from the Bible, told in several moments at once. Michelangelo later called these the ‘Gates of Paradise.’ Ghiberti worked on them for twenty-seven years, finishing in 1452.",
 context:[{term:"Schiacciato",pron:"skyaht-CHAH-toh",def:"An Italian word meaning 'squashed or flattened.' A relief carving technique in which the design is cut only very slightly into the surface."},{term:"Perspective relief",pron:"",def:"Relief sculpture that uses the rules of linear perspective, as a painting does."},{term:"Gilt bronze",pron:"",def:"Bronze that has been coated and fired with a very thin layer of gold, so the dark metal takes on a lasting golden surface."}],
 clues:[{id:"perspective",label:"Receding Classical arches",def:"The architecture inside the panel."},{id:"schiacciato",label:"Shrinking distant figures",def:"The upper right corner of the panel."},{id:"scene",label:"Bible story",def:"The group of large figures in the foreground."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a sculptor want a bronze panel to look like a painting that opens into real depth, rather than a flat picture in gold?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Receding Classical arches, shrinking distant figures and a Bible story are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"",author:"Sailko",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"}};
RE13.zones={
 perspective:[{x0:28,y0:15,x1:62,y1:55}],
 schiacciato:[{x0:70,y0:12,x1:85,y1:50}],
 scene:[{x0:25,y0:60,x1:78,y1:95}]
};

var RE14={id:"RE-14",kind:"Fresco wall painting",wide:true,title:"A Story Told Three Times at Once",object:"The Tribute Money",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Tribute Money",date:"about 1425 C.E.",location:"Brancacci Chapel, Santa Maria del Carmine, Florence",artist:"Masaccio",
 headline:"Look closely at the fresco",
 alt:"A horizontal wall painting. In the center, a bearded Jesus in pink and blue robes stands among his apostles, every head ringed by a flat gold disk. A young man in an orange tunic, seen from the back, points at Jesus. On the far left, a crouching figure reaches into the mouth of a fish beside a stretch of water. On the far right, the same figure in orange robes gives a coin to the man in the orange tunic in front of a stone building. Bare trees and brown mountains rise behind the group.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Tribute-Money.jpg",
 imageNote:"A fresco on the upper left wall of the Brancacci Chapel in Santa Maria del Carmine, Florence. Masaccio painted several frescoes for the chapel.",
 detail:{image:"public/images/artworks/Tribute-Money-Center.jpg",alt:"A close view of the central group: Jesus stands at the center in a pink tunic and blue robe, pointing with his right hand. Peter stands just to his left in a yellow and pink robe. The tax collector, seen from behind in a short orange tunic, holds out one hand toward Jesus. Several apostles with golden halos look on from behind.",caption:"Detail: the central group, cropped from the main image — Jesus, the apostles, and the tax collector in his orange tunic",credit:{word:"Detail photo",url:"",author:"Eugene_a",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Close view of the central group."}},
 size:"Height: about 247 cm / 8 ft. Width: about 597 cm / 19.6 ft — nearly as wide as a modern garage.",
 intro:"Masaccio was in his early twenties when he painted this scene around 1425 on the wall of the Brancacci Chapel in Florence. He was dead at twenty-six, leaving behind only a handful of works, but this fresco changed the course of painting in Italy. It shows a story from the Bible: Jesus is asked to pay a Roman tax. He tells Peter to catch a fish and find a coin in its mouth; Peter then pays the tax. Masaccio folds all three moments into one scene.",
 context:[{term:"Classical dress",pron:"",def:"Long flowing robes modeled on the togas and tunics of ancient Greek and Roman art."},{term:"Volume",pron:"",def:"The look of three-dimensional roundness and solid weight in a figure painted on a flat surface."},{term:"Halo",pron:"",def:"The circle of light hovering over the head of a holy figure. Differs from the Medieval nimbus — the fixed gold disk placed behind the head."}],
 clues:[{id:"robes",label:"Classical dress",def:"The robes worn by the apostles."},{id:"volume",label:"Weighted figures",def:"The central group of apostles."},{id:"halos",label:"Golden halos",def:"Above the heads of the holy figures."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a painter dress Bible figures like ancient Romans, rather than in the clothes of his own day or earlier church art?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Classical dress, weighted figures and golden halos are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"",author:"Web Gallery of Art",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE14.zones={
 robes:[{x0:18,y0:40,x1:78,y1:92}],
 volume:[{x0:20,y0:35,x1:55,y1:85}],
 halos:[{x0:30,y0:15,x1:68,y1:32}]
};

var RE15={id:"RE-15",kind:"Bronze sculpture",title:"The First Nude Since Antiquity",object:"David",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"David",date:"about 1440 C.E.",location:"Bargello Museum, Florence",artist:"Donatello",
 headline:"Look closely at the figure",
 alt:"A bronze statue of a slender, bare-chested young man wearing a laurel-wreathed shepherd's hat, shown from the top of the hat down to the hip line. The figure's shoulders tilt gently and one hand rests on the left hip. The surface of the bronze has a dark brown patina.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Donatello-David-WaistUp.jpg",
 imageNote:"A bronze statue, about five feet tall, cast for the inner courtyard of the Medici palace in Florence. The image is cropped at the waist; the full statue stands in the Bargello Museum.",
 detail:{image:"public/images/artworks/Donatello-David-Head.jpg",alt:"A close view of the top of the statue: a laurel-wreathed broad-brimmed hat, long curling hair, a youthful face with downcast eyes, and the top of a bare shoulder.",caption:"Detail: a close view of David's laurel-crowned hat and youthful face, showing Donatello's fine modeling of the bronze",credit:{word:"Detail photo",url:"",author:"Rufus46; resized and lighting-adjusted by Muschio Di Quercia",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/",changes:"Close view of the head and hat of the same statue."}},
 detail2:{image:"public/images/artworks/Donatello-David-Goliath.jpg",alt:"A close view of the base of the statue: David's bare foot rests on top of the severed head of the giant Goliath, with its elaborate winged helmet. The tip of David's sword lies beside Goliath's head, and an ornate bronze base with a laurel-leaf pattern sits on a marble pedestal.",caption:"Detail: the base of the statue — David's foot rests on the severed head of the giant Goliath, with the tip of David's sword beside it",credit:{word:"Detail photo",url:"",author:"Miguel Hermoso Cuesta",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Close view of the base of the same statue."}},
 size:"Height: about 158 cm / 5.2 ft. The first freestanding nude statue cast in bronze since the fall of Rome.",
 intro:"Donatello cast this bronze David for the inner courtyard of the Medici palace in Florence around 1440. It was the first freestanding nude statue cast in bronze since the fall of Rome, more than a thousand years earlier. David stands at ease after killing the giant Goliath — one hand on his hip, the other resting on his sword, his foot on Goliath's severed head. For a church or a public square such a figure would have been unthinkable; inside the private Medici courtyard, surrounded by collectors of ancient art, it declared that Florence had equaled the sculpture of ancient Greece and Rome.",
 context:[{term:"Freestanding sculpture",pron:"",def:"A statue that stands on its own in the round, meant to be walked around and seen from every side, not attached to a wall or to a building."},{term:"Bronze",pron:"",def:"A hard golden-brown metal alloy of copper and tin, poured into a mold when molten and left to harden. A bronze statue is hollow inside."},{term:"Contrapposto",pron:"kon-trah-POH-stoh",def:"An Italian word meaning ‘placed opposite.’ A relaxed standing pose from ancient Greek and Roman sculpture: the weight rests on one leg, so one hip is higher than the other and the shoulders tilt the opposite way, giving the body a gentle S-curve."}],
 clues:[{id:"contrapposto",label:"Contrapposto",def:"The shoulders and the hips."},{id:"hat",label:"Laurel-crowned hat",def:"At the top of the figure."},{id:"hand",label:"Hand on the hip",def:"The left side of the figure."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why might a private family like the Medici have been willing to display a nude bronze statue that no church or public square would accept?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Contrapposto, laurel-crowned hat and hand on the hip are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"",author:"Miguel Hermoso Cuesta",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Cropped from the original to show the figure from the waist up."}};
RE15.zones={
 contrapposto:[{x0:15,y0:25,x1:85,y1:98}],
 hat:[{x0:25,y0:3,x1:70,y1:22}],
 hand:[{x0:60,y0:55,x1:95,y1:92}]
};

var RE16={id:"RE-16",kind:"Fresco wall painting",wide:true,title:"An Angel at the Top of the Stairs",object:"Annunciation",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Annunciation",date:"about 1440–1445 C.E.",location:"Convent of San Marco, Florence",artist:"Fra Angelico",
 headline:"Look closely at the fresco",
 alt:"A fresco set under three round arches supported by slender columns. On the left, an angel in a pink robe with iridescent wings kneels with hands crossed over the chest. On the right, Mary sits on a wooden bench in a dark blue robe, her hands crossed over her chest and her head bowed toward the angel. Both figures have gold halos. Behind and to the left of the arcade, a fenced garden with flowers and trees is visible.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/FraAngelico-Annunciation.jpg",
 imageNote:"A fresco painted directly on the plaster wall at the top of the dormitory stairs at the Convent of San Marco in Florence. Fra Angelico decorated many of the convent's cells and shared spaces with similar scenes.",
 detail:{image:"public/images/artworks/FraAngelico-Garden-Angel.jpg",alt:"A close view of the left side of the fresco: a fenced garden with flowers and trees behind the Classical columns, and the angel Gabriel in a pink robe with iridescent wings, kneeling with hands crossed over the chest.",caption:"Detail: the left side of the fresco, cropped from the main image — the fenced garden (hortus conclusus) and the kneeling angel Gabriel, with Corinthian column capitals above",credit:{word:"Detail photo",url:"",author:"Fra Angelico",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/",changes:"Cropped from the main image."}},
 detail2:{image:"public/images/artworks/FraAngelico-Mary.jpg",alt:"A close view of Mary from the same fresco: her head bowed, a gold halo behind her, her hands crossed over her chest. A small barred window and part of a column capital are visible behind her.",caption:"Detail: a close view of Mary from the same fresco, showing her folded hands and quiet bowed head",credit:{word:"Detail photo",url:"",author:"carulmare",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Close view of Mary from the same fresco."}},
 size:"Height: about 230 cm / 7.5 ft. Width: about 321 cm / 10.5 ft.",
 intro:"Around 1440, the Dominican friar Fra Angelico painted this fresco at the top of the dormitory stairs of his monastery of San Marco in Florence. His brother monks would pass it every morning on their way to prayer. It shows the moment when the angel Gabriel appears to Mary, the mother of Jesus, with news that she will bear a son. The two figures stand quietly inside a Classical arcade, with an enclosed garden visible on the left.",
 context:[{term:"Annunciation",pron:"an-un-see-AY-shun",def:"The Christian subject showing the angel Gabriel announcing to the Virgin Mary (Mary, the mother of Jesus) that she will bear a son. One of the most often painted scenes in Western art."},{term:"Hortus conclusus",pron:"HOR-tus kon-KLOO-sus",def:"Latin for ‘enclosed garden.’ A walled or fenced garden painted as a symbol for Mary's purity."},{term:"Loggia",pron:"LOH-juh",def:"An open gallery along the side of a building, with columns and arches instead of a solid wall."}],
 clues:[{id:"arches",label:"Three Classical arches",def:"The architecture framing the figures."},{id:"garden",label:"Hortus conclusus",def:"The garden on the left."},{id:"annunciation",label:"The Annunciation",def:"The two figures inside the arches."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why would Fra Angelico — a Dominican friar — have painted this scene at the top of the stairs his fellow monks used every day?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Three Classical arches, the hortus conclusus and the Annunciation are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{word:"Photo",url:"",author:"Fra Angelico",license:"public domain",licenseUrl:"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE16.zones={
 arches:[{x0:4,y0:0,x1:98,y1:38}],
 garden:[{x0:0,y0:10,x1:18,y1:88}],
 annunciation:[{x0:17,y0:22,x1:98,y1:95}]
};

var RE17={id:"RE-17",kind:"Oil painting",wide:true,title:"A Painted Sculpture of Grief",object:"Descent from the Cross",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Descent from the Cross",date:"about 1435 C.E.",location:"Museo del Prado, Madrid",artist:"Rogier van der Weyden",
 headline:"Look closely at the altarpiece",
 alt:"A large oil painting on an oak panel, painted against a solid gold-leaf wall. Ten mourning figures gather around the body of Christ as it is lowered from the cross. On the left, Mary swoons in a blue robe, her body echoing the curve of her son’s. On the right, Mary Magdalene wrings her hands in anguish, wearing orange damask and a white headdress.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Weyden-Descent.jpg",
 imageNote:"An oil painting on oak panel, about 7 feet tall by 8.5 feet wide (220 × 262 cm) — roughly the size of a doorway laid on its side. The painted frame with its Gothic tracery is part of the panel itself.",
 detail:{image:"public/images/artworks/Weyden-Magdalene.jpg",alt:"A close view of Mary Magdalene at the right edge of the altarpiece: her white headdress, the orange damask of her sleeve, a single tear on her cheek, her hands wrung together.",caption:"Detail: Mary Magdalene at the right edge of the altarpiece — her white headdress, the orange damask of her sleeve, a single tear on her cheek, her wrung hands",credit:{"word":"Detail photo","url":"","author":"Rogier van der Weyden","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close view of Mary Magdalene from the same altarpiece."}},
 detail2:{image:"public/images/artworks/Weyden-Mourner.jpg",alt:"A close view of another female mourner from the same altarpiece, wiping her tears into a white handkerchief, with the gold ground visible behind her head.",caption:"Detail: another mourner from the same painting, wiping her tears with a handkerchief, the gold ground visible behind her",credit:{"word":"Detail photo","url":"","author":"Rogier van der Weyden","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close view of a female mourner from the same altarpiece."}},
 size:"",
 intro:"Rogier van der Weyden painted this altarpiece in Brussels around 1435 for the chapel of the Louvain crossbow-makers’ guild. Soon after, the city of Brussels named him its official painter. He worked in the new oil technique perfected a few years earlier by Jan van Eyck, and his designs became a model for Flemish painters for the next century. The altarpiece was carried to Spain in the 1500s and eventually entered the royal collection in Madrid.",
 context:[{"term":"Lamentation","pron":"lam-en-TAY-shun","def":"The mourning of Christ after he is taken down from the cross. A subject often painted in Christian art, in which his family and followers gather around his body before he is laid in the tomb."},{"term":"Gold ground","pron":"","def":"A solid gold background painted behind figures. Used in medieval and early Renaissance art to show that the scene belongs to heaven or holy space rather than the everyday world."},{"term":"Altarpiece","pron":"","def":"A large painting or carving placed above and behind the altar in a Christian church, often made of several joined panels that can open and close."}],
 clues:[{"id":"lamentation","label":"Lamentation","def":"The ten figures grouped around Christ’s body."},{"id":"gold","label":"Gold ground","def":"The solid gold wall behind the figures."},{"id":"curves","label":"Mirroring curves","def":"Mary’s swooning body in blue, lower left."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why did Van der Weyden set his mourners against a flat gold wall instead of a real landscape or room?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Lamentation, Gold ground and Mirroring curves are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Rogier van der Weyden","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE17.zones={
 lamentation:[{"x0":18,"y0":20,"x1":82,"y1":80}],
 gold:[{"x0":5,"y0":4,"x1":95,"y1":40}],
 curves:[{"x0":8,"y0":55,"x1":35,"y1":90}]
};
var RE18={id:"RE-18",kind:"Woodcut print",title:"Four Horsemen at the End of Days",object:"The Four Horsemen of the Apocalypse",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Four Horsemen of the Apocalypse",date:"1497–1498 C.E.",location:"from the Apocalypse series, published Nuremberg",artist:"Albrecht Dürer",
 headline:"Look closely at the woodcut",
 alt:"A tall black-and-white woodcut. Four horsemen charge diagonally across the sheet, from upper right to lower left. In the lower left, Death on a pale horse carries a trident. Behind him, Famine holds up a pair of scales; War raises a sword above his head; and the crowned Conquest draws a bow at the upper right. In the clouds at the top right, an angel descends with a sword. Below the horses, small figures are trampled on the ground, and in the lower left corner a dragon-like beast — Hell — bites down on a bishop.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Durer-Horsemen.jpg",
 imageNote:"A woodcut on paper, about 15 by 11 inches (39 × 28 cm). The four horsemen, from the front rider back, are Death (with a trident), Famine (with scales), War (with a sword), and Conquest (crowned, with a bow).",
 detail:{image:"public/images/artworks/Durer-Horsemen-Riders.jpg",alt:"A close view of Death on the pale horse at the front of the four horsemen’s charge. His skeletal body, thin bearded face and trident are visible. In the lower left corner, the jaws of a beast — Hell — are visible among the trampled.",caption:"Detail: Death at close range — the thin, skeletal rider on the pale horse, carrying his trident at the front of the four horsemen’s charge. The beast at the lower left is Hell, which follows Death in the Bible’s account",credit:{"word":"Detail photo","url":"","author":"Albrecht Dürer","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the main woodcut."}},
 size:"",
 intro:"Albrecht Dürer carved this woodcut in his Nuremberg workshop in 1497 or 1498 as part of his Apocalypse series — fifteen large woodcuts illustrating the Book of Revelation, the final book of the Bible. He published the series as a bound book in 1498, in editions in both German and Latin, and printed many hundreds of copies on his own press. The prints sold across Europe and made Dürer, at twenty-seven, the most famous printmaker on the continent.",
 context:[{"term":"Woodcut","pron":"","def":"A print made by carving a design into a block of wood, inking the raised surfaces that remain, and pressing paper onto the block. One block produces many copies."},{"term":"Apocalypse","pron":"uh-POK-uh-lips","def":"Greek for ‘uncovering’ or ‘revelation.’ Also the last book of the Bible, which describes a future end of the world. The four horsemen appear in its sixth chapter."},{"term":"Allegory","pron":"AL-uh-gor-ee","def":"A picture or story in which figures and objects stand for larger ideas. Each of the four horsemen stands for a disaster the Bible promises."}],
 clues:[{"id":"riders","label":"The riders","def":"The four horsemen charging diagonally across the sheet."},{"id":"angel","label":"The angel","def":"The winged figure descending from the clouds in the upper right."},{"id":"trampled","label":"The trampled","def":"The figures crushed beneath the horses in the lower half."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why did Dürer send his four horsemen charging from the upper right down toward the viewer rather than lining them up calmly across the picture?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. The riders, The angel and The trampled are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Albrecht Dürer","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE18.zones={
 riders:[{"x0":10,"y0":25,"x1":95,"y1":78}],
 angel:[{"x0":55,"y0":0,"x1":90,"y1":22}],
 trampled:[{"x0":5,"y0":72,"x1":95,"y1":99}]
};
var RE19={id:"RE-19",kind:"Fresco wall painting",wide:true,title:"Lines That Lead the Eye",object:"Delivery of the Keys to Peter",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Delivery of the Keys to Peter",date:"1481–1482 C.E.",location:"Sistine Chapel, Vatican City",artist:"Pietro Perugino",
 headline:"Look closely at the fresco",
 alt:"A wide fresco on the Sistine Chapel wall. In the foreground, a row of figures in colored robes stands on a vast paved plaza of pale stone. In the center, Christ hands two keys to Peter, who kneels before him. Far behind, a large round domed temple stands at the center of the square, flanked by two triumphal arches. The paving stones run from the foreground back to the temple in receding lines.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Perugino-Keys.jpg",
 imageNote:"A fresco painted on the north wall of the Sistine Chapel in the Vatican, as part of a cycle of scenes from the lives of Moses and Christ. About 11 by 18 feet (335 × 550 cm).",
 detail:{image:"public/images/artworks/Perugino-Keys-Center.jpg",alt:"A closer view of the center of the fresco: Christ in red and blue hands the keys to the kneeling Peter, surrounded by apostles in colored robes, with the pavement’s receding lines leading back to the round domed temple behind them.",caption:"Detail: Christ hands the keys to Peter at the center of the pavement. The lines of the paving stones meet at a single point behind the figures — the vanishing point",credit:{"word":"Detail photo","url":"","author":"Pietro Perugino","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the central group."}},
 size:"",
 intro:"Pope Sixtus IV called Pietro Perugino and a team of other painters down from Umbria in 1481 to decorate the walls of his newly built chapel in the Vatican. This fresco was one of the first he finished, painted in 1481 or 1482. The subject came from the Gospel of Matthew: Christ handing Peter the keys that make him the first pope. The round temple in the background is Perugino’s invention — a classical building designed to recall the Temple of Jerusalem.",
 context:[{"term":"Vanishing point","pron":"","def":"The single point on the horizon where parallel lines running back into a picture appear to meet. Italian Renaissance artists used it to show real space on a flat surface."},{"term":"Fresco","pron":"","def":"A painting technique where colored pigments are brushed onto wet plaster so the color becomes part of the wall once it dries. Used for most large-scale Italian Renaissance wall paintings."},{"term":"Symmetry","pron":"","def":"An arrangement where the parts on one side of a center line match the parts on the other side. Italian Renaissance painters and architects prized symmetry as a sign of order and calm."}],
 clues:[{"id":"vanish","label":"Vanishing point","def":"The spot where the paving lines meet, behind the central figures."},{"id":"fresco","label":"Fresco","def":"The whole painted wall, from edge to edge."},{"id":"symmetry","label":"Symmetry","def":"The matching halves of the composition, left and right."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"How does the setting of a vast empty plaza change the way you read the small central event of handing over the keys?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Vanishing point, Fresco and Symmetry are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Pietro Perugino","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE19.zones={
 vanish:[{"x0":47,"y0":35,"x1":55,"y1":45}],
 fresco:[{"x0":2,"y0":2,"x1":98,"y1":98}],
 symmetry:[{"x0":5,"y0":40,"x1":95,"y1":80}]
};
var RE20={id:"RE-20",kind:"Tempera painting",wide:true,title:"A Goddess Blown to Shore",object:"The Birth of Venus",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Birth of Venus",date:"about 1485 C.E.",location:"Uffizi Gallery, Florence",artist:"Sandro Botticelli",
 headline:"Look closely at the painting",
 alt:"A wide tempera painting on canvas. In the center, the nude goddess Venus stands on a giant scallop shell that floats on a calm blue-green sea. Her long gold hair falls over her shoulder and she covers herself with one hand. On the left, the wind god Zephyr, wrapped around a smaller female figure, blows her toward the shore; pink roses scatter in the air. On the right, a woman in a flower-patterned dress waits to clothe her with a billowing pink cloak.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Botticelli-Venus.jpg",
 imageNote:"A tempera painting on canvas, about 5.5 by 9 feet (172 × 278 cm). Botticelli probably painted it for a Medici family villa outside Florence; it hangs today in the Uffizi, two rooms away from his Primavera.",
 detail:{image:"public/images/artworks/Botticelli-Venus-Detail1.jpg",alt:"A close view of the goddess Venus at the center of the painting: her long gold hair, her raised hand covering her chest, her quiet face turned slightly to the side.",caption:"Detail: Venus at the center of the painting — her long gold hair and the quiet tilt of her head",credit:{"word":"Detail photo","url":"","author":"Sandro Botticelli","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the central figure."}},
 detail2:{image:"public/images/artworks/Botticelli-Venus-Zephyr.jpg",alt:"A close view of the wind god Zephyr at the left side of the painting: a muscular figure with blue wings, wrapped around a smaller female figure. His cheeks puff out as he blows a stream of air toward Venus, and pink roses fall around them.",caption:"Detail: Zephyr at the left side of the painting, blowing Venus toward the shore, with the nymph Chloris in his arms and pink roses in the air",credit:{"word":"Detail photo","url":"","author":"Sandro Botticelli","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the left-side figures."}},
 size:"",
 intro:"Botticelli painted this large canvas in Florence around 1485, probably for a member of the Medici family. The subject is the birth of Venus, the ancient Roman goddess of love: blown to shore on a shell by the west wind Zephyr and his companion Chloris, and received by an attendant with a pink cloak. Classical subjects like this were a new idea in Italian painting — Botticelli was one of the first painters since antiquity to make a large picture of an ancient Roman goddess rather than a Christian scene.",
 context:[{"term":"Tempera","pron":"TEM-pur-uh","def":"A paint made from powdered pigment mixed with egg yolk and water. It dries quickly to a matte finish and was the usual paint of European painters before oil replaced it in the 1400s and 1500s."},{"term":"Mythological","pron":"mith-uh-LOJ-i-kul","def":"A picture whose subject comes from ancient Greek or Roman myths — the stories of their gods and heroes — rather than from the Bible or the lives of saints."},{"term":"Zephyr","pron":"ZEF-ur","def":"The ancient Greek and Roman name for the gentle west wind, often shown in art as a winged male figure."}],
 clues:[{"id":"venus","label":"Venus on the shell","def":"The nude goddess standing in the center on a scallop shell."},{"id":"zephyr","label":"Zephyr blowing","def":"The winged figure on the left blowing wind toward Venus."},{"id":"attendant","label":"The attendant","def":"The woman on the right with a pink cloak, waiting to clothe Venus."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"What makes this painting feel ancient and new at the same time?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Venus on the shell, Zephyr blowing and The attendant are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Sandro Botticelli","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE20.zones={
 venus:[{"x0":38,"y0":18,"x1":63,"y1":90}],
 zephyr:[{"x0":0,"y0":12,"x1":35,"y1":55}],
 attendant:[{"x0":65,"y0":15,"x1":100,"y1":80}]
};
var RE21={id:"RE-21",kind:"Tempera painting",title:"A Body That Reaches Toward You",object:"The Dead Christ",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Dead Christ",date:"about 1480 C.E.",location:"Pinacoteca di Brera, Milan",artist:"Andrea Mantegna",
 headline:"Look closely at the painting",
 alt:"A small tempera painting on canvas. The dead body of Christ lies on a marble slab, his feet pointing straight toward the viewer and his head at the back of the picture. His body is shown in sharp perspective so the feet look almost life-size and the head looks smaller and farther away. The soles of his feet, with dark nail wounds, fill the foreground. At the upper left, three mourning figures with lined faces press in close.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Mantegna-Christ.jpg",
 imageNote:"A small tempera painting on canvas, about 27 by 32 inches (68 × 81 cm). Christ’s body rests on a marble anointing slab; the three mourners at the upper left are traditionally identified as Mary, the mother of Jesus, Saint John the Evangelist, and Mary Magdalene.",
 detail:{image:"public/images/artworks/Mantegna-Mourners.jpg",alt:"A close view of the three mourners at the upper left of the painting: lined, grieving faces pressed close together, their mouths slightly open.",caption:"Detail: the three mourners at the upper left of the painting, their faces lined and wet with tears",credit:{"word":"Detail photo","url":"","author":"Andrea Mantegna","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the upper-left figures."}},
 detail2:{image:"public/images/artworks/Mantegna-Feet.jpg",alt:"A close view of Christ’s feet in the lower foreground: the soles turned toward the viewer, with the dark holes of the nail wounds visible on each foot.",caption:"Detail: Christ’s feet in the lower foreground, with the dark holes of the nail wounds visible",credit:{"word":"Detail photo","url":"https://commons.wikimedia.org/wiki/File:Mantegna_Cristo_morto_dettaglio.jpg","author":"Francesco Bini","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","changes":"Close crop from a photograph of the painting."}},
 size:"",
 intro:"Andrea Mantegna painted this small picture in northern Italy around 1480, probably for his own use rather than for a patron. It was found in his workshop after his death in 1506. Mantegna was trained in Padua, where artists studied the remains of ancient Roman sculpture and architecture, and he became one of the most inventive painters of his generation in the handling of the human body in space. The painting entered the Brera collection in Milan in the 19th century.",
 context:[{"term":"Foreshortening","pron":"FOR-shor-ten-ing","def":"A method of drawing an object or figure in extreme perspective, with its length sharply compressed."},{"term":"Lamentation","pron":"lam-en-TAY-shun","def":"The mourning of Christ after he is taken down from the cross. A subject often painted in Christian art, in which his family and followers gather around his body before he is laid in the tomb."},{"term":"Tempera","pron":"TEM-pur-uh","def":"A paint made from powdered pigments mixed with egg yolk and water. It dries quickly to a matte finish and was the most common paint of European painters for centuries, before oil paint replaced it in the 1400s and 1500s."}],
 clues:[{"id":"foreshort","label":"Foreshortening","def":"Christ’s body stretched from feet to head."},{"id":"lamentation","label":"Lamentation","def":"The three mourning figures at the upper left."},{"id":"slab","label":"Anointing slab","def":"The stone slab beneath Christ’s body."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why would Mantegna put Christ’s feet, and not his head, nearest to the viewer?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Foreshortening, Lamentation and Anointing slab are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Andrea Mantegna","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE21.zones={
 foreshort:[{"x0":15,"y0":30,"x1":85,"y1":90}],
 lamentation:[{"x0":0,"y0":5,"x1":40,"y1":35}],
 slab:[{"x0":5,"y0":55,"x1":95,"y1":98}]
};
var RE22={id:"RE-22",kind:"Tempera mural",wide:true,title:"A Room Where the Lines Meet",object:"The Last Supper",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Last Supper",date:"1495–1498 C.E.",location:"Santa Maria delle Grazie, Milan",artist:"Leonardo da Vinci",
 headline:"Look closely at the mural",
 alt:"A very wide painting covering the entire end wall of a long dining hall. Christ sits at the center of a long table, with his twelve apostles grouped three on each side of him in four clusters. Behind the table, the back wall opens into a long room with coffered ceilings, windows on either side of Christ’s head, and a distant landscape through the center window. The lines of the ceiling and the side walls appear to run toward a point directly behind Christ.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Leonardo-LastSupper.jpg",
 imageNote:"A wall painting made with experimental paints applied to dry plaster, about 15 by 29 feet (460 × 880 cm). It covers the whole end wall of the dining room (refectory) of the Dominican friary attached to the church of Santa Maria delle Grazie in Milan.",
 detail:{image:"public/images/artworks/Leonardo-LastSupper-Detail1.jpg",alt:"A close view of the central three figures: Christ in red and blue at the center with hands open on the table, Judas leaning back with a bag of silver held behind him, Peter leaning in behind Judas with a knife in his hand.",caption:"Detail: Christ at the center, with Judas (leaning back, gripping a bag of silver) and Peter (behind, holding a knife) in the first group to his right",credit:{"word":"Detail photo","url":"","author":"Leonardo da Vinci","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the central group."}},
 detail2:{image:"public/images/artworks/Leonardo-LastSupper-Detail2.jpg",alt:"A close view of the landscape visible through the central window behind Christ’s head: distant hills and sky in soft, hazy blue.",caption:"Detail: the landscape framed by the window behind Christ’s head — soft, hazy blue hills typical of Leonardo’s treatment of distant space",credit:{"word":"Detail photo","url":"","author":"Leonardo da Vinci","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the window and distant landscape."}},
 size:"",
 intro:"Duke Ludovico Sforza of Milan commissioned Leonardo to paint this scene on the wall of a monastery dining room in 1495. Leonardo worked on it for three years, painting in an experimental mixture of oil and tempera applied to dry plaster rather than the standard fresco technique. The paint began to flake within twenty years. The subject — Christ sharing his last meal with his apostles and announcing that one of them will betray him — is set in a room whose architecture Leonardo painted as a continuation of the real dining hall below.",
 context:[{"term":"One-point perspective","pron":"","def":"A perspective arrangement in which all receding lines in a picture meet at a single vanishing point directly in front of the viewer."},{"term":"Refectory","pron":"re-FEK-to-ree","def":"The dining hall of a monastery, convent, or college. This painting covers the whole end wall of one."},{"term":"Composition","pron":"","def":"How an artist arranges the parts of a picture. In this one, the twelve apostles are grouped into four sets of three around the single central figure of Christ."}],
 clues:[{"id":"christ","label":"Christ at center","def":"The still figure at the middle of the long table."},{"id":"groups","label":"Four groups of three","def":"The twelve apostles split into four clusters, two on each side."},{"id":"vanish","label":"Vanishing point","def":"The spot behind Christ’s head where the ceiling and wall lines meet."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why would Leonardo make Christ’s head the exact point where every line in the room converges?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Christ at center, Four groups of three and Vanishing point are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Leonardo da Vinci","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE22.zones={
 christ:[{"x0":43,"y0":28,"x1":57,"y1":70}],
 groups:[{"x0":5,"y0":30,"x1":95,"y1":78}],
 vanish:[{"x0":47,"y0":32,"x1":53,"y1":42}]
};
var RE23={id:"RE-23",kind:"Marble sculpture",title:"The Giant Who Shows His Nerves",object:"David",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"David",date:"1501–1504 C.E.",location:"Galleria dell’Accademia, Florence",artist:"Michelangelo Buonarroti",
 headline:"Look closely at the sculpture",
 alt:"A waist-up view of a towering white marble statue of the young David, carved from a single block. He stands turned slightly to one side, looking off into the distance over his left shoulder with a frown. His sling is slung over his left shoulder; his right hand, oversized, hangs down against his thigh with a stone held loosely. His neck muscles are tensed, his brow furrowed, the vein on his right hand swollen.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Michelangelo-David.jpg",
 imageNote:"A sculpture carved from a single block of Carrara marble, about 17 feet tall (5.2 m) — three times life size. It was commissioned for one of the buttresses of Florence Cathedral but the city placed it in the main square in front of the town hall instead.",
 detail:{image:"public/images/artworks/Michelangelo-David-Head.jpg",alt:"A close view of David’s face: his furrowed brow, parted lips, and distant stare over his left shoulder. His hair is carved in thick, waving locks.",caption:"Detail: David’s face — furrowed brow, tensed neck, and the distant stare that gives the figure its charged waiting energy",credit:{"word":"Detail photo","url":"","author":"Michelangelo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the head."}},
 detail2:{image:"public/images/artworks/Michelangelo-David-Back.jpg",alt:"A close view of David’s right hand and forearm: oversized, muscular, veins standing on the back of the hand, a stone held loosely in the fingers.",caption:"Detail: David’s right hand — oversized for the body, veins standing on the back of the hand, a stone held loosely before the throw",credit:{"word":"Detail photo","url":"","author":"Michelangelo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the right hand."}},
 size:"",
 intro:"The city of Florence gave Michelangelo the commission for this statue in 1501, when he was twenty-six. He worked on it for three years, carving it from a block of marble that had sat abandoned in the cathedral workshop for forty years. Florence had just thrown off the rule of the Medici family and faced bigger neighboring powers. David — a small shepherd who had defeated the giant Goliath — made a natural symbol for the city. The statue was placed in front of the town hall and became an image of Florentine resolve.",
 context:[{"term":"Colossal","pron":"kuh-LOS-ul","def":"Much larger than life size. This David stands about three times the height of a real person."},{"term":"Tension","pron":"","def":"The charged energy of a body or face that is about to act but has not acted yet. Michelangelo built it into David’s face, hand and neck."},{"term":"High Renaissance","pron":"","def":"The brief, intense period of Italian Renaissance art, roughly 1495–1527, when Leonardo, Michelangelo and Raphael were all working at the height of their powers."}],
 clues:[{"id":"face","label":"The tensed face","def":"David’s furrowed brow and distant stare."},{"id":"hand","label":"The oversized hand","def":"David’s right hand, loose with a stone."},{"id":"sling","label":"The sling","def":"The strap slung over his left shoulder."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Michelangelo carved David at the moment before the fight with Goliath, not after. How does that choice change what the figure stands for?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. The tensed face, The oversized hand and The sling are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Michelangelo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE23.zones={
 face:[{"x0":35,"y0":6,"x1":70,"y1":28}],
 hand:[{"x0":48,"y0":72,"x1":78,"y1":95}],
 sling:[{"x0":15,"y0":18,"x1":48,"y1":42}]
};
var RE24={id:"RE-24",kind:"Fresco wall painting",wide:true,title:"Fingers That Nearly Touch",object:"Creation of Adam",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Creation of Adam (from the Sistine Chapel ceiling)",date:"1508–1512 C.E.",location:"Sistine Chapel, Vatican City",artist:"Michelangelo Buonarroti",
 headline:"Look closely at the fresco",
 alt:"A wide fresco panel from a painted ceiling. On the left, Adam reclines nude on a hillside, his torso turned toward the center, one leg bent. He stretches out his left arm with a limp hand. On the right, God the Father — an old man with white beard and hair, in a swirling pink robe — flies through the air, carried by a crowd of angels inside a billowing cloak. God reaches out his right index finger toward Adam’s. A small gap of empty space separates the two fingertips.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Michelangelo-CreationAdam.jpg",
 imageNote:"A fresco painted on a central panel of the Sistine Chapel ceiling, about 9 by 18 feet (280 × 570 cm). Pope Julius II commissioned Michelangelo to paint the whole ceiling in 1508; he finished in October 1512.",
 detail:{image:"public/images/artworks/Michelangelo-CreationAdam-Reaching.jpg",alt:"A close view of the two hands reaching toward each other across a small gap: God’s right hand firm and extended, Adam’s left hand limp and hanging from the wrist.",caption:"Detail: the two fingertips with the famous gap of about 5 cm between them — called one of the most poignant painted surfaces in all of Western art",credit:{"word":"Detail photo","url":"","author":"Michelangelo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the fingertips."}},
 detail2:{image:"public/images/artworks/Michelangelo-CreationAdam-Hands.jpg",alt:"A close view of God and the angels on the right half of the fresco: God with long white beard and hair, wrapped in pink robes, surrounded by nude angel figures all carried inside a large billowing cloak.",caption:"Detail: God the Father carried by angels inside a billowing cloak — the shape of the cloak has been read as the outline of a human brain",credit:{"word":"Detail photo","url":"","author":"Michelangelo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the right-side figures."}},
 size:"",
 intro:"Michelangelo painted this panel in 1511 or 1512 as part of a four-year commission to fresco the whole ceiling of Pope Julius II’s private chapel. He worked lying on his back on wooden scaffolding, with the paint dripping into his eyes. In the Book of Genesis, God creates Adam from dust and breathes life into him. Michelangelo gives the two figures the same proportions and treats them as equal in scale — a Renaissance idea called Christian Humanism, which held that human beings were made in the image of God.",
 context:[{"term":"Imago Dei","pron":"ee-MAH-go DAY-ee","def":"Latin for ‘the image of God.’ A central Christian idea that human beings were made in God’s image and share in his dignity. Michelangelo gives Adam and God the same proportions on this panel."},{"term":"Christian Humanism","pron":"","def":"The Renaissance movement that combined the new Humanist interest in classical Greek and Roman writers with the older Christian faith. Michelangelo was shaped by it."},{"term":"Fresco cycle","pron":"","def":"A series of frescoes painted across the walls or ceiling of a single room, telling connected stories. The Sistine ceiling is one of the most famous of all."}],
 clues:[{"id":"gap","label":"The fingertips’ gap","def":"The small space between God’s and Adam’s outstretched fingers."},{"id":"adam","label":"Adam reclining","def":"The nude figure on the left, waiting to be given life."},{"id":"god","label":"God carried","def":"The old man on the right, flying inside the cloak of angels."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Why do you think Michelangelo left a gap of five centimeters between the two fingers, when he could have let them touch?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. The fingertips’ gap, Adam reclining and God carried are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Michelangelo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE24.zones={
 gap:[{"x0":43,"y0":38,"x1":58,"y1":55}],
 adam:[{"x0":5,"y0":30,"x1":45,"y1":90}],
 god:[{"x0":55,"y0":10,"x1":100,"y1":85}]
};
var RE25={id:"RE-25",kind:"Oil painting",title:"Mary Rising in Red",object:"Assumption of the Virgin",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Assumption of the Virgin",date:"1516–1518 C.E.",location:"Santa Maria Gloriosa dei Frari, Venice",artist:"Tiziano Vecellio (Titian)",
 headline:"Look closely at the altarpiece",
 alt:"A tall oil painting above a church altar. In three horizontal tiers: at the bottom, twelve apostles gather on a dark plot of ground, arms raised and faces turned upward. In the center, Mary rises on a cloud among a ring of angels, wearing a brilliant red robe, her blue cloak flying out behind her and her hands lifted. At the top, God the Father, golden and bearded, leans down from a burst of yellow light, reaching toward Mary’s crown.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Titian-Assumption.jpg",
 imageNote:"An oil painting on wood panel, about 22 feet by 11 feet (690 × 360 cm). It still stands over the main altar of Santa Maria Gloriosa dei Frari in Venice, where Titian painted it and where generations of worshippers have knelt beneath it for more than five centuries.",
 detail:{image:"public/images/artworks/Titian-Assumption-God.jpg",alt:"A close view of God the Father at the top of the painting: a bearded elderly figure in gold robes leaning down from a burst of yellow light, with loose, visible brushwork.",caption:"Detail: God the Father at the top of the painting — Titian’s loose, painterly brushwork is a mark of the Venetian school",credit:{"word":"Detail photo","url":"","author":"Titian","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the upper tier."}},
 detail2:{image:"public/images/artworks/Titian-Assumption-Apostles.jpg",alt:"A close view of the twelve apostles in the lower tier of the painting: a tight group of figures, many with arms raised and faces turned upward toward the rising Mary.",caption:"Detail: the twelve apostles in the lower tier of the painting, cropped from the main image — their reaching gestures turn inward and upward toward the rising Mary",credit:{"word":"Detail photo","url":"","author":"Titian","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the lower tier."}},
 size:"",
 intro:"Titian painted this altarpiece in Venice between 1516 and 1518 for the Franciscan church of Santa Maria Gloriosa dei Frari, where it still stands over the main altar. He was in his early thirties; the painting made his reputation across Europe within a few years. He went on to work for the Holy Roman Emperor Charles V, the French king, the Spanish king, and three popes, counted as the fourth of the great High Renaissance masters after Leonardo, Michelangelo, and Raphael.",
 context:[{"term":"Closed composition","pron":"","def":"An arrangement in which the figures turn inward toward the center of the picture. A compositional ideal of the High Renaissance, later broken by Baroque painters who let figures spill outward toward the viewer."},{"term":"Venetian colorism","pron":"","def":"An approach to painting developed in Venice, favoring rich color and the effects of light over the sharp line and drawing of Florence. Associated with the Venetian school of Titian and his contemporaries."},{"term":"Assumption","pron":"","def":"The Christian subject showing the Virgin Mary (Mary, the mother of Jesus) taken up to heaven, body and soul, at the end of her earthly life. One of the main scenes of Mary’s life in Christian art."}],
 clues:[{"id":"closed","label":"Closed composition","def":"The figures and gestures turning inward toward the center."},{"id":"color","label":"Venetian color","def":"The brilliant reds, blues, and gold throughout."},{"id":"mary","label":"Mary rising","def":"Mary at the center, carried upward by angels."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"What is Titian doing with color that none of the Florentine painters you have met would have done?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Closed composition, Venetian color and Mary rising are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Titian","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE25.zones={
 closed:[{"x0":5,"y0":10,"x1":95,"y1":95}],
 color:[{"x0":30,"y0":35,"x1":70,"y1":70}],
 mary:[{"x0":35,"y0":32,"x1":65,"y1":68}]
};
var RE26={id:"RE-26",kind:"Oil painting",title:"A Deposition That Floats",object:"Deposition from the Cross",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Deposition from the Cross",date:"1525–1528 C.E.",location:"Capponi Chapel, Santa Felicita, Florence",artist:"Jacopo da Pontormo",
 headline:"Look closely at the altarpiece",
 alt:"A tall oil altarpiece without a cross, a tomb, a ground line, or a clear setting. Figures in pink, blue and acid-green robes float together, their bodies twisted into S-shapes. In the center, the limp body of Christ is carried by a figure crouched on tiptoe. Around him, grieving women turn and lean. Mary swoons at the upper right, a blue-and-pink figure turning away in the foreground.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Pontormo-Deposition.jpg",
 imageNote:"An oil painting on a tall arched panel, about 10 feet by 6.5 feet (313 × 192 cm), still hanging over the altar of the Capponi family chapel in the Florentine church of Santa Felicita, where Pontormo painted it to be seen by worshippers kneeling at the altar below.",
 detail:{image:"public/images/artworks/Pontormo-Deposition-D1.jpg",alt:"A close view of three long, narrow hands reaching across the center of the painting: pale, with long tapered fingers, overlapping one another.",caption:"Detail: three hands reaching across the center of the painting — the long, tapered fingers typical of Pontormo and his generation",credit:{"word":"Detail photo","url":"","author":"Jacopo da Pontormo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the central hands."}},
 detail2:{image:"public/images/artworks/Pontormo-Deposition-D2.jpg",alt:"A close view of Mary at the center of the painting: her face drawn and wet with tears, her mouth slightly open. In front of her, a young woman in a pink dress turns her back to the viewer.",caption:"Detail: Mary, the mother of Jesus, at the center of the painting, her face drawn and wet with tears, with a young woman in pink turning before her",credit:{"word":"Detail photo","url":"","author":"Jacopo da Pontormo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the central group."}},
 size:"",
 intro:"Jacopo da Pontormo painted this altarpiece in Florence between 1525 and 1528 for the Capponi family chapel at the church of Santa Felicita, where it still hangs today. He was one of the leading figures of a new generation of Florentine painters called the Mannerists, who worked in the shadow of Michelangelo and Raphael. The painting shows a scene often called the Deposition — the moment Christ’s body is taken down from the cross.",
 context:[{"term":"Mannerism","pron":"","def":"An art movement in Europe from about 1520 to 1580. Mannerist artists broke with the calm balance of High Renaissance art."},{"term":"Figura serpentinata","pron":"feh-GOO-rah ser-pen-tee-NAH-tah","def":"Italian for ‘serpentine figure.’ A twisting, S-shaped human pose favored by Mannerist artists."},{"term":"Altarpiece","pron":"","def":"A large painting or carving placed above and behind the altar in a Christian church, often made of several joined panels that can open and close."}],
 clues:[{"id":"serp","label":"Figura serpentinata","def":"The twisting, S-shaped poses of the figures."},{"id":"acid","label":"Acid palette","def":"The bright pinks, blues, and greens."},{"id":"elong","label":"Elongated bodies","def":"The stretched proportions of the figures."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Compare this painting to Titian’s Assumption from only a few years earlier. How is Pontormo pulling against the ideals Titian worked within?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Figura serpentinata, Acid palette and Elongated bodies are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Jacopo da Pontormo","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE26.zones={
 serp:[{"x0":10,"y0":15,"x1":90,"y1":95}],
 acid:[{"x0":10,"y0":10,"x1":90,"y1":95}],
 elong:[{"x0":10,"y0":10,"x1":90,"y1":95}]
};
var RE27={id:"RE-27",kind:"Oil painting",title:"Mary With a Neck Like a Swan",object:"Madonna of the Long Neck",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Madonna of the Long Neck",date:"about 1534–1540 C.E.",location:"Uffizi Gallery, Florence",artist:"Girolamo Francesco Maria Mazzola (Parmigianino)",
 headline:"Look closely at the altarpiece",
 alt:"A tall oil altarpiece. In the center, Mary sits with an unnaturally long neck and elongated body, dressed in a shimmering blue-grey gown. A large sleeping infant Christ stretches across her lap, his body limp. On the left, a group of elegant adolescent angels press forward with a tall urn. In the lower right, a tiny figure of Saint Jerome stands unfinished beside the base of a single marble column; the rest of the setting fades out, incomplete.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Parmigianino-LongNeck.jpg",
 imageNote:"An oil painting on wood panel, about 7 feet by 4.5 feet (219 × 135 cm). The lower edge and the small figure of Saint Jerome at the lower right are unfinished — Parmigianino died in 1540 before completing the work.",
 detail:{image:"public/images/artworks/Parmigianino-LongNeck-D1.jpg",alt:"A close view of the sleeping Christ child stretched across Mary’s lap, limp and overlong, with the attendant angels pressed in from the left of the painting.",caption:"Detail: the sleeping Christ child stretched across Mary’s lap, with the attendant angels at the left of the painting",credit:{"word":"Detail photo","url":"https://commons.wikimedia.org/wiki/File:Parmigianino_015.jpg","author":"Francesco Bini","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","changes":"Close crop from a photograph of the altarpiece."}},
 detail2:{image:"public/images/artworks/Parmigianino-LongNeck-D2.jpg",alt:"A close view of Mary’s right hand and forearm: long slender fingers, an elongated wrist. The hand is drawn much longer than life.",caption:"Detail: Mary’s right hand and forearm — fingers and wrist drawn much longer than life",credit:{"word":"Detail photo","url":"https://commons.wikimedia.org/wiki/File:Parmigianino_015.jpg","author":"Francesco Bini","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","changes":"Close crop from a photograph of the altarpiece."}},
 size:"",
 intro:"Parmigianino painted this altarpiece in the Italian city of Parma between 1534 and 1540 for a private chapel in the church of Santa Maria dei Servi. He died in 1540 before finishing the painting, as the incomplete lower edge and the small figure of Saint Jerome at the right show. The painting passed to the Medici family in Florence in the 17th century and hangs today in the Uffizi Gallery, considered one of the clearest statements of Mannerist taste.",
 context:[{"term":"Grazia","pron":"GRAHT-syah","def":"Italian for ‘grace’ or ‘elegance.’ A central ideal of Mannerist art: refined, poised, slightly artificial beauty."},{"term":"Elongation","pron":"","def":"The stretching of figures and features beyond natural proportion, favored by Mannerist painters."},{"term":"Madonna","pron":"","def":"Italian for ‘my lady.’ The Christian subject showing Mary, the mother of Jesus, usually with the Christ child."}],
 clues:[{"id":"grazia","label":"Grazia","def":"The poised, elegant postures of the figures."},{"id":"elong","label":"Elongation","def":"The long neck, long body, long fingers."},{"id":"infant","label":"Oversized infant","def":"The large baby across Mary’s lap."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Mannerist painters knew the High Renaissance ideals — they chose to bend them. Why would an artist bend ideals he already knew how to follow?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Grazia, Elongation and Oversized infant are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Parmigianino","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE27.zones={
 grazia:[{"x0":10,"y0":10,"x1":90,"y1":90}],
 elong:[{"x0":40,"y0":15,"x1":65,"y1":70}],
 infant:[{"x0":25,"y0":45,"x1":70,"y1":85}]
};
var RE28={id:"RE-28",kind:"Architecture",title:"A Villa with Four Faces",object:"Villa Rotonda",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Villa Rotonda (Villa Almerico–Capra)",date:"1566–1570 C.E.",location:"hilltop outside Vicenza, Italy",artist:"Andrea Palladio",
 headline:"Look closely at the villa",
 alt:"A country villa seen from one corner. Two columned entrance porches with triangular pediments are visible, one on each visible face. A small shallow dome rises above the center of the building. Classical statues stand along the edges of each pediment. Green lawn in the foreground, grey-blue sky behind.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Palladio-Rotonda.jpg",
 imageNote:"A country villa built of stone and stucco, about 80 feet square at the base of its porticos. Two of the four identical porticos are visible in the view above; the central hall rises into a shallow dome at the heart of the villa.",
 detail:{image:"public/images/artworks/Palladio-Rotonda-Section.jpg",alt:"An architectural section drawing of the villa, showing a cross-section cut through the center: the round central hall rising into the dome, with the two opposite porticos and their staircases on either side.",caption:"Detail: an architectural section cut through the villa, showing the central domed hall and the staircases of two opposite porticos",credit:{"word":"Detail","url":"","author":"after Vincenzo Scamozzi","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Historical engraving of the villa’s cross-section, published 1778."}},
 detail2:{image:"public/images/artworks/Palladio-Rotonda-Plate.jpg",alt:"A page from Palladio’s Four Books of Architecture (1570). The top half shows the villa’s floor plan: a round central hall with four identical porticos radiating out, one on each face. The bottom half shows the front elevation.",caption:"Detail: the page from Palladio’s Four Books of Architecture (Venice, 1570), showing the floor plan (top — four porticos radiating from the central circular hall) and the front elevation (bottom)",credit:{"word":"Detail","url":"","author":"Andrea Palladio, I Quattro Libri dell’Architettura (Venice, 1570), Book 2, page 19","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Plate from the Metropolitan Museum of Art, Open Access collection."}},
 size:"",
 intro:"Andrea Palladio designed this country villa in the Veneto for Paolo Almerico, a retired canon of the papal court, on a hilltop just outside the town of Vicenza. Construction began in 1566, in a tradition of centrally planned Renaissance buildings that stretched back to Bramante’s Tempietto of sixty years earlier. Palladio died in 1580 before the villa was finished; his pupil Vincenzo Scamozzi completed it. Palladio had already published the design in his Four Books of Architecture in 1570, and the book carried his villa to architects across Europe for the next 250 years — including Thomas Jefferson, who studied it while designing Monticello.",
 context:[{"term":"Villa","pron":"","def":"A country residence of a wealthy Renaissance family, usually with land or a garden attached. Distinct from a palazzo, which is a town or urban residence."},{"term":"Portico","pron":"POR-ti-koh","def":"A roofed entrance porch supported by columns. A feature of ancient Greek and Roman temples carried forward into Renaissance architecture."},{"term":"Central plan","pron":"","def":"A building organized symmetrically around a central point, so that it looks the same from each of its main directions. The alternative is the longitudinal plan, with one long axis, used in most Christian churches."}],
 clues:[{"id":"portico","label":"Portico","def":"A columned entrance porch on the front of the villa."},{"id":"dome","label":"Dome","def":"The round roof at the center of the villa."},{"id":"pediment","label":"Pediment","def":"The triangular gable above the portico, topped with statues."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Think back to Bramante’s Tempietto. What has Palladio done with the central plan that Bramante did not?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Portico, Dome and Pediment are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"https://commons.wikimedia.org/wiki/File:Villa_Rotonda_side(2).jpg","author":"Hans A. Rosbach","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"}};
RE28.zones={
 portico:[{"x0":48,"y0":28,"x1":85,"y1":82}],
 dome:[{"x0":35,"y0":12,"x1":58,"y1":36}],
 pediment:[{"x0":55,"y0":25,"x1":85,"y1":42}]
};
var RE29={id:"RE-29",kind:"Oil painting",title:"The Painter as Gentleman",object:"Self-Portrait at Twenty-Six",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"Self-Portrait at Twenty-Six",date:"1498 C.E.",location:"Museo del Prado, Madrid",artist:"Albrecht Dürer",
 headline:"Look closely at the self-portrait",
 alt:"A tall oil portrait. A young man in his mid-twenties faces three-quarters toward the viewer, auburn hair falling in long curls past his shoulders. He wears a black-and-white striped soft cap with a long tassel, a striped silk gown with gold trim, kid-leather gloves, and a twisted cord around his shoulders. Through a window on the right, a distant landscape of blue Alpine mountains is visible. A gold inscription with a date sits in the upper right.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Durer-Self26.jpg",
 imageNote:"An oil painting on wood panel, about 20 by 16 inches (52 × 41 cm). The inscription at the upper right gives the date 1498, the artist’s name, and his age — twenty-six.",
 detail:{image:"public/images/artworks/Durer-Self26-Inscription.jpg",alt:"A close view of the gold inscription at the upper right of the painting: the date 1498, three lines of German script, and the AD monogram beneath.",caption:"Detail: the gold inscription at the upper right — the date 1498, the German text ‘das malt ich nach meiner gestalt / Ich was sex und zwenzig Jor alt’ (‘I painted this after my own appearance; I was twenty-six years old’), and Dürer’s AD monogram",credit:{"word":"Detail photo","url":"","author":"Albrecht Dürer","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the inscription."}},
 detail2:{image:"public/images/artworks/Durer-Self26-Eyes.jpg",alt:"A close view of the painter’s eyes in extreme close-up. A fine web of hairline cracks — the age of the paint — crosses the surface.",caption:"Detail: Dürer’s eyes in extreme close-up — the fine web of cracks across the paint surface is more than five hundred years of age showing through",credit:{"word":"Detail photo","url":"","author":"Albrecht Dürer","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the eyes."}},
 size:"",
 intro:"Albrecht Dürer painted this self-portrait in Nuremberg in 1498, when he was 26 years old, just after his first trip to Venice. He was already running one of Europe’s most successful printmaking workshops, selling his woodcuts and engravings as far south as Spain and Italy — his fame had spread through prints before any of his paintings left German lands. The panel entered the Spanish royal collection in the seventeenth century and hangs today in the Prado in Madrid.",
 context:[{"term":"Self-portrait","pron":"","def":"A picture an artist makes of their own face. Renaissance artists began making them more often as the social position of the painter in Europe rose."},{"term":"Engraving","pron":"","def":"A print made by cutting lines into a copper plate, inking those lines, and pressing paper onto the plate. One plate produces many identical copies."},{"term":"Monogram","pron":"","def":"An artist’s name worked into a small design of combined letters, used as a signature. Renaissance printmakers began using them as prints carried their names across Europe."}],
 clues:[{"id":"self","label":"Self-portrait","def":"The painter’s own face and figure at the center of the panel."},{"id":"alps","label":"Alpine landscape","def":"The mountainous view through the window at right."},{"id":"inscr","label":"Inscription","def":"The gold writing with the AD monogram, upper right."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Dürer paints himself like an Italian gentleman, not a working German craftsman. What do you think he was claiming?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. Self-portrait, Alpine landscape and Inscription are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Albrecht Dürer","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE29.zones={
 self:[{"x0":22,"y0":5,"x1":80,"y1":98}],
 alps:[{"x0":78,"y0":22,"x1":98,"y1":50}],
 inscr:[{"x0":70,"y0":35,"x1":90,"y1":50}]
};
var RE30={id:"RE-30",kind:"Oil painting",wide:true,title:"A Portrait That Hides a Skull",object:"The Ambassadors",playable:true,
 crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",
 work:"The Ambassadors",date:"1533 C.E.",location:"National Gallery, London",artist:"Hans Holbein the Younger",
 headline:"Look closely at the portrait",
 alt:"A nearly square oil painting of two men standing full-length on either side of a two-tiered shelf of objects. On the left, a bearded man in a black fur-trimmed robe with a pink silk shirt, a gold chain across his chest; on the right, a younger man in a dark brown fur robe resting his elbow on books. On the top shelf: a celestial globe, a polyhedral sundial, and other astronomical instruments. On the bottom shelf: a terrestrial globe, a lute, an open hymnal, a flute case, and books. Across the tiled floor in the foreground, a long, distorted grey shape stretches at an angle — an anamorphic skull.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/Holbein-Ambassadors.jpg",
 imageNote:"An oil painting on wood panel, about 6 feet 10 inches square (207 × 209 cm) — nearly life-size. Dinteville stands at the left, de Selve at the right, with a two-tiered shelf of objects between them and a stretched form across the tiled floor in the foreground.",
 detail:{image:"public/images/artworks/Holbein-Ambassadors-TopShelf.jpg",alt:"A close view of the top shelf: a celestial globe showing the stars, a polyhedral sundial, and several brass instruments for measuring the heavens, on a red oriental rug.",caption:"Detail: the objects on the top shelf — a celestial globe showing the stars, a polyhedral sundial, and several instruments for measuring the heavens",credit:{"word":"Detail photo","url":"","author":"Hans Holbein the Younger","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Close crop of the upper shelf."}},
 detail2:{image:"public/images/artworks/Holbein-Ambassadors-Skull.jpg",alt:"A close view of the anamorphic skull as it appears from the right side of the painting at an acute angle — the stretched grey form on the floor resolves into a proper skull.",caption:"Detail: the anamorphic skull as it appears from the right side of the painting at an acute angle — the stretched grey form on the floor resolves into a skull",credit:{"word":"Detail photo","url":"","author":"Hans Holbein the Younger","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/","changes":"Photographed from the oblique viewing angle."}},
 size:"",
 intro:"Hans Holbein the Younger painted this double portrait in London in 1533 for Jean de Dinteville, the French ambassador to the court of Henry VIII. The other figure is Georges de Selve, the young bishop of Lavaur, who had come to London that year on a diplomatic visit. Holbein was becoming the most sought-after portrait painter of the Tudor court; he died in London of plague in 1543. The painting hung for centuries at Dinteville’s family chateau in Burgundy and was bought by the National Gallery in London in 1890.",
 context:[{"term":"Anamorphosis","pron":"an-uh-MOR-fuh-sis","def":"A distorted image that resolves into a recognizable form only when viewed from a specific angle, usually acute from one side."},{"term":"Vanitas","pron":"VAN-i-tas","def":"A Northern Renaissance and Baroque picture whose objects — skulls, candles, clocks, flowers — remind the viewer that life is brief."},{"term":"Still life","pron":"","def":"A picture of arranged inanimate objects (fruit, flowers, books, musical instruments) rather than of people or landscapes."}],
 clues:[{"id":"amb","label":"The ambassadors","def":"The two men standing on either side of the shelves."},{"id":"still","label":"Still life","def":"The objects arranged on the two shelves between them."},{"id":"skull","label":"Anamorphic skull","def":"The stretched grey form across the tiled floor in the foreground."}],
 steps:["Click a feature box below, then click where you identify the feature on the image. Examine and identify all three features.",{head:"Choose two.",body:"Write at least one sentence about the feature. Try to use a Word to Know."}],
 closing:"Holbein painted the two ambassadors with every instrument of human knowledge between them — and then painted a stretched skull across the floor. What did he want the viewer to think, standing in front of this?",
 bonus:{points:5,prompt:"For 5 bonus points, add any additional observations about the work in general, or question(s) you would like to pursue later.",placeholder:""},
 guide:"Evidence filed. The ambassadors, Still life and Anamorphic skull are features a detective can carry to the next case.",
 sourceNums:[],
 credit:{"word":"Photo","url":"","author":"Hans Holbein the Younger","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"}};
RE30.zones={
 amb:[{"x0":5,"y0":15,"x1":95,"y1":90}],
 still:[{"x0":25,"y0":28,"x1":75,"y1":72}],
 skull:[{"x0":15,"y0":78,"x1":85,"y1":98}]
};

window.DECKS[2].vocab=[{id:"VOC-RE-2",after:7,word:"Contrapposto",crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",pron:"kon-truh-POS-toh",def:"A standing pose in which a figure rests its weight on one leg, letting the other leg relax. The hips tilt toward the weight-bearing side and the shoulders tilt the other way, so the body makes a gentle S-curve. Ancient Greek sculptors invented the pose; Italian Renaissance sculptors revived it after a thousand years of stiffer, frontal figures.",look:["Does the figure stand with its weight on one leg, letting the other leg bend or relax?","Do the hips tilt one way and the shoulders tilt the other way, so the body curves gently?","Does the figure look like it could take a step forward, instead of standing stiffly facing front?"],example:{id:"RE-15",points:["The figure’s weight rests on one leg, with the other leg bent at the knee — look how the hip on the weight-bearing side rises higher than the other.","The shoulders tilt in the opposite direction from the hips, so the torso curves softly from one side to the other.","The whole body looks still but ready to move — that is what contrapposto gives a figure that stiff frontal figures from earlier medieval sculpture do not have."]},sourceNums:[],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:2,options:[{"case":"RE-02"},{"case":"RE-05"},{"case":"RE-15"}]}},{id:"VOC-11",after:12,word:"Perspective",crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",def:"A technique Italian Renaissance artists worked out for showing deep space on a flat surface. Lines along floors, walls and ceilings appear to run toward a single point on the horizon — the vanishing point — and figures and objects farther back are drawn smaller, as the eye sees them.",look:["Do the lines of a floor, wall or ceiling seem to run toward one spot in the picture?","Do figures and objects farther back look smaller than those in front?","Can you find where the running lines meet — the vanishing point?"],example:{id:"RE-19",points:["The lines of the paving stones all run toward a single point behind Christ at the center of the picture. That meeting point is the vanishing point.","The figures across the front stand on the same ground line and are all drawn at roughly the same size, so the eye accepts them as near the viewer.","The two round temple buildings and the figures in the plaza behind them are drawn much smaller than the foreground figures, so the plaza reads as deep real space."]},sourceNums:[],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{"case":"RE-14"},{"case":"RE-19"},{"case":"RE-21"}]}},{id:"VOC-RE-3",after:18,word:"Sfumato",crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",pron:"sfoo-MAH-toh",def:"An Italian Renaissance painting technique that blends colors and tones so softly that no lines or hard edges remain. Forms seem to emerge from and dissolve into shadow, ‘like smoke’ — the literal meaning of the Italian word sfumato.",look:["Do the edges of faces, lips and eyes fade softly into the surrounding skin and shadow, rather than meeting a hard line?","Does the skin seem modeled in continuous tones, with no outline marking where light meets shadow?","Do the far parts of the picture look softer, almost misty, as if seen through a thin veil of air?"],example:{id:"RE-11",points:["The corners of her mouth fade into soft shadow without a clear outline. That is why her smile seems to change as you keep looking.","The edges of her eyes dissolve into her brow and cheek shadows — no hard line tells you where one ends and the next begins.","The transition from the light on her forehead and cheek to the shadow at her jaw is continuous, with no visible dividing line between light and dark."]},sourceNums:[],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:1,options:[{"case":"RE-16"},{"case":"RE-11"},{"case":"RE-21"}]}},{id:"VOC-RE-4",after:21,word:"Classical revival",crumb:"Renaissance Period, circa 1400 C.E. – 1600 C.E.",def:"The deliberate return of Renaissance artists and architects to the forms and ideas of ancient Greece and Rome. Classical columns, round arches, domes, pediments and balanced human figures replace the pointed arches and stylized figures of the Middle Ages. This return is what gives the Renaissance its name — the French word for ‘rebirth.’",look:["Does the building use ancient Greek or Roman forms — columns, round arches, pediments, domes?","Is the composition symmetrical and balanced, with matching elements on both sides of a central axis?","Does the work look as if it belongs to the ancient world, not to the medieval one before it?"],example:{id:"RE-28",points:["The plan shows four identical porticos — columned entrances with triangular pediments — radiating out from a central round hall, one on each face of the villa. The porticos quote directly from the fronts of ancient Roman temples.","At the heart of the plan is the round central hall, under a dome whose shape goes back to the Pantheon in Rome, built about 1,400 years earlier.","The plan shows perfect four-way symmetry: from the central hall, the four porticos extend identically in all four directions. A classical ideal of geometric balance."]},sourceNums:[],recognize:{prompt:"For 3 bonus points, identify this work. You have seen it before.",points:3,correct:2,options:[{"case":"RE-07"},{"case":"RE-03"},{"case":"RE-28"}]}}];
window.DECKS[2].cards[0]=RE03;
window.DECKS[2].cards[1]=RE07;
window.DECKS[2].cards[2]=RE12;
window.DECKS[2].cards[3]=RE02;
window.DECKS[2].cards[4]=RE01;
window.DECKS[2].cards[5]=RE05;
window.DECKS[2].cards[6]=RE15;
window.DECKS[2].cards[7]=RE23;
window.DECKS[2].cards[8]=RE21;
window.DECKS[2].cards[9]=RE13;
window.DECKS[2].cards[10]=RE14;
window.DECKS[2].cards[11]=RE19;
window.DECKS[2].cards[12]=RE08;
window.DECKS[2].cards[13]=RE22;
window.DECKS[2].cards[14]=RE16;
window.DECKS[2].cards[15]=RE10;
window.DECKS[2].cards[16]=RE24;
window.DECKS[2].cards[17]=RE11;
window.DECKS[2].cards[18]=RE06;
window.DECKS[2].cards[19]=RE20;
window.DECKS[2].cards[20]=RE28;
window.DECKS[2].cards[21]=RE29;
window.DECKS[2].cards[22]=RE18;
window.DECKS[2].cards[23]=RE04;
window.DECKS[2].cards[24]=RE17;
window.DECKS[2].cards[25]=RE09;
window.DECKS[2].cards[26]=RE25;
window.DECKS[2].cards[27]=RE27;
window.DECKS[2].cards[28]=RE26;
window.DECKS[2].cards[29]=RE30;
window.DECKS[2].review={"id":"REV-RE","capstone":true,"crumb":"Renaissance Period, circa 1400 C.E. – 1600 C.E.","title":"Renaissance Case File","banner":{"eyebrow":"CASE FILE REVIEW · NOVICE · 30 CASES","closed":"CLOSED · CIRCA 1400 – 1600 C.E.","sealCount":30},"intro":["You have reached the end of the Renaissance Case File. Across thirty cases you have met the artists, patrons and ideas that led European art from the gold-ground panels of the late Middle Ages to the dense symbolism of Holbein’s Ambassadors.","This final case uses a single painting — Raphael’s School of Athens, finished in 1511 for the pope’s private library — to review the three ideas that run through every case you have played. Many of them stand together in this one picture."],"image":"public/images/artworks/School.jpg","alt":"Raphael’s fresco The School of Athens: a vast vaulted hall with round arches and coffered ceilings, a vanishing point behind the central figures. Dozens of ancient philosophers gather in groups across the marble floor, talking, reading, writing. Plato and Aristotle walk together at the center, framed by the arches receding into deep space.","caption":"Raphael, The School of Athens, 1509–1511; fresco on the wall of the Stanza della Segnatura, Vatican. About 25 feet wide and 16 feet tall.","credit":{"word":"Photo","url":"","author":"Raphael","license":"Public domain","licenseUrl":"https://creativecommons.org/publicdomain/mark/1.0/"},"words":[{"term":"Renaissance","def":"The European cultural movement from about 1400 to 1600 that returned to the forms and ideas of ancient Greece and Rome, after a thousand years of mostly religious medieval art."},{"term":"Humanism","def":"The Renaissance idea that human beings — their bodies, their minds, their stories and achievements — are worthy subjects of art and study in their own right."},{"term":"Classical revival","def":"The deliberate return to the columns, round arches, domes, pediments and balanced human figures of ancient Greek and Roman art."}],"traitsHead":"Find the three Renaissance traits in this fresco","traitsSub":"Click a trait to begin, then mark it on the painting above. For each, think back to another case where you saw the same trait.","traits":[{"id":"humanist","label":"Humanist subject","hint":"The gathering of ancient philosophers — a subject from the classical world, not the Bible.","color":"teal","cases":[]},{"id":"perspective","label":"Perspective","hint":"The lines of the floor and ceiling arches running toward a single vanishing point.","color":"rust","cases":[]},{"id":"classical","label":"Classical architecture","hint":"The great hall with its columns, round arches and vaulted ceiling.","color":"violet","cases":[]}],"bonus":{"points":5,"prompt":"Name one Renaissance artist or idea from the deck that is not on this card, and say briefly why it mattered."},"closeBtn":"CLOSE THE RENAISSANCE CASE FILE","outro":"Renaissance closed. The Baroque file opens next.","sourceNums":[]};
