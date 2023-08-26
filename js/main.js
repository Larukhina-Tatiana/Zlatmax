// !Спойлер
$(document).ready(function () {
  $(".header-center__phone-arrow").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

document.addEventListener("click", documentActions);
const manuBlocks = document.querySelectorAll(".header-catalog__submenu-block");
if (manuBlocks.length) {
  manuBlocks.forEach(menuBlock => {
        const manuBlockItems = menuBlock.querySelectorAll(
          ".header-catalog__submenu-category").length;
    menuBlock.classList.add(`header-catalog__submenu-block--${manuBlockItems}`);
      });
    }
      function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.closest("[data-parent]")) {
          const subMenuId = targetElement.dataset.parent
            ? targetElement.dataset.parent
            : null;
          const subMenu = document.querySelector(
            `[data-submenu="${subMenuId}"]`
          );
          const catalogMenu = document.querySelector(
            ".header-catalog__submenu"
          );

          if (subMenu) {
            const activeLink = document.querySelector("._submenu-active");
            const activeBlock = document.querySelector("._submenu-open");

            if (activeLink && activeLink !== targetElement) {
              activeLink.classList.remove("_submenu-active");
              activeBlock.classList.remove("_submenu-open");
            }
            targetElement.classList.toggle("_submenu-active");
            subMenu.classList.toggle("_submenu-open");
          } else {
            console.log("Нет такого подменю :('");
          }

          e.preventDefault();
        }
      }
