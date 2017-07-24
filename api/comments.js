var db = require('../models/index.js');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.dir(req.body)
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.areaName},
  }).then(permission => {
    if(permission){
      db.Comment.findAll({
        include:[{
          model: db.Category,
          where: {id: req.body.categoryId},
          include: [{
            model: db.Area,
            where: {name: req.body.areaName}
          }]
        }]
      }).then((comments) => {
        console.log(comments)
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

/*
router.post('/new', function(req, res, next) {
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.areaName},
  }).then(permission => {
    if(permission){
      db.Category.findAll({
        include:[{
          model: Category,
          where: {id: req.body.categoryId},
          include: [{
            model: db.Area,
            where: {name: req.body.areaName}
          }]
        }]
      }).then((comments) => {
        console.log(comments)
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});
*/

router.get('/all', function(req, res, next) {
  db.Permission.findAll({
    where: {user_id: req.session.passport.user._json.sub},
    include: [{
      model: db.Area,
      include: [db.Category]
    }]
  }).then(permissions => {
    var response = {};
    permissions.forEach(permission => {
      Object.assign(response, {
        [permission.Area.dataValues.name]: permission.Area.Categories.map(category => {
            return {
              id: category.dataValues.id,
              title: category.dataValues.title,
              description: category.dataValues.description
            };
          })
      });
    })
    res.send(response)
  })
});

module.exports = router;
