var db = require('../models/index.js');
var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
console.log("api")

var categories = require('./categories.js');

router.use(bodyParser.json());

router.use('/category', categories);

router.get('/comments/', function(req, res, next) {
  console.log(1)
  res.send({
    "text": "users thingie"
  });
});

router.get('*', function(req, res, next) {
  console.log(3)
  res.send({
    "response": "endpoint not valid"
  });
});

module.exports = router;
