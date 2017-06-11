// show hide the sidebar
(function ($) {

  var widthClasses = "w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12"

  // grap a cookie set button to active
  if( $.cookie("eleven-nodeEditLayout") ){
    $("a[data-layout="  + $.cookie('eleven-nodeEditLayout') + "]" ).addClass("is-active");

    $( ".node-edit-main" ).removeClass( widthClasses ).addClass( 'w-' + $.cookie("eleven-nodeEditLayout") );

    if($.cookie("eleven-nodeEditLayout") == "12"){

      $( ".node-edit-sidebar" ).removeClass( widthClasses ).addClass('w-12');

    }else{
      $( ".node-edit-sidebar" ).removeClass( widthClasses ).addClass( 'w-' + (12 -  $.cookie("eleven-nodeEditLayout"))  );
    }
  }

  // change layout for a node
  $(".js-11-layout-chooser" ).click(function(e) {

    var layout = $(this).attr("data-layout");
    $( ".node-edit-main" ).removeClass( widthClasses ).addClass( 'w-' + layout );

    if(layout == "12"){
      var layoutSidebar = 12 ;

      $( ".node-edit-sidebar" ).removeClass(widthClasses).addClass('w-12');

    }else{
      var layoutSidebar = 12  - layout ;
      $( ".node-edit-sidebar" ).removeClass( widthClasses ).addClass( 'w-' + layoutSidebar );
    }

    //color buttons
    $(".js-11-layout-chooser").removeClass("is-active");
    $(this).toggleClass("is-active");

    //umm cookies
    $.cookie("eleven-nodeEditLayout", layout);

    e.preventDefault();
  });


}(jQuery))
