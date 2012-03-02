define([
    'jquery',
    'underscore',
    'backbone',
    'views/country',
    'views/club',
    'views/offer',
    'views/order',
    ], function($, _, Backbone, CountryView, ClubView, OfferView, OrderView) {

	var AppRouter = Backbone.Router.extend({
        
	routes: {
            "": "defaultView",
	    ":country/:club/:offer": "showOfferView",
	    ":country/:club": "showClubView",
            ":country": "showCountryView",
            "*path": "fallBack"
	},

        defaultView: function() {
            this.handleActiveView();
	    this.activeView = new CountryView;
	    this.activeView.render();
        },
        showCountryView: function(country) {
            this.handleActiveView();
            this.activeView = new ClubView;
	    this.activeView.render();
        },
	showClubView: function(country, club) {
            this.handleActiveView();
	    this.activeView = new OfferView;
	    this.activeView.render();
	},
	showOfferView: function(country, club, offer) {
	    this.handleActiveView();
	    this.activeView = new OrderView;
	    this.activeView.render();
	},
        handleActiveView : function() {
          if (this.activeView) {
            this.activeView.remove();
            delete this.activeView;
          }
        },
        fallBack: function(path) {
            alert("Fallback: " + path);
        }
    });

    return AppRouter;
})
