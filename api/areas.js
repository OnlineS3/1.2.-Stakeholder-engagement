var db = require('../models/index.js');
var express = require('express');
var router = express.Router();
var encrypter = require('../encrypter.js');

router.post('/new', function(req, res, next) {
  //console.dir(req.body)
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
  //console.dir(req.session.passport.user)
  db.Permission.findAll({where: {user_id: req.session.passport.user._json.sub}, include: db.Area}).then(permissions => {
    return permissions.map(permission => {
      console.log(permission)
      if(permission.dataValues.admin){
        return {
          name: permission.dataValues.AreaName,
          admin: permission.dataValues.admin,
          inviteLink: encrypter.encrypt('user|'+permission.Area.dataValues.uuid),
          adminInviteLink: encrypter.encrypt('admin|'+permission.Area.dataValues.uuid)
        };
      } else {
        return {
          name: permission.dataValues.AreaName,
          admin: permission.dataValues.admin
        };
      }
    })
  }).then(areas => {
    res.send(areas);
  })
});

router.post('/join', function(req, res, next) {
  console.log(req.body.key);
  var string = encrypter.decrypt(req.body.key).split('|');
  var admin = string[0] === 'admin';
  var uuid = string[1];
  db.Area.find({where: {uuid: uuid}}).then(area => {
    if(area){
        db.Permission.find({
          where: {
            AreaName: area.dataValues.name,
            user_id: req.session.passport.user._json.sub
          }
        }).then(permission => {
          return new Promise((resolve, reject) => {
            if(permission){
              if(admin){
                return permission.updateAttributes({admin: true}).then(permission => {
                  resolve({area, permission})
                });
              } else { //already has permission
                return Promise.resolve().then(() => {
                  resolve({area, permission});
                });
              }
            } else {
              return db.Permission.create({
                user_id:req.session.passport.user._json.sub,
                AreaName: area.dataValues.name,
                admin:admin
              }).then(permission => {
                resolve({area, permission});
              })
            }
          })
        }).then((results) => {
          console.dir(results)
          if(results.permission.dataValues.admin){
            return {
              status:"200 area added",
              area: {
                name: results.permission.dataValues.AreaName,
                admin: results.permission.dataValues.admin,
                inviteLink: encrypter.encrypt('user|'+results.area.dataValues.uuid),
                adminInviteLink: encrypter.encrypt('admin|'+results.area.dataValues.uuid)
              }
            };
          } else {
            return {
              status:"200 area added",
              area: {
                name: results.permission.dataValues.AreaName,
                admin: results.permission.dataValues.admin
              }
            };
          }
        }).then(area => {
          res.send(area);
        })
    } else {
      res.send({response: "invalid key"});
      //TODO: error response
    }
  })

});

module.exports = router;
