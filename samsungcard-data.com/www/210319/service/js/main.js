var TLMAX = {
    Motion1: new TimelineMax(),
    Motion2: new TimelineMax(),
    Motion3: new TimelineMax(),
    Motion4: new TimelineMax(),
    Motion5: new TimelineMax(),
    Motion6: new TimelineMax()
};

var phoneswiper = new Swiper(".swiper-container",{
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init: slideEndEvent,
      slideChangeTransitionStart: slideStartEvent,
      slideChangeTransitionEnd: slideEndEvent
    }
});

function slideStartEvent() {
    motionReset();// 모션 초기화
    var idx = this.realIndex;
    document.querySelector(".swiper_num").src="img/num/0"+(idx+1)+".png?v=2";
}
  
function slideEndEvent() {
    //모션 실행
    var idx = this.realIndex;
    switch (idx) {
        case 0:
            SwiperMotion1(TLMAX.Motion1).play(0, false);
            // typeMotion(TLMAX.Motion5).play(0, false);
            break;
        case 1:
            SwiperMotion2(TLMAX.Motion2).play(0, false);
            // typeMotion2(TLMAX.Motion6).play(0, false);
            break;
        case 2:
            SwiperMotion3(TLMAX.Motion3).play(0, false);
            // typeMotion(TLMAX.Motion5).play(0, false);
            break;
        case 3:
            SwiperMotion4(TLMAX.Motion4).play(0, false);
            // typeMotion(TLMAX.Motion5).play(0, false);
            break;
    }
    clickEvent(idx);
}

function clickEvent(idx){
    document.querySelector('.phone2').addEventListener('click', function(){
        location.href='sub/'+(idx+1)+'/index.html';
    });
}