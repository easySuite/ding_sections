/**
 * @file
 */
(function ($) {
  "use strict";

  Drupal.behaviors.easyddb_editorial_base = {
    attach: function () {

      // Adding classes to ding_event_calendar event list.
      var eb_event_list_items = Drupal.settings.easyddb_editorial_base.eb_event_list_items;
      if (eb_event_list_items !== undefined) {
        if (eb_event_list_items.length !== 0) {
          var all_list_items = $('#eventList').find('.event-item');
          $.each(eb_event_list_items, function (index, new_class) {
            var item = all_list_items[index];
            $(item).addClass(new_class);
          });
        }
      }

      // Adding classes to ding_nodelist widgets.
      var nodelist_groups = Drupal.settings.easyddb_editorial_base.nodelist_items;
      if (nodelist_groups !== undefined) {
        $.each(nodelist_groups, function (unique_id, data_array) {
          var nodelist_group;

          // Get separated nodelist widget and pane unique_id.
          var split_array = unique_id.split(':');

          // Process nodelist widgets.
          if (split_array[0] === '_ding_nodelist_widget_rolltab') {
            nodelist_group = $('.' + split_array[1]).find('.ding-tabroll').find('.ding-tabroll');
          }
          else if (split_array[0] === '_ding_nodelist_widget_minimal_display') {
            nodelist_group = $('.' + split_array[1]).find('.minimal-item');
          }
          else if (split_array[0] === '_ding_nodelist_widget_promoted_nodes') {
            nodelist_group = $('.' + split_array[1]).find('.ding_nodelist-pn-item');
          }
          else {
            nodelist_group = $('.' + split_array[1]).find('.ding_nodelist-items').children();
          }

          $.each(nodelist_group, function (index, item) {
            if (data_array[index] !== 'empty') {
              $(item).addClass(data_array[index]);
            }
          });
        });
      }
    }
  }
})(jQuery);
