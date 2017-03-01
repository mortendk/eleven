(function ($) {
// Adds in data-title to td for sneaky responsive table tricks

Drupal.behaviors.fixResponsiveTable = {

  attach: function (context, settings) {

    var headertext = [],
    tableHeaders = $("table th"),
    tableRows = $("tbody tr");

    // Create list of headers to use for the data-title.
    for(var i = 0; i < tableHeaders.length; i++) {
      var current = tableHeaders[i];
      headertext.push(current.textContent.replace(/\r?\n|\r/,""));
    }

    // Loop through each row.
    for (var i = 0; i < tableRows.length; i++) {

      // Loop through the td & add the data-title from table headers
      for (var j = 0; j < tableHeaders.length; j++) {
        // nth-child counts from 1 not 0.
        $('td:nth-child(' + (j+1) + ') ').attr("data-title", headertext[j]);
      }

    }

  }
}

})(jQuery);
