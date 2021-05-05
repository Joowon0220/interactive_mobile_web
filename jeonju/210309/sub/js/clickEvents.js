$(document).ready(function () {
  $("#home").on("click", goMain);
  $("#title1").on("click", openMenu);
  $("#title2").on("click", closeMenu);
  $(".menuBtn").on("click", menuSlide);
  $('.floatingBtn').on('click', floatingBtn);
  $(".popKakao").on('click', function(){popupLanding(popupKakao)});
  $(".popInsta").on('click', function(){popupLanding(popupInsta)});
  $(".popClose").on('click', popClose);
    
  $('#sub2_btn').on('click', function () {
      window.open("https://gachishop.com/", '_blank');
  })
  
  // 팝업 카카오톡 주소
  var popupKakao = "";
  // 팝업 인스타그램 주소
  var popupInsta = "";

	if (url == "hwajung") {
    popupKakao = "https://bit.ly/szhjka01";
    popupInsta = "https://www.instagram.com/savezone_hj/";
	} else if (url == "ulsan") {
    popupKakao = "http://bit.ly/uska02";
    popupInsta = "https://www.instagram.com/savezone_us/";
	} else if (url == "nowon") {
    popupKakao = "http://bit.ly/sznwka";
    popupInsta = "https://www.instagram.com/savezone_nw/";
	} else if (url == "seongnam") {
    popupKakao = "http://bit.ly/szsnka04";
    popupInsta = "https://www.instagram.com/savezone_sn/";
	}	else if (url == "daejeon") {
    popupKakao = "https://bit.ly/szdjka06";
    popupInsta = "https://www.instagram.com/savezone_dj/";
	}	else if (url == "sangdong") {
    popupKakao = "https://bit.ly/szbc08ka";
    popupInsta = "https://www.instagram.com/savezone_bc/";
	}	else if (url == "jeonju") {
    popupKakao = "http://bit.ly/szjjka09";
    popupInsta = "https://www.instagram.com/savezone_jj/";
	}	else if (url == "gwangmyeong") {
    popupKakao = "http://bit.ly/szkmka05";
    popupInsta = "https://www.instagram.com/savezone_km/";
	}	else if (url == "haeundae") {
    popupKakao = "https://bit.ly/szhd07";
    popupInsta = "https://www.instagram.com/savezone_hd/";
    }
});

function openMenu() {
  var hashStr = document
      .querySelector(".swiper-container  .swiper-slide-active")
      .getAttribute("data-hash"),
    hashNumber = hashStr.substr(3, 1);

  TweenMax.to("#menuBg", 0.3, { height: 320 });
  $("#title2").show();
}
function closeMenu() {
  TweenMax.to("#menuBg", 0.3, { height: 0 });
  $("#title2").hide();
}

function menuSlide() {
  var i = $(this).attr("data-index");

  location.href = "#sub" + i;
}

function couponConfirm() {
  activeHt = $(".swiper-slide-active > img").height() + 800;

  $(".swiper-container").stop(true).animate(
    {
      height: activeHt,
    },
    200
  );
}

function goMain() {
  /* 로고를 클릭했을때 */
  window.open("../main/index.html" + page.getHashUrl(), "_self");
}

// 패션 서브네비 클릭이벤트
function fashionNav() {
  //각 네비 첫 시작 페이지 넘버만큼 플러스시킴
  var idx = $(this).index() + 1;
  mySwiper.slideTo(idx);
}

// 식품관 서브네비 클릭이벤트
function foodNav() {
  var idx = $(this).index() + 5;
  $(this).css({
    trasform: "translate3d(0px, 0px, 0px);",
  });
  mySwiper.slideTo(idx);
}

/*팝업 관련 클릭이벤트*/
function floatingBtn() {
  $('.popWrap').css('display', 'block');
}
  
function popClose() {
    $('.popWrap').css('display', 'none');
}

function popupLanding(popupLink) {
  window.open(popupLink, '_blank');
}
