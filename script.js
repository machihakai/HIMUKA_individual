document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.mail-link[data-user][data-domain]').forEach((el) => {
    const { user, domain } = el.dataset;
    if (!user || !domain) return;
    const address = `${user}@${domain}`;
    el.textContent = address;
    el.setAttribute('href', `mailto:${address}`);
    el.classList.add('is-ready');
  });
});

