function Motion(){
    section1Motion();
    section3Motion();
    section4Motion();
    section5Motion();
}

function section1Motion(){
    var tl = new TimelineMax();
    tl.add('m1')
    .to('.s1_0', 0.5, {opacity:1})
    .to('.s1_3', 1.1, {y: -20, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s1_4', 1, {y: -30, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm1')
    .staggerTo('.graph img', 0.5, {clip: 'rect(0px 30px 107px 0px)'}, 0.3, 'm1')
}

function section3Motion(){
    var tl = new TimelineMax();
    tl.to('.s3_2', 0.5, {opacity:1}, 'm1')
    .to('.s3_3', 0.5, {opacity:1}, 'm2')
    .to('.s3_4', 0.5, {clip:'rect(0px 321px 92px 0px)'}, 'm1')
    .to('.s3_5', 0.5, {clip:'rect(0px 316px 92px 0px)'}, 'm2');
    scrollMotion(tl, '.section3_1')
    
    var tl2 = new TimelineMax();
    tl2.to('.s3_6', 0.5, {opacity:1})
    .to('.s3_8', 0.5, {clip:'rect(0px 298px 35px 0px)'})
    .to('.s3_9', 0.5, {clip:'rect(0px 235px 35px 0px)'})
    .to('.s3_10', 0.5, {clip:'rect(0px 160px 35px 0px)'})
    .to('.s3_11', 0.5, {clip:'rect(0px 93px 35px 0px)'})
    scrollMotion(tl2, '.section3_2')
    
    var tl3 = new TimelineMax();
    tl3.to('.s3_12', 0.5, {opacity:1})
    .to('.s3_14', 0.5, {clip:'rect(0px 92px 35px 0px)'})
    .to('.s3_15', 0.5, {clip:'rect(0px 200px 35px 0px)'})
    .to('.s3_16', 0.5, {clip:'rect(0px 272px 35px 0px)'})
    .to('.s3_17', 0.5, {clip:'rect(0px 93px 35px 0px)'})
    scrollMotion(tl3, '.section3_3')
}

function section4Motion(){
    var tl = new TimelineMax();
    tl.staggerTo('.s4_graph', 0.5, {opacity:1}, 0.3)
    scrollMotion(tl, '.section4_1')

    var tl2 = new TimelineMax();
    tl2.to('.s4_9', 0.5, {opacity:1})
    .to('.s4_10', 0.5, {opacity:1})
    scrollMotion(tl2, '.section4_2')
}

function section5Motion(){
    var tl = new TimelineMax();
    tl.to('.s5_1', 0.5, {opacity:1})
    .to('.s5_3', 0.5, {clip:'rect(0px 342px 153px 0px)'})
    .to('.s5_4', 0.5, {clip:'rect(0px 344px 57px 0px)'})
    .to('.s5_5', 0.5, {opacity:1})
    scrollMotion(tl, '.section5_1')

    var tl2 = new TimelineMax();
    tl2.staggerTo('.section5_2 div', 0.5, {opacity:1}, 0.3)
    .staggerTo('.m1', 0.3, {opacity:1}, 0.3)
    .to('.s5_graph2', 0.5, {clip:'rect(0px 60px 26px 0px)'})
    .staggerTo('.m2', 0.3, {opacity:1}, 0.3)
    .to('.s5_graph3', 0.5, {clip:'rect(0px 152px 26px 0px)'})
    scrollMotion(tl2, '.section5_2')
    
    var tl3 = new TimelineMax();
    tl3.to('.section6_1 .bottom_txt', 0.5, {opacity:1})
    .to('.s6_1_3', 0.5, {opacity:1, x:10})
    .to('.s6_1_4', 0.5, {opacity:1, x:-10})
    .to('.s6_1_5', 0.5, {opacity:1})
    .to('.s6_1_7', 0.5, {opacity:1})
    .to('.s6_1_6', 0.5, {opacity:1, x:-20, y:20})
    scrollMotion(tl3, '.section6_1')

    var tl4 = new TimelineMax();
    tl4.to('.section6_2 .bottom_txt', 0.5, {opacity:1})
    .to('.s6_2_2', 0.5, {opacity:1})
    .to('.s6_2_7', 0.5, {opacity:1})
    .to('.s6_2_6', 0.5, {opacity:1})
    .to('.s6_2_3', 0.3, {opacity:1})
    .to('.s6_2_4', 0.3, {opacity:1})
    .to('.s6_2_5', 0.3, {opacity:1})
    .to('.s6_2_3', 13, {rotation: 360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s6_2_4', 13, {rotation: 360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s6_2_5', 10, {rotation: -360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s6_2_8', 0.5, {opacity:1}, 'm1')
    .to('.s6_2_9', 0.5, {opacity:1}, 'm1')
    .to('.s6_2_10', 0.5, {opacity:1}, 'm1')
    .to('.s6_2_11', 0.5, {clip:'rect(0px 21px 22px 0px)'})
    .to('.s6_2_12', 0.5, {clip:'rect(0px 21px 22px 0px)'})
    .to('.s6_2_13', 0.5, {clip:'rect(0px 21px 22px 0px)'})
    scrollMotion(tl4, '.section6_2')

    var tl5 = new TimelineMax();
    tl5.to('.section6_3 .bottom_txt', 0.5, {opacity:1})
    .to('.s6_3_2', 0.5, {opacity:1}, 'm1')
    .to('.s6_3_3', 0.5, {opacity:1}, 'm1')
    .to('.s6_3_2', 1, {rotation: 5, repeat:-1, yoyo:true, ease: Power0.easeIn})
    .to('.s6_3_4', 0.3, {opacity:1})
    .to('.s6_3_5', 0.3, {opacity:1})
    .to('.s6_3_6', 0.3, {opacity:1})
    .to('.s6_3_7', 0.5, {opacity:1})
    .to('.s6_3_7', 1.1, {y: -10, yoyo:true, repeat:-1, ease: Power0.easeIn})
    scrollMotion(tl5, '.section6_3')
}

var controller = new ScrollMagic.Controller({});
function scrollMotion(tl, obj) {
    scene = new ScrollMagic.Scene({ triggerElement: obj, offset: 0 })
        .addTo(controller)
        .setTween(tl)
        .reverse(false)
}
