// version 4
// REFACTOR Add time-zone based preferences
// SCOPE Changes color-scheme based on

/*
1. User override (sessionStorage)
2. Device preference (prefers-color-scheme)
3. Timezone fallback
*/

function toggleTheme() {
  const html = document.documentElement;
  const button = document.querySelector('.primary-header__theme-toggle');
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  button.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
  button.setAttribute('aria-label', `Toggle theme (${newTheme} mode active)`);

  sessionStorage.setItem('theme', newTheme);
}

/* 
Adjust the getTimezoneTheme() function to match your definition of “day” vs “night.”
For example, you might prefer dark mode starting at 20:00 instead of 19:00.
*/
function getTimezoneTheme() {
  const hour = new Date().getHours();
  let start_timer = 19;
  let end_timer = 6;
  
  return (hour >= start_timer || hour < end_timer) ? 'dark' : 'light';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = sessionStorage.getItem('theme');
  const html = document.documentElement;

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const timezoneTheme = getTimezoneTheme();

    // Priority: device preference > timezone
    const initialTheme = prefersDark ? 'dark' : timezoneTheme;
    html.setAttribute('data-theme', initialTheme);
  }

  // Ensure ARIA state matches
  const button = document.querySelector('.primary-header__theme-toggle');
  if (button) {
    const currentTheme = html.getAttribute('data-theme');
    button.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
    button.setAttribute('aria-label', `Toggle theme (${currentTheme} mode active)`);
  }
});


// version 3.1.2
// REFACTOR switch theme persistence from localStorage to sessionStorage
// SCOPE  ensures that each new browsing session respects the user’s current OS/UI preference, while still allowing temporary overrides during a session.

// function toggleTheme() {
//   const html = document.documentElement;
//   const button = document.querySelector('.primary-header__theme-toggle');
//   const currentTheme = html.getAttribute('data-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

//   html.setAttribute('data-theme', newTheme);
//   button.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
//   button.setAttribute('aria-label', `Toggle theme (${newTheme} mode active)`);

//   sessionStorage.setItem('theme', newTheme);
// }

// // Initialization
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = sessionStorage.getItem('theme');
//   if (savedTheme) {
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   } else {
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
//   }
// });


// version 2

// function toggleTheme() {
//   const html = document.documentElement;
//   const button = document.querySelector('.primary-header__theme-toggle');
//   const currentTheme = html.getAttribute('data-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

//   html.setAttribute('data-theme', newTheme);
//   button.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
//   button.setAttribute('aria-label', `Toggle theme (${newTheme} mode active)`);

//   localStorage.setItem('theme', newTheme);
// }

// // Restore saved theme on load
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme) {
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }
// });


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