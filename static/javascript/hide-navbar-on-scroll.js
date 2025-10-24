/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClassName("primary-header").style.top = "0";
  } else {
    document.getElementByClassName("primary-header").style.top = "4rem"; /*For now I'll let hardcoded*/ */
  }
  prevScrollpos = currentScrollPos;
}