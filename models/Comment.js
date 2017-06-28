"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
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

    //REMOVE THIS IN PRODUCTION
    Comment.sync();
  }

  return Comment;
};
