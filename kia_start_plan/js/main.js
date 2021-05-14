$(document).ready(function(){
  Motion();
  $('.eff').hide()
  
})

function Motion() {
  opaMotion('.tit');

  carMoving1();
  carMoving2();
  carMoving3();
  carMoving4();
  carMoving5();
  twinkMotion('.twink1',0.1 );
  twinkMotion('.twink2');
  twinkMotion('.twink3', 0.3);
  twinkMotion('.twink4', 0.6);
  carEffect()

  motion1()
  motion2()
  motion3()
  motion4()
  motion5()
 }


function opaMotion(obj){
  var tl = new TimelineMax();
  tl.fromTo(obj, 0.6, {opacity: 0, y: 20} ,{ opacity: 1, y: 0 })

  scrollMotion(tl,obj);
}



var car = $('.car')
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();

function carMoving1(){
  tl1.to(car, 0.2, {x: 100, y: 50, ease: Linear.easeInOut})
  .to(car, 0.2, { bezier:[
    { x: 100, y: 50 },
    { x: 100, y: 60 },
    { x: 100, y: 94},
], scaleX: -1, ease: Linear.easeInOut, zIndex: 2 })
.to(car, 0.3, {x: 20, y:130, ease: Linear.easeInOut})
.to(car, 0.2, { bezier:[
  { x: 20, y: 130 },
  { x: 20, y: 150 },
  { x: 30, y: 165},
], scaleX: 1, ease: Linear.easeInOut })
.to(car, 0.3, {x: 160, y: 246, ease: Linear.easeInOut, zIndex:0})

scrollMotion1(tl1, '.box1', 0, 320);

}

function carMoving2(){
  tl2.to(car, 0.4, { x: 520, y: 448, ease:Linear.easeInOut})
  .to(car, 0, { x: 630, y: 470,scaleX: -1, zIndex:1})
  .to(car, 0.3, { x: 254, y: 667, ease:Linear.easeInOut})
 
  scrollMotion1(tl2, '.box2', 10, 350);
}

function carMoving3(){
  tl3.to(car, 0.3, { x: 212, y:688,ease:Linear.easeInOut})
  .to(car, 0.2, { bezier:[
      { x: 218, y: 728},
      { x:  218, y: 728 },
      { x:  218, y: 728 },
  ],scaleX: 1, ease:Linear.easeInOut})
  .to(car, 0.3, { x: 298, y: 772,ease:Linear.easeInOut, zIndex: 0})
  .to(car, 0.2, { bezier:[
    { x: 298, y: 770 },
    { x:  298, y: 770 },
    { x:  258, y: 818 },
],scaleX: -1, ease:Linear.easeInOut})
.to(car, 0.2, { x: -10, y: 970,ease:Linear.easeInOut, zIndex: 6})

scrollMotion1(tl3, '.box3', -100, 400);
}


function carMoving4(){ 
  tl4.to(car, 0.3, { x: -178, y: 1060,ease:Linear.easeInOut})
  .to(car, 0.2, { bezier:[
      { x: -178, y: 1082 },
      { x: -120, y: 1105 },
      { x: -120, y: 1105 },
  ], scaleX: 1, ease:Linear.easeInOut, zIndex: 0})
  .to(car, 0.3, { x: 357, y: 1380, ease:Linear.easeInOut})
  .to(car, 0.2, { bezier:[
    { x: 357, y: 1380 },
    { x: 357, y: 1380 },
    { x: 347, y: 1444 },
], scaleX: -1, ease:Linear.easeInOut, zIndex: 1})
.to(car, 0.3, { x: 306, y:1462, ease:Linear.easeInOut})
.to(car, 0.2, { x: 276, y:1531,rotation:-20, ease:Linear.easeInOut})
.to(car, 0.2, { x: 216, y:1581,rotation:0, ease:Linear.easeInOut})
 scrollMotion1(tl4, '.box4', -160 ,460);
}

function carMoving5(){ 
  tl5.to(car, 0.3, { x: 87, y: 1610,rotation:20,ease:Linear.easeInOut})
  .to(car, 0.3, { x: 32, y: 1619,rotation:0,ease:Linear.easeInOut})
  .to(car, 0.2, { bezier:[
      { x: 32, y: 1619 },
      { x: 32, y: 1619 },
      { x: 32, y: 1656 },
  ], scaleX: 1, ease:Linear.easeInOut})
  .to(car, 0.3, { x: 352, y: 1826, ease:Linear.easeInOut})
  .to(car, 0.2, { bezier:[
    { x: 352, y: 1826 },
    { x: 352, y: 1826 },
    { x: 295, y: 1898 },
], scaleX: -1, ease:Linear.easeInOut})

  scrollMotion1(tl5, '.box5', -360 ,280);
}



var controller = new ScrollMagic.Controller();

function scrollMotion(tl, obj) {
  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -200})
  .setTween(tl)
  .reverse(true)
  .addTo(controller);
}

function scrollMotion1(tl, obj, off, dd) { 
  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: off, duration: dd})
  .setTween(tl)
  .reverse(true)
  .addTo(controller)
  // .addIndicators({ name: "car" })

}


function motion1(){
  var tl = new TimelineMax();
  tl.add('start1')
  .fromTo('.box1', 0.4, {opacity: 0},{opacity: 1},'start1')
  .fromTo('.pig', 0.3, {y:0, rotation: -20}, {y: -70, rotation: 0},'start1')
  .fromTo('.coin1', 0.3,{x: 0, y: 0, rotation: 0}, {y: -140, x: -40, rotation: 10},'start1')
  .fromTo('.coin2', 0.3,{x: 0, y: 0, rotation: 0}, {y: -110, x: -80, rotation: 10},'start1')
  .fromTo('.coin3', 0.3, {x: 0, y: 0, rotation: 0},{y: -70, x: 100, rotation: 10},'start1')
  .fromTo('.coin', 0.2,{opacity:1}, {opacity:0, delay: 0.5})

  scrollMotion2(tl, '.box1', 250 );
}

function motion2(){
  var tl = new TimelineMax();
  tl.add('start2')
  .fromTo('.box2', 0.4, {opacity: 0},{opacity: 1},'start2')
  .fromTo('.txt2', 0.2, {opacity: 0, y: -50}, {opacity: 1, y: 0}, 'start2')
  .fromTo('.txt1', 0.2, {opacity: 0, y: -50}, {opacity: 1, y: 0})
  .fromTo('.txt_sd', 0.2, {opacity: 0}, {opacity: 1 ,delay: 0.3},'start2')
  .add('start2_1')
  .fromTo('.effect', 0.4, {opacity: 0, scaleY: 0}, {opacity: 1, scaleY: 1, delay: 0.2},'start2')
  .fromTo('.effect', 0.2, { opacity : 1},{opacity: 0, delay: 0.1})


  scrollMotion2(tl, '.box2', 230 );
}
function motion3(){
  var tl = new TimelineMax();
  tl.to('.box3', 0.4, {opacity: 1})
  .fromTo('.oil_mc', 0.2, {opacity: 0},{opacity: 1})
  .fromTo('.oil1', 0.2, {opacity: 0, scale: 0, y: 0},{opacity: 1, scale: 1, y: 30})
  .fromTo('.oil2', 0.2, {opacity: 0, scale: 0, y: 0},{opacity: 1, scale: 1, y: 30})
  
  scrollMotion2(tl, '.box3', 260 );
}
function motion4(){
  var tl = new TimelineMax();
  tl.to('.box4', 0.4, {opacity: 1})
  .fromTo('.man1', 0.2, {x: 30, opacity: 0},{x: 0, opacity: 1})
  .fromTo('.man2', 0.2, {x: 30, opacity: 0},{x: 0, opacity: 1})
  .fromTo('.spaner', 0.3, { opacity: 0, x: -30 , rotation : -180},{ opacity: 1, x:0, rotation: 0})
  
  scrollMotion2(tl, '.box4', 200 );
}
function motion5(){
  var tl = new TimelineMax();
  tl.fromTo('.per1', 0.3, {opacity: 0, x: -20},{opacity: 1, x: 0})
  .fromTo('.per2', 0.3, {opacity: 0, x: -20},{opacity: 1, x: 0})
  .fromTo('.box5', 0.4, {opacity: 0}, {opacity: 1})

  scrollMotion2(tl, '.box5',-50 );
}

var controller = new ScrollMagic.Controller();

function scrollMotion2(tl, obj, off) {
  var scene = new ScrollMagic.Scene({ triggerElement: obj, offset:off})
  .setTween(tl)
  .reverse(false)
  .addTo(controller)
  // .addIndicators({ name: "motion" })

}


$(window).scroll(function () {
  var st = $(this).scrollTop();
  // console.log(st)
  //pin change
  if (st > 1950) {
    TweenMax.set('.twink', {display: "block"})
  } else{
    TweenMax.set('.twink', {display: "none"})
  }
  if(st >= 240 && st <= 490){
    $('.eff').show()
  } else if(st >= 600 && st <= 840){
    $('.eff').show()
  } else if(st >= 1000 && st <= 1250){
    $('.eff').show()
  } else if(st >= 1510 && st <= 1730){
    $('.eff').show()
  } else if(st >= 1880){
    $('.eff').show()
  } else{
    $('.eff').hide()
  }

});

function twinkMotion(obj, d){
  TweenMax.to(obj, 0.2, {opacity: 1, yoyo: true, repeat: -1, delay: d})
}

function carEffect(){
var tl = new TimelineMax();
  tl.staggerTo('.eff', 0.6, {opacity: 1, yoyo: true}, 0.2).repeat(-1)
}
