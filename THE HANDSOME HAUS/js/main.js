// app.use(
//   cookieParser(process.env.COOKIE_SECRET, { sameSite: "none", secure: true })
// );

//header
function show_nav() {
  TweenMax.to('.nav', 0.5, { display: 'block', opacity: 1 })
}

function close_evt() {
  TweenMax.to('.nav', 0.5, { display: 'none', opacity: 0 })
}

//nav
$(document).ready(function () {
  $(".nav_li").on("click", menuSlide);
  // $(".icon1").on("click", gradeInfo);
})

function menuSlide() {
  var i = $(this).attr("data-index");
  location.href = "#content" + i;
}

