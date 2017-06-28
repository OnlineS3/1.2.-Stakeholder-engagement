var db = require('../models/index.js');
var express = require('express');
var router = express.Router();
console.log("api")

router.get('/users/', function(req, res, next) {
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
