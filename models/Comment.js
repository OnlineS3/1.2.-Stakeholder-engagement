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

  Comment.addNew = function(comment){
    var {CategoryUuid = "", CommentUuid = "", title = "", description = "", user = ""} = comment;
    if(CategoryUuid === "" && CommentUuid === ""){
      return Promise.reject("comment needs either parent category or comment");
    }
    return sequelize.transaction(function(t) {
      var idNum;
      if(CategoryUuid !== ""){
        idNum = Comment.max('id', {where: {CategoryUuid}}, {transaction: t})
      } else {
        idNum = Comment.max('id', {where: {CommentUuid}}, {transaction: t})
      }
      return idNum.then((id) => {
        if(isNaN(id)) id = 0;
        console.log(id);
        return Comment.create({
            id: id+1,
            title,
            description,
            user
          }, {transaction: t});
        })
      });
  }

  return Comment;
};
