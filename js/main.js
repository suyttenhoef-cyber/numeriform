// NumeriForm — script principal (vanilla JS, sans dépendance)

document.addEventListener('DOMContentLoaded', () => {
  /* Menu mobile */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* Année courante dans le footer */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* Filtres catégories (formations / ressources) */
  const chips = document.querySelectorAll('.filter-chip');
  const items = document.querySelectorAll('[data-category]');
  if (chips.length && items.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        items.forEach(item => {
          const match = cat === 'all' || item.dataset.category === cat;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* Formulaire de contact — démonstration front-end (à brancher sur un
     service d'envoi : Formspree, Netlify Forms, ou une fonction serverless) */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('#contact-success');
      if (success) {
        success.classList.add('show');
        success.setAttribute('role', 'status');
      }
      contactForm.reset();
    });
  }

  /* Newsletter — démonstration front-end */
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Merci ! ✓';
      newsletterForm.reset();
      setTimeout(() => { btn.textContent = original; }, 3000);
    });
  }
});
