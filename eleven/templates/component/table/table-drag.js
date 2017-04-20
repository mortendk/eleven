(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.tableDragIdentify = {
    attach: function(context, settings) {

      // tableDrag is required
      if (typeof Drupal.tableDrag === 'undefined') {
        return;
      }

      $('table').addClass('tabledrag').removeClass('responsive-enabled');

    }
  };

}(jQuery, Drupal));
