$(document).ready(function() {
  const title = $(".title");
  title.addClass("visible");
});

TweenMax.fromTo(
  ".main_img",
  0.6, { opacity: 0 }, { opacity: 1, delay: 0.6 }
)

TweenMax.staggerTo(
  ".car",
  0.4, { x: -50, opacity: 1, delay: 1 }, 0.5
)

TweenMax.staggerTo(
  ".name",
  0.4, { y: -20, opacity: 1, delay: 1.3 }, 0.5
)

var tm = new TimelineMax();
tm.to(
    ".img1_1",
    1, { opacity: 1 }
  )
  .to(
    ".img1_1",
    1, { y: -10, yoyo: true, repeat: -1, ease: Power0.easeIn }
  )


var tm2 = new TimelineMax();
tm2.to(
    ".img1_2",
    1, { opacity: 1 }
  )
  .to(
    ".img1_2",
    1, { y: -10, yoyo: true, repeat: -1, ease: Power0.easeIn }
  )
  .to(
    ".img2",
    0.8, { opacity: 1, ease: Power0.easeIn, delay: -1.4 }
  )
  .to(
    ".txt1",
    0.3, { opacity: 1, ease: Power0.easeIn }
  )
  .to(
    ".txt2",
    0.3, { opacity: 1, ease: Power0.easeIn }
  )