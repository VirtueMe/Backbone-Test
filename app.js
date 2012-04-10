
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

var countries = [{ id: "1", name: "Norge", path: "/no" }, { id: "2", name: "Sverige", path: "/se"}, { id: "3", name: "Suomi", path: "/fi" } ];

var club = new Object();

club['no'] = [ 
		{ id: "1", name: "Disney", path: "/no/disney", key: "DBN" }, 
		{ id: "2", name: "Goboken", path: "/no/goboken", key: "GBN" }
	     ];
club['se']  = [
                { id: "1", name: "Disney", path: "/se/disney", key: "DBS" },
                { id: "2", name: "Goboken", path: "/se/goboken", key: "GBS" }
             ];

club['fi']  = [
                { id: "1", name: "Disney", path: "/fi/disney", key: "DBF" },
                { id: "2", name: "Goboken", path: "/fi/goboken", key: "GBF" }
             ];

var offer = new Object();

offer['no'] =  { disney: [
                    { id: "1", name: "Rapunsel", path: "/no/disney/rapunsel", key: 34223332 },
                    { id: '2', name: "Biler", path: "/no/disney/biler", key: 223332333 }]  }
                  ;


app.get('/', routes.index);

app.get('/api/:country/:club', function(req, res, next) {
  if (offer.hasOwnProperty(req.params.country)) {
    var item = offer[req.params.country];

    if (item.hasOwnProperty(req.params.club)) {
      res.json(item[req.params.club]);
    }
    else {
      console.log(req.params.club + " not found");
      console.log(item);
      next();
    }
  }
  else {
    console.log(req.params.country + " not fount");
    next();
  }
});

app.get('/api/:country', function(req, res, next) {
  console.log("Message : " + req.params.country);
  if (club.hasOwnProperty(req.params.country)) {
    console.log(club[req.params.country]);
    res.json(club[req.params.country]);
  }
  else {
    console.log("Club not found for country: " + req.params.country);
    next();
  }
});

app.get('/api/', function(req, res) {
   res.json(countries);
});



app.listen(3400);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
