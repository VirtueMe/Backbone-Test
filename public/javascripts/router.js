define([
    'jquery',
    'underscore',
    'backbone',
    'collections/countries',
    'collections/clubs',
    'views/club',
    'views/countrylist',
    'views/clublist',
    'views/offer',
    'views/order',
    ], function($, _, Backbone, CountriesCollection, ClubCollection, ClubView, CountryListView, ClubListView, OfferView, OrderView) {

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
            this.countryList = new CountriesCollection();
	    this.activeView = new CountryListView({model: this.countryList});
            this.countryList.fetch();
	    $(".container").html(this.activeView.render().el);
        },
        showCountryView: function(country) {
            this.handleActiveView();
            this.clubList = new ClubCollection();
            this.clubList.country = country;
	    this.activeView = new ClubListView({model: this.clubList});
            this.clubList.fetch();
	    $(".container").html(this.activeView.render().el);
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
