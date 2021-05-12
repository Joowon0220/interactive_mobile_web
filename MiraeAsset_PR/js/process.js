//motions
proccess1();
proccess2();

function proccess1() {
  var proccess1 = new TimelineMax();
  proccess1
    .to('.apply', 0.3, { x: 10, opacity: 1 })
    .to('.arrows', 0.3, { x: 10, opacity: 1 })
    .to('.documents', 0.3, { x: 10, opacity: 1 })
    .to('.arrows1', 0.3, { x: 10, opacity: 1 })
    .to('.approval', 0.3, { x: 10, opacity: 1 })
    .to('.arrows2', 0.3, { x: 10, opacity: 1 })
    .to('.open', 0.3, { x: 10, opacity: 1 })
    .to('.orange_arrow', 0.3, { opacity: 1 })
    .to('.twodays', 0.3, { opacity: 1 })
    .to('.box1', 0.3, { y: -100, opacity: 1 })
    .to('.box2', 0.3, { y: -100, opacity: 1 })
    .to('.box3', 0.3, { y: -100, opacity: 1 })
}


function proccess2() {
  var proccess2 = new TimelineMax();
  proccess2
    .to('.box1', 0.3, { y: -100, opacity: 1 })
    .to('.box2', 0.3, { y: -100, opacity: 1 })
    .to('.box3', 0.3, { y: -100, opacity: 1 })
  scrollMotion(proccess2, '.info1', 300);
}


function scrollMotion(tl, obj, ofs) {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: ofs })
    .addTo(controller)
    .setTween(tl)
    .reverse(false)
}
