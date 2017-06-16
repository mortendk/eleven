// show hide the sidebar
(function ($) {

  // hide show card text
  $( ".js-hide-filter" ).click(function(e) {
    $('.views-filter').toggleClass('visually-hidden');
    $(this).toggleClass("is-active");
    e.preventDefault();
  });


  $( ".js-hide-actions" ).click(function(e) {
    $('.view-filters-actions').toggleClass('visually-hidden');
    $(this).toggleClass("is-active");
    e.preventDefault();
  });





}(jQuery))
