(function () {
  'use strict';

  var cards = [
    ['Kouros', 'Archaic Greece · circa 600–530 B.C.E.', 'public/classical/CL-01-kouros-revision.html'],
    ['Discobolus', 'Myron · circa 460–450 B.C.E.', 'public/classical/CL-02-discobolus-revision.html'],
    ['Doryphoros', 'Polykleitos · circa 450–440 B.C.E.', 'public/classical/CL-03-doryphoros-revision.html'],
    ['Parthenon', 'Athens · 447–432 B.C.E.', 'public/classical/CL-04-parthenon-revision.html'],
    ['Hermes and the Infant Dionysus', 'Praxiteles · circa 340 B.C.E.', 'public/classical/CL-05-hermes-and-infant-dionysus-revision.html'],
    ['Red-figure Krater', 'Euphronios · circa 515 B.C.E.', 'public/classical/CL-06-red-figure-krater-revision.html'],
    ['Winged Victory of Samothrace', 'Artist unknown · circa 200–190 B.C.E.', 'public/classical/CL-07-winged-victory-of-samothrace-revision.html'],
    ['Patrician Carrying Portrait Busts of Two Ancestors', 'Artist unknown · late first century B.C.E.', 'public/classical/CL-08-patrician-ancestors-revision.html'],
    ['Augustus of Primaporta', 'Artist unknown · circa 15 B.C.E.', 'public/classical/CL-09-augustus-of-primaporta-revision.html'],
    ['Ara Pacis Augustae', 'Rome · 13–9 B.C.E.', 'public/classical/CL-10-ara-pacis-revision.html'],
    ['Villa of the Mysteries', 'Pompeii · circa 60 B.C.E.', 'public/classical/CL-11-villa-of-mysteries-revision.html'],
    ['Alexander Mosaic', 'Artist unknown · circa 100 B.C.E.', 'public/classical/CL-12-alexander-mosaic-revision.html'],
    ['Arch of Titus', 'Rome · circa 81 C.E.', 'public/classical/CL-13-arch-of-titus.html'],
    ['Pantheon', 'Rome · 118–128 C.E.', 'public/classical/CL-14-pantheon.html'],
    ['Column of Trajan', 'Rome · 113 C.E.', 'public/classical/CL-15-column-of-trajan-revision-2.html'],
    ['Roman Basilica', 'Basilica of Maxentius · 308–312 C.E.', 'public/classical/CL-16-roman-basilica-codes-revision.html'],
    ['Portonaccio Sarcophagus', 'Rome · circa 190 C.E.', 'public/classical/CL-17-portonaccio-sarcophagus.html'],
    ['Colossal Head of Constantine', 'Rome · circa 315 C.E.', 'public/classical/CL-18-colossal-head-of-constantine.html'],
    ['Erechtheion Caryatid', 'Athens · 421–406 B.C.E.', 'public/classical/CL-19-erechtheion-caryatid.html'],
    ['Garden Room Fresco', 'Villa of Livia · circa 30–20 B.C.E.', 'public/classical/CL-20-livia-garden-fresco-revision.html']
  ];

  var app = document.getElementById('app');

  function indexHtml() {
    return '<p class="note"><a href="#/novice">← Novice</a></p>' +
      '<h1 class="ph">Classical Primer</h1>' +
      '<div class="sub primer-sub"><span class="prog"><strong>20 informational cards</strong> <span class="note">· circa 600 B.C.E. – 300 C.E.</span></span></div>' +
      '<p class="primer-index-intro">Read and look closely. Choose any card below; there are no points, tasks, or written responses in this deck.</p>' +
      '<ol class="cases primer-cases">' + cards.map(function (card, i) {
        return '<li class="ready"><a href="' + card[2] + '"><span class="num">' + String(i + 1).padStart(2, '0') + '</span><span class="ttl"><strong>' + card[0] + '</strong><span class="note">' + card[1] + '</span></span><span class="tail go">Read</span></a></li>';
      }).join('') + '</ol>';
  }

  function renderIndex() {
    if (location.hash !== '#/classical-primer') return;
    document.body.setAttribute('data-view', 'classical-primer');
    app.innerHTML = indexHtml();
    var novice = document.querySelector('.lvls a[data-lvl="apprentice"]');
    if (novice) novice.setAttribute('aria-current', 'page');
    app.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function decorateNovice() {
    if (location.hash !== '#/novice') return;
    var start = app.querySelector('a[href="public/classical/CL-01-kouros-revision.html"]');
    if (start) {
      start.href = '#/classical-primer';
      start.textContent = 'Browse Classical Primer cards';
    }
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href="public/classical/CL-01-kouros-revision.html"]');
    if (!link) return;
    event.preventDefault();
    location.hash = '#/classical-primer';
  });

  window.addEventListener('hashchange', function () {
    renderIndex();
    decorateNovice();
  });
  new MutationObserver(decorateNovice).observe(app, { childList: true });
  renderIndex();
  decorateNovice();
}());
