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

// function gradeInfo() {
//   if ($(this).hasClass('ontxt')) {

//     $(this).next().css("display", "none");
//     $(this).attr("src", "../img/content3/icon1.png");
//     $(this).removeClass('ontxt');
//     activeHeightSet();

//   } else {
//     $(this).addClass('ontxt');
//     $(this).next().css("display", "block");
//     $(this).attr("src", "../img/content3/icon2.png");
//     activeHeightSet();

//   }
// }


// function activeHeightSet() {
//   var slideHt =
//       $('.swiper-slide-active').height();
//       console.log('slide-active : '+slideHt);
//       $('.wrapper').css('height', slideHt);
//       $('.wrapper').css('background-color', 'red');
// }
