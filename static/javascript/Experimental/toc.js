// version 2

document.addEventListener("DOMContentLoaded", () => {
  const tocList = document.querySelector(".toc__list");
  const headings = document.querySelectorAll("main h2, main h3");

  // Build TOC dynamically
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`;

    const li = document.createElement("li");
    li.className = `toc__list-item toc__list-item--level-${heading.tagName.toLowerCase()}`;

    const a = document.createElement("a");
    a.className = "toc__list-link";
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Accordion toggle
  const toggleBtn = document.querySelector(".toc__title");
  toggleBtn.addEventListener("click", () => {
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!expanded));
    tocList.hidden = expanded; // hide/show list
  });

  // Start collapsed on mobile
  tocList.hidden = true;
  toggleBtn.setAttribute("aria-expanded", "false");
});




// version 1
// document.addEventListener("DOMContentLoaded", () => {
//   const tocList = document.querySelector(".toc__list");

//   // Select headings inside main, regardless of section nesting
//   const headings = document.querySelectorAll("main h2, main h3");

//   console.log("Found headings:", headings.length); // Debug

//   headings.forEach((heading, index) => {
//     // Ensure each heading has an ID
//     if (!heading.id) {
//       heading.id = `section-${index + 1}`;
//     }

//     // Create TOC item
//     const li = document.createElement("li");
//     li.className = "toc__item";

//     const a = document.createElement("a");
//     a.className = "toc__link";
//     a.href = `#${heading.id}`;
//     a.textContent = heading.textContent;

//     li.appendChild(a);
//     tocList.appendChild(li);
//   });
// });
