/**
 * Sabores de la Noche – main.js
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     1. MOBILE DRAWER NAV
  ───────────────────────────────────────────── */
  const btn    = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');

  const openNav = () => {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeNav() : openNav();
  });

  drawer.querySelectorAll('[data-close]').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  /* Close drawer when clicking outside */
  document.addEventListener('click', (e) => {
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
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    highlightActiveLink();
  }, { passive: true });

  /* ─────────────────────────────────────────────
     3. ACTIVE NAV LINK ON SCROLL
  ───────────────────────────────────────────── */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  const highlightActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 130) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  /* ─────────────────────────────────────────────
     4. SCROLL-IN ANIMATIONS (IntersectionObserver)
  ───────────────────────────────────────────── */
  const animTargets = document.querySelectorAll(
    '.zone-card, .gallery-item, .experience-item, .about-image-wrap, .sponsor-card'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    animTargets.forEach((el, i) => {
      el.style.setProperty('--delay', `${i * 0.07}s`);
      el.classList.add('anim-ready');
      observer.observe(el);
    });
  } else {
    /* Fallback for browsers without IntersectionObserver */
    animTargets.forEach(el => el.classList.add('anim-ready', 'visible'));
  }

}); /* end DOMContentLoaded */


/* ─────────────────────────────────────────────
   5. NEWSLETTER (global – called from onclick)
───────────────────────────────────────────── */
function handleNewsletter() {
  const input    = document.getElementById('newsletter-email');
  const feedback = document.getElementById('newsletterFeedback');
  const email    = input.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = '#e87d2b';
    return;
  }

  feedback.textContent = '🎉 Subscribed! See you at the festival.';
  feedback.style.color = '#f5c400';
  input.value = '';

  setTimeout(() => { feedback.textContent = ''; }, 5000);
}
