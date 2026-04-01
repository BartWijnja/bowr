// ── COUNTDOWN TIMER ──
(function () {
  // 6 september 2026, 09:00 CEST (Amsterdam) = 07:00 UTC
  const target = new Date('2026-09-06T07:00:00Z');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const elDays  = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMins  = document.getElementById('cd-mins');
    const elSecs  = document.getElementById('cd-secs');
    if (!elDays || !elHours || !elMins || !elSecs) return;

    const diff = target - Date.now();
    if (diff <= 0) {
      elDays.textContent = elHours.textContent = elMins.textContent = elSecs.textContent = '00';
      return;
    }
    elDays.textContent  = pad(Math.floor(diff / 86400000));
    elHours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    elMins.textContent  = pad(Math.floor((diff % 3600000)  / 60000));
    elSecs.textContent  = pad(Math.floor((diff % 60000)    / 1000));
  }

  tick();
  setInterval(tick, 1000);
})();


function selectDistance(card) {
  document.querySelectorAll('.dist-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
}

// ── SPONSOR MARQUEE ──
(function () {
  const track = document.getElementById('sponsorTrack');
  if (!track) return;

  // Duplicate items for seamless infinite loop
  const origItems = Array.from(track.querySelectorAll('.sponsor-item'));
  origItems.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
})();


const mobCta = document.getElementById('mob-cta');

function updateMobileCta() {
  if (mobCta) {
    mobCta.style.display = window.innerWidth <= 900 ? 'block' : 'none';
  }
}

updateMobileCta();
window.addEventListener('resize', updateMobileCta);

// ── SCROLL-BASED NAV ──
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (!nav) return;
  const isMobile = window.innerWidth <= 900;
  nav.style.padding = window.scrollY > 60
      ? (isMobile ? '0.8rem 1.5rem' : '0.8rem 4rem')
      : (isMobile ? '1rem 1.5rem'  : '1.2rem 4rem');
});

// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = 'Verstuurd ✓';
  btn.style.background = '#0a7a6e';
  setTimeout(() => {
    btn.textContent = 'Verstuur bericht';
    btn.style.background = '';
  }, 3000);
}