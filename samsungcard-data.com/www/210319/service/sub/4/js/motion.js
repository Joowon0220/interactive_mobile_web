function Motion(){
    section1Motion();
    section3Motion();
    section4Motion();
}

function section1Motion(){
    var tl = new TimelineMax();
    tl.to('.s1_4', 0.5, {opacity: 1})
    .to('.s1_5', 0.5, {opacity: 1})
    .to('.s1_2', 0.3, {opacity: 1})
    .to('.s1_1', 0.3, {opacity: 1})
    .to('.s1_3', 0.3, {opacity: 1})
    .to('.s1_2', 13, {rotation: 360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s1_1', 13, {rotation: 360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s1_3', 10, {rotation: -360, repeat:-1, ease: Power0.easeIn}, 'm1')
    .to('.s1_6', 0.5, {opacity: 1}, 'm1')
    .to('.s1_6', 1.1, {y: -10, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm2')
    .to('.s1_7', 0.5, {opacity: 1, y:-10}, 'm2')
    .to('.s1_8', 0.5, {opacity: 1, y:-10})
    .to('.s1_9', 0.5, {opacity: 1, y:-10})
    .to('.s1_7', 1.1, {y: 0, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_8', 1, {y: 0, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    .to('.s1_9', 1.3, {y: -20, yoyo:true, repeat:-1, ease: Power0.easeIn}, 'm3')
    scrollMotion(tl, '.section1')
}

function section3Motion(){
    var tl = new TimelineMax();
    tl.to('.s3_1', 0.5, {clip:'rect(0px 135px 77px 0px)'})
    .to('.s3_2', 0.5, {clip:'rect(0px 118px 77px 0px)'})
    .to('.s3_3', 0.5, {opacity: 1})
    scrollMotion(tl, '.section3_1', -200)

    var tl2 = new TimelineMax();
    tl2.to('.s3_4', 0.5, {clip:'rect(0px 134px 77px 0px)'})
    .to('.s3_5', 0.5, {clip:'rect(0px 119px 77px 0px)'})
    .to('.s3_6', 0.5, {opacity: 1})
    scrollMotion(tl2, '.section3_2', -200)
}

function section4Motion(){
    var tl = new TimelineMax();
    tl.to('.s4_1', 0.5, {opacity: 1})
    .to('.s4_2', 0.5, {opacity: 1})
    .to('.s4_3', 0.5, {transform: 'scale(1)'}, 'm1')
    .to('.s4_3', 0.5, {x: 40,y: -50, opacity:1}, 'm1')
    scrollMotion(tl, '.section4_1')
    
    var tl2 = new TimelineMax();
    tl2.to('.s4_4', 0.5, {opacity: 1})
    .to('.s4_5', 0.3, {opacity: 1, yoyo: true, repeat: 2})
    scrollMotion(tl2, '.section4_2', -100)
    
    var tl3 = new TimelineMax();
    tl3.to('.s4_16', 0.5, {opacity: 1}, 'm1')
    .to('.s4_8', 0.5, {opacity: 1}, 'm1')
    .to('.s4_8', 1, {
        bezier: {
          values: [
			{ x: -30, y: -10 }, 
			{ x: -65, y: 0},
			{ x: -30, y: 20 }, 
			{ x: 0, y: 0 }, 
		] 
		}, ease: Power0.easeIn})
    .to('.s4_7', 0.3, {opacity: 1}) 
    scrollMotion(tl3, '.section4_3')
    
    var tl4 = new TimelineMax();
    tl4.to('.s4_9', 0.5, {opacity: 1})
    .to('.s4_10', 0.3, {opacity: 1, yoyo: true, repeat: 2})
    scrollMotion(tl4, '.section4_4', -100)
    
    var tl5 = new TimelineMax();
    tl5.to('.s4_15', 0.5, {opacity: 1})
    .to('.s4_12', 0.3, {clip:'rect(0px 28px 24px 0px)'}) 
    .to('.s4_13', 0.3, {clip:'rect(0px 28px 24px 0px)'}) 
    .to('.s4_14', 0.3, {clip:'rect(0px 28px 24px 0px)'}) 
    scrollMotion(tl5, '.section4_5', -200)
}

var controller = new ScrollMagic.Controller({});
function scrollMotion(tl, obj, ofs) {
    scene = new ScrollMagic.Scene({ triggerElement: obj, offset: ofs?ofs:0 })
        .addTo(controller)
        .setTween(tl)
        .reverse(false)
}
