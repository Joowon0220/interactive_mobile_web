$(document).ready(function() {
  // 트래킹 초기 셋팅
  setPageUrl('http://m.e-savezone.co.kr', function() {
    thetaCantroll();
  });
  subLanding();
});

var mySwiper;

function thetaCantroll() {
  var container = $('.thetaContainer');
  var navArea = $('.navArea');
  var swiperWrapper = $('.swiper-wrapper');
  var addNode = '';
  var name = [
    '',
    '공동구매',
    '패션관 사은행사',
    '브랜드데이&특가상품',
    '네이버쇼핑',
    '세이브존 카카오톡채널',
  ];
  for (var i = 1; i <= window.nodeNum; i++) {
    addNode +=
      "<div class='ex-item'><img src='img/banner/banner" +
      i +
      '.png?v=12' +
      window.version +
      "' /></div>";
    navArea.append("<div class='nav nav" + i + "'></div>");
    if (i === 1) {
      swiperWrapper.append(
        "<div class='swiper-slide'><div class='link' data-num='" +
        i +
        "'></div></div>"
      );
    } else {
      swiperWrapper.append(
        "<div class='swiper-slide'><div class='link click-f'  data-name='" +
        name[i - 1] +
        "' data-num='" +
        i +
        "'></div></div>"
      );
    }

    $('.nav' + i).css('left', (466 / window.nodeNum) * (i - 1));
  }
  container.append(addNode);

  //투명 스와이프 만듬
  mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  mySwiper.on('slideChangeTransitionEnd', function() {
    var index = mySwiper.realIndex;
    $('.thetaContainer').theta_carousel('moveTo', index);
  });

  $('.nav').css('width', 466 / window.nodeNum - 5);
  $('.nav1').addClass('on');

  navArea.delay(500).animate({
      opacity: 1,
    },
    500
  );

  container.delay(500).animate({
      opacity: 1,
    },
    500
  );

  container.theta_carousel({
    distance: 280,
    sensitivity: 0.7,
    numberOfElementsToDisplayLeft: 0,
    designedForWidth: 540,
    designedForHeight: 1000,
    fallback: 'never',
    scaleZ: 1.0,
    path: {
      settings: {
        shiftY: 0,
        shiftX: -20,
        rotationAngleZY: -3,
        rotationAngleZX: -10,
        endless: true, //루프on/off
      },
      type: 'line',
    },
    perspective: 2000,
    mousewheelEnabled: false,
    gesturesEnabled: false,
  });

  //세타 배너 이미지가 바뀜이 끝났을때
  container.on('motionEnd', motionEnd);

  function motionEnd(e, data) {
    var idx = data.index;
    $('.nav').removeClass('on');
    $('.nav' + (idx + 1)).addClass('on');
  }

  //하단 버튼 영역 생성하기
  bottomArea();

  //상단 네비 클릭시
  $('.nav').on('click', function() {
    var idx = $(this).index();
    $('.nav').removeClass('on');
    $('.nav' + (idx + 1)).addClass('on');

    container.theta_carousel('moveTo', idx);
    mySwiper.slideTo(idx + 1);
  });

  //배너 바로가기 클릭시
  $('.link').on('click', subLanding);
}

//하단 버튼 영역
function bottomArea() {
  var name = ['쇼핑핫뉴스', '사은이벤트', '패션관', '식품관', '가치사자'];
  for (var i = 1; i <= window.bottomNum; i++) {
    $('.btnArea').append(
      "<div class='btn btn" +
      i +
      " click-f' data-name=" +
      name[i - 1] +
      '></div>'
    );
    $('.btn' + i).css('width', 480 / window.bottomNum);
    $('.btn' + i).css('left', (480 / window.bottomNum) * (i - 1));
  }

  //하단 버튼 클릭시
  $('.btn').on('click', subLanding);
}

//상세 랜딩 및 클릭 카운팅 제어
function subLanding() {
  $(".popKakao").on('click', popupLanding);
  $(".popInsta").on('click', popupLanding);
  $(".popClose").on('click', popClose);
  $('.floatingBtn').on('click', floatingBtn);

  var idx = 0;
  // 네이버 쇼핑 주소
  var shopURL = ""
    // 카카오톡 주소
  var kakaoURL = "";

  // 팝업 카카오톡 주소
  var popupKakao = "";
  // 팝업 인스타그램 주소
  var popupInsta = "";

  if (url == "hwajung") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011002";
    kakaoURL = "http://pf.kakao.com/_igJPl";
    popupKakao = "https://bit.ly/szhjka01";
    popupInsta = "https://www.instagram.com/savezone_hj/";
  } else if (url == "ulsan") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011006";
    kakaoURL = "http://pf.kakao.com/_yhrPl";
    popupKakao = "http://bit.ly/uska02";
    popupInsta = "https://www.instagram.com/savezone_us/";
  } else if (url == "nowon") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011001";
    kakaoURL = "http://pf.kakao.com/_QIrPl";
    popupKakao = "http://bit.ly/sznwka";
    popupInsta = "https://www.instagram.com/savezone_nw/";
  } else if (url == "seongnam") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011003";
    kakaoURL = "http://pf.kakao.com/_TKrPl";
    popupKakao = "http://bit.ly/szsnka04";
    popupInsta = "https://www.instagram.com/savezone_sn/";
  } else if (url == "daejeon") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011004";
    kakaoURL = "http://pf.kakao.com/_xfirPl";
    popupKakao = "https://bit.ly/szdjka06";
    popupInsta = "https://www.instagram.com/savezone_dj/";
  } else if (url == "sangdong") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011007";
    kakaoURL = "http://pf.kakao.com/_xmxarPl";
    popupKakao = "https://bit.ly/szbc08ka";
    popupInsta = "https://www.instagram.com/savezone_bc/";
  } else if (url == "jeonju") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011005";
    kakaoURL = "http://pf.kakao.com/_xdarPl";
    popupKakao = "http://bit.ly/szjjka09";
    popupInsta = "https://www.instagram.com/savezone_jj/";
  } else if (url == "gwangmyeong") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011009";
    kakaoURL = "http://pf.kakao.com/_txnrPl";
    popupKakao = "http://bit.ly/szkmka05";
    popupInsta = "https://www.instagram.com/savezone_km/";
  } else if (url == "haeundae") {
    shopURL = "https://shopping.naver.com/outlet/branch/10011008";
    kakaoURL = "http://pf.kakao.com/_dBanl";
    popupKakao = "https://bit.ly/szhd07";
    popupInsta = "https://www.instagram.com/savezone_hd/";
  }

  //팝업 랜딩 클릭
  function popupLanding() {
    var popupIdx = $(this).index();
    switch (popupIdx) {
      case 0:
        window.open(popupKakao, '_blank');
        break;
      case 1:
        window.open(popupInsta, '_blank');
        break;
      default:
        break;
    }
  }

  function popClose() {
    $('.popWrap').css('display', 'none');
  }

  function floatingBtn() {
    $('.popWrap').css('display', 'block');
  }

  if ($(this).hasClass('link')) {
    var idx = mySwiper.realIndex;
    switch (idx) {
      case 0:
        // window.open('../sub/' + page.getHashUrl() + '#sub1', '_self');
        break;
      case 1:
        window.open("https://gachishop.com/", '_blank');
        break;
      case 2:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub3', '_self');
        break;
      case 3:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub3', '_self');
        setCookie('jj_scrollHt', 2, 1);
        break;
      case 4:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub3', '_self');
        setCookie('jj_scrollHt', 3, 1);
        break;
      case 5:
        window.open(shopURL, '_blank');
        break;
      case 6:
        window.open(kakaoURL, '_blank');
        break;
      default:
        break;
    }
  }
  if ($(this).hasClass('btn')) {
    var idx = $(this).index();
    switch (idx) {
      case 0:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub1', '_self');
        break;
      case 1:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub3', '_self');
        break;
      case 2:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub4', '_self');
        break;
      case 3:
        window.open('../sub/index.html' + page.getHashUrl() + '#sub5', '_self');
        break;
      case 4:
        window.open("https://gachishop.com/", '_blank');
        break;
      case 5:
        window.open(kakaoURL, '_blank');
        break;
      default:
        break;
    }
  }
}