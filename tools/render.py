"""Render pages to PNG for review and for the Drive folder.
Run from the repo root:
  python3 tools/render.py EM-01 VOC-02            # cases and word cards
  python3 tools/render.py review:early-medieval   # the closing Case File
  python3 tools/render.py --played EM-01 ...      # render as if those cases were finished
Output goes to tools/out/."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _serve import site, done_seed

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out')

def main(argv):
    played = []
    if '--played' in argv:
        i = argv.index('--played'); played = argv[i+1:]; argv = argv[:i]
    if not argv:
        print(__doc__); return 1
    os.makedirs(OUT, exist_ok=True)
    seed = done_seed(played) if played else None
    with site(port=8903, seed=seed, scale=0.8125) as (pg, url, errs):
        for t in argv:
            route = 'review/' + t.split(':', 1)[1] if t.startswith('review:') else \
                    ('vocab/' + t if t.startswith('VOC') else 'card/' + t)
            name = t.replace(':', '-')
            pg.goto(url + '#/' + route); pg.wait_for_timeout(900)
            path = os.path.join(OUT, name + '.png')
            pg.screenshot(path=path, full_page=True)
            print('wrote', os.path.relpath(path))
        if errs: print('PAGE ERRORS:', errs)
    return 0

if __name__ == '__main__':
    raise SystemExit(main(sys.argv[1:]))
