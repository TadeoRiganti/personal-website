/* Hide navbar on scroll v2*/

const header = document.querySelector("header");
let prev = window.pageYOffset; // 0 when page loads, otherwise stores previous 'current' value

window.addEventListener("scroll", function () {
  let current = window.pageYOffset; // your current offset from the top of the document

  // Add console.log(current, prev) here if you want to see how the offset changes, you'll notice that prev value is always smaller when you scroll down and bigger when you scroll up

  if (prev < current) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  prev = current; // Set current variable to prev variable so there's something to compare
});

/* Copied from the solution proposed by the user "Senatrius"
https://stackoverflow.com/questions/63776378/understanding-hide-nav-bar-on-scroll-code-javascript
*/