const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
      const dropdown = toggle.nextElementSibling;
      dropdown.classList.toggle('show');
    }
  });
});
