define([
  'underscore', 
  'backbone', 
  'models/club'
  ], function(_, Backbone, Club) {
    var ClubCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model:Club,
    url: function() {
      var path = '/api/' + this.country;
      console.log(path);
      return path;
    }
  });

  return ClubCollection;
});
