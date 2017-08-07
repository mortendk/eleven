// show hide the sidebar
(function ($) {

  var widthClasses = "LW-1 LW-2 LW-3 LW-4 LW-5 LW-6 LW-7 LW-8 LW-9 LW-10 LW-11 LW-12"

  console.log( $.cookie("eleven-cardLayout") )
  // grap a cookie set button to active
  if( $.cookie("eleven-cardLayout") ){
    $("a[data-layout="  + $.cookie('eleven-cardLayout') + "]" ).addClass("is-active");
    $( ".js-card-layout-target" ).removeClass( widthClasses ).addClass( 'LW-' + $.cookie("eleven-cardLayout") );
  }else{
    //default
    $("a[data-layout='4']").addClass("is-active");
    $(".js-card-layout-target").addClass( 'LW-4');
  }



  // change layout
  $(".js-cardlayout" ).click(function(e) {

    var layout = $(this).attr("data-layout");
    $( ".js-card-layout-target" ).removeClass( widthClasses ).addClass( 'LW-' + layout );

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
