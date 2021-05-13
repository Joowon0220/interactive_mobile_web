$(document).ready(function () {
  $(".anchor").on("click", arrow);


  $('.QnA').each(function (i) {
    console.log("[" + i + "번째]: " + $(this).height());
    //  var h_QnAs = [$(this).height()];
    //  var sum = 0;
    //  for (var h_QnAs;)
  });

  var hi = $('.FAQs').height();
  console.log(hi);
})




function arrow() {

  // var h_FAQs = $(this).parent().next('.A').height();
  // console.log(hi);


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



  // $(this).parent().next('.A').hasClass('ontxt')

}

