"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      unique: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    parent: DataTypes.INTEGER
  });

  Comment.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Comment.belongsTo(models.Comment, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
    Comment.belongsTo(models.Category, {
      foreignKey: {
        allowNull: true
      }
    })
    Comment.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    })
    Comment.hasMany(models.Vote);

  }

  Comment.addNew = function(comment, db){
    var {CategoryId = "", AreaName = "", parentId = "", title = "", description = "", user = ""} = comment;
    if(CategoryId === "" || AreaName === ""){
      return Promise.reject("comment needs parent category and area");
    }
    return sequelize.transaction(function(t) {
      return db.Category.find(
        {where: {AreaName: AreaName, id: CategoryId}}, {transaction: t}
      ).then(category => {
        return category.uuid;
      }).then(CategoryUuid => {
        return new Promise((resolve, reject) => {
          Comment.max('id', {where: {CategoryUuid}}, {transaction: t}).then(id => {
            resolve({id, CategoryUuid});
          }).catch(err => {
            reject(err);
          })
        })
      }).then(values => {
        var {id, CategoryUuid} = values;
        if(isNaN(id)) id = 0;
        if(parentId && parentId > id) return Promise.reject(`invalid parent id ${parentId}`);
        if(!parentId) parentId = 0;
        return Comment.create({
            id: id+1,
            title,
            description,
            user_id: user,
            CategoryUuid,
            parent: parentId
          }, {transaction: t});
        })
      });
  }

  Comment.delete = function(area, category, id, user, admin, db){
    return Comment.find({
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
      if(!comment) return Promise.resolve(true);
      if(comment.user_id === user || admin){
        return comment.destroy().then(() => {
          return true;
        })
      } else {
        return Promise.resolve(false);
      }
    })
  }

  return Comment;
};
