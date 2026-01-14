/* Version 1
When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
Source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  var asides = document.querySelectorAll("aside"); // all aside TOC elements

  if (prevScrollpos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.style.top = "0";
    asides.forEach(function(aside) {
      aside.style.top = "var(--spacing-extra-large)";
    });
  } else {
    // scrolling down → hide navbar
    navbar.style.top = `-${navbar.offsetHeight}px`;
    asides.forEach(function(aside) {
      aside.style.top = "var(--spacing-large)";
    });
  }
  prevScrollpos = currentScrollPos;
}