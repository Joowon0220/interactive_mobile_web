
var mySwiper = new Swiper('.mySwiper', {

  loop: true,
  observer: true,
  autoHeight: true,
  hashNavigation: {
    replaceState: true,
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {


    slideChangeTransitionEnd: function () {
      if (this.realIndex >= 2) {
        $('.swiper-pagination').hide();
      } else {
        $('.swiper-pagination').show();
      }


      $('.nav_li').removeClass('on');

      if (this.realIndex <= 1) {
        $('#nav1').addClass('on');
      } else {
        $('#nav' + this.realIndex).addClass('on');
      }

    },
    slideChangeTransitionStart: function () {
      window.scrollTo(top);

      if (this.realIndex === 3) {
        var activeHt = $('.swiper-slide-active').height();
        $('.wrapper').css('height', activeHt);
      } else {
        var activeHt = $('.swiper-slide-active > img').height();
        $('.wrapper').css('height', activeHt);
      }

    },
  },


});

$(document).ready(function () {
  $(".icon1").on("click", gradeInfo);
})

function gradeInfo() {
  if ($(this).hasClass('ontxt')) {

    $(this).next().css("display", "none");
    $(this).attr("src", "./img/content3/icon1.png");
    $(this).removeClass('ontxt');
    activeHeightSet();

  } else {
    $(this).addClass('ontxt');
    $(this).next().css("display", "block");
    $(this).attr("src", "./img/content3/icon2.png");
    activeHeightSet();

  }
}



function activeHeightSet() {
  var slideHt =
    $('.swiper-slide-active').height();
  console.log('slide-active : ' + slideHt);
  $('.wrapper').css('height', slideHt);
  $('.swiper-container').css('height', slideHt);
}
