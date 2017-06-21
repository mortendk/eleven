(function ($) {

  // Filter
  if($.cookie('elevenFilter') == "off") {
    $(".js-hide-filter").addClass("is-active");
    $('.views-filter').addClass('visually-hidden');
  }

  $( ".js-hide-filter" ).click(function(e) {
    $('.views-filter').toggleClass('visually-hidden');
    $(this).toggleClass("is-active");
    $.cookie('elevenFilter', $(".views-filter-action").hasClass('visually-hidden') ? 'off' : 'on');

    e.preventDefault();
  });

  // actions
  if($.cookie('elevenAction') == "off") {
    $(".js-hide-filter").addClass("is-active");
    $('.views-filter-actions').addClass('visually-hidden');
  }


  $( ".js-hide-actions" ).click(function(e) {
    $('.view-filters-actions').toggleClass('visually-hidden');
    $(this).toggleClass("is-active");
    $.cookie('elevenAction', $(".views-filter-actions").hasClass('visually-hidden') ? 'off' : 'on');
    e.preventDefault();
  });


}(jQuery))
