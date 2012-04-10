define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/buy.html',
  '../aura/mediator',
  '../modules',
  'jquerycalendar',
  'jqueryform',
  'jquerybackstretch',
  ], function($, _, Backbone, textTemplate, mediator){
  var OrderView = Backbone.View.extend({

    el: $(".container"),

    // Cache the template function for a single item.
    template: _.template(textTemplate),

    // The DOM events specific to an item.
    events: {
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
    },

    // Re-render the contents of the todo item.
    render: function() {
      this.el.append(this.template());
      $.backstretch("/img/bg_lulu.jpg");

      $('.signup-form').html5form();
      var datePicker = $("#childbirthday");

      if (datePicker) {
        datePicker.datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd.mm.yy',
                onClose: function () {
                    // force the validation, and return input focus, to field
                    $(this).valid();
                    this.focus();
                }
        });
	       
      }
      mediator.publish('newContentAvailable', this);
      return this;
    },

    // Remove this view from the DOM.
    remove: function() {
      this.el.html("");
      ////  $(this.el).remove();
    },

    // Remove the item, destroy the model.
    clear: function() {
      // mediator.publish('destroyContent', this);
    }

  });
  return OrderView;
});
