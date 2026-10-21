(function(){
var app=document.getElementById('app'),KEY='ahg.v1';
var S=JSON.parse(localStorage.getItem(KEY)||'{}');S.finds=S.finds||[];S.sel=null;S.cur={x:50,y:50};S.msg='';S.done=false;
function save(){localStorage.setItem(KEY,JSON.stringify({finds:S.finds}))}
function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}
function home(){app.innerHTML='<h1>Welcome</h1><p>Look closely at artworks, mark what you find, and explain it in your own words.</p><button class="primary" id="go">Choose a deck</button>';document.getElementById('go').onclick=function(){location.hash='#/decks'}}
function decks(){var d=DECKS[0];app.innerHTML='<h1>'+esc(d.title)+'</h1><p>'+esc(d.blurb)+'</p><ul class="cards">'+d.cards.map(function(c){return '<li class="panel"><span><strong>'+esc(c.title)+'</strong><br><span class="note">'+esc(c.object)+'</span></span>'+(c.playable?'<button class="primary" data-id="'+c.id+'">Play</button>':'<span class="note">Coming soon</span>')+'</li>'}).join('')+'</ul>';
app.querySelectorAll('button[data-id]').forEach(function(b){b.onclick=function(){location.hash='#/card/'+b.dataset.id}})}
function card(id){var c=DECKS[0].cards.filter(function(x){return x.id===id&&x.playable})[0];if(!c){location.hash='#/decks';return}
var cl=function(i){return c.clues.filter(function(k){return k.id===i})[0]};
app.innerHTML='<p class="note">'+esc(c.crumb)+' \u00b7 <strong>YOUR TURN</strong></p><div class="grid"><section><h2>Look closely at the page</h2>'
+'<div class="art" id="art" tabindex="0" role="application" aria-label="Artwork. Choose a clue, move the cursor with arrow keys, and press Enter to mark."><img src="'+c.image+'" alt="Cross-carpet page from the Lindisfarne Gospels"><span class="cursor" id="cur"></span></div>'
+'<p><button id="big">Enlarge page</button></p>'+(c.imageNote?'<p class="note">'+esc(c.imageNote)+'</p>':'')+'<p>'+esc(c.size)+'</p><div class="paper"><div style="width:85px;height:110px">Letter paper<br>11 \u00d7 8.5 in</div><div style="width:99px;height:134px">Manuscript page</div></div>'
+'<p>'+esc(c.place)+'<br>'+esc(c.holding)+'</p></section><section class="panel"><h1>SPOT THE STYLE</h1><p>'+esc(c.intro)+'</p><p class="note">'+esc(c.context)+'</p><h3>CHOOSE A CLUE</h3><div class="chips" id="chips"></div>'
+'<h3>FIND TWO CLUES</h3><p>Choose a clue. Then click the artwork where you see it.</p><p>Write one sentence about what you found. Do this for two different clues.</p><div class="msg" id="msg" role="status"></div><div id="fields"></div>'
+'<p><button id="draft">Save draft</button> <button class="primary" id="sub">Submit finds</button></p><p class="note">'+esc(c.sources)+'</p></section></div>';
var art=document.getElementById('art');
function marks(){art.querySelectorAll('.mark').forEach(function(m){m.remove()});S.finds.forEach(function(f,i){var m=document.createElement('span');m.className='mark';m.textContent=i+1;m.style.left=f.x+'%';m.style.top=f.y+'%';art.appendChild(m)})}
function chips(){var h=document.getElementById('chips');h.innerHTML='';c.clues.forEach(function(k){var b=document.createElement('button');b.setAttribute('aria-pressed',S.sel===k.id);b.innerHTML=esc(k.label)+'<small>'+esc(k.def)+'</small>';b.onclick=function(){S.sel=k.id;S.msg='';chips();msg()};h.appendChild(b)})}
function fields(){var h=document.getElementById('fields');h.innerHTML='';[0,1].forEach(function(i){var f=S.finds[i];var l=document.createElement('label');l.innerHTML='<strong>'+(i+1)+' \u00b7 '+(f?esc(cl(f.clue).label):(i?'Your second find':'Your first find'))+'</strong>';var t=document.createElement('textarea');t.placeholder='I can see\u2026';t.value=f?f.text:'';t.disabled=!f;t.oninput=function(){f.text=t.value;save()};l.appendChild(t);h.appendChild(l)})}
function msg(){document.getElementById('msg').textContent=S.msg}
function place(x,y){if(!S.sel){S.msg='Choose a clue first.';msg();return}
var i=S.finds.map(function(f){return f.clue}).indexOf(S.sel);
if(i>=0){S.finds[i].x=x;S.finds[i].y=y}else if(S.finds.length<2){S.finds.push({clue:S.sel,x:x,y:y,text:''})}else{S.msg='You already have two finds. To move one, choose its clue, then click a new spot.';msg();return}
S.msg='';save();marks();fields();msg()}
art.onclick=function(e){var r=art.getBoundingClientRect();place(Math.round((e.clientX-r.left)/r.width*1000)/10,Math.round((e.clientY-r.top)/r.height*1000)/10)};
art.onkeydown=function(e){var d={ArrowLeft:[-2,0],ArrowRight:[2,0],ArrowUp:[0,-2],ArrowDown:[0,2]}[e.key];
if(d){e.preventDefault();S.cur.x=Math.min(100,Math.max(0,S.cur.x+d[0]));S.cur.y=Math.min(100,Math.max(0,S.cur.y+d[1]));var u=document.getElementById('cur');u.style.left=S.cur.x+'%';u.style.top=S.cur.y+'%'}
else if(e.key==='Enter'||e.key===' '){e.preventDefault();place(S.cur.x,S.cur.y)}};
document.getElementById('big').onclick=function(){art.classList.toggle('big')};
document.getElementById('draft').onclick=function(){save();S.msg='Draft saved on this device.';msg()};
document.getElementById('sub').onclick=function(){if(S.finds.length<2||S.finds.some(function(f){return !f.text.trim()})){S.msg='Mark two clues on the artwork and write a sentence for each.';msg();return}save();S.done=true;card(id);S.msg='Submitted. You can still move a marker or edit a sentence.';msg()};
marks();chips();fields();msg()}
function help(){app.innerHTML='<h1>Help</h1><p>Choose a clue. Click or tap the artwork where you see it. Then write what you found.</p><p>Using a keyboard: press Tab until the artwork is outlined, move the dotted circle with the arrow keys, and press Enter to mark.</p><p class="note">Your work is saved only in this browser on this device.</p><a class="btn" href="#/decks">Back to decks</a>'}
function route(){var h=location.hash.split('/');if(h[1]==='decks')decks();else if(h[1]==='card')card(h[2]);else if(h[1]==='help')help();else home();app.focus()}
window.addEventListener('hashchange',route);route()})();
