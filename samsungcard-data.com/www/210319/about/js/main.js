$(window).on('load',function(){
    Motion();
})

var phoneswiper = new Swiper(".swiper-container",{
    slidesPerView: 'auto',
    spaceBetween: -80,
    on: {
      init: slideEndEvent,
      slideChangeTransitionEnd: slideEndEvent
    }
});
  
function slideEndEvent() {
    //모션 실행
    var idx = this.realIndex;
    switch (idx) {
        case 0:
            var tl = new TimelineMax();
            tl.staggerTo('.slide1_sub', 0.3, {opacity:1}, 0.3);
            scrollMotion(tl, '.slide1_sub', -100) 
            break;
        case 1:
            var tl = new TimelineMax();
            tl.staggerTo('.slide2_sub', 0.3, {opacity:1}, 0.3)
            break;
        case 2:
            var tl = new TimelineMax();
            tl.staggerTo('.slide3_sub', 0.3, {opacity:1}, 0.3)
            break;
    }
}

var toggleBtn = document.querySelectorAll('.toggle');
toggleBtn.forEach(function(toggle){
    toggle.addEventListener('click', toggleClick);
});

function toggleClick() {
	var idx = this.getAttribute('data-num');
	this.classList.toggle('on');

	var findClass = this.classList.contains('on');
	findClass?(
		document.querySelector('.arrow' + idx).style.transform='rotate(180deg)',
		document.querySelector('.tcontent' + idx).style.height='0px',
        idx==="3"&&(this.style.background='url(img/03/line.png?v=1) left bottom no-repeat')
	):(
		document.querySelector('.arrow' + idx).style.transform='rotate(0deg)',
		document.querySelector('.tcontent' + idx).style.height=(idx==="3"?'80px':'124px'),
        idx==="3"&&(this.style.background='none')
	)
}