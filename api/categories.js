var db = require('../models/index.js');
var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next) {
  console.dir(req.body)
  db.Category.create({
    title: req.body.title,
    description: req.body.description
  }).then((category) => {
    res.send({
      status:"200 Category added",
      category
    });
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
