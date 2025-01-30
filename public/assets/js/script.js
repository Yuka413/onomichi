// ハンバーガーメニュー
$(".l-header__open").on("click", function () {
  if ($(".l-header__open-bar").hasClass("is-active")) {
    $(".l-header__drawer").removeClass("is-checked");
    $(".l-header__open-bar").removeClass("is-active");
  } else {
    $(".l-header__drawer").addClass("is-checked");
    $(".l-header__open-bar").addClass("is-active");
  }
});
