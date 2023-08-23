// !Спойлер
$(document).ready(function () {
  $(".header-center__phone-arrow").click(function (event) {
      $(this).toggleClass("active").next().slideToggle(300);
  });
});