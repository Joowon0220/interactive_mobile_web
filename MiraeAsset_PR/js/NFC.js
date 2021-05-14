$(document).ready(function () {
  $(".show").on("click", arrow);
  $(".show2").on("click", arrow2);
})


function arrow() {
  $(".show").toggleClass('on');
  if ($('.bottom').hasClass('ontxt')) {
    $('.bottom').css('display', 'none');
    $('.bottom').removeClass('ontxt');
  } else {
    $('.bottom').css('display', 'block');
    $('.bottom').addClass('ontxt');
  }
}

function arrow2() {
  $(".show2").toggleClass('on');
  if ($('.bottom_b').hasClass('ontxt')) {
    $('.bottom_b').css('display', 'none');
    $('.bottom_b').removeClass('ontxt');
  } else {
    $('.bottom_b').css('display', 'block');
    $('.bottom_b').addClass('ontxt');
  }
}



//motions
access();

function access() {
  var access = new TimelineMax();
  access
    .to('.nfcIcon', 0.3, { opacity: 1 })
    .to('.coin', 0.3, { opacity: 1 })
    .to('.arrow', 0.3, { rotation: 0, opacity: 1 })


  scrollMotion(access, '.info2', 10);
}



function scrollMotion(tl, obj, ofs) {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: ofs })
    .addTo(controller)
    .setTween(tl)
    .reverse(false)
}
