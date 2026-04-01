function selectDistance(card) {
  document.querySelectorAll('.dist-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
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