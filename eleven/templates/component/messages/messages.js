(function ($) {

  // hide all messages
  $( ".js-hide-messages" ).click(function(e) {

    $('.messages').toggleClass('message--hide');

    $(this).toggleClass("is-active");

    e.preventDefault();
  });


  $( ".js-hide-message" ).click(function(e) {
    $(this).parent().toggleClass("message--hide");
    e.preventDefault();
  });


}(jQuery))
