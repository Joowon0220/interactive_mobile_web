function Motion(){
    section1Motion();
    section3Motion();
    section4Motion();
    section5Motion();
    section6Motion();
    section7Motion();
}

function section1Motion(){
    var tl = new TimelineMax();
    tl.add('m1')
    .fromTo('.s1_1', 1.1, { rotation: -5, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: 5, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    .fromTo('.s1_2', 1, { rotation: 5, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: -5, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    .fromTo('.s1_3', 1.3, { rotation: 5, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: -5, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    .fromTo('.s1_4', 1, { rotation: -5, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: 5, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    .fromTo('.s1_5', 1.2, { rotation: 5, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: -5, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    .fromTo('.s1_7', 1.5, { rotation: 2, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: -2, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    .fromTo('.s1_8', 1.2, { rotation: 5, yoyo: true, repeat: -1, ease: Linear.easeNone }, 
    { rotation: -5, yoyo: true, repeat: -1, ease: Linear.easeNone}, 'm1')
    
}

function section3Motion(){
    var tl = new TimelineMax();
    tl.to('.s3_1', 0.5, {clip:'rect(0px 40px 193px 0px)'})
    .to('.s3_2', 0.5, {clip:'rect(0px 40px 193px 0px)'})
    .to('.s3_3', 0.5, {clip:'rect(0px 40px 193px 0px)'})
    .to('.s3_4', 0.5, {clip:'rect(0px 40px 193px 0px)'})
    .to('.s3_5', 0.5, {clip:'rect(0px 40px 193px 0px)'})
    .to('.s3_6', 0.5, {clip:'rect(0px 40px 193px 0px)'})
    .to('.s3_7', 0.5, {opacity: 1})
    .to('.s3_8', 0.5, {opacity: 1});
    scrollMotion(tl, '.section3_1');
    
    var tl2 = new TimelineMax();
    tl2.to('.s3_11', 0.5, {opacity: 1})
    .to('.s3_9', 0.5, {opacity: 1})
    .to('.s3_10', 0.5, {opacity: 1});
    scrollMotion(tl2, '.section3_2');
}

function section4Motion(){
    var tl = new TimelineMax();
    tl.to('.s4_tit', 0.5, {opacity:1})
    .to('.s4_1', 0.3, {opacity:1})
    .to('.s4_2', 0.3, {opacity:1})
    .staggerTo('.s4_2_sub', 0.3, {opacity:1}, 0.2);
    scrollMotion(tl, '.section4_1');
    
    var tl2 = new TimelineMax();
    tl2.to('.s4_tit3', 0.5, {opacity:1})
    .to('.s4_21', 0.7, {opacity:1})
    .to('.s4_22', 0.7, {opacity:1})
    .to('.s4_23', 0.7, {opacity:1})
    .to('.s4_24', 0.7, {opacity:1})
    .to('.s4_tit4', 0.5, {opacity:1})
    .to('.s4_12', 0.7, {clip:'rect(0px 284px 63px 0px)'})
    .to('.s4_14', 0.7, {clip:'rect(0px 284px 79px 0px)'})
    .to('.s4_16', 0.7, {clip:'rect(0px 284px 162px 0px)'})
    .to('.s4_18', 0.7, {clip:'rect(0px 284px 179px 0px)'});
    scrollMotion(tl2, '.section4_3');
}

function section5Motion(){
    var tl = new TimelineMax();
    tl.to('.s5_1_graph', 0.7, {clip: 'rect(0px 315px 144px 0px)', delay:0.1})
    .to('.s5_1_1', 0.5, {clip: 'rect(0px 300px 146px 0px)', ease: Linear.easeNone})
    .to('.s5_1_2', 0.5, {clip: 'rect(0px 305px 106px 0px)', ease: Linear.easeNone})
    .to('.s5_1_3', 0.5, {clip: 'rect(0px 307px 102px 0px)', ease: Linear.easeNone})
    scrollMotion(tl, '.section5_1');

    var tl2 = new TimelineMax();
    tl2.to('.s5_2_graph', 0.7, {clip: 'rect(0 315px 133px 0px)', delay:0.1})
    .to('.s5_2_1', 0.5, {clip: 'rect(0px 304px 100px 0px)', ease: Linear.easeNone})
    .to('.s5_2_2', 0.5, {clip: 'rect(0px 305px 106px 0px)', ease: Linear.easeNone})
    .to('.s5_2_3', 0.5, {clip: 'rect(0px 300px 146px 0px)', ease: Linear.easeNone})
    scrollMotion(tl2, '.section5_2');
}

function section6Motion(){
    var tl = new TimelineMax();
    tl.to('.s6_1', 0.5, {opacity:1})
    .to('.s6_2', 0.5, {opacity:1})
    .to('.s6_3', 0.5, {opacity:1})
    scrollMotion(tl, '.section6');
}

function section7Motion(){
    var tl = new TimelineMax();
    tl.to('.s7_1', 0.5, {opacity:1})
    .to('.s7_3', 0.5, {clip: 'rect(0px 148px 30px 0px)'})
    .to('.s7_4', 0.5, {clip: 'rect(0px 109px 30px 0px)'})
    .to('.s7_5', 0.5, {clip: 'rect(0px 119px 30px 0px)'})
    .to('.s7_6', 0.5, {clip: 'rect(0px 113px 30px 0px)'})
    .to('.s7_8', 0.5, {opacity:1})
    scrollMotion(tl, '.section7');
}

var controller = new ScrollMagic.Controller({});
function scrollMotion(tl, obj) {
    scene = new ScrollMagic.Scene({ triggerElement: obj, offset: 0 })
        .addTo(controller)
        .setTween(tl)
        .reverse(false)
}
