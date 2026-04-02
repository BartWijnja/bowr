// ── DISTANCE TAB SWITCHER ──
const badgeLabels = {
  '1': 'Start → 1 km keerpunt → Finish',
  '2': 'Start → 2 km keerpunt → Finish',
  '4': 'Start → 4 km keerpunt → Finish'
};

function switchDist(btn) {
  const dist = btn.dataset.dist;

  document.querySelectorAll('.dist-tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.dist-tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`.dist-tab-panel[data-dist="${dist}"]`).classList.add('active');

  const wrap = document.getElementById('distMapWrap');
  if (wrap) wrap.dataset.active = dist;

  const badge = document.getElementById('distRouteBadge');
  if (badge) badge.textContent = badgeLabels[dist] || '';
}

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