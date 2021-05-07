$(window).on('load', function () {
  slideChangeStart(myidx);
  slideChangeEnd(myidx);
})
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
});

mySwiper.on("slideChangeTransitionStart", () => slideChangeStart(mySwiper.realIndex));
mySwiper.on("slideChangeTransitionEnd", () => slideChangeEnd(mySwiper.realIndex));

var myidx = mySwiper.realIndex;

function activeHeightSet(myidx) {
  var activeHt = $('.swiper-slide-active > img').height();
  $('.wrapper').css('height', activeHt);
  if (myidx === 3) {
    var activeHt = $('.swiper-slide-active').height();
    $('.wrapper, .swiper-slide-active').css('height', activeHt);
  }
}

function slideChangeStart(myidx) {
  window.scrollTo(top);
  activeHeightSet(myidx);
}

function slideChangeEnd(myidx) {

  if (myidx >= 2) {
    $('.swiper-pagination').hide();
  } else {
    $('.swiper-pagination').show();
  }

  $('.nav_li').removeClass('on');

  if (myidx <= 1) {
    $('#nav1').addClass('on');
  } else {
    $('#nav' + myidx).addClass('on');
  }
}

$(document).ready(function () {
  $(".icon1").on("click", gradeInfo);
})

function gradeInfo() {
  var activeHt = $('.swiper-slide-active').height();
  var txtHt = $(this).next().height();
  if ($(this).hasClass('ontxt')) {
    $(this).next().css('display', 'none');
    $(this).attr("src", "./img/content3/icon1.png");
    $(this).removeClass('ontxt');
    var newHt = activeHt - txtHt;
    // console.log('- : ' + newHt);
  } else {
    $(this).next().css('display', 'block');
    $(this).attr("src", "./img/content3/icon2.png");
    $(this).addClass('ontxt');
    var newHt = activeHt + txtHt;
    // console.log('+ : ' + newHt);
  }
  $('.wrapper, .swiper-container, .slide4').css('height', newHt);
}
