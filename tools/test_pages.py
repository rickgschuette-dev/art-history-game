"""Vocabulary pages, the locate mechanic and the closing Case File.
Run from the repo root:  python3 tools/test_pages.py [deck-id]"""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _serve import site, done_seed

F = []
def ck(label, cond, extra=''):
    print(('PASS ' if cond else 'FAIL ') + label + ('' if cond or not extra else '  :: %s' % (extra,)))
    if not cond: F.append(label)

def main(deck=None):
    with site(port=8902) as (pg, url, errs):
        pg.goto(url); pg.wait_for_timeout(400)
        deck = deck or pg.evaluate("()=>window.DECKS[0].id")
        info = pg.evaluate("""(id)=>{const d=window.DECKS.find(x=>x.id===id);
          return {vocab:(d.vocab||[]).map(v=>({id:v.id,word:v.word,after:v.after,locate:!!v.locate})),
                  review:!!d.review, cases:d.cards.filter(c=>c&&c.playable).length}}""", deck)

        # --- every vocabulary page renders and answers resolve ---
        answers = []
        for v in info['vocab']:
            pg.goto(url + '#/vocab/' + v['id']); pg.wait_for_timeout(400)
            ck('%s page renders' % v['id'], pg.locator('.vword').count() == 1)
            ck('%s has its example image' % v['id'], pg.locator('#vart img').count() == 1)
            ck('%s has a magnifier' % v['id'], pg.locator('.magsw').count() == 1)
            if v['locate']:
                ck('%s shows its parts' % v['id'], pg.locator('.lchip').count() >= 2)
                art = pg.locator('#vart'); bx = art.bounding_box()
                art.click(position={'x': bx['width']/2, 'y': bx['height']/2})
                ck('%s refuses a click with no part chosen' % v['id'],
                   pg.locator('#lmsg').inner_text() == 'Choose a part first.')
            else:
                opts = pg.locator('.qopt')
                ck('%s offers choices' % v['id'], opts.count() >= 2)
                labels = [opts.nth(i).inner_text() for i in range(opts.count())]
                opts.nth(0).click(); pg.wait_for_timeout(200)
                res = pg.locator('#qres').inner_text()
                answers.append((v['id'], res))
                ck('%s scores an answer' % v['id'], 'Correct' in res or 'correct answer is' in res, res[:60])
        if len(answers) > 1:
            correct = [r.split('correct answer is')[-1] if 'correct answer is' in r else l for l, r in answers]
            ck('no two word cards share a correct answer', len(set(correct)) == len(correct), correct)

        # --- the closing Case File ---
        if info['review']:
            pg.goto(url + '#/review/' + deck); pg.wait_for_timeout(500)
            ck('review renders traits', pg.locator('.trait').count() >= 5, pg.locator('.trait').count())
            ck('review case links all resolve',
               all(pg.locator('.tcases a').nth(i).get_attribute('href').startswith('#/card/')
                   for i in range(pg.locator('.tcases a').count())))
            ck('reveal is hidden at first', pg.locator('.reveal').count() == 0)
            pg.locator('#revtx').fill('Testing that the note is kept.')
            pg.locator('#revbtn').click(); pg.wait_for_timeout(400)
            ck('reveal opens', pg.locator('.reveal').count() == 1)
            pg.reload(); pg.wait_for_timeout(500)
            ck('review note survives a reload', 'Testing that the note' in pg.locator('#revtx').input_value())
            ck('reveal survives a reload', pg.locator('.reveal').count() == 1)

        # --- deck list: one row per case plus each word card plus the review ---
        pg.goto(url + '#/deck/' + deck); pg.wait_for_timeout(400)
        want = info['cases'] + len(info['vocab']) + (1 if info['review'] else 0)
        ck('deck list row count', pg.locator('#app ol > li').count() == want,
           '%d rows, expected %d' % (pg.locator('#app ol > li').count(), want))
        ck('no page errors', not errs, errs)
    print('\nFAILURES:', F or 'none')
    return 1 if F else 0

if __name__ == '__main__':
    raise SystemExit(main(*sys.argv[1:]))
