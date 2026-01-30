
// version 1
document.addEventListener("DOMContentLoaded", () => {
  const tocList = document.querySelector(".toc__list");

  // Select headings inside main, regardless of section nesting
  const headings = document.querySelectorAll("main h2, main h3");

  console.log("Found headings:", headings.length); // Debug

  headings.forEach((heading, index) => {
    // Ensure each heading has an ID
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }

    // Create TOC item
    const li = document.createElement("li");
    li.className = "toc__item";

    const a = document.createElement("a");
    a.className = "toc__link";
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });
});
