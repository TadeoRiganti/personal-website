// Script to hide the navbar when scrolling down and show it when scrolling up


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  navbar.style.top = `-${navbar.offsetHeight}px`; // start hidden

  let revealed = false;
  window.addEventListener("scroll", () => {
    if (!revealed && window.scrollY > 50) {
      navbar.style.top = "0"; // reveal once
      revealed = true;
    }
  });
});
