// Static integrity check. Run from the repo root:  node tools/check_data.js
// Catches the failures that are invisible in a browser until a player hits them.
global.window={DECKS:[]};
require('../content/cards.js');
const fs=require('fs');
const srcTxt=fs.readFileSync(__dirname+'/../content/sources.js','utf8');
const srcNums=new Set((srcTxt.match(/"n":(\d+)/g)||[]).map(x=>+x.split(':')[1]));
let bad=0; const fail=(...a)=>{console.log('FAIL',...a);bad++};

window.DECKS.forEach(d=>{
  const cards=(d.cards||[]).filter(Boolean);
  const ids=cards.map(c=>c.id);
  cards.forEach((c,i)=>{
    if(!c.playable) return;
    // clue ids must match zone keys exactly
    const ck=c.clues.map(x=>x.id).sort().join(), zk=Object.keys(c.zones||{}).sort().join();
    if(ck!==zk) fail(c.id,'clue ids',ck,'!= zone keys',zk);
    // zones must lie inside the image and be non-empty
    Object.entries(c.zones||{}).forEach(([k,list])=>list.forEach(h=>{
      const v = ('x0' in h) ? [h.x0,h.y0,h.x1,h.y1]
                            : [h.cx-h.rx,h.cy-h.ry,h.cx+h.rx,h.cy+h.ry];
      if(v.some(n=>n<0||n>100)) fail(c.id,k,'zone outside image',JSON.stringify(h));
      if(v[0]>=v[2]||v[1]>=v[3]) fail(c.id,k,'zone has no area',JSON.stringify(h));
    }));
    (c.sourceNums||[]).forEach(n=>{if(!srcNums.has(n)) fail(c.id,'cites missing source',n)});
    if(c.clues.length<2||c.clues.length>3) fail(c.id,'has',c.clues.length,'features; expected 2 or 3');
  });

  // vocabulary gating: everything referenced must already have been played
  const seenCorrect=new Map();
  (d.vocab||[]).slice().sort((a,b)=>a.after-b.after).forEach(v=>{
    const seen=ids.slice(0,v.after);
    const refs=[];
    if(v.example) refs.push(v.example.id);
    if(v.recognize) v.recognize.options.forEach(o=>refs.push(o.case));
    refs.filter(Boolean).forEach(r=>{if(!seen.includes(r)) fail(v.id,'references',r,'which is not played until later')});
    if(v.recognize){
      const ans=v.recognize.options[v.recognize.correct] && v.recognize.options[v.recognize.correct].case;
      if(seenCorrect.has(ans)) fail(v.id,'has the same correct answer as',seenCorrect.get(ans),'-',ans);
      seenCorrect.set(ans,v.id);
    }
    if(v.locate){
      const lk=v.locate.clues.map(x=>x.id).sort().join(), lz=Object.keys(v.locate.zones||{}).sort().join();
      if(lk!==lz) fail(v.id,'locate clue ids',lk,'!= zone keys',lz);
    }
    (v.sourceNums||[]).forEach(n=>{if(!srcNums.has(n)) fail(v.id,'cites missing source',n)});
  });

  // the closing review
  const r=d.review;
  if(r){
    r.traits.forEach(t=>t.cases.forEach(c=>{if(!ids.includes(c)) fail('review trait',t.id,'names unknown case',c)}));
    (r.sourceNums||[]).forEach(n=>{if(!srcNums.has(n)) fail('review cites missing source',n)});
  }
  console.log(d.id+': '+cards.filter(c=>c.playable).length+' playable cases, '
    +((d.vocab||[]).length)+' vocabulary cards, '+(r?'1 review':'no review'));
});
console.log(bad?('\n'+bad+' PROBLEM(S)'):'\nAll checks passed.');
process.exit(bad?1:0);
