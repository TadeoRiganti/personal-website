// version 2

function toggleTheme() {
  const html = document.documentElement;
  const button = document.querySelector('.primary-header__theme-toggle');
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  button.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
  button.setAttribute('aria-label', `Toggle theme (${newTheme} mode active)`);

  localStorage.setItem('theme', newTheme);
}

// Restore saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});





// version 1
// function toggleTheme() {
//     const html = document.documentElement;
//     const button = document.querySelector('.primary-header__theme-toggle');
//     const currentTheme = html.getAttribute('data-theme');

//     // Treat null/undefined as 'light' (default state)
//     if (currentTheme === 'dark') {
//         html.setAttribute('data-theme', 'light');
//         button.setAttribute('aria-pressed', 'false');
//         button.setAttribute('aria-label', 'Toggle theme (light mode active)');
//     } else {
//         html.setAttribute('data-theme', 'dark');
//         button.setAttribute('aria-pressed', 'true');
//         button.setAttribute('aria-label', 'Toggle theme (dark mode active)');
//     }
// }