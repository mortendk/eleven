// show hide the sidebar
(function ($) {

  var widthClasses = "node-edit--2col node-edit--full"

  // grap a cookie set button to active
  if( $.cookie("eleven-nodeEditLayout") ){

    console.log( 'wtf: ' + $.cookie("eleven-nodeEditLayout") );

    $("a[data-layout="  + $.cookie('eleven-nodeEditLayout') + "]" ).addClass("is-active");

    $( ".node-edit" ).removeClass( widthClasses ).addClass( $.cookie("eleven-nodeEditLayout") );

  }


  // change layout
  $(".js-nodeedit-layout" ).click(function(e) {

    var layout = $(this).attr("data-layout");

    $( ".node-edit" ).removeClass( widthClasses ).addClass( layout );

    //color buttons
    $(".js-nodeedit-layout").removeClass("is-active");
    $(this).toggleClass("is-active");

    //umm cookies
    $.cookie("eleven-nodeEditLayout", layout);

    e.preventDefault();
  });


}(jQuery))
