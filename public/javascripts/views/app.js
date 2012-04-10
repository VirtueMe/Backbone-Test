define([
  'jquery',
  'underscore', 
  'backbone',
  '../aura/mediator',
  '../router',
  '../modules'
  ], function($, _, Backbone, mediator,AppRouter){
  var AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.

    // Our template for the line of statistics at the bottom of the app.

    // Delegated events for creating new items, and clearing completed ones.
    events: {
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function() {
      console.log("AppView init");
      new AppRouter();
      Backbone.history.start({pushState: true});
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      mediator.publish('renderDone', this, Todos);
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(todo) {
    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
    },

    // Generate the attributes for a new Todo item.
    newAttributes: function() {
      return {
        content: this.input.val(),
        order:   Todos.nextOrder(),
        done:    false
      };
    },

    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      mediator.publish('createWhenEntered', this, e, Todos);
    },

    // Clear all done todo items, destroying their models.
    clearCompleted: function() {
      mediator.publish('clearContent', Todos);
      return false;
    },

    addEntry:function(){
        mediator.publish('addingNewTodo', this);
    }

  });
  return AppView;
});
