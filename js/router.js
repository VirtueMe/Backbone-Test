define([
    'jquery',
    'underscore',
    'backbone',
    'views/country'
    ], function($, _, Backbone, CountryView) {

	var AppRouter = Backbone.Router.extend({
        
	routes: {
            "": "defaultView",
            ":country": "showCountryView",
            "*path": "fallBack"
	},

        defaultView: function() {
            this.handleActiveView();
            alert("show");
	    this.activeView = new CountryView;
	    this.activeView.render();
        },
        showCountryView: function(country) {
            this.handleActiveView();
            alert(country);
        },
        handleActiveView : function() {
          if (this.activeView) {
            this.activeView.remove();
            delete this.activeView();
          }
        },
        fallBack: function(path) {
            alert("Fallback" + path);
        }
    });

    return AppRouter;
})
