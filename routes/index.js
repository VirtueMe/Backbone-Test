
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log('hello');
  res.render('index', { title: 'Sandviks', scripts: [ { main: 'javascripts/main', file: 'javascripts/libs/require/require.js'}]  })
};
