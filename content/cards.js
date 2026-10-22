/* Art History Game: Middle School content.
   Five periods, 30 case slots each. A slot with playable:true is a finished card;
   every other slot is a placeholder until its card is built.
   Card IDs: EM, LM, RE, BA, MO + two digits. */
function placeholders(prefix){
  var a=[];
  for(var i=1;i<=30;i++){a.push({id:prefix+'-'+(i<10?'0':'')+i,title:'Title to come',playable:false})}
  return a;
}
var EM01={id:"EM-01",title:"Carved to Match",object:"The Four Tetrarchs",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 800 C.E.",
 work:"The Four Tetrarchs",date:"circa 300 C.E.",location:"St. Mark’s Basilica, Venice",artist:"artist unknown",
 headline:"Look closely at the four figures",
 alt:"Four armed figures carved in purple-red stone stand in two embracing pairs at the corner of a building. They wear matching short tunics, cloaks and flat-topped caps, and each grips a sword with a bird-headed hilt.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/The-tetrarchs.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/The-tetrarchs-detail.jpg",alt:"Close view of two of the carved faces and their flat-topped caps. Each face has large, round, deeply cut eyes, and the stone surface is worn and pitted.",caption:"Detail",credit:{url:"https://commons.wikimedia.org/wiki/File:Detail_of_the_Four_Tetrarchs,_ca._300;_Venice_(2).jpg",author:"Prof. Mortel",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the original."}},
 size:"Height: 130 cm / 51 in (4 ft 3 in). About two-thirds the height of a standard 80 in door.",
 intro:"Look at the four figures carved in this red stone. How did the sculptor shape them?",
 context:"Porphyry is a very hard, purple-red stone, which makes fine detail difficult to carve.",
 clues:[{id:"blocky",label:"Blocky bodies",def:"Stiff, boxy shapes, large heads"},{id:"matching",label:"Matching figures",def:"Same size, pose and clothing"},{id:"patterns",label:"Cut patterns",def:"Lines and shapes on cloth and armor"}],
 steps:["Choose a clue.","Click the artwork where you see it.","Write one sentence about what you notice. Do this for two different clues."],
 closing:"Do these four look like four different people, or like one shape repeated?",
 bonus:{points:5,prompt:"For 5 bonus points, add your personal observation or feeling about this work.",placeholder:"I feel\u2026"},
 guide:"Evidence filed. Hard stone, repeated shapes and patterns cut in lines are clues a detective can carry to the next case.",
 sourceNums:[1],
 credit:{url:"https://commons.wikimedia.org/wiki/File:The-tetrarchs.jpg",author:"Wooofer",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the original."}};
var EM02={id:"EM-02",wide:true,title:"Floating in Gold",object:"Apse mosaic, San Vitale",playable:true,
 crumb:"Early Medieval Period, circa 300 C.E. \u2013 800 C.E.",
 work:"Christ with Angels, Saint Vitalis and Bishop Ecclesius (apse mosaic)",date:"circa 547 C.E.",location:"Basilica of San Vitale, Ravenna",artist:"artists unknown",
 headline:"Look closely at the figures",
 alt:"A curved wall covered in tiny glass tiles. Christ sits on a blue globe against a gold background, wearing dark purple and holding a book. Two angels stand beside him, and a saint and a bishop stand at the outer sides, all facing forward on a strip of green ground with flowers.",
 enlarge:"Enlarge image",
 image:"public/images/artworks/San-Vitale-apse.jpg",
 imageNote:"",
 detail:{image:"public/images/artworks/San-Vitale-apse-detail.jpg",alt:"Close view of small cut pieces of stone in cream, green, black and red-orange, set in curving rows with thin gaps of mortar between them.",caption:"Detail: tesserae",credit:{url:"https://commons.wikimedia.org/wiki/File:Ravenna,_San_Vitale_-_12536853624.jpg",author:"bradhostetler",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",changes:"Resized from the original."}},
 size:"",
 intro:"Look at this curved wall covered in tiny pieces of glass. How did the artists make these figures feel holy rather than ordinary?",
 context:"Tesserae (teh-SER-ee) are the small cut pieces of glass or stone that make up a mosaic.",
 clues:[{id:"gold",label:"Gold background",def:"Glittering glass tiles instead of a sky"},{id:"faces",label:"Forward-facing figures",def:"Stiff poses and wide, steady eyes"},{id:"float",label:"Floating figures",def:"Little weight, shadow or solid ground"}],
 steps:["Choose a clue.","Click the artwork where you see it.","Write one sentence about what you notice. Do this for two different clues."],
 closing:"Does Christ seem to sit in a real place, or somewhere outside of time?",
 bonus:{points:5,prompt:"For 5 bonus points, add your personal observation or feeling about this work.",placeholder:"I feel\u2026"},
 guide:"Evidence filed. Gold light, forward-facing figures and bodies that seem to float are clues a detective can carry to the next case.",
 sourceNums:[2,3],
 credit:{url:"https://commons.wikimedia.org/wiki/File:Apse_mosaic_-_Basilica_of_San_Vitale_(Ravenna).jpg",author:"Petar Milo\u0161evi\u0107",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",changes:"Resized from the original."}};
window.DECKS=[
{id:"early-medieval",title:"Early Medieval",span:"circa 300 C.E. \u2013 800 C.E.",cards:placeholders('EM')},
{id:"late-medieval",title:"Late Medieval",span:"",cards:placeholders('LM')},
{id:"renaissance",title:"Renaissance",span:"",cards:placeholders('RE')},
{id:"baroque",title:"Baroque",span:"",cards:placeholders('BA')},
{id:"modern",title:"Modern",span:"",cards:placeholders('MO')}
];
window.DECKS[0].cards[0]=EM01;
window.DECKS[0].cards[1]=EM02;
