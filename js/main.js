// !Спойлер
$(document).ready(function () {
  $(".header-center__phone-arrow").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

document.addEventListener("click", documentActions);
// смотрит сколько категорий и добавляет класс с цифрой в html
const manuBlocks = document.querySelectorAll(".header-catalog__submenu-block");
if (manuBlocks.length) {
  manuBlocks.forEach((menuBlock) => {
    const manuBlockItems = menuBlock.querySelectorAll(
      ".header-catalog__submenu-category"
    ).length;
    menuBlock.classList.add(`header-catalog__submenu-block--${manuBlockItems}`);
  });
}

// связь между ссылкой и блоком
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest("[data-parent]")) {
    const subMenuId = targetElement.dataset.parent
      ? targetElement.dataset.parent
      : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const catalogMenu = document.querySelector(".header-catalog__submenu");
    // добавляем классы для открытия по клику
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

if ($(window).width() < 991.98) {
  $(".header-top__menu-list").appendTo($(".menu__body"));
  $(".header-center__phone").appendTo($(".menu"));
  $(".header-top__user").appendTo($(".menu"));
  $(".header-center__favorite").appendTo($(".menu"));
  $(".header-center__card").appendTo($(".menu"));
}

// const parent_original = document.querySelector('.header');
// const parent = document.querySelector(".menu__body");
// const item = document.querySelector(".header-catalog");

// window.addEventListener('resive', function (event) {
//   if (viewport_width <= 992) {
//     if (!item.classList.contains('done')) {
//       parent.insertBefore(item, parent.children[1]);
//       item.classList.add('done');
//     }
//   } else {
//     if (item.classList.contains('done')) {
//       parent_original.insertBefore(item, parent_original.children[2]);
//       item.classList.remove('done');
//     }
//   }
// })

