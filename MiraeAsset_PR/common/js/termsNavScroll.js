//nav scroll event
$(function () {
  $(window).scroll(function () {
    var navbar = $(this).scrollTop();
    console.log(navbar);
    if (navbar > 0) {
      $('.nav_img').attr('src', '../common/img/nav_scroll.png');
    } else {
      $('.nav_img').attr('src', '../common/img/nav.png');
    }
  })
})