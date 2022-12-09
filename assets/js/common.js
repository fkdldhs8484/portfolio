// 탭 메뉴

$(".c1 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c1 #tab-cont > div").hide();
  $(".c1 #tab-cont > div").eq(index).show();
});

$(".c2 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c2 #tab-cont > div").hide();
  $(".c2 #tab-cont > div").eq(index).show();
});

$(".c3 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c3 #tab-cont > div").hide();
  $(".c3 #tab-cont > div").eq(index).show();
});

$(".c4 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c4 #tab-cont > div").hide();
  $(".c4 #tab-cont > div").eq(index).show();
});

$(".c5 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c5 #tab-cont > div").hide();
  $(".c5 #tab-cont > div").eq(index).show();
});

$(".c6 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c6 #tab-cont > div").hide();
  $(".c6 #tab-cont > div").eq(index).show();
});

$(".c7 .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".c7 #tab-cont > div").hide();
  $(".c7 #tab-cont > div").eq(index).show();
});

// section 5

$(".imgcard__mune .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".img-c1 #imgcard-tab-cont > div").hide();
  $(".img-c1 #imgcard-tab-cont > div").eq(index).show();
});

$(".imgcard__mune .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".img-c2 #imgcard-tab-cont > div").hide();
  $(".img-c2 #imgcard-tab-cont > div").eq(index).show();
});

$(".imgcard__mune .list li").click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  $(".list li").removeClass("active");
  target.addClass("active");

  $(".img-c3 #imgcard-tab-cont > div").hide();
  $(".img-c3 #imgcard-tab-cont > div").eq(index).show();
});
