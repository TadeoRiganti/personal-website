// version 1
function toggleTheme() {
    const html = document.documentElement;
    const button = document.querySelector('.primary-header__theme-toggle');
    const currentTheme = html.getAttribute('data-theme');

    // Treat null/undefined as 'light' (default state)
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', 'Toggle theme (light mode active)');
    } else {
        html.setAttribute('data-theme', 'dark');
        button.setAttribute('aria-pressed', 'true');
        button.setAttribute('aria-label', 'Toggle theme (dark mode active)');
    }
}

// Version 2
// REFACTOR To address user's device color-scheme preference:

// function toggleTheme() {
//     const html = document.documentElement;
//     const button = document.querySelector('.primary-header__theme-toggle');
//     const currentTheme = html.getAttribute('data-theme');

//     // If no data-theme is set, detect current state from device preference
//     if (!currentTheme) {
//         const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
//         // Toggle to opposite of current device preference
//         if (prefersDark) {
//             // Currently dark, switch to light
//             html.setAttribute('data-theme', 'light');
//             button.setAttribute('aria-pressed', 'false');
//             button.setAttribute('aria-label', 'Toggle theme (light mode active)');
//             localStorage.setItem('theme-preference', 'light');
//         } else {
//             // Currently light, switch to dark
//             html.setAttribute('data-theme', 'dark');
//             button.setAttribute('aria-pressed', 'true');
//             button.setAttribute('aria-label', 'Toggle theme (dark mode active)');
//             localStorage.setItem('theme-preference', 'dark');
//         }
//     } else if (currentTheme === 'dark') {
//         html.setAttribute('data-theme', 'light');
//         button.setAttribute('aria-pressed', 'false');
//         button.setAttribute('aria-label', 'Toggle theme (light mode active)');
//         localStorage.setItem('theme-preference', 'light');
//     } else {
//         html.setAttribute('data-theme', 'dark');
//         button.setAttribute('aria-pressed', 'true');
//         button.setAttribute('aria-label', 'Toggle theme (dark mode active)');
//         localStorage.setItem('theme-preference', 'dark');
//     }
// }
