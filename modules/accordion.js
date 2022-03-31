export default function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add("active");

    function activeAccordion() {
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
