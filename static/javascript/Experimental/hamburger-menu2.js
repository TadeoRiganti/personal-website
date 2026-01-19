// Hamburger 

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', function () {
        // Toggle classes
        this.classList.toggle('close');
        nav.classList.toggle('visible');

        // Update accessibility state
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
    });
});

