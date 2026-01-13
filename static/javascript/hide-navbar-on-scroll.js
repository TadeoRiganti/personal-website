
/* HIDE NAVBAR ON SCROLL 

Source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp*/

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/* HIDE NAVBAR ON SCROLL 
Source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   var navbar = document.getElementById("navbar");
//   var asides = document.querySelectorAll("aside"); // all aside TOC elements

//   if (prevScrollpos > currentScrollPos) {
//     // scrolling up → show navbar
//     navbar.style.top = "0";
//     asides.forEach(function(aside) {
//       aside.style.top = "var(--spacing-extra-large)";
//     });
//   } else {
//     // scrolling down → hide navbar
//     navbar.style.top = `-${navbar.offsetHeight}px`;
//     asides.forEach(function(aside) {
//       aside.style.top = "var(--spacing-large)";
//     });
//   }
//   prevScrollpos = currentScrollPos;
// }

// REFACTOR Control animation via CSS
// Scope: Refactored navbar scroll script: replaced inline style.top assignments with class toggling (.visible),
// allowing CSS to handle animation, delay, and easing instead of JS directly.


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  var asides = document.querySelectorAll("aside");

  if (prevScrollpos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.classList.add("visible");
    asides.forEach(aside => aside.classList.add("visible"));
  } else {
    // scrolling down → hide navbar
    navbar.classList.remove("visible");
    asides.forEach(aside => aside.classList.remove("visible"));
  }
  prevScrollpos = currentScrollPos;
};
