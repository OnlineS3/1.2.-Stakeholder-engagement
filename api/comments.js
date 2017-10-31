var db = require('../models/index.js');
var express = require('express');
var router = express.Router();


router.post('/new', function(req, res, next) {
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.area},
  }).then(permission => {
    if("permission", permission){
      db.Comment.addNew({
        AreaName: req.body.area,
        CategoryId: req.body.category,
        title: req.body.title,
        description: req.body.description,
        parentId: req.body.parentId,
        user: req.session.passport.user._json.sub,
      }, db).then((comment) => {
        res.send({
          title: comment.dataValues.title,
          description: comment.dataValues.description,
          id: comment.dataValues.id,
          CategoryId: req.body.category,
          AreaName: req.body.category,
          parentId: req.body.parentId,
          user: req.session.passport.user.nickname,
          time: comment.dataValues.updatedAt,
          score: 0
        })
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

router.post('/delete', function(req, res, next) {
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.area},
  }).then(permission => {
    if("permission", permission){
      db.Comment.delete(
        req.body.area, req.body.category, req.body.id,
        req.session.passport.user._json.sub, permission.admin, db
      ).then((success) => {
        if(success){
          res.send({
            status:"200 OK"
          });
        } else {
          res.send({
            status:"403 Forbidden"
          });
        }
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

router.post('/vote', function(req, res, next) {
  db.Permission.find({
    where: {user_id: req.session.passport.user._json.sub, AreaName: req.body.area},
  }).then(permission => {
    if("permission", permission){
      db.Vote.add(
        req.body.area, req.body.category, req.body.id,
        req.session.passport.user._json.sub, db, req.body.up
      ).then((success) => {
        if(success){
          res.send({
            status:"200 OK"
          });
        } else {
          res.send({
            status:"403 Forbidden"
          });
        }
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
        attributes: [
          'id', 'title', 'description', 'updatedAt', 'parent', 'uuid',
            [db.sequelize.fn('SUM', db.sequelize.col('Votes.up')), 'numUp'],
            [db.sequelize.fn('COUNT', db.sequelize.col('Votes.id')), 'totalVotes']
        ],
        group: ['Comment.uuid', 'Category.id', 'Category->Area.uuid'],
        include: [{
          model: db.Category,
          where: {id: req.body.category},
          attributes: [
            'id'
          ],
          include: [{
              model: db.Area,
              attributes: [
                'name'
              ],
              where: {name: req.body.area}
            }]
          },
          {
            model: db.Vote,
            attributes: []
          },
          db.User
        ],

      }).then(comments => {
        Promise.all(comments.map(comment => {
          return db.Vote.find({
            where: {user_id: req.session.passport.user._json.sub, CommentUuid: comment.uuid}
          }).then(found => {
            console.log(found)
            return {
              id: comment.id,
              title: comment.title,
              description: comment.description,
              category: comment.Category.id,
              area: comment.Category.Area.name,
              parentId: comment.parent,
              user: comment.User.username,
              time: comment.updatedAt,
              score: Number(comment.dataValues.numUp) * 2 - Number(comment.dataValues.totalVotes),
              own: found ? (found.up ? 1 : -1) : 0
            }
          })
        })).then(comments => {
          res.send(comments);
        })
      })
    } else {
      res.send({
        status:"403 Forbidden",
      });
    }
  })
});

module.exports = router;
