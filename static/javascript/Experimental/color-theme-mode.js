// version 2

function initTheme() {
    const html = document.documentElement; // Reference to the <html> element
    const button = document.querySelector('.primary-header__theme-toggle'); // Find the toggle button

    const savedTheme = localStorage.getItem('theme'); // Check if user has a saved theme preference

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Detect system dark-mode setting
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light'); // Use saved theme, otherwise system preference

    html.setAttribute('data-theme', initialTheme); // Apply theme to <html> via data-theme attribute
    button.setAttribute('aria-pressed', initialTheme === 'dark' ? 'true' : 'false'); // Update accessibility state
    button.setAttribute('aria-label', `Toggle theme (${initialTheme} mode active)`); // Update screen reader label
}

function toggleTheme() {
    const html = document.documentElement; // Reference to the <html> element
    const button = document.querySelector('.primary-header__theme-toggle'); // Find the toggle button
    const currentTheme = html.getAttribute('data-theme'); // Get current theme from <html>
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Flip theme value

    html.setAttribute('data-theme', newTheme); // Apply new theme to <html>
    button.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false'); // Update accessibility state
    button.setAttribute('aria-label', `Toggle theme (${newTheme} mode active)`); // Update screen reader label

    localStorage.setItem('theme', newTheme); // Save user’s choice so it persists across reloads
}

// Run initialization once the DOM is ready
initTheme();



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