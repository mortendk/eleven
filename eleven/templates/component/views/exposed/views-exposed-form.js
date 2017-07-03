(function ($) {

  // Filter


  if($.cookie('elevenFilter') == "hidefilter") {
    $(".js-hide-filter").addClass("is-active");

    $('.views-filter').addClass('visually-hidden');
    $('.view-filters-actions').addClass('visually-hidden');
  }


  $( ".js-hide-filter" ).click(function(e) {
    $('.views-filter').toggleClass('visually-hidden');
    $('.view-filters-actions').toggleClass('visually-hidden');
    $(this).toggleClass("is-active");

    //gimme cookies
    $.cookie('elevenFilter', $(".views-filter").hasClass('visually-hidden') ? 'hidefilter' : 'showfilter');

    e.preventDefault();
  });



}(jQuery))
