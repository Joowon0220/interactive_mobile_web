$(document).ready(function () {
  $(".show").on("click", arrow);
  $(".show2").on("click", arrow2);
})


function arrow() {
  $(".show").toggleClass('on');
  if ($('.bottom').hasClass('ontxt')) {
    $('.bottom').css('display', 'none');
    $('.bottom').removeClass('ontxt');
    console.log('a');
  } else {
    $('.bottom').css('display', 'block');
    $('.bottom').addClass('ontxt');
    console.log('b');
  }
}

function arrow2() {
  $(".show2").toggleClass('on');
  if ($('.bottom_b').hasClass('ontxt')) {
    $('.bottom_b').css('display', 'none');
    $('.bottom_b').removeClass('ontxt');
    console.log('a');
  } else {
    $('.bottom_b').css('display', 'block');
    $('.bottom_b').addClass('ontxt');
    console.log('b');
  }
}

