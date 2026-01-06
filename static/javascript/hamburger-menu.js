// Grab the toggle button and the nav
const toggleButton = document.querySelector(".primary-header__menu-toggle");
const nav = document.querySelector(".primary-header__menu-toggle")

// Listen for clicks on the hamburger
toggleButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("primary-header__nav--open");
  
  // Update aria-expanded for accessibility
  toggleButton.setAttribute("aria-expanded", isOpen);
});
