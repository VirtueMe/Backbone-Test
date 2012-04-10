define([
  'underscore', 
  'backbone', 
  'models/country'
  ], function(_, Backbone, Country) {
    var CountriesCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model:Country,
    url:'/api/'
  });

  return CountriesCollection;
});
