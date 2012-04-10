define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/country',
  '../aura/mediator',
  '../modules'
  ], function($, _, Backbone, CountryView, mediator){
  var CountryListView = Backbone.View.extend({
    tagName:'ul',
 
    initialize:function () {
        this.model.bind("reset", this.render, this);
    },
 
    render:function (eventName) {
        _.each(this.model.models, function (country) {
            $(this.el).append(new CountryView({model:country}).render().el);
        }, this);
        return this;
    }
  });
  return CountryListView;
});
