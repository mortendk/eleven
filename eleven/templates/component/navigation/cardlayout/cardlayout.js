// show hide the sidebar
(function ($) {

  var widthClasses = "cards--layout-3 cards--layout-4 cards--layout-5"

  console.log( $.cookie("eleven-cardLayout") )
  // grap a cookie set button to active
  if( $.cookie("eleven-cardLayout") ){
    $("a[data-layout="  + $.cookie('eleven-cardLayout') + "]" ).addClass("is-active");
    $( ".js-card-layout-target" ).removeClass( widthClasses ).addClass( 'cards--layout-' + $.cookie("eleven-cardLayout") );
  }else{
    //default
    $("a[data-layout='4']").addClass("is-active");
    $(".js-card-layout-target").addClass( 'cards--layout-4');
  }



  // change layout
  $(".js-cardlayout" ).click(function(e) {

    var layout = $(this).attr("data-layout");
    $( ".js-card-layout-target" ).removeClass( widthClasses ).addClass( 'cards--layout-' + layout );

    //color buttons
    $(".js-cardlayout").removeClass("is-active");
    $(this).toggleClass("is-active");

    //umm cookies
    $.cookie("eleven-cardLayout", layout,  { path: '/' });

    e.preventDefault();
  });

  // hide show card text
  $( ".js-hide-cardtext" ).click(function(e) {
    $('.card__text').toggleClass('visually-hidden');
    $(this).toggleClass("is-active");

    e.preventDefault();
  });




}(jQuery))
