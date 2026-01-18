// Grab the toggle button and the nav
const toggleButton = document.querySelector(".primary-header__menu-toggle");
const nav = document.querySelector(".primary-header__nav");

console.log("Toggle button:", toggleButton);
console.log("Nav element:", nav);

// Listen for clicks on the hamburger
toggleButton.addEventListener("click", () => {
  console.log("Button clicked!");
  const isOpen = nav.classList.toggle("primary-header__nav--open");
  console.log("Is open?", isOpen);
  console.log("Nav classes:", nav.classList);
  
  // Update aria-expanded for accessibility
  toggleButton.setAttribute("aria-expanded", isOpen);
});