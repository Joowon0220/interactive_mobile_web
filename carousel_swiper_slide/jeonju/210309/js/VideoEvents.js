/**
 * 비디오 컨텐츠가 전부 로드되고 나면, 컨텐츠의 display 를 block 처리한다.
 */
function contentsLoaded()
{
    document.getElementById("intro").style.display = "block";
}

/**
 * 비디오가 끝나면, 실행
 */
function videoEndTime()
{
    $("#intro").fadeOut(500, "linear");
    setTimeout(go_url, 500);
}

/**
 *  gif가 실행될때 프리로더는 사라짐
 */
function contentsPlaying()
{
    if(!document.getElementById('intro_gif')) $("#loder_box").fadeOut();
}