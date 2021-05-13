var isNaverBrowser;

$(document).ready(function () {
	chromeVersionEvent();
	$('.skipBtn').on('click', function () {
		go_url();
	});
});

// 크롬 버전이 60버전 이하일때 gif 실행 아니면 비디오실행
function chromeVersionEvent() {
	var userAgentChrome = navigator.userAgent.indexOf('Chrome');//네이버앱인 경우

	if (navigator.userAgent.indexOf("NAVER") > -1) isNaverBrowser = true;
	if (userAgentChrome > -1)//크롬 브라우저일 경우
	{
		var chromeVersion = parseInt(navigator.userAgent.substring(userAgentChrome, userAgentChrome + 9).split('Chrome/')[1]);
		//크롬 버전이 61보다 높으면 자동재생, 낮으면 gif 실행
		if (chromeVersion > 61) {
			autoPlayCheck();
		}
		if (chromeVersion < 61) {
			makeImageIntro();
		}
	}
	else {
		autoPlayCheck();
	}
}

/**
 * ios 뒤로가기 문제 해결용(현재 페이지가, ios 에서 뒤로가기한 페이지이면, 새로고침)
 */
window.onpageshow = function (event) {
	if (event.persisted) {
		location.href = window.location.href;
	}
};

/**
 * 메인 페이지로 이동
 
*/
var agent = navigator.userAgent.toLowerCase();
function go_url() {

	location.href = 'about/index.html';

}