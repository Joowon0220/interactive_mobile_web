
infoMotion();
benefitMotion();



function infoMotion() {
  var info = new TimelineMax();
  info
    .to('.phone1', 0.6, { clip: "rect(0px, 520px, 525px, 0px)", opacity: 1, delay: -0.2 })
    .to('.phone2', 0.6, { clip: "rect(0px, 583px, 561px, 0px)", opacity: 1, delay: -0.2 })
    .to('.coin', 0.6, { clip: "rect(0px, 801px, 207px, 0px)", opacity: 1, delay: -0.2 })
}



function benefitMotion() {
  var benefit = new TimelineMax();
  benefit
    .to('.b1', 0.3, { clip: "rect(0px, 520px, 525px, 0px)", opacity: 1 })
    .to('.b2', 0.3, { clip: "rect(0px, 285px, 251px, 0px)", opacity: 1 })
    .to('.b3', 0.3, { clip: "rect(0px, 268px, 244px, 0px)", opacity: 1 })
    .to('.b4', 0.3, { clip: "rect(0px, 288px, 240px, 0px)", opacity: 1 })
    .to('.b5', 0.3, { clip: "rect(0px, 257px, 290px, 0px)", opacity: 1 })
    .to('.b6', 0.3, { clip: "rect(0px, 264px, 304px, 0px)", opacity: 1 })


  scrollMotion(benefit, '.benefit', -10);
}



function scrollMotion(tl, obj, ofs) {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: ofs })
    .addTo(controller)
    .setTween(tl)
    .reverse(false)
}


//nav scroll event
$(function () {
  $(window).scroll(function () {
    var navbar = $(this).scrollTop();
    console.log(navbar);
    if (navbar > 0) {
      $('.nav_img').attr('src', '../img/main/nav/main_nav_scroll.png');
    } else {
      $('.nav_img').attr('src', '../img/main/nav/main_nav.png');
    }
  })
})