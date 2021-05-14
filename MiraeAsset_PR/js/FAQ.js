$(document).ready(function () {
  $(".Q").on("click", answer);
})




function answer() {

  $(this).toggleClass('on');
  if ($(this).next().hasClass('ontxt')) {
    $(this).next().css('display', 'none');
    $(this).children('.anchor').removeClass('on');
    $('.A').removeClass('ontxt');
    console.log('a :');
  } else {
    $(this).next().css('display', 'block');
    $(this).children('.anchor').addClass('on');
    $(this).next().addClass('ontxt');
    console.log('b');
  }

}


