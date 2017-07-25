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
    user: DataTypes.STRING
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

  }

  Comment.addNew = function(comment, db){
    var {CategoryId = "", AreaName = "", ParenetId = "", title = "", description = "", user = ""} = comment;
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
        console.log(id);
        if(parentId >= id) return Promise.reject("invalid parent");
        return Comment.create({
            id: id+1,
            title,
            description,
            user,
            CategoryUuid,
            CommentId: parentId
          }, {transaction: t});
        })
      });
  }

  return Comment;
};
