var db = require('../models/index.js');
var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next) {
  console.log(1)
  res.send({
    "text": "new category"
  });
});

router.get('/all', function(req, res, next) {
  db.Category.findAll().then(categories => {
    return categories.map(category => { return {
      id: category.id,
      title: category.title,
      description: category.description
    }})
  }).then(categories => {
    res.send(categories);
  })
});

module.exports = router;
