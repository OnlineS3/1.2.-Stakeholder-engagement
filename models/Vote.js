"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    up: DataTypes.BOOLEAN
  });
  Vote.associate = function(models) {
    Vote.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    })
    Vote.belongsTo(models.Comment, {
    })
  }

  Vote.add = function(area, category, id, user, db, up){
    return db.Comment.find({
      where:{
        id: id
      },
      include: [
        {
          model: db.Category,
          where: {id: category},
          required:true,
          include: [
            {
              model: db.Area,
              required: true,
              where: {name: area}
            }
          ]
        }
      ]
    }).then(comment => {
      return Vote.find({
        where: {
          user_id: user,
          CommentUuid: comment.uuid
        }
      }).then(vote => {
        if(vote){
          Vote.upsert({
            id: vote.id,
            user_id: user,
            CommentUuid: comment.uuid,
            up
          })
        } else {
          Vote.create({
            user_id: user,
            CommentUuid: comment.uuid,
            up
          })
        }
      })
    })
  }
  return Vote;
};
