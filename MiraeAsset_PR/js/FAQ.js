$(document).ready(function () {
  $(".anchor").on("click", arrow);
})




function arrow() {

  $(this).toggleClass('on');
  if ($(this).parent().next('.A').hasClass('ontxt')) {
    $(this).parent().next('.A').css('display', 'none');
    $('.A').removeClass('ontxt');
    console.log('a :');
  } else {
    $(this).parent().next('.A').css('display', 'block');
    $(this).parent().next('.A').addClass('ontxt');
    console.log('b');
  }

}

