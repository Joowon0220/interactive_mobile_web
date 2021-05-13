function Motion(){
    iconMotion1();
    scrollMotion(countMotion, '.section2', 100);
    opaMotion('.s6_1');
    opaMotion('.s6_2');
    opaMotion('.s6_3');
    opaMotion('.s6_4');
}

function iconMotion1(){
    var tl = new TimelineMax();
    tl.add('m1')
    // .to('.tit', 0.3, {opacity:1, y:-20})
    .staggerTo('.icon1', 0.3, {opacity:1, transform: 'scale(1)'}, 0.1, 'm1')
    .staggerTo('.icon1', 0.3, { x: 20 }, 0.1, 'm1')
    .add('m2')
    .staggerTo('.icon2', 0.5, {opacity:1, transform: 'scale(1)'}, 0.3, 'm2')
    .staggerTo('.icon2', 0.5, { y: -50 }, 0.3, 'm2')

    var tl2 = new TimelineMax();
    tl2.delay(4)
    .add('move')
    .to('.section_icon', 20, {x: -600, ease: Power0.easeIn}, 'move')
    .to('.section_icon_2', 20, {x: -600, ease: Power0.easeIn}, 'move')
    .repeat(-1)

    var tl3 = new TimelineMax();
    tl3.staggerTo('.icon3', 0.5, {opacity:1}, 0.3, 'm1')
    .staggerTo('.icon30', 0.5, {opacity:1}, 0.3, 'm1')
    .staggerTo('.icon3', 0.5, {opacity:0}, 0.2, 'm2')
    .staggerTo('.icon30', 0.5, {opacity:0}, 0.2, 'm2')
    .repeat(-1);
}

function countMotion(){
    $({ val : 0 }).animate({ val : 1100 }, {
        duration: 1000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num1").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num1").text(num);
        }
    });
    
    $({ val : 0 }).animate({ val : 270 }, {
        duration: 1000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num2").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num2").text(num);
        }
    });
    
    $({ val : 0 }).animate({ val : 18 }, {
        duration: 1000,
        step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num3").text(num);
        },
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num3").text(num);
        }
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function opaMotion(obj){
    var tl = new TimelineMax();
    tl.to(obj, 0.5, {opacity:1}, 0.3);
    scrollMotion(tl, obj, -100);
}

var controller = new ScrollMagic.Controller({});

function scrollMotion(tl, obj, ofs) {
    scene = new ScrollMagic.Scene({ triggerElement: obj, offset: ofs?ofs:-200 })
        .addTo(controller)
        .setTween(tl)
        .reverse(false)

}
