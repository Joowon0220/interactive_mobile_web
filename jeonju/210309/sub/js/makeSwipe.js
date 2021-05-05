var setTime;
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  hashNavigation: {
    replaceState: true,
    watchState: true,
  },
  touchRatio: 0.9,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

var mySwipersub3Nav = new Swiper(".swiper-container-sub3Nav", {
  width: 270,
});

var mySwipersub4Nav = new Swiper(".swiper-container-sub4Nav", {
  width: 100,
});

var mySwipersub5Nav = new Swiper(".swiper-container-sub5Nav", {
  width: 100,
});

mySwiper.on("slideChange", slideMove);
mySwiper.on("slideChangeTransitionEnd", slideMoveEnd);
mySwiper.on("slideChangeTransitionStart", slideChangeStart);

function slideChangeStart() {
  var index = mySwiper.realIndex + 1,
    hashStr = document
      .querySelector(".swiper-container  .swiper-slide-active")
      .getAttribute("data-hash"),
    hashNumber = hashStr.substr(3, 1);

  /*사은이벤트 있을 때 사용*/
  // if (hashNumber === '3') 
  //   subNavMove(
  //     index, 
  //     '.reward', 
  //     $(document.querySelector("[data-hash='sub3']")).index()
  //     );
  if (hashNumber === "4")
    subNavMove(
      index,
      ".fashion",
      $(document.querySelector("[data-hash='sub4']")).index()
    );
  if (hashNumber === "5")
    subNavMove(
      index,
      ".food",
      $(document.querySelector("[data-hash='sub5']")).index()
    );

  changeNav();
  closeMenu();
  toggleSub2Btn();
}

function toggleSub2Btn() {
  var sub2Idx = mySwiper.realIndex;
  var sub2Btn = document.querySelector('#sub2_btn')
  if(sub2Idx !== 1) {
    sub2Btn.style.display = "none";
  } else {
    sub2Btn.style.display = "block";
  }
}

function subNavMove(index, ele, startNum) {
  var naviImg = document.querySelectorAll(ele);
  for (var i = 0, len = naviImg.length; i < len; i++) {
    naviImg[i].classList.remove("on");
  }
  naviImg[index - startNum].classList.add("on");
  if (ele == ".fashion") {
    var swiper_position_X = [-10, -225, -350, -500, ]; // 스와이프 시 당겨와지는 거리

    mySwipersub4Nav.slideTo(index - startNum);
    swiperPositionSet(
      ".swiper-container-sub4Nav .swiper-wrapper",
      swiper_position_X,
      index - startNum
    );
  } else {
    var swiper_position_X = [0, -145, -295, -540, -635]; // 스와이프 시 당겨와지는 거리
    mySwipersub5Nav.slideTo(index - startNum);

    swiperPositionSet(
      ".swiper-container-sub5Nav .swiper-wrapper",
      swiper_position_X,
      index - startNum
    );
  }
}
function swiperPositionSet(el, Xposition, index) {
  $(el).attr(
    "style",
    "transform:translate3d(" +
      Xposition[index] +
      "px ,0px,0px); transition-duration: 300ms;"
  );
}

function NavBindClick() {
  subNavOnClick(
    ".reward",
    $(document.querySelector("[data-hash='sub3']")).index()
  );
  subNavOnClick(
    ".fashion",
    $(document.querySelector("[data-hash='sub4']")).index()
  );
  subNavOnClick(
    ".food",
    $(document.querySelector("[data-hash='sub5']")).index()
  );
}

function subNavOnClick(el, startNum) {
  var els = document.querySelectorAll(el);
  [].forEach.call(els, function (navs, index) {
    navs.addEventListener("click", function () {
      mySwiper.slideTo(index + startNum);
    });
  });
}

function slideMove() {
  slideMoveStart();
  closeMenu();
}

function slideMoveEnd() {
  activeHeightSet();
  scrollUp();
  analytics();
}

function activeHeightSet() {
  var activeHt = $(".swiper-slide-active > img").height();
  eventActiveHt(activeHt);
}

function eventActiveHt(activeHt) {
  $(".swiper-container").stop(true).animate({height: activeHt}, 200);
}

function scrollUp() {
  $("body, html").stop(true).animate({scrollTop: "0"}, 200);
}

function analytics() {
    clearTimeout(setTime);
    setTime = setTimeout(function() {
        var index = mySwiper.realIndex + 1;
        var title = $('.swiper-container > .swiper-wrapper > .swiper-slide-active').attr(
            'data-name'
        );

        imFlow.swiperEvent(title);

        gtag('event', 'swiper', {
            event_category: 'sub',
            event_label: $('.swiper-container > .swiper-wrapper > .swiper-slide-active').attr(
                'data-hash'
            )
        });
        wcs.event(
            'sub',
            $('.swiper-container > .swiper-wrapper > .swiper-slide-active').attr('data-hash')
        );
    }, 1000);

    var preidx = mySwiper.previousIndex;
    var idx = mySwiper.realIndex + 1;
    page.stayTimePage(preidx, function() {
        page.clickPage(idx);
    });
}
