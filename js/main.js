
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    jquerycalendar: 'libs/jquery/jquery-ui.calendar-min',
    jqueryform: 'libs/jquery/jquery.html5form-min',
    jquerybackstretch: 'libs/jquery/jquery.backstretch.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    text: 'libs/require/text'
  }

});

require(['backbone', 'router'], function(Backbone, AppRouter){
  console.log("AppView");
  var router = new AppRouter;
  Backbone.history.start();
});
