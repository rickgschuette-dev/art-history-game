(function(){
var app=document.getElementById('app'),KEY='ahg.v1';
var raw=JSON.parse(localStorage.getItem(KEY)||'{}');
var store={cards:raw.cards||{}};
var CFG={saveDraft:false};
var S={finds:[],queue:[],cur:{x:50,y:50},msg:'',done:false,id:null};
function save(){if(S.id){store.cards[S.id]={finds:S.finds,bonus:S.bonus||'',points:S.points||0}}localStorage.setItem(KEY,JSON.stringify(store))}
function words(t){return (t||'').trim().split(/\s+/).filter(Boolean).length}
function bank(){var n=0;Object.keys(store.cards).forEach(function(k){n+=store.cards[k].points||0});var e=document.getElementById('bank');if(e)e.textContent='Points: '+n}
function cloud(c){var p=S.points;var l='Case closed. Vasario awards you '+p+' points'+(p>10?' (10 for the case, 5 bonus for your detective\u2019s note)':'')+'.';return '<div class="cloud"><strong>Vasario</strong><p>'+l+'</p>'+(S.bonusMissed?'<p class="note">Add four or more words to your note to earn the 5 bonus points. You can edit it and submit again.</p>':'')+(c.guide?'<p>'+esc(c.guide)+'</p>':'')+'</div>'}
function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}
function find(id){for(var i=0;i<DECKS.length;i++){var cs=DECKS[i].cards;for(var j=0;j<cs.length;j++){if(cs[j].id===id&&cs[j].playable)return{deck:DECKS[i],card:cs[j]}}}return null}
function done(c){return ((store.cards[c.id]||{}).points||0)>0}
function num(i){return (i<9?'0':'')+(i+1)}
function tabs(cur){return '<nav class="tabs" aria-label="Periods">'+DECKS.map(function(d){return '<a href="#/deck/'+d.id+'"'+(d.id===cur?' aria-current="page"':'')+'>'+esc(d.title)+'</a>'}).join('')+'</nav>'}
function cardList(d){return '<ol class="cases">'+d.cards.map(function(c,i){var dn=done(c),pts=(store.cards[c.id]||{}).points||0;
var inner='<span class="box'+(dn?' on':'')+'" aria-hidden="true">'+(dn?'\u2713':'')+'</span><span class="sr">'+(dn?'Completed. ':'Not yet completed. ')+'</span><span class="num">'+num(i)+'</span><span class="ttl"><strong>'+esc(c.title)+'</strong>'+(c.object?'<span class="note">'+esc(c.object)+'</span>':'')+'</span>'+(dn?'<span class="tail pts">'+pts+' points</span>':(c.playable?'<span class="tail go">Play</span>':'<span class="tail soon">Coming soon</span>'));
return '<li class="'+(c.playable?'ready':'later')+(dn?' done':'')+'">'+(c.playable?'<a href="#/card/'+c.id+'">'+inner+'</a>':'<div class="row">'+inner+'</div>')+'</li>'}).join('')+'</ol>'}
function home(){app.innerHTML='<h1>Welcome</h1><p>Look closely at artworks, mark what you find, and explain it in your own words.</p><p><a class="btn primary" href="#/deck/'+DECKS[0].id+'">Begin</a></p>'}
function deck(id){var d=DECKS.filter(function(x){return x.id===id})[0];if(!d){location.hash='#/deck/'+DECKS[0].id;return}
var nd=d.cards.filter(done).length,ni=-1;d.cards.forEach(function(c,i){if(ni<0&&c.playable&&!done(c))ni=i});
app.innerHTML=tabs(id)+'<h1 class="ph">'+esc(d.title)+' Period</h1><div class="sub"><span class="prog"><strong>'+nd+' of '+d.cards.length+'</strong> cases completed'+(d.span?' <span class="note">\u00b7 '+esc(d.span)+'</span>':'')+'</span>'+(ni>=0?'<a class="btn primary" href="#/card/'+d.cards[ni].id+'">'+(nd?'Continue with case ':'Start with case ')+(ni+1)+'</a>':'')+'</div>'+cardList(d)}
function credit(k,word){if(!k)return '';word=k.word||word;var lead=k.title?esc(k.title)+' – '+word.toLowerCase():(k.url?'<a href="'+k.url+'">'+word+'</a>':word);return '<p class="note">'+lead+' by '+esc(k.author)+', '+(k.licenseUrl?'<a href="'+k.licenseUrl+'">'+esc(k.license)+'</a>':esc(k.license))+', via Wikimedia Commons'+(k.changes?'. '+esc(k.changes):'')+'</p>'}
function card(id){var f=find(id);if(!f){location.hash='#/deck/'+DECKS[0].id;return}
var c=f.card;if(S.id!==id){S.id=id;S.finds=(store.cards[id]||{}).finds||[];S.bonus=(store.cards[id]||{}).bonus||'';S.points=(store.cards[id]||{}).points||0}
var cl=function(i){return c.clues.filter(function(k){return k.id===i})[0]};
var LET=['A','B','C'],COL=['#1f6f6b','#a4472b','#5b4b8a'],TINT=['#e3f0ef','#f6e6df','#ebe6f4'];function ci(x){return c.clues.map(function(k){return k.id}).indexOf(x)}
var st=c.steps||[];
app.innerHTML='<p class="note">'+esc(c.crumb)+' \u00b7 <strong>YOUR TURN</strong></p>'+(c.work?'<h1 class="work">'+(c.kind?'<span class="kind">'+esc(c.kind)+'</span>':'')+'<strong>'+esc(c.work)+'</strong>; '+esc(c.date)+'; '+esc(c.location)+'; '+esc(c.artist)+'</h1>':'')+'<div class="grid"><section><div class="headrow"><h2>'+esc(c.headline)+'</h2><span class="magsw" role="group" aria-label="Magnifier"><span class="ml">Magnifier</span><button id="magon" aria-pressed="false">On</button><button id="magoff" aria-pressed="true">Off</button></span></div>'
+'<div class="art'+(c.wide?' wide':'')+'" id="art" tabindex="0" role="application" aria-label="Artwork. Choose two features, move the cursor with arrow keys, and press Enter to mark each one in the order you chose them."><img src="'+c.image+'" alt="'+esc(c.alt)+'"><span class="cursor" id="cur"></span></div>'
+(c.imageNote?'<p class="note">'+esc(c.imageNote)+'</p>':'')+(c.detail?'<figure class="detail"><img src="'+c.detail.image+'" alt="'+esc(c.detail.alt)+'"><figcaption class="note">'+esc(c.detail.caption||'Detail')+'</figcaption></figure>':'')
+(c.size?'<p>'+esc(c.size)+'</p>':'')
+(c.place?'<p>'+esc(c.place)+'<br>'+esc(c.holding)+'</p>':'')+'<div id="bslotL"></div></section><section class="panel"><h1>'+esc(c.title.toUpperCase())+'</h1><div class="q">'+esc(c.intro)+'</div><p class="word"><strong>Word to know</strong>'+esc(c.context)+'</p><ol class="how"><li><span class="n">1</span><div><strong>'+esc(st[0])+'</strong><div class="chips" id="chips"></div></div></li><li><span class="n">2</span><div>'+esc(st[1])+'</div></li><li><span class="n">3</span><div>'+esc(st[2])+'</div></li></ol>'
+'<div class="msg" id="msg" role="status"></div><div id="fields"></div><div id="bslotP"></div>'+(c.bonus?'<label class="bonus"><strong>'+esc(c.bonus.prompt)+'</strong><textarea id="bonus" placeholder="'+esc(c.bonus.placeholder||'')+'"></textarea></label>':'')
+(S.done?cloud(c):'')+(S.done&&c.closing?'<div class="closing"><strong>Think like an art historian <span>(no written response required)</span></strong><p>'+esc(c.closing)+'</p></div>':'')+'<div class="btns">'+(CFG.saveDraft?'<button id="draft">Save draft</button>':'')+'<button class="primary" id="sub">Submit finds</button><span id="nextp"></span></div><div class="msg" id="bmsg" role="status"></div></section></div><footer class="credits">'+credit(c.credit,'Photo')+(c.detail?credit(c.detail.credit,'Detail photo'):'')+(c.sourceNums&&c.sourceNums.length?'<p class="note srcs">Sources: '+c.sourceNums.map(function(n){return '<a href="#/sources/'+n+'">'+n+'</a>'}).join(', ')+'</p>':'')+'</footer>';
var art=document.getElementById('art');
function marks(){art.querySelectorAll('.mark').forEach(function(m){m.remove()});S.finds.forEach(function(f,i){var m=document.createElement('span');m.className='mark';m.style.setProperty('--cc',COL[ci(f.clue)]);m.textContent=LET[ci(f.clue)];m.style.left=f.x+'%';m.style.top=f.y+'%';art.appendChild(m)})}
function hint(){return S.queue.length?'Click the artwork to place '+S.queue.map(function(i){return LET[ci(i)]}).join(', then ')+'.':''}
function pick(id){var q=S.queue.indexOf(id);if(q>=0){S.queue.splice(q,1)}else{if(S.queue.length>=2)S.queue.shift();S.queue.push(id)}S.msg=hint();chips();msg()}
function chips(){var h=document.getElementById('chips');h.innerHTML='';c.clues.forEach(function(k){var q=S.queue.indexOf(k.id);var b=document.createElement('button');b.setAttribute('aria-pressed',q>=0);b.style.setProperty('--cc',COL[ci(k.id)]);b.style.setProperty('--ct',TINT[ci(k.id)]);b.innerHTML='<span class="let">'+LET[ci(k.id)]+'</span><span><strong>'+esc(k.label)+'</strong><small>'+esc(k.def)+'</small></span>'+(q>=0?'<span class="ord"><span class="sr">Chosen number </span>'+(q+1)+'</span>':'');b.onclick=function(){pick(k.id)};h.appendChild(b)})}
function fields(){var h=document.getElementById('fields');h.innerHTML='';c.clues.forEach(function(k,j){var f=S.finds.filter(function(x){return x.clue===k.id})[0];var d=document.createElement('div');d.className='ans';d.style.setProperty('--cc',COL[j]);var l=document.createElement('label');l.innerHTML='<strong><b>'+LET[j]+'</b> \u00b7 '+esc(k.label)+'</strong>';var t=document.createElement('textarea');t.placeholder=f?'I can see\u2026':(S.finds.length>=2?'Two features are enough. To swap, choose this feature and click the artwork.':'Mark the artwork, then write your own observation or point of special interest.');t.value=f?f.text:'';t.disabled=!f;t.oninput=function(){f.text=t.value;save()};l.appendChild(t);d.appendChild(l);h.appendChild(d)})}
function msg(){document.getElementById('msg').textContent=S.msg}
function place(x,y){if(!S.queue.length){S.msg='Choose a feature first.';msg();return}
var id=S.queue.shift();
var i=S.finds.map(function(f){return f.clue}).indexOf(id);
var note='';if(i>=0){S.finds[i].x=x;S.finds[i].y=y}else{if(S.finds.length>=2){var v=0;for(var n=0;n<S.finds.length;n++){if(S.queue.indexOf(S.finds[n].clue)<0){v=n;break}}var old=S.finds.splice(v,1)[0];note='Swapped out "'+cl(old.clue).label+'" for "'+cl(id).label+'".'}S.finds.push({clue:id,x:x,y:y,text:''})}
S.msg=note||hint()||(S.finds.length>=2?'Both features are marked. To move one, choose its box, then click the artwork.':'');save();marks();chips();fields();msg()}
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
function bm(){document.getElementById('bmsg').textContent=S.bmsg||'';var np=document.getElementById('nextp');np.innerHTML='';if(S.after){var b=document.createElement('button');b.className='primary next';b.id='nxt';b.textContent='Next case \u2192';b.onclick=function(){location.hash='#/deck/'+f.deck.id};np.appendChild(b)}}
var dr=document.getElementById('draft');if(dr)dr.onclick=function(){save();S.bmsg='Draft saved on this device.';S.after=true;bm()};
document.getElementById('sub').onclick=function(){if(S.finds.length<2||S.finds.some(function(f){return words(f.text)<4})){S.bmsg='Mark two features on the artwork and write at least four words for each.';bm();return}var ok=c.bonus&&words(S.bonus)>=4;S.points=10+(ok?c.bonus.points:0);S.bonusMissed=!!(c.bonus&&!ok);S.done=true;S.after=true;S.bmsg='';save();card(id);var cb=document.querySelector('.cloud');if(cb&&cb.scrollIntoView)cb.scrollIntoView({block:'center'})};
var bl=document.querySelector('label.bonus'),sl=document.getElementById('bslotL'),sp=document.getElementById('bslotP'),mq=window.matchMedia('(min-width:851px)');if(bl)sp.appendChild(bl);var bt=document.getElementById('bonus');if(bt){bt.value=S.bonus||'';bt.oninput=function(){S.bonus=bt.value;save()};if(S.done&&!S.bonusMissed){bt.disabled=true}}
marks();chips();fields();msg();bm();bank()}
function citedOn(n){var out=[];DECKS.forEach(function(d){d.cards.forEach(function(c){if(c.playable&&c.sourceNums&&c.sourceNums.indexOf(n)>=0)out.push('<a href="#/card/'+c.id+'">'+esc(c.id+' '+c.title)+'</a>')})});return out.join(', ')}
function sources(n){var L=window.SOURCES||[];app.innerHTML='<h1 class="ph">Sources</h1><p class="note">The works and facts on each card draw on these sources. Numbers match the "Sources" line at the bottom of each card. Each source is tagged as an object record, a primary document, scholarship or another secondary source.</p><ol class="src">'+L.map(function(s){var cd=citedOn(s.n);return '<li id="src-'+s.n+'" value="'+s.n+'"'+(s.placeholder?' class="ph-src"':'')+'><span class="tag">'+esc(s.type)+'</span> '+esc(s.cite)+(s.url?' <a href="'+s.url+'">'+esc(s.url)+'</a>':'')+'<span class="used">'+(cd?'Cited on: '+cd:(s.placeholder?'Not yet used on a card.':''))+'</span></li>'}).join('')+'</ol><p><a class="btn" href="#/deck/'+DECKS[0].id+'">Back to the case list</a></p>';
var t=n&&document.getElementById('src-'+n);if(t){t.classList.add('hl');if(t.scrollIntoView)t.scrollIntoView({block:'center'})}}
function help(){app.innerHTML='<h1>Help</h1><p>Choose two features. Then click or tap the artwork once for each one, in the order you chose them. Then write what you found.</p><p>To look closer, turn the Magnifier on above the photo, then move the pointer over the photo. Turn it off the same way.</p><p>Using a keyboard: press Tab until the artwork is outlined, move the dotted circle with the arrow keys, and press Enter to mark.</p><p class="note">Your work is saved only in this browser on this device.</p><a class="btn" href="#/deck/'+DECKS[0].id+'">Back to the case list</a>'}
function route(){var h=location.hash.split('/');if(h[1]==='deck')deck(h[2]);else if(h[1]==='card'){S.id=null;S.queue=[];S.msg='';S.done=false;S.after=false;S.bmsg='';S.cur={x:50,y:50};card(h[2])}else if(h[1]==='sources'){sources(h[2])}else if(h[1]==='help')help();else home();app.focus({preventScroll:true});window.scrollTo(0,0)}
window.addEventListener('hashchange',route);route();bank()})();
