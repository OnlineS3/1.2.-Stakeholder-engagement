var db = require('../models/index.js');
var express = require('express');
var router = express.Router();
var encrypter = require('../encrypter.js');

router.post('/new', function(req, res, next) {
  console.dir(req.body)
  db.Area.create({
    name: req.body.name
  }).then((area) => {
    return new Promise((resolve, reject) => {
      db.Permission.create({
        AreaName: req.body.name,
        user_id: req.session.passport.user._json.sub,
        admin: true
      }).then(permission => resolve({permission, area}))
    });
  }).then((result) => {
    res.send({
      status:"200 area added",
      area: {
        name: result.area.dataValues.name,
        admin: true,
        inviteLink: encrypter.encrypt('user|'+result.area.dataValues.uuid),
        adminInviteLink: encrypter.encrypt('admin|'+result.area.dataValues.uuid)
      }
    });
  });
});

router.get('/all', function(req, res, next) {
  console.dir(req.session.passport.user)
  db.Permission.findAll({where: {user_id: req.session.passport.user._json.sub}, include: db.Area}).then(permissions => {
    return permissions.map(permission => {
      console.log(permission)
      return {
        name: permission.dataValues.AreaName,
        admin: permission.dataValues.admin,
        inviteLink: encrypter.encrypt('user|'+permission.Area.dataValues.uuid),
        adminInviteLink: encrypter.encrypt('admin|'+permission.Area.dataValues.uuid)
      };
    })
  }).then(areas => {
    res.send(areas);
  })
});

module.exports = router;
