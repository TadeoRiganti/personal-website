document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const styles = getComputedStyle(entry.target);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;

        navbar.style.backgroundColor = bgColor;
        navbar.style.color = textColor;
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});
