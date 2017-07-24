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

router.post('/new', function(req, res, next) {
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.area},
  }).then(permission => {
    console.log(permission)
    if("permission", permission){
      db.Comment.addNew({
        AreaName: req.body.area,
        CategoryId: req.body.category,
        title: req.body.title,
        description: req.body.description,
        user: req.session.passport.user._json.sub
      }, db).then((comment) => {
        res.send({
          title: comment.dataValues.title,
          description: comment.dataValues.description,
          id: comment.dataValues.id,
          CategoryId: req.body.category,
          AreaName: req.body.category
        })
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

router.post('/category', function(req, res, next) {
  db.Permission.findAll({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.area},
  }).then(permission => {
    var response = {};
    if(permission){
      db.Comment.findAll({
        include: [{
          model: db.Category,
          where: {id: req.body.category},
          include: [{
            model: db.Area,
            where: {name: req.body.area}
          }]
        }]
      }).then(comments => {
        res.send(comments.map(comment => {
          return {
            id: comment.id,
            title: comment.title,
            description: comment.description,
            category: comment.Category.id,
            area: comment.Category.Area.name
          }
        }));
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

module.exports = router;
