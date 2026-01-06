
/* HIDE NAVBAR ON SCROLL 

Source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp*/

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  var toc = document.getElementById("toc"); // your aside TOC element

  if (prevScrollpos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.style.top = "0";
    toc.style.top = "var(--spacing-extra-large)";
  } else {
    // scrolling down → hide navbar
    navbar.style.top = `-${navbar.offsetHeight}px`;
    toc.style.top = "var(--spacing-large)";
  }
  prevScrollpos = currentScrollPos;
}