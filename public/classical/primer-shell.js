(function () {
  'use strict';

  var main = document.querySelector('body > main');
  var image = document.getElementById('mainImage');
  if (!main || !image) return;

  var shell = document.createElement('header');
  shell.className = 'primer-site-banner';
  shell.setAttribute('aria-label', 'Case Files: Art History');
  shell.innerHTML =
    '<span class="primer-banner-photo" aria-hidden="true">' +
      '<img class="primer-gallery" src="../images/banner-gallery.jpg" alt="">' +
      '<img class="primer-card-art" src="' + image.src + '" alt="">' +
      '<span class="primer-banner-lens">' +
        '<span class="primer-banner-glass"></span>' +
        '<img src="../images/lens-ring.png" alt="">' +
      '</span>' +
    '</span>' +
    '<a class="primer-brand" href="../../index.html#/novice" aria-label="Case Files: Art History — Novice home">' +
      '<img src="../images/case-files-logo.png" alt="Case Files: Art History">' +
    '</a>' +
    '<nav class="primer-tools" aria-label="Classical Primer links">' +
      '<span>Classical Primer</span><a href="../../index.html#/novice">Novice</a>' +
      '<a href="../../index.html#/sources">Sources</a><a href="../../index.html#/help">Help</a>' +
    '</nav>';
  document.body.insertBefore(shell, main);

  var style = document.createElement('style');
  style.textContent =
    ':root{--primer-banner:#1b2f5e}' +
    '.primer-site-banner{position:relative;height:clamp(150px,19vw,243px);overflow:hidden;background:var(--primer-banner);font-family:Georgia,"Times New Roman",serif}' +
    '.primer-banner-photo{position:absolute;left:0;top:50%;width:100%;aspect-ratio:1932/410;transform:translateY(-50%);display:block}' +
    '.primer-gallery{display:block;width:100%;height:100%;object-fit:fill}' +
    '.primer-card-art{position:absolute;left:58%;top:0;width:42%;height:100%;object-fit:cover;object-position:50% 43%}' +
    '.primer-brand{position:absolute;left:5%;top:50%;transform:translateY(-50%);display:block}' +
    '.primer-brand img{display:block;height:clamp(67px,10.08vw,125px);width:auto}' +
    '.primer-tools{position:absolute;right:14px;top:12px;display:flex;align-items:center;gap:1rem;background:rgba(10,24,38,.62);padding:.3rem .85rem;border-radius:999px;font-size:.9rem}' +
    '.primer-tools span{color:#e3d4b9;font-weight:bold}.primer-tools a{color:#fff;text-decoration:none}.primer-tools a:hover{text-decoration:underline}' +
    '.primer-banner-lens{position:absolute;left:56.8%;top:35.3%;width:4.95%;height:33.2%;z-index:1}' +
    '.primer-banner-glass{position:absolute;inset:13% 15% 12% 14%;border-radius:50%;background-image:var(--primer-card-art);background-size:260% auto;background-position:27% 47%;box-shadow:inset 0 0 5px #0008}' +
    '.primer-banner-lens img{position:absolute;inset:0;width:100%;height:100%}' +
    'body>main{max-width:none!important;margin:0!important;padding:2rem clamp(1.2rem,3vw,2.4rem) 3.25rem!important}' +
    'body>main header{padding-bottom:1rem!important}body>main h1{font-size:clamp(2.25rem,4.2vw,3.7rem)!important}' +
    'body>main section{margin-top:1.75rem!important}body>main .image-head,body>main section>figure{max-width:min(100%,960px)!important}body>main .image-stage img{max-height:640px!important}' +
    'body>main .magnifier{font-size:.95rem!important;white-space:nowrap}body>main .magnifier button{min-width:3rem!important;margin-left:.35rem!important;padding:.45rem .7rem!important;font-size:.9rem!important}' +
    'body>main .copy{padding:1.5rem clamp(1.25rem,2.2vw,2.2rem)!important}body>main .copy p{font-size:1rem!important;line-height:1.55!important}' +
    'body>main .words,body>main .notice,body>main .later{padding:1.25rem clamp(1.1rem,2vw,2rem)!important}' +
    'body>main .word h3{font-size:1rem!important}body>main .word p,body>main .notice li,body>main .later p{font-size:.95rem!important;line-height:1.5!important}' +
    'body>main .sources{font-size:.76rem!important}body>main .nav{justify-content:center!important;gap:1rem!important;max-width:960px!important;margin-left:auto!important;margin-right:auto!important;padding-top:1.25rem!important}body>main .nav span{font-size:.78rem!important}body>main .nav a{display:inline-flex!important;align-items:center!important;min-height:44px!important;padding:.7rem 1.15rem!important;font-size:.9rem!important}' +
    '@media(max-width:820px){.primer-card-art,.primer-banner-lens{display:none!important}}' +
    '@media(max-width:620px){.primer-tools{gap:.6rem;right:8px;top:8px;font-size:.8rem;padding:.25rem .6rem}.primer-tools span{display:none}body>main{padding:1.25rem 1rem 2.5rem!important}}';
  document.head.appendChild(style);
  shell.style.setProperty('--primer-card-art', 'url("' + image.src.replace(/"/g, '\\"') + '")');

  var sequence = [
    'CL-01-kouros-revision.html',
    'CL-02-discobolus-revision.html',
    'CL-03-doryphoros-revision.html',
    'CL-04-parthenon-revision.html',
    'CL-05-hermes-and-infant-dionysus-revision.html',
    'CL-06-red-figure-krater-revision.html',
    'CL-07-winged-victory-of-samothrace-revision.html',
    'CL-08-patrician-ancestors-revision.html',
    'CL-09-augustus-of-primaporta-revision.html',
    'CL-10-ara-pacis-revision.html',
    'CL-11-villa-of-mysteries-revision.html',
    'CL-12-alexander-mosaic-revision.html',
    'CL-13-arch-of-titus.html',
    'CL-14-pantheon.html',
    'CL-15-column-of-trajan-revision-2.html',
    'CL-16-roman-basilica-codes-revision.html',
    'CL-17-portonaccio-sarcophagus.html',
    'CL-18-colossal-head-of-constantine.html',
    'CL-19-erechtheion-caryatid.html',
    'CL-20-livia-garden-fresco-revision.html'
  ];
  function routeName(name) {
    return name.toLowerCase().replace(/\.html$/, '');
  }
  var current = routeName(decodeURIComponent(location.pathname).split('/').pop());
  var index = sequence.map(routeName).indexOf(current);
  var next = main.querySelector('.nav a');
  if (next && index !== -1) {
    next.removeAttribute('aria-disabled');
    if (index < sequence.length - 1) {
      next.href = sequence[index + 1];
      next.textContent = 'Next case →';
    } else {
      next.href = '../../index.html#/novice';
      next.textContent = 'Return to Novice';
    }
  }
}());
