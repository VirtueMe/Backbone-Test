define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/club.html',
  '../aura/mediator',
  '../modules'
  ], function($, _, Backbone, textTemplate, mediator){
  var ClubView = Backbone.View.extend({

    tagName: 'li',

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
       $(this.el).html(this.template(this.model.toJSON()));
       mediator.publish('newContentAvailable', this);
       return this;
    },

    // Remove this view from the DOM.
    remove: function() {
      $(this.el).remove();
    },

    // Remove the item, destroy the model.
    clear: function() {
       mediator.publish('destroyContent', this);
    }

  });
  return ClubView;
});
