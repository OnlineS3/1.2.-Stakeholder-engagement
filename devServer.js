var path = require('path');
var db = require('./models/index.js');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var api = require('./api/api.js')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


var request = require('request');
app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8888, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8888');
});


//TODO: REMOVE THIS IN PRODUCTION
db.Comment.sync({force: true});
//TODO: REMOVE THIS IN PRODUCTION
db.Category.sync({force: true}).then(() => {
  db.Category.create({
    title: "Kategoria",
    description: "kuvaus"
  })
});
