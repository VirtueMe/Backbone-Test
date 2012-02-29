define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {

	var AppRouter = Backbone.Router.extend({
        
	routes: {
	    "": "defaultView()"
	},

        defaultView: function() {
	    var country = new CountryView();
	    country.render();
        }
    });

    return AppRouter;
})
