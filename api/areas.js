var db = require('../models/index.js');
var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next) {
  console.dir(req.body)
  db.Area.create({
    name: req.body.name,
    description: req.body.description
  }).then((area) => {
    db.Permission.create({
      area: req.body.name,
      user_id: req.session.passport.user._json.sub
    })
  }).then((area) => {
    res.send({
      status:"200 area added",
    });
  });
});

router.get('/all', function(req, res, next) {
  console.dir(req.session.passport.user)
  db.Permission.findAll({where: {user_id: req.session.passport.user._json.sub}}).then(permissions => {
    return permissions.map(permission => {
      console.log(permission)
      return {
        name: permission.dataValues.AreaName
      };
    })
  }).then(areas => {
    res.send(areas);
  })
});

module.exports = router;
