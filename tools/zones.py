"""Draw each feature's click zones over the artwork so they can be checked BY EYE.
Numbers are not enough: a zone that misses the obvious answer tells a correct player they are wrong.
Run from the repo root:
  python3 tools/zones.py EM-04 EM-08
  python3 tools/zones.py VOC-05            # a locate word card
Output goes to tools/out/zones/."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _serve import site

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out', 'zones')
COL = ['#1f6f6b', '#a4472b', '#5b4b8a']

JS = """([kind,id,COL])=>{
 let clues,zones;
 if(kind==='vocab'){const v=[].concat(...window.DECKS.map(d=>d.vocab||[])).find(x=>x.id===id);
   clues=v.locate.clues; zones=v.locate.zones;}
 else {const c=[].concat(...window.DECKS.map(d=>d.cards)).find(x=>x&&x.id===id);
   clues=c.clues; zones=c.zones||{};}
 const art=document.getElementById('art')||document.getElementById('vart');
 clues.forEach((k,j)=>(zones[k.id]||[]).forEach(h=>{
  const g=document.createElement('div');
  g.style.cssText='position:absolute;pointer-events:none;box-sizing:border-box;border:3px solid '+COL[j]+';background:'+COL[j]+'33;z-index:7;';
  if(h.rx!=null){g.style.left=(h.cx-h.rx)+'%';g.style.top=(h.cy-h.ry)+'%';g.style.width=(2*h.rx)+'%';g.style.height=(2*h.ry)+'%';g.style.borderRadius='50%';}
  else {g.style.left=h.x0+'%';g.style.top=h.y0+'%';g.style.width=(h.x1-h.x0)+'%';g.style.height=(h.y1-h.y0)+'%';}
  const t=document.createElement('b');t.textContent=k.label;
  t.style.cssText='position:absolute;left:3px;top:0;color:#fff;background:'+COL[j]+';font:bold 13px sans-serif;padding:1px 5px;';
  g.appendChild(t);art.appendChild(g);}));
 return clues.length}"""

def main(ids):
    if not ids: print(__doc__); return 1
    os.makedirs(OUT, exist_ok=True)
    with site(port=8904, scale=1.4) as (pg, url, errs):
        for i in ids:
            vocab = i.startswith('VOC')
            pg.goto(url + ('#/vocab/' if vocab else '#/card/') + i); pg.wait_for_timeout(600)
            n = pg.evaluate(JS, ['vocab' if vocab else 'card', i, COL])
            sel = '#vart' if vocab else '#art'
            path = os.path.join(OUT, i + '.png')
            pg.locator(sel).screenshot(path=path)
            print('wrote %s  (%d features)' % (os.path.relpath(path), n))
        if errs: print('PAGE ERRORS:', errs)
    return 0

if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
