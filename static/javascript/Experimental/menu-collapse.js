// menu-collapse.js
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const menu = document.querySelector('.primary-header__menu');
  const headerLayout = document.querySelector('.primary-header__layout');

  function checkMenuFit() {
    const availableWidth = headerLayout.offsetWidth;
    const usedWidth = menu.scrollWidth;

    if (usedWidth > availableWidth) {
      // Collapse into hamburger
      hamburger.style.display = 'block';
      nav.classList.remove('visible'); // hide by default
      hamburger.setAttribute('aria-expanded', false);
    } else {
      // Show inline menu
      hamburger.style.display = 'none';
      nav.classList.add('visible');
      hamburger.setAttribute('aria-expanded', true);
    }
  }

  window.addEventListener('resize', checkMenuFit);
  window.addEventListener('load', checkMenuFit);
});
