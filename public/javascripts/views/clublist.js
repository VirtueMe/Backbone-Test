define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/club',
  '../aura/mediator',
  '../modules'
  ], function($, _, Backbone, ClubView, mediator){
  var ClubListView = Backbone.View.extend({
    tagName:'ul',
 
    initialize:function () {
        this.model.bind("reset", this.render, this);
    },
 
    render:function (eventName) {
        _.each(this.model.models, function (club) {
            $(this.el).append( new ClubView({model:club}).render().el);
        }, this);
        return this;
    }
  });
  return ClubListView;
});
