/**
 * 비디오가 자동 실행되고 있는지 체크
 */
function autoPlayCheck() {
    var promise = document.querySelector('video').play();
    if (promise !== undefined) {
        promise.then(function () {
        }).catch(function (error) {
            console.log(error);
            makeImageIntro();
        });
    }
}

/**
 * 비디오가 자동 실행이 안되는 경우, intro 를 이미지 형식의 컨텐츠로 대체한다
 */


function makeImageIntro() {
    //window.open('./main' + page.getHashUrl(), '_self');

    document.getElementById('introMovie').remove();
    var intro = document.createElement('img');
    intro.src = "img/intro.jpg?v=" + Date.now();
    intro.id = 'intro_jpg';
    $("#loder_box").show();
    if (isNaverBrowser) document.getElementById('intro').appendChild(intro);
    intro.onload = function () {
        if (!isNaverBrowser) document.getElementById('intro').appendChild(intro)
        $("#loder_box").fadeOut();
        jpgLoaded();
    }

}

/**
 * jpg 형식의 인트로 이미지가 로드 완료된 경우
 */


function jpgLoaded() {
    console.log("jpg");
    contentsLoaded();
    contentsPlaying();
    setTimeout(function () {
        $("#intro").fadeOut(500, "linear");
        //$("#intro").remove();
    }, 2500);
    setTimeout(go_url, 3000);
}
