export default function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });

      const direction = tabContent[index].dataset.anime;

      tabContent[index].classList.add("active", direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", (_) => {
        activeTab(index);
      });
    });
  }
}
