(function(){
var app=document.getElementById('app'),KEY='ahg.v1';
var raw=JSON.parse(localStorage.getItem(KEY)||'{}');
var store={cards:raw.cards||{}};
var CFG={saveDraft:false};
var S={miss:{},finds:[],queue:[],cur:{x:50,y:50},msg:'',done:false,id:null};
function save(){if(S.id){store.cards[S.id]=S.done?{finds:[],bonus:'',points:S.points||0}:{finds:S.finds,bonus:S.bonus||'',points:S.points||0}}localStorage.setItem(KEY,JSON.stringify(store))}
function words(t){return (t||'').trim().split(/\s+/).filter(Boolean).length}
function bank(){var n=0;Object.keys(store.cards).forEach(function(k){n+=store.cards[k].points||0});var e=document.getElementById('bank');if(e)e.textContent='Points: '+n}
function cloud(c){var p=S.points;var l='Case closed. Vasario awards you '+p+' points'+(p>10?' (10 for the case, 5 bonus for your detective\u2019s note)':'')+'.';return '<div class="cloud"><strong>Vasario</strong><p>'+l+'</p>'+(S.bonusMissed?'<p class="note">Add four or more words to your note to earn the 5 bonus points. You can edit it and submit again.</p>':'')+(c.guide?'<p>'+esc(c.guide)+'</p>':'')+'</div>'}
function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}
function find(id){for(var i=0;i<DECKS.length;i++){var cs=DECKS[i].cards;for(var j=0;j<cs.length;j++){if(cs[j].id===id&&cs[j].playable)return{deck:DECKS[i],card:cs[j]}}}return null}
function done(c){return ((store.cards[c.id]||{}).points||0)>0}
function num(i){return (i<9?'0':'')+(i+1)}
function tabs(cur){return '<nav class="tabs" aria-label="Periods">'+DECKS.map(function(d){return '<a href="#/deck/'+d.id+'"'+(d.id===cur?' aria-current="page"':'')+'>'+esc(d.title)+'</a>'}).join('')+'</nav>'}
var LEVELS={apprentice:{title:'Novice',sub:'Grades 6–8',blurb:'An illustrated introduction: look closely at real works, identify their features, and build an art-historical vocabulary one case at a time.',status:'open',href:'#/deck/'+DECKS[0].id},journeyman:{title:'Apprentice',sub:'High School',blurb:'A high-school-level course built to open Art History as a serious, fascinating field worth pursuing further.',status:'soon'},scholar:{title:'Artisan',sub:'Undergraduate',blurb:'A study guide covering the works and movements an Art History major is expected to know before moving on to graduate study.',status:'soon'},maestro:{title:'Master',sub:'Graduate',blurb:'Preparation toward the command of material a graduate defense requires.',status:'soon'}};
var LVLORDER=['apprentice','journeyman','scholar','maestro'];
function lvlNav(h){var cur=(h[1]==='level')?h[2]:((h[1]==='deck'||h[1]==='card'||h[1]==='vocab'||h[1]==='review')?'apprentice':null);var ns=document.querySelectorAll('.lvls a');for(var i=0;i<ns.length;i++){if(cur&&ns[i].dataset.lvl===cur)ns[i].setAttribute('aria-current','page');else ns[i].removeAttribute('aria-current')}}
function level(id){var L=LEVELS[id];if(!L||L.status==='open'){location.hash=L?L.href:'#/';return}app.innerHTML='<p class="note"><a href="#/">← All levels</a></p><h1 class="ph">'+esc(L.title)+'</h1><p class="sub"><span class="note">'+esc(L.sub)+'</span></p><div class="panel"><p>'+esc(L.blurb)+'</p><p class="note">This level is in development. The Apprentice level is open now.</p><p><a class="btn primary" href="#/deck/'+DECKS[0].id+'">Go to Apprentice</a></p></div>'}
function cardList(d){return '<ol class="cases">'+d.cards.map(function(c,i){var dn=done(c),pts=(store.cards[c.id]||{}).points||0;
var inner='<span class="box'+(dn?' on':'')+'" aria-hidden="true">'+(dn?'\u2713':'')+'</span><span class="sr">'+(dn?'Completed. ':'Not yet completed. ')+'</span><span class="num">'+num(i)+'</span><span class="ttl"><strong>'+esc(c.title)+'</strong>'+(c.object?'<span class="note">'+esc(c.object)+'</span>':'')+'</span>'+(dn?'<span class="tail pts">'+pts+' points</span>':(c.playable?'<span class="tail go">Play</span>':'<span class="tail soon">Coming soon</span>'));
return '<li class="'+(c.playable?'ready':'later')+(dn?' done':'')+'">'+(c.playable?'<a href="#/card/'+c.id+'">'+inner+'</a>':'<div class="row">'+inner+'</div>')+'</li>'+vocabRows(d,i+1)}).join('')+reviewRow(d)+'</ol>'}
function reviewRow(d){var r=d.review;if(!r)return '';var rc=store.cards[r.id],dn=!!(rc&&rc.seen);
 return '<li class="vocab ready review"><a href="#/review/'+d.id+'"><span class="vtag">File</span><span class="ttl"><strong>'+esc(r.title)+'</strong><span class="note">What the thirty cases add up to</span></span><span class="tail '+(dn?'pts':'go')+'">'+(dn?'Read':'Open')+'</span></a></li>'}
function vocabRows(d,n){return (d.vocab||[]).filter(function(v){return v.after===n}).map(function(v){return '<li class="vocab ready"><a href="#/vocab/'+v.id+'"><span class="vtag">Word</span><span class="ttl"><strong>Learn Your Art History Vocabulary</strong><span class="note">'+esc(v.word)+'</span></span>'+(function(){var rc=store.cards[v.id];return rc&&(rc.choice!=null||rc.done)?'<span class="tail pts">'+rc.points+' points</span>':'<span class="tail go">Read</span>'})()+'</a></li>'}).join('')}
function vocabFind(id){var r=null;DECKS.forEach(function(x){(x.vocab||[]).forEach(function(y){if(y.id===id)r={d:x,v:y}})});return r}
function vocab(id){var r0=vocabFind(id),d=r0&&r0.d,v=r0&&r0.v;if(!v){location.hash='#/deck/'+DECKS[0].id;return}
var vmag=false,ex=v.example&&find(v.example.id),q=v.recognize,LT=['A','B','C'],CO=['#1f6f6b','#a4472b','#5b4b8a'];
var LO=v.locate||null,LS={sel:null,miss:{},msg:''};
function lrec(){var r=store.cards[v.id];if(!r||!r.finds)r={choice:null,points:0,finds:[],done:false,bonus:''};return r}
function lsave(r){store.cards[v.id]=r;localStorage.setItem(KEY,JSON.stringify(store));bank()}
function lci(id){for(var i=0;i<LO.clues.length;i++)if(LO.clues[i].id===id)return i;return 0}
function lhit(id,x,y){var z=(LO.zones||{})[id];if(!z)return true;return z.some(function(h){if(h.rx!=null){var dx=(x-h.cx)/h.rx,dy=(y-h.cy)/h.ry;return dx*dx+dy*dy<=1}return x>=h.x0&&x<=h.x1&&y>=h.y0&&y<=h.y1})}
function rec(){return store.cards[v.id]||null}
function lab(o){var c=o.case&&find(o.case);return c?(c.card.object||c.card.title):o.label}
var nx=null;for(var k=v.after;k<d.cards.length;k++){if(d.cards[k].playable){nx=d.cards[k];break}}
function draw(){var rc=rec(),ans=!!(q&&rc&&rc.choice!=null),title=ex?esc(ex.card.object||ex.card.title):'';
var opts=q?q.options.map(function(o,i){var c=o.case&&find(o.case),cls='qopt'+(ans?(i===q.correct?' right':(i===rc.choice?' wrong':'')):'');
return '<button class="'+cls+'" data-i="'+i+'"'+(ans?' disabled':'')+' style="--cc:'+CO[i]+'"><span class="let">'+LT[i]+'</span>'+'<span class="qlab">'+esc(lab(o))+'</span>'+(ans&&i===q.correct?'<span class="qmark">✓ Correct answer</span>':(ans&&i===rc.choice?'<span class="qmark">Your answer</span>':''))+'</button>'}).join(''):'';
var res=ans?(rc.choice===q.correct?'Correct. Vasario awards you '+q.points+' points.':'Not this time. The correct answer is '+LT[q.correct]+', '+esc(lab(q.options[q.correct]))+'.'):'';
var nums=(v.sourceNums||[]).concat(ex&&(ans||!q)?ex.card.sourceNums||[]:[]).filter(function(n,k,x){return x.indexOf(n)===k});
function LOCHTML(){if(!LO)return '';var r=lrec(),got=r.finds.length,tot=LO.clues.length;
 var chips=LO.clues.map(function(k,j){var placed=r.finds.some(function(f){return f.clue===k.id});
  return '<button class="lchip" data-id="'+k.id+'" aria-pressed="'+(LS.sel===k.id)+'" style="--cc:'+CO[j]+'"><span class="let">'+LT[j]+'</span><span><strong>'+esc(k.label)+'</strong><small>'+esc(k.def)+'</small></span>'+(placed?'<span class="ord">\u2713</span>':'')+'</button>'}).join('');
 var mk=r.finds.map(function(f){var j=lci(f.clue);return '<span class="mark" style="--cc:'+CO[j]+';left:'+f.x+'%;top:'+f.y+'%">'+LT[j]+'</span>'}).join('');
 var done=got>=tot, sc=done?'All '+tot+' found. Vasario awards you '+r.points+' of '+tot+' points.':(got?got+' of '+tot+' found.':'');
 return '<div class="vex vloc"><div class="headrow"><h2>'+esc(LO.heading||'Find each part')+'</h2><span class="magsw" role="group" aria-label="Magnifier"><span class="ml">Magnifier</span><button id="magon" aria-pressed="'+vmag+'">On</button><button id="magoff" aria-pressed="'+!vmag+'">Off</button></span></div>'
  +'<p><strong>'+esc(LO.prompt)+'</strong></p><div class="chips" id="lchips">'+chips+'</div><div class="msg" id="lmsg" role="status">'+esc(LS.msg)+'</div>'
  +'<figure><div class="vart" id="vart"><img src="'+esc(LO.image)+'" alt="'+esc(LO.alt)+'">'+mk+'</div>'+(LO.caption?'<figcaption class="note">'+esc(LO.caption)+'</figcaption>':'')+'</figure>'
  +'<p class="qres" id="lres" role="status">'+esc(sc)+'</p></div>'}
app.innerHTML='<p class="note">'+esc(v.crumb||d.title+' Period')+' · <strong>VOCABULARY</strong></p><div class="vbox"><p class="vkick">Learn Your Art History Vocabulary</p><h1 class="vword">'+esc(v.word)+'</h1><p class="vdef">'+esc(v.def)+'</p><div class="vlook"><h2>Look for</h2><ul>'+v.look.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul></div>'+(ex?'<div class="vex"><div class="headrow"><h2>A good example</h2><span class="magsw" role="group" aria-label="Magnifier"><span class="ml">Magnifier</span><button id="magon" aria-pressed="'+vmag+'">On</button><button id="magoff" aria-pressed="'+!vmag+'">Off</button></span></div><figure><div class="vart" id="vart"><img src="'+esc(ex.card.image)+'" alt="'+esc(ex.card.alt)+'"></div><p class="note" id="vhint"'+(vmag?'':' hidden')+'>Move the pointer over the photo to magnify it.</p>'+(ans||!q?'<figcaption class="note">'+esc(ex.card.work)+'; '+esc(ex.card.date)+'; '+esc(ex.card.location)+'</figcaption>':'')+'</figure>'+v.example.points.map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+'</div>':'')+(q?'<div class="vrecog"><h2>'+esc(q.prompt)+'</h2><div class="qopts">'+opts+'</div><p class="qres" id="qres" role="status">'+res+'</p></div>':'')+LOCHTML()+'<p class="vnext">'+(nx?'<a class="btn primary" href="#/card/'+nx.id+'">Next case →</a>':'<a class="btn primary" href="#/deck/'+d.id+'">Back to the list</a>')+'</p></div><footer class="credits">'+(ex?credit(ex.card.credit,'Photo'):'')+(LO?credit(LO.credit,LO.creditWord||'Plan'):'')+(nums.length?'<p class="note srcs">Sources: '+nums.map(function(n){return '<a href="#/sources/'+n+'">'+n+'</a>'}).join(', ')+'</p>':'')+'</footer>';
if(LO){
 app.querySelectorAll('.lchip').forEach(function(b){b.onclick=function(){var id=this.getAttribute('data-id');LS.sel=(LS.sel===id?null:id);
  app.querySelectorAll('.zglow').forEach(function(g){g.remove()});
  LS.msg=LS.sel?'Now click that part on the plan.':'';draw()}});
 var la=document.getElementById('vart');
 if(la)la.addEventListener('click',function(e){var r=la.getBoundingClientRect();
  var x=Math.round((e.clientX-r.left)/r.width*1000)/10,y=Math.round((e.clientY-r.top)/r.height*1000)/10;
  if(!LS.sel){LS.msg='Choose a part first.';draw();return}
  var id=LS.sel,rc=lrec();
  if(rc.finds.some(function(f){return f.clue===id})){LS.msg='You have already found that one.';draw();return}
  if(!lhit(id,x,y)){LS.miss[id]=(LS.miss[id]||0)+1;
   var m=document.createElement('span');m.className='xmark';m.textContent='\u2715';m.setAttribute('aria-hidden','true');m.style.left=x+'%';m.style.top=y+'%';la.appendChild(m);setTimeout(function(){m.remove()},1300);
   if(LS.miss[id]>=2){((LO.zones||{})[id]||[]).forEach(function(h){var g=document.createElement('div');g.className='zglow';g.style.left=h.x0+'%';g.style.top=h.y0+'%';g.style.width=(h.x1-h.x0)+'%';g.style.height=(h.y1-h.y0)+'%';g.style.borderRadius='10px';la.appendChild(g)});LS.msg='Here is where to look.'}
   else{LS.msg='Not quite. Try another spot.'}
   var em=document.getElementById('lmsg');if(em)em.textContent=LS.msg;return}
  var first=!LS.miss[id];rc.finds.push({clue:id,x:x,y:y});if(first)rc.points+=(LO.points||1);
  rc.done=rc.finds.length>=LO.clues.length;LS.sel=null;
  LS.msg=first?'Correct. That is the '+LO.clues[lci(id)].label.toLowerCase()+'.':'That is the right place. No point for this one.';
  lsave(rc);draw()});
}
app.querySelectorAll('.qopt').forEach(function(b){b.onclick=function(){if(rec()&&rec().choice!=null)return;var i=+this.getAttribute('data-i');store.cards[v.id]={choice:i,points:i===q.correct?q.points:0,finds:[],bonus:''};localStorage.setItem(KEY,JSON.stringify(store));bank();draw();var e=document.getElementById('qres');if(e&&e.scrollIntoView)e.scrollIntoView({block:'center'})}})
var va=document.getElementById('vart');if(va){var vl=document.createElement('div');vl.className='lens';va.appendChild(vl);var VZ=2.5,VS=187;
va.onmousemove=function(e){if(!vmag){vl.style.display='none';return}var r=va.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;if(x<0||y<0||x>r.width||y>r.height){vl.style.display='none';return}var im=va.querySelector('img');vl.style.display='block';vl.style.left=x+'px';vl.style.top=y+'px';vl.style.backgroundImage='url("'+(im.currentSrc||im.src)+'")';vl.style.backgroundSize=(r.width*VZ)+'px '+(r.height*VZ)+'px';vl.style.backgroundPosition=(VS/2-x*VZ)+'px '+(VS/2-y*VZ)+'px'};
va.onmouseleave=function(){vl.style.display='none'};
function vset(on){vmag=on;document.getElementById('magon').setAttribute('aria-pressed',on);document.getElementById('magoff').setAttribute('aria-pressed',!on);document.getElementById('vhint').hidden=!on;vl.style.display='none'}
document.getElementById('magon').onclick=function(){vset(true)};document.getElementById('magoff').onclick=function(){vset(false)}}}
draw()}
function review(did){var d=DECKS.filter(function(x){return x.id===did})[0];var r=d&&d.review;
if(!r){location.hash='#/deck/'+DECKS[0].id;return}
function rec(){return store.cards[r.id]||{seen:true,text:'',shown:false}}
function put(o){store.cards[r.id]=o;localStorage.setItem(KEY,JSON.stringify(store))}
var st=rec();st.seen=true;put(st);
function pos(cid){for(var i=0;i<d.cards.length;i++)if(d.cards[i].id===cid)return i+1;return 0}
function draw(){var rc=rec(),w=r.work;
var tr=r.traits.map(function(t){
  var ps=t.cases.map(function(c){return {id:c,n:pos(c),done:done(find(c).card)}}).sort(function(a,b){return a.n-b.n});
  var dn=ps.filter(function(x){return x.done}).length;
  return '<div class="trait"><h3>'+esc(t.claim)+'</h3><p>'+esc(t.note)+'</p>'
   +'<p class="note tcases">'+(dn?'You have closed '+dn+' of the '+ps.length+' cases where this appears':'Appears in '+ps.length+' cases')
   +' \u00b7 '+ps.map(function(x){return '<a href="#/card/'+esc(x.id)+'"'+(x.done?' class="dn"':'')+'>'+num(x.n-1)+'</a>'}).join(' ')+'</p></div>'}).join('');
var fig=function(o,cls){return '<figure class="'+cls+'"><img src="'+esc(o.image)+'" alt="'+esc(o.alt)+'"><figcaption class="note">'+esc(o.caption)+'</figcaption></figure>'};
app.innerHTML='<p class="note">'+esc(r.crumb)+' \u00b7 <strong>CASE FILE</strong></p><div class="vbox revbox">'
 +'<p class="vkick">Case closed</p><h1 class="vword">'+esc(r.title)+'</h1><p class="vdef">'+esc(r.lead)+'</p>'
 +'<h2 class="revh">'+esc(r.traitsHead)+'</h2><div class="traits">'+tr+'</div>'
 +'<div class="vex revwork"><h2>'+esc(w.head)+'</h2><p><strong>'+esc(w.kicker)+'</strong> '+esc(w.lede)+'</p>'
 +fig(w,'revmain')+'<div class="revdets">'+fig(w.detail,'revdet')+fig(w.detail2,'revdet')+'</div>'
 +'<label class="bonus"><strong>'+esc(w.prompt)+'</strong><textarea id="revtx" placeholder="'+esc(w.placeholder)+'">'+esc(rc.text||'')+'</textarea></label>'
 +(rc.shown?'<div class="reveal">'+w.reveal.map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+'<p class="revclose"><strong>'+esc(w.closing)+'</strong></p></div>'
   :'<p class="btns"><button class="primary" id="revbtn">'+esc(w.revealBtn)+'</button></p>')
 +'</div><p class="vnext"><a class="btn primary" href="#/deck/'+d.id+'">Back to the list</a></p>'
 +(rc.shown&&r.outro?'<p class="note revoutro">'+esc(r.outro)+'</p>':'')
 +'</div><footer class="credits">'+credit(w.credit,'Photo')+credit(w.detail.credit,'Detail photo')+credit(w.detail2.credit,'Detail photo')
 +((r.sourceNums||[]).length?'<p class="note srcs">Sources: '+r.sourceNums.map(function(n){return '<a href="#/sources/'+n+'">'+n+'</a>'}).join(', ')+'</p>':'')+'</footer>';
var tx=document.getElementById('revtx');
if(tx)tx.oninput=function(){var o=rec();o.text=tx.value;o.seen=true;put(o)};
var b=document.getElementById('revbtn');
if(b)b.onclick=function(){var o=rec();o.shown=true;put(o);draw();var e=document.querySelector('.reveal');if(e&&e.scrollIntoView)e.scrollIntoView({block:'start'})}}
draw()}
function home(){
app.innerHTML='<section class=\"hero\"><h1>Anyone Can Memorize Names and Dates.<br>Learn How to Read the Work.</h1><p class=\"lead\">Museums have taught close looking for decades, one gallery visit at a time. This is the same method, built into a sequence of cases you can work through anywhere, at your own pace \u2014 at any level from middle school to graduate study.</p><a class=\"btn primary\" href=\"#/deck/'+DECKS[0].id+'\">Begin at '+esc(LEVELS[LVLORDER[0]].title)+'</a></section>'
+'<h2>A Case-by-Case Investigation<br>Through the History of Western Art</h2><div class=\"lvltiles\">'+LVLORDER.map(function(k){var L=LEVELS[k];return '<a class=\"tile '+(L.status==='open'?'open':'soon')+'\" href=\"'+(L.status==='open'?L.href:'#/level/'+k)+'\"><h3>'+esc(L.title)+'</h3><p class=\"note\">'+esc(L.sub)+'</p><p>'+esc(L.blurb)+'</p><span class=\"tag\">'+(L.status==='open'?'Begin':'In development')+'</span></a>'}).join('')+'</div>'
}
function deck(id){var d=DECKS.filter(function(x){return x.id===id})[0];if(!d){location.hash='#/deck/'+DECKS[0].id;return}
var nd=d.cards.filter(done).length,ni=-1,np=-1,act=false;function part(c){var r=store.cards[c.id]||{};return (r.finds||[]).length>0||!!r.bonus}
d.cards.forEach(function(c,i){if(c.playable&&(done(c)||part(c)))act=true;if(ni<0&&c.playable&&!done(c))ni=i;if(np<0&&c.playable&&!done(c)&&part(c))np=i});if(np>=0)ni=np;
app.innerHTML=tabs(id)+'<h1 class="ph">'+esc(d.title)+' Period</h1><div class="sub"><span class="prog"><strong>'+nd+' of '+d.cards.length+'</strong> cases completed'+(d.span?' <span class="note">\u00b7 '+esc(d.span)+'</span>':'')+'</span>'+(ni>=0?'<a class="btn primary" href="#/card/'+d.cards[ni].id+'">'+(act?'Continue with case ':'Start with case ')+(ni+1)+'</a>':'')+'</div>'+(S.saved?'<p class="saved" role="status">Level saved. Your progress is kept on this device.</p>':'')+cardList(d);S.saved=false}
function detailFig(d){return '<figure class="detail"'+(d.flex?' style="flex:0 0 '+d.flex+'%"':'')+'><img src="'+d.image+'" alt="'+esc(d.alt)+'"><figcaption class="note">'+esc(d.caption||'Detail')+'</figcaption></figure>'}
function details(c){if(!c.detail)return '';if(!c.detail2)return detailFig(c.detail);return '<div class="details">'+detailFig(c.detail)+detailFig(c.detail2)+'</div>'}
function credit(k,word){if(!k)return '';word=k.word||word;var lead=k.title?esc(k.title)+' – '+word.toLowerCase():(k.url?'<a href="'+k.url+'">'+word+'</a>':word);return '<p class="note">'+lead+' by '+esc(k.author)+', '+(k.licenseUrl?'<a href="'+k.licenseUrl+'">'+esc(k.license)+'</a>':esc(k.license))+', via Wikimedia Commons'+(k.changes?'. '+esc(k.changes):'')+'</p>'}
function card(id){var f=find(id);if(!f){location.hash='#/deck/'+DECKS[0].id;return}
var c=f.card;if(S.id!==id){S.id=id;S.finds=(store.cards[id]||{}).finds||[];S.bonus=(store.cards[id]||{}).bonus||'';S.points=(store.cards[id]||{}).points||0}
var cl=function(i){return c.clues.filter(function(k){return k.id===i})[0]};
var LET=['A','B','C'],COL=['#1f6f6b','#a4472b','#5b4b8a'],TINT=['#e3f0ef','#f6e6df','#ebe6f4'];function ci(x){return c.clues.map(function(k){return k.id}).indexOf(x)}
var st=c.steps||[];
app.innerHTML='<p class="note">'+esc(c.crumb)+' \u00b7 <strong>YOUR TURN</strong></p>'+(c.work?'<h1 class="work">'+(c.kind?'<span class="kind">'+esc(c.kind)+'</span>':'')+'<strong>'+esc(c.work)+'</strong>; '+esc(c.date)+'; '+esc(c.location)+'; '+esc(c.artist)+'</h1>':'')+'<div class="grid"><section><div class="headrow"><h2>'+esc(c.headline)+'</h2><span class="magsw" role="group" aria-label="Magnifier"><span class="ml">Magnifier</span><button id="magon" aria-pressed="false">On</button><button id="magoff" aria-pressed="true">Off</button></span></div>'
+'<div class="art'+(c.wide?' wide':'')+'" id="art" tabindex="0" role="application" aria-label="Artwork. Choose a feature box, move the cursor with arrow keys, and press Enter to mark where you see that feature."><img src="'+c.image+'" alt="'+esc(c.alt)+'"><span class="cursor" id="cur"></span></div>'
+(c.imageNote?'<p class="note">'+esc(c.imageNote)+'</p>':'')+details(c)
+(c.size?'<p>'+esc(c.size)+'</p>':'')
+(c.place?'<p>'+esc(c.place)+'<br>'+esc(c.holding)+'</p>':'')+'<div id="bslotL"></div></section><section class="panel"><h1>'+esc(c.title.toUpperCase())+'</h1><div class="q">'+esc(c.intro)+'</div><p class="word"><strong>Word to know</strong>'+esc(c.context)+'</p><ol class="how"><li><span class="n">1</span><div><strong>'+esc(st[0])+'</strong><div class="chips" id="chips"></div><div class="msg" id="msg" role="status"></div></div></li><li><span class="n">2</span><div>'+esc(st[1])+'</div></li></ol>'
+'<div id="fields"></div><div id="bslotP"></div>'+(c.bonus?'<label class="bonus"><strong>'+esc(c.bonus.prompt)+'</strong><textarea id="bonus" placeholder="'+esc(c.bonus.placeholder||'')+'"></textarea></label>':'')
+(S.done?cloud(c):'')+(S.done&&c.closing?'<div class="closing"><strong>Think like an art historian <span>(no written response required)</span></strong><p>'+esc(c.closing)+'</p></div>':'')+'<div class="btns">'+(CFG.saveDraft?'<button id="draft">Save draft</button>':'')+'<button class="primary" id="sub">Submit finds</button><span id="nextp"></span></div><div class="msg" id="bmsg" role="status"></div></section></div><footer class="credits">'+credit(c.credit,'Photo')+(c.detail?credit(c.detail.credit,'Detail photo'):'')+(c.detail2?credit(c.detail2.credit,'Detail photo'):'')+(c.sourceNums&&c.sourceNums.length?'<p class="note srcs">Sources: '+c.sourceNums.map(function(n){return '<a href="#/sources/'+n+'">'+n+'</a>'}).join(', ')+'</p>':'')+'</footer>';
var fa=document.getElementById('frameart');if(fa){fa.src=c.image;fa.alt=''}
var art=document.getElementById('art');
function marks(){art.querySelectorAll('.mark').forEach(function(m){m.remove()});S.finds.forEach(function(f,i){var m=document.createElement('span');m.className='mark';m.style.setProperty('--cc',COL[ci(f.clue)]);m.textContent=LET[ci(f.clue)];m.style.left=f.x+'%';m.style.top=f.y+'%';art.appendChild(m)})}
function hint(){return S.queue.length?'Click the artwork to place '+S.queue.map(function(i){return LET[ci(i)]}).join(', then ')+'.':''}function allIn(){return S.finds.length>=c.clues.length}
function hit(id,x,y){var z=(c.zones||{})[id];if(!z)return true;return z.some(function(h){if(h.rx!=null){var dx=(x-h.cx)/h.rx,dy=(y-h.cy)/h.ry;return dx*dx+dy*dy<=1}return x>=h.x0&&x<=h.x1&&y>=h.y0&&y<=h.y1})}
function clearGlow(){art.querySelectorAll('.zglow').forEach(function(g){g.remove()})}
function showX(x,y){var m=document.createElement('span');m.className='xmark';m.textContent='\u2715';m.setAttribute('aria-hidden','true');m.style.left=x+'%';m.style.top=y+'%';art.appendChild(m);setTimeout(function(){m.remove()},1300)}
function showGlow(id){clearGlow();((c.zones||{})[id]||[]).forEach(function(h){var g=document.createElement('div');g.className='zglow';if(h.rx!=null){g.style.left=(h.cx-h.rx)+'%';g.style.top=(h.cy-h.ry)+'%';g.style.width=(2*h.rx)+'%';g.style.height=(2*h.ry)+'%';g.style.borderRadius='50%'}else{g.style.left=h.x0+'%';g.style.top=h.y0+'%';g.style.width=(h.x1-h.x0)+'%';g.style.height=(h.y1-h.y0)+'%';g.style.borderRadius='10px'}art.appendChild(g)})}
function missed(id,x,y){S.miss[id]=(S.miss[id]||0)+1;showX(x,y);if(S.miss[id]>=2){showGlow(id);S.msg='Here is where to look.'}else{S.msg='Not quite. Try another spot.'}msg()}
function pick(id){clearGlow();var q=S.queue.indexOf(id);if(q>=0){S.queue.splice(q,1)}else{S.queue.push(id)}S.msg=hint();chips();msg()}
function chips(){var h=document.getElementById('chips');h.innerHTML='';c.clues.forEach(function(k){var q=S.queue.indexOf(k.id);var b=document.createElement('button');b.setAttribute('aria-pressed',q>=0);b.style.setProperty('--cc',COL[ci(k.id)]);b.style.setProperty('--ct',TINT[ci(k.id)]);b.innerHTML='<span class="let">'+LET[ci(k.id)]+'</span><span><strong>'+esc(k.label)+'</strong><small>'+esc(k.def)+'</small></span>'+(q>=0?'<span class="ord"><span class="sr">Chosen number </span>'+(q+1)+'</span>':'');b.onclick=function(){pick(k.id)};h.appendChild(b)})}
function fields(){var h=document.getElementById('fields');h.innerHTML='';c.clues.forEach(function(k,j){var f=S.finds.filter(function(x){return x.clue===k.id})[0];var d=document.createElement('div');d.className='ans';d.style.setProperty('--cc',COL[j]);var l=document.createElement('label');l.innerHTML='<strong><b>'+LET[j]+'</b> \u00b7 '+esc(k.label)+'</strong>';var t=document.createElement('textarea');t.placeholder=f?'I can see\u2026':'Mark the artwork, then write your own observation or point of special interest.';t.value=f?f.text:'';t.disabled=!f;t.oninput=function(){f.text=t.value;save()};l.appendChild(t);d.appendChild(l);h.appendChild(d)})}
function msg(){document.getElementById('msg').textContent=S.msg}
function place(x,y){if(!S.queue.length){S.msg='Choose a feature first.';msg();return}
if(!hit(S.queue[0],x,y)){missed(S.queue[0],x,y);return}
var id=S.queue.shift();S.miss[id]=0;clearGlow();
var i=S.finds.map(function(f){return f.clue}).indexOf(id);
var note='';if(i>=0){S.finds[i].x=x;S.finds[i].y=y}else{S.finds.push({clue:id,x:x,y:y,text:''})}
S.msg=note||hint()||(allIn()?(c.clues.length>2?'All three features are':'Both features are')+' marked. To move one, choose its box, then click the artwork.':'');save();marks();chips();fields();msg();S.bmsg='';bm()}
art.onclick=function(e){var r=art.getBoundingClientRect();place(Math.round((e.clientX-r.left)/r.width*1000)/10,Math.round((e.clientY-r.top)/r.height*1000)/10);lensMove(e)};
art.onkeydown=function(e){var d={ArrowLeft:[-2,0],ArrowRight:[2,0],ArrowUp:[0,-2],ArrowDown:[0,2]}[e.key];
if(d){e.preventDefault();S.cur.x=Math.min(100,Math.max(0,S.cur.x+d[0]));S.cur.y=Math.min(100,Math.max(0,S.cur.y+d[1]));var u=document.getElementById('cur');u.style.left=S.cur.x+'%';u.style.top=S.cur.y+'%'}
else if(e.key==='Enter'||e.key===' '){e.preventDefault();place(S.cur.x,S.cur.y)}};
var lens=document.createElement('div');lens.className='lens';art.appendChild(lens);
var lh=document.createElement('p');lh.className='note';lh.id='lenshint';lh.hidden=true;lh.textContent='Move the pointer over the photo to magnify it. Click to place a letter.';art.parentNode.insertBefore(lh,art.nextSibling);
var ZM=2.5,LS=187;
function lensMove(e){if(!art.classList.contains('mag')){lens.style.display='none';return}
var r=art.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
if(x<0||y<0||x>r.width||y>r.height){lens.style.display='none';return}
var im=art.querySelector('img');
lens.style.display='block';lens.style.left=x+'px';lens.style.top=y+'px';
lens.style.backgroundImage='url("'+(im.currentSrc||im.src)+'")';
lens.style.backgroundSize=(r.width*ZM)+'px '+(r.height*ZM)+'px';
lens.style.backgroundPosition=(LS/2-x*ZM)+'px '+(LS/2-y*ZM)+'px';
lens.innerHTML='<i class="dot"></i>';
S.finds.forEach(function(f){var m=document.createElement('span');m.className='mark';m.style.setProperty('--cc',COL[ci(f.clue)]);m.textContent=LET[ci(f.clue)];m.style.left=(LS/2+(f.x/100*r.width-x)*ZM)+'px';m.style.top=(LS/2+(f.y/100*r.height-y)*ZM)+'px';lens.appendChild(m)})}
art.onmousemove=lensMove;art.onmouseleave=function(){lens.style.display='none'};
function setMag(on){art.classList.toggle('mag',on);document.getElementById('magon').setAttribute('aria-pressed',on);document.getElementById('magoff').setAttribute('aria-pressed',!on);lh.hidden=!on;lens.style.display='none'}
document.getElementById('magon').onclick=function(){setMag(true)};document.getElementById('magoff').onclick=function(){setMag(false)};
function bm(){document.getElementById('bmsg').textContent=S.bmsg||'';var np=document.getElementById('nextp');np.innerHTML='';if(S.after){var b=document.createElement('button');b.className='primary next';b.id='nxt';b.textContent='Next case \u2192';b.onclick=function(){location.hash='#/deck/'+f.deck.id};np.appendChild(b)}var sb=document.getElementById('sub');if(sb)sb.hidden=!!S.after}
var dr=document.getElementById('draft');if(dr)dr.onclick=function(){save();S.bmsg='Draft saved on this device.';S.after=true;bm()};
document.getElementById('sub').onclick=function(){if(!allIn()){S.bmsg='Mark '+(c.clues.length>2?'all three features':'both features')+' on the artwork first.';bm();return}if(S.finds.filter(function(f){return words(f.text)>=4}).length<2){S.bmsg=c.clues.length>2?'Write at least four words about any two features.':'Write at least four words about both features.';bm();return}var ok=c.bonus&&words(S.bonus)>=4;S.points=10+(ok?c.bonus.points:0);S.bonusMissed=!!(c.bonus&&!ok);S.done=true;S.after=true;S.bmsg='';save();card(id);var cb=document.querySelector('.cloud');if(cb&&cb.scrollIntoView)cb.scrollIntoView({block:'center'})};
var bl=document.querySelector('label.bonus'),sl=document.getElementById('bslotL'),sp=document.getElementById('bslotP'),mq=window.matchMedia('(min-width:851px)');if(bl)sp.appendChild(bl);var bt=document.getElementById('bonus');if(bt){bt.value=S.bonus||'';bt.oninput=function(){S.bonus=bt.value;save()};if(S.done&&!S.bonusMissed){bt.disabled=true}}
marks();chips();fields();msg();bm();bank()}
function citedOn(n){var out=[];DECKS.forEach(function(d){d.cards.forEach(function(c){if(c.playable&&c.sourceNums&&c.sourceNums.indexOf(n)>=0)out.push('<a href="#/card/'+c.id+'">'+esc(c.id+' '+c.title)+'</a>')})});return out.join(', ')}
function sources(n){var L=window.SOURCES||[];app.innerHTML='<h1 class="ph">Sources</h1><p class="note">The works and facts on each card draw on these sources. Numbers match the "Sources" line at the bottom of each card. Each source is tagged as an object record, a primary document, scholarship or another secondary source.</p><ol class="src">'+L.map(function(s){var cd=citedOn(s.n);return '<li id="src-'+s.n+'" value="'+s.n+'"'+(s.placeholder?' class="ph-src"':'')+'><span class="tag">'+esc(s.type)+'</span> '+esc(s.cite)+(s.url?' <a href="'+s.url+'">'+esc(s.url)+'</a>':'')+'<span class="used">'+(cd?'Cited on: '+cd:(s.placeholder?'Not yet used on a card.':''))+'</span></li>'}).join('')+'</ol><p><a class="btn" href="#/deck/'+DECKS[0].id+'">Back to the case list</a></p>';
var t=n&&document.getElementById('src-'+n);if(t){t.classList.add('hl');if(t.scrollIntoView)t.scrollIntoView({block:'center'})}}
function help(){app.innerHTML='<h1>Help</h1><p>Click a feature box, then click or tap the artwork where you see that feature. Do this for every feature box. If a mark is not on the feature, a red X appears; after two tries the right area glows. Then write about any two features (both, if the case has only two).</p><p>To look closer, turn the Magnifier on above the photo, then move the pointer over the photo. Turn it off the same way.</p><p>Using a keyboard: press Tab until the artwork is outlined, move the dotted circle with the arrow keys, and press Enter to mark.</p><p class="note">Your work is saved only in this browser on this device.</p><a class="btn" href="#/deck/'+DECKS[0].id+'">Back to the case list</a>'}
function goodbye(){app.innerHTML='<div class="bye"><h1>Thanks for playing</h1><p>Your progress is saved on this device. You may now close this browser tab.</p><p><a class="btn primary" href="#/deck/'+DECKS[0].id+'">Return to the game</a></p></div>'}
function lvlBtn(h){var x=document.getElementById('exitgame');if(x){x.hidden=h[1]!=='deck';x.onclick=function(){location.hash='#/goodbye'}}var b=document.getElementById('savelvl');if(!b)return;var on=h[1]==='card'||h[1]==='vocab';b.hidden=!on;b.onclick=function(){if(h[1]==='card'&&S.id)save();var r=h[1]==='card'?find(h[2]):vocabFind(h[2]),dk=r&&r.deck?r.deck:(r&&r.d)||DECKS[0];S.saved=true;location.hash='#/deck/'+dk.id}}
function route(){var h=location.hash.split('/');document.body.setAttribute('data-view',h[1]||'home');if(h[1]==='deck')deck(h[2]);else if(h[1]==='card'){S.id=null;S.queue=[];S.miss={};S.msg='';S.done=false;S.after=false;S.bmsg='';S.cur={x:50,y:50};card(h[2])}else if(h[1]==='vocab'){vocab(h[2])}else if(h[1]==='review'){review(h[2])}else if(h[1]==='level'){level(h[2])}else if(h[1]==='goodbye'){goodbye()}else if(h[1]==='sources'){sources(h[2])}else if(h[1]==='help')help();else home();lvlBtn(h);lvlNav(h);app.focus({preventScroll:true});window.scrollTo(0,0)}
(function(){var note=null,timer=null;function field(t){return !!(t&&t.matches&&t.matches('textarea,input[type=text],input[type=search],input:not([type])'))}function say(t){if(!note){note=document.createElement('p');note.className='note';note.id='nopaste';note.setAttribute('role','status');note.textContent='Pasting is turned off. Please type in your own words.'}t.insertAdjacentElement('afterend',note);clearTimeout(timer);timer=setTimeout(function(){if(note&&note.parentNode)note.parentNode.removeChild(note)},4000)}function stop(e){if(field(e.target)){e.preventDefault();say(e.target)}}document.addEventListener('paste',stop,true);document.addEventListener('drop',stop,true);document.addEventListener('beforeinput',function(e){var k=e.inputType;if(field(e.target)&&(k==='insertFromPaste'||k==='insertFromDrop'||k==='insertFromYank'||k==='insertFromPasteAsQuotation')){e.preventDefault();say(e.target)}},true)})();
window.addEventListener('hashchange',route);route();bank()})();
