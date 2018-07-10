(function ($, Drupal) {
  Drupal.behaviors.elevenHideMessages = {
    attach: function (context, settings) {
      // hide all messages
      $(".js-hide-messages").once().click(function (e) {

        $('.messages').toggleClass('message--hide');

        $(this).toggleClass("is-active");

        e.preventDefault();
      });

      $(".js-hide-message").once().click(function (e) {
        $(this).parent().toggleClass("message--hide");
        e.preventDefault();
      });
    }
  };
})(window.jQuery, window.Drupal);
