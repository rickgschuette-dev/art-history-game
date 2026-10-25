"""Shared helper: serve the repo root and open a Playwright page."""
import subprocess, time, contextlib, os, json
from playwright.sync_api import sync_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = '/opt/pw-browsers/chromium'   # adjust if your Chromium lives elsewhere

@contextlib.contextmanager
def site(port=8900, seed=None, scale=1.0, width=1200, height=1000):
    """seed: dict written to localStorage BEFORE page scripts run (store is read once at load)."""
    srv = subprocess.Popen(['python3','-m','http.server',str(port),'-d',ROOT],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1)
    try:
        with sync_playwright() as p:
            b = p.chromium.launch(executable_path=CHROME)
            ctx = b.new_context(viewport={'width':width,'height':height}, device_scale_factor=scale)
            if seed is not None:
                ctx.add_init_script("try{localStorage.setItem('ahg.v1',%s)}catch(e){}" % json.dumps(json.dumps(seed)))
            pg = ctx.new_page()
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            yield pg, 'http://localhost:%d/index.html' % port, errs
            b.close()
    finally:
        srv.terminate()

def done_seed(case_ids, points=10):
    """Progress for cases the player has finished. save() clears finds on submit, so finds stay empty."""
    return {'cards': {c: {'finds': [], 'bonus': '', 'points': points} for c in case_ids}}
