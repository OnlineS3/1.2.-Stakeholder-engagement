var db = require('../models/index.js');
var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
console.log("api")

var categories = require('./categories.js');

/*
router.all('/', passport.authenticate('auth0', {
  failureRedirect: '/login'
})
*/
router.use(bodyParser.json());
router.all('*', function(req, res, next){
  console.log(res.locals.loggedIn)
  console.log(req.session.passport)
  if(res.locals.loggedIn){
    next();
  } else {
    res.send({
      "response": "not authorised"
    });
  }
})

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
