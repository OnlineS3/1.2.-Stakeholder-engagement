var path = require('path');
var express = require('express');
var config = require('./webpack.config.prod');
var api = require('./api/api.js')

var app = express();
var port = process.env.port || 8080

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/*', api);
app.get('*', function(req, res) {
  console.log("received request")
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
});
