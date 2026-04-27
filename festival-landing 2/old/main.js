/**
 * Sabores de la Noche – main.js
 * Written from scratch. No patches, no legacy code.
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────────
     1. MOBILE DRAWER NAV
  ───────────────────────────────────────────── */
  var btn    = document.getElementById('hamburger');
  var drawer = document.getElementById('mobileDrawer');

  function openNav() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    drawer.classList.contains('open') ? closeNav() : openNav();
  });

  drawer.querySelectorAll('[data-close]').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  /* Close drawer when clicking outside */
  document.addEventListener('click', function (e) {
    if (
      drawer.classList.contains('open') &&
      !drawer.contains(e.target) &&
      !btn.contains(e.target)
    ) {
      closeNav();
    }
  });

  /* ─────────────────────────────────────────────
     2. HEADER SCROLL STYLE
  ───────────────────────────────────────────── */
  var header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 40);
    highlightActiveLink();
  }, { passive: true });

  /* ─────────────────────────────────────────────
     3. ACTIVE NAV LINK ON SCROLL
  ───────────────────────────────────────────── */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav__link, .drawer__link');

  function highlightActiveLink() {
    var current = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ─────────────────────────────────────────────
     4. SCROLL-IN ANIMATIONS (IntersectionObserver)
  ───────────────────────────────────────────── */
  var targets = document.querySelectorAll(
    '.zona-card, .galeria__item, .experience-list__item, .sobre__image-wrap, .sponsor-card'
  );

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el, i) {
      el.style.setProperty('--delay', (i * 0.07) + 's');
      el.classList.add('anim-ready');
      io.observe(el);
    });
  } else {
    /* Fallback for old browsers */
    targets.forEach(function (el) {
      el.classList.add('anim-ready', 'visible');
    });
  }

}); /* end DOMContentLoaded */

/* ─────────────────────────────────────────────
   5. NEWSLETTER (global – called from onclick)
───────────────────────────────────────────── */
function handleNewsletter() {
  var input    = document.getElementById('newsletter-email');
  var feedback = document.getElementById('newsletterFeedback');
  var email    = input.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = '#e87d2b';
    return;
  }

  feedback.textContent = '🎉 Subscribed! See you at the festival.';
  feedback.style.color = '#f5c400';
  input.value = '';
  setTimeout(function () { feedback.textContent = ''; }, 5000);
}