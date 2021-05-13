function Motion(){
    section1Motion();
    section2Motion();
    section3Motion();
    section4Motion();
    section5Motion();
    section6Motion();
    section7Motion();
    section8Motion();
    section9Motion();
}

function section1Motion(){
    var tl = new TimelineMax();
    tl.to('.s1_1', 0.3, {opacity:1})
    .to('.s1_3', 0.3, {opacity:1})
    .to('.s1_6', 0.3, {opacity:1})
    .to('.s1_7', 0.3, {clip: 'rect(0px 107px 50px 0px)'})
    .to('.s1_8', 0.3, {opacity:1})
    .to('.s1_4', 0.3, {opacity:1, y: -50})
    .to('.s1_5', 0.3, {opacity:1, y: -50})
    .to('.s1_4', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s1_5', 1.3, {y: -30, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')

    scrollMotion(tl, '.s1_1')
}

function section2Motion(){
    var tl = new TimelineMax();
    tl.to('.s2_1', 0.3, {opacity:1})
    .staggerTo('.s2_op', 0.3, {opacity:1}, 0.3)
    .to('.s2_7', 0.5, {opacity:1}, 'm1')
    .to('.s2_3', 1, {y: -20, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s2_4', 1.2, {y: -10, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s2_5', 1.3, {y: -10, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s2_6', 1.1, {y: -20, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')

    scrollMotion(tl, '.s2_1')
}

function section3Motion(){
    var tl = new TimelineMax();
    tl.to('.s3_1', 0.3, {opacity:1})
    .to('.s3_9', 0.3, {opacity:1})
    .to('.s3_7', 0.3, {delay:1.2, opacity:1})
    .to('.s3_8', 0.3, {opacity:1})

    var tl2 = new TimelineMax();
    tl2.delay(0.6)
    .to('.s3_3', 0.3, {clip: 'rect(0px 115px 7px 0px)'})
    .to('.s3_4', 0.3, {clip: 'rect(0px 115px 7px 0px)'})
    .to('.s3_5', 0.3, {clip: 'rect(0px 17px 16px 0px)'})
    .to('.s3_6', 0.3, {clip: 'rect(0px 17px 16px 0px)'})
    .set('.s3_3', {delay: 1.5, clip: 'rect(0px 0px 7px 0px)'}, 'm1')
    .set('.s3_4', {delay: 1.5, clip: 'rect(0px 0px 7px 0px)'}, 'm1')
    .set('.s3_5', {delay: 1.5, clip: 'rect(0px 0px 16px 0px)'}, 'm1')
    .set('.s3_6', {delay: 1.5, clip: 'rect(0px 0px 16px 0px)'}, 'm1')
    .repeatDelay(1.2)
    .repeat(-1)

    scrollMotion(tl, '.s3_1')
    scrollMotion(tl2, '.s3_1')
}

function section4Motion(){
    var tl = new TimelineMax();
    tl.to('.s4_1', 0.3, {opacity:1})
    .to('.s4_3', 0.3, {opacity:1})
    .to('.s4_4', 0.3, {opacity:1})
    .to('.s4_11', 0.3, {opacity:1})
    .to('.s4_4', 13, {rotation: -360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s4_9', 0.3, {opacity:1}, 'm1')
    .to('.s4_10', 0.3, {opacity:1})
    .to('.s4_9', 13, {rotation: 360, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s4_10', 10, {rotation: -360, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s4_5', 0.3, {opacity:1}, 'm2')
    .to('.s4_6', 0.3, {opacity:1})
    .to('.s4_7', 0.3, {opacity:1, y: -50})
    .to('.s4_8', 0.3, {opacity:1, y: -50})
    .to('.s4_7', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s4_8', 1.3, {y: -30, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm3')

    scrollMotion(tl, '.s4_1')
}

function section5Motion(){
    var tl = new TimelineMax();
    tl.to('.s5_1', 0.3, {opacity:1})
    .to('.s5_2', 1, {rotation:5, repeat:-1, yoyo:true, ease: Power0.easeIn}, 'm1')
    .to('.s5_4', 0.5, {opacity:1}, 'm1')
    .to('.s5_5', 0.5, {opacity:1})
    .to('.s5_6', 0.3, {opacity:1, y: -50})
    .to('.s5_7', 0.3, {opacity:1, y: -50})
    .to('.s5_8', 0.3, {opacity:1, y: -50})
    .to('.s5_6', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s5_7', 1.3, {y: -30, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s5_8', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')

    scrollMotion(tl, '.s5_1')
}

function section6Motion(){
    var tl = new TimelineMax();
    tl.to('.s6_1', 0.3, {opacity:1})
    .to('.s6_3', 0.8, {clip: 'rect(0px 254px 158px 0px)'})
    .to('.s6_9', 0.5, {opacity:1})
    .to('.s6_4', 0.3, {opacity:1})
    .to('.s6_5', 0.3, {opacity:1})
    .to('.s6_4', 13, {rotation: 360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s6_5', 10, {rotation: -360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s6_6', 0.5, {opacity:1}, 'm1')
    .to('.s6_7', 0.3, {opacity:1, y: -50})
    .to('.s6_8', 0.3, {opacity:1, y: -50})
    .to('.s6_7', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s6_8', 1.3, {y: -30, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')

    scrollMotion(tl, '.s6_1')
}

function section7Motion(){
    var tl = new TimelineMax();
    tl.to('.s7_1', 0.3, {opacity:1})
    .to('.s7_3', 0.5, {clip:'rect(0px 140px 124px 0px)'})
    .to('.s7_4', 0.3, {opacity:1})
    .to('.s7_5', 0.3, {opacity:1})
    .to('.s7_10', 0.3, {opacity:1, transform:'scale(1)'}, 'm1')
    .to('.s7_10', 0.3, {y: -50}, 'm1')
    .to('.s7_6', 0.3, {opacity:1, y: -50})
    .to('.s7_7', 0.3, {opacity:1, y: -50})
    .to('.s7_8', 0.3, {opacity:1, y: -50})
    .to('.s7_9', 0.3, {opacity:1, y: -50})
    .to('.s7_6', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s7_7', 1.5, {y: -30, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s7_8', 1.3, {y: -30, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s7_9', 1.1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm2')
    
    scrollMotion(tl, '.s7_1')
}

function section8Motion(){
    var tl = new TimelineMax();
    tl.to('.s8_1', 0.3, {opacity:1})
    .to('.s8_6', 0.5, {opacity:1})
    .to('.s8_3', 0.3, {opacity:1, y: -50})
    .to('.s8_4', 0.3, {opacity:1, y: -50})
    .to('.s8_3', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s8_4', 1, {y: -40, yoyo: true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s8_5', 1, {opacity:1, repeat:-1, yoyo: true}, 'm1')
    .to('.s8_7', 0.3, {opacity:1, y: 50})

    scrollMotion(tl, '.s8_1')
}

function section9Motion(){
    var tl = new TimelineMax();
    tl.to('.s9_1', 0.3, {opacity:1})
    .to('.s9_2', 0.3, {opacity:1, x:20})
    .to('.s9_4', 0.3, {opacity:1, x:-20})
    .to('.s9_6', 0.3, {opacity:1})
    .to('.s9_7', 0.3, {opacity:1, y:10})
    .to('.s9_5', 1, {x:10, y:5, yoyo:true, repeat:-1, ease: Power0.easeIn})

    scrollMotion(tl, '.s9_1')
}

function scrollMove(ht){    
    TweenMax.to('body, html', 0.3, { scrollTop: ht });
}

var controller = new ScrollMagic.Controller({});
function scrollMotion(tl, obj) {
    scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -200 })
        .addTo(controller)
        .setTween(tl)
        .reverse(false)
}
