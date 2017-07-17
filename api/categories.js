var db = require('../models/index.js');
var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next) {
  console.dir(req.body)
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.area, admin: true},
  }).then(permission => {
    if(permission){
      db.Category.addNew({
        title: req.body.title,
        description: req.body.description,
        AreaName: req.body.area
      }).then((category) => {
        res.send({
          status:"200 Category added",
          category,
          area: req.body.area
        });
      });
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

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

    /*
    Promise.all(permissions.map(permission => {
      return db.Category.findAll({where:{AreaName: permission.AreaName}});
    })).then(areas => {
      var response = {};
      areas.forEach((area, i) => {
        Object.apply(response, {
          [permissions[i].area]: area.map(category => {
            return {
              id: category.id,
              title: category.title,
              description: category.description
            };
          })
        })
      });
      return response;
    }).then(categories => {
      res.send(categories);
    })
    */
  })
});

module.exports = router;
