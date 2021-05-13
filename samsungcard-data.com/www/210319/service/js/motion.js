//스와이프 모션 초기화 이벤트
function motionReset() {
    TLMAX.Motion1.pause(0, false);
    TLMAX.Motion2.pause(0, false);
    TLMAX.Motion3.pause(0, false);
    TLMAX.Motion4.pause(0, false);
    TLMAX.Motion5.pause(0, false);
    TweenMax.killTweensOf('.alphabet img');
    TweenMax.set('.alphabet img', { opacity: 0})
}

function SwiperMotion1(tl){
    tl.staggerTo('.alphabet1', 0 ,{opacity:1}, 0.15, 'm1')
    .to('.cursor1', 0.05, {opacity:1, repeatDelay:0.5, yoyo:true, repeat:-1})
    .to('.tit1_2',0.5,{opacity:1})
    .to('.tit1_2',0.5,{opacity:1})
    .to('.more_btn1',0.3,{opacity:1})
    .to('.img1_1',0.3,{opacity:1})
    .staggerTo('.typing1 img', 0.01, {opacity:1, yoyo:true, repeatDelay:0.15, repeat: 1}, 0.15, 'm1');
    return tl;
}

function SwiperMotion2(tl){
    tl.staggerTo('.alphabet2', 0, {opacity:1}, 0.15, 'm1')
    .to('.cursor2', 0.05, {opacity:1, repeatDelay:0.5, yoyo:true, repeat:-1})
    .to('.tit2_2',0.5,{opacity:1})
    .to('.more_btn2',0.3,{opacity:1})
    .to('.img2_1',0.3,{opacity:1})
    .staggerTo('.typing2 img', 0.01, {opacity:1, yoyo:true, repeatDelay:0.15, repeat: 1}, 0.15, 'm1');
    return tl;
}

function SwiperMotion3(tl){
    tl.staggerTo('.alphabet3', 0, {opacity:1}, 0.15, 'm1')
    .to('.cursor3', 0.05, {opacity:1, repeatDelay:0.5, yoyo:true, repeat:-1})
    .to('.tit3_2',0.5,{opacity:1})
    .to('.more_btn3',0.3,{opacity:1})
    .to('.img3_1',0.3,{opacity:1})
    .staggerTo('.typing3 img', 0.01, {opacity:1, yoyo:true, repeatDelay:0.15, repeat: 1}, 0.15, 'm1');
    return tl;
}

function SwiperMotion4(tl){
    tl.staggerTo('.alphabet4', 0, {opacity:1}, 0.15, 'm1')
    .to('.cursor4', 0.05, {opacity:1, repeatDelay:0.5, yoyo:true, repeat:-1})
    .to('.tit4_2',0.5,{opacity:1})
    .to('.more_btn4',0.3,{opacity:1})
    .to('.img4_1',0.3,{opacity:1})
    .staggerTo('.typing4 img', 0.01, {opacity:1, yoyo:true, repeatDelay:0.15, repeat: 1}, 0.15, 'm1');
    return tl;
}