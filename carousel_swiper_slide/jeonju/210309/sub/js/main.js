var imgVersion = 0;
var x;

$(window).on("load", function() {

  //트래킹 초기 셋팅
  setPageUrl('http://m.e-savezone.co.kr', function() {});

  // 모든 컨텐츠가 로드되면, 스와이퍼 관련 초기화 진행
  swiperInit(x);

  //사은페이지에서 카드에따라 스크롤이동
  if (getCookie("jj_scrollHt")) {
    var cookieIdx = getCookie("jj_scrollHt");
    var ht = 0;

    if (cookieIdx === "1") ht = 1332;
    if (cookieIdx === "2") ht = 1360;
    if (cookieIdx === "3") ht = 2470;

    $('body, html').stop(true).animate({ scrollTop: ht }, 200);
    resetCookie("jj_scrollHt");
  }

});

function getParameters(paramName) {
  var returnValue;
  var url = location.href;
  var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
  for (var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split('=')[0];
    if (varName.toUpperCase() == paramName.toUpperCase()) {
      returnValue = parameters[i].split('=')[1];
      return decodeURIComponent(returnValue);
    }
  }
};

function swiperInit() {

  var x = getParameters('x')

  if (x) {
    mySwiper.slideToLoop(getSwiperhashIndex('#' + x), 0);
    history.replaceState({}, null, location.pathname);
  }

  // 높이값 조절
  slideChangeStart();
  slideMoveEnd();
  NavBindClick();

}

// 스와이퍼가 해쉬값을 가지고 움직이는 형태라면, 최초 시작 페이지를 url hash 값으로 이동한다.
function getSwiperhashIndex(hashStr) {
  // 지정된 해시값이 없다면, sub1 의 해시값을 가지는 페이지로 이동
  var swiperTotal = mySwiper.slides.length;

  for (var i = 0; i < swiperTotal; i++) {
    var hashName = "#" + $(mySwiper.slides[i]).attr("data-hash");
    if (hashName == hashStr) {
      return i - 1;
    }
  }

}

function slideMoveStart() {
  changeNav();
}

// 각 페이지 당 sub_nav 활성화 함수
function changeNav() {
  var aidx = mySwiper.realIndex,
    hashStr = document
    .querySelector('.swiper-container  .swiper-slide-active')
    .getAttribute('data-hash'),
    hashNumber = hashStr.substr(3, 1);

  $('#title1>img').attr('src', 'img/common/top/down_title' + hashNumber + '.png?v=2');
  $('#title2>img').attr('src', 'img/common/top/up_title' + hashNumber + '.png?v=2');

  $('.menuBtn').show();
  $('#menuBtn' + hashNumber).hide();

  if (hashNumber === '1' || hashNumber === '2') {
    $("#sub_nav3").hide();
    $("#sub_nav4").hide();
    $("#sub_nav5").hide();

    $('.swiper-container').css({ top: 120 });
    $('.topMenu').css({
      borderBottom: '1px solid #e6e6e6'
    });

  } else if (hashNumber === '3') {
    $("#sub_nav3").show();
    $("#sub_nav4").hide();
    $("#sub_nav5").hide();

    /*사은이벤트 있을 때 사용*/
    // $('.swiper-container').css({ top: 160 });
    // $('.topMenu').css({
    //     borderBottom: 'none'
    // });

  } else if (hashNumber === '4') {
    $("#sub_nav3").hide();
    $("#sub_nav4").show();
    $("#sub_nav5").hide();

    $('.swiper-container').css({ top: 160 });
    $('.topMenu').css({
      borderBottom: 'none'
    });

  } else if (hashNumber === '5') {
    $("#sub_nav3").hide();
    $("#sub_nav4").hide();
    $("#sub_nav5").show();

    $('.swiper-container').css({ top: 160 });
    $('.topMenu').css({
      borderBottom: 'none'
    });
  }
}