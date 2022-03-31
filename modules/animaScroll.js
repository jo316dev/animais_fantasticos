export default function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  const windowHalf = window.innerHeight * 0.7;

  function animaScroll() {
    sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top - windowHalf;

      if (topo < 0) {
        section.classList.add("animar");
      } else {
        section.classList.remove("animar");
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
