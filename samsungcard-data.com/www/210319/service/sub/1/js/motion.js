function Motion(){
    section1Motion();
    section3Motion();
    section4Motion();
    section5Motion();
}

function section1Motion(){
    var tl = new TimelineMax();
    tl.to('.s1_light', 0.3, {opacity:1, transform: 'scale(1)'})
    .add('m1')
    .to('.s1_line1', 0.3, {opacity:1, transform: 'scale(1)'}, 'm1')
    .to('.s1_line2', 0.3, {opacity:1, transform: 'scale(1)'}, 'm1')
    .add('m2')
    .to('.s1_1', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_1', 0.5, {x:-70, y:-138},'m2')
    .to('.s1_2', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_2', 0.5, {x:-170, y:-90},'m2')
    .to('.s1_3', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_3', 0.5, {x:-160, y:-20},'m2')
    .to('.s1_4', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_4', 0.5, {x:-180, y:10},'m2')
    .to('.s1_5', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_5', 0.5, {x:-140, y:87},'m2')
    .to('.s1_6', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_6', 0.5, {x:150, y:30},'m2')
    .to('.s1_7', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_7', 0.5, {x:150, y:-87},'m2')
    .to('.s1_8', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_8', 0.5, {x:70, y:-160},'m2')
    .to('.s1_9', 0.5, {transform: 'scale(1)'},'m2')
    .to('.s1_9', 0.5, {y:-150},'m2')
    .add('m3')
    .to('.s1_1', 1.3, {y: -158, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_2', 1.3, {y: -70, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_3', 1.4, {y: 0, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_4', 1.3, {y: 20, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_5', 1, {y: 100, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_6', 1.5, {y: 0, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_7', 1.6, {y: -117, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_8', 1.5, {y: -140, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_9', 1.3, {y: -140, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
}

function section3Motion(){
    var tl = new TimelineMax();
    tl.staggerTo('.early_sub', 0.3, {opacity:1}, 0.2)
    scrollMotion(tl, '.early')
    
    var tl2 = new TimelineMax();
    tl2.staggerTo('.premium_sub', 0.3, {opacity:1}, 0.2)
    scrollMotion(tl2, '.premium')
}

function section4Motion(){
    var tl = new TimelineMax();
    tl.staggerTo('.customer_sub', 0.3, {opacity:1}, 0.2)
    scrollMotion(tl, '.customer')
    
    var tl2 = new TimelineMax();
    tl2.staggerTo('.shop_sub', 0.3, {opacity:1}, 0.2)
    scrollMotion(tl2, '.shop')
}

function section5Motion(){
    var tl = new TimelineMax();
    tl.to('.s5_1', 0.3, {opacity:1})
    .to('.s5_2', 0.3, {opacity:1})
    .to('.s5_6', 0.3, {opacity:1})
    .to('.s5_3', 0.3, {opacity:1, yoyo:true, repeat:2, ease: Power0.easeIn})
    .to('.s5_4', 0.3, {opacity:1, yoyo:true, repeat:2, ease: Power0.easeIn})
    .to('.s5_5', 0.3, {opacity:1})
    .to('.s5_7', 0.3, {opacity:1})

    scrollMotion(tl, '.section5')
}

var controller = new ScrollMagic.Controller({});
function scrollMotion(tl, obj) {
    scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -200 })
        .addTo(controller)
        .setTween(tl)
        .reverse(false)
}
