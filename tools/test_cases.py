"""Flow test for every playable case: choose feature, miss, red X, glow after two misses, mark, submit.
Run from the repo root:  python3 tools/test_cases.py [CASE-ID ...]"""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _serve import site

CENTRES = """(cid)=>{const c=[].concat(...window.DECKS.map(d=>d.cards)).find(x=>x&&x.id===cid);
 return c.clues.map(k=>{const z=(c.zones||{})[k.id];if(!z)return null;const h=z[0];
 return h.rx!=null?[h.cx,h.cy]:[(h.x0+h.x1)/2,(h.y0+h.y1)/2]})}"""

def main(ids):
    fails, errors = [], []
    with site(port=8901) as (pg, url, errs):
        if not ids:
            pg.goto(url); pg.wait_for_timeout(400)
            ids = pg.evaluate("()=>[].concat(...window.DECKS.map(d=>d.cards)).filter(c=>c&&c.playable).map(c=>c.id)")
        for cid in ids:
            pg.goto(url + '#/card/' + cid); pg.wait_for_timeout(400)
            cen = pg.evaluate(CENTRES, cid)
            chips, img = pg.locator('.chips button'), pg.locator('#art img')
            bx = img.bounding_box()
            click = lambda fx, fy: img.click(position={'x': bx['width']*fx/100, 'y': bx['height']*fy/100})
            ok = True
            if cen[0] is not None:
                chips.nth(0).click(); click(1, 99)
                ok &= pg.locator('#msg').inner_text() == 'Not quite. Try another spot.'
                ok &= pg.locator('.xmark').count() == 1
                ok &= pg.locator('#art .mark').count() == 0
                click(1, 98)
                ok &= pg.locator('#msg').inner_text() == 'Here is where to look.'
                ok &= pg.locator('.zglow').count() > 0
                click(*cen[0])
                ok &= pg.locator('#art .mark').count() == 1 and pg.locator('.zglow').count() == 0
                chips.nth(1).click(); click(*cen[1]); chips.nth(2).click(); click(*cen[2])
            else:
                chips.nth(0).click(); click(1, 99)
                ok &= pg.locator('#art .mark').count() == 1
                chips.nth(1).click(); click(50, 50); chips.nth(2).click(); click(70, 70)
            ts = pg.locator('#fields textarea')
            ts.nth(0).fill('The first feature is very clear here')
            ts.nth(1).fill('Another feature stands out strongly here')
            pg.locator('#sub').click(); pg.wait_for_timeout(250)
            ok &= pg.locator('.cloud, .closing').count() > 0
            if not ok: fails.append(cid)
        errors = errs
    print('OK: %d of %d | failures: %s | page errors: %s'
          % (len(ids)-len(fails), len(ids), fails or 'none', errors or 'none'))
    return 1 if (fails or errors) else 0

if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
