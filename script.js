function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToNextSection(element) {
  const sections = document.querySelectorAll("section");
  const currentSection = element.closest("section");
  let nextSection = null;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i] === currentSection && i < sections.length - 1) {
      nextSection = sections[i + 1];
      break;
    }
  }
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
