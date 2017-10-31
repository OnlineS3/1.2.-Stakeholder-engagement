"use strict";

module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
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
    description: DataTypes.TEXT
  });
  Category.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Category.belongsTo(models.Area, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }

  Category.addNew = function(category){
    var {AreaName, title = "", description = ""} = category;
    return sequelize.transaction(function(t) {
      return Category.max('id', {where: {AreaName}}, {transaction: t})
      .then((id) => {
        if(isNaN(id)) id = 0;
        return Category.create({
            id: id+1,
            AreaName,
            title,
            description
          }, {transaction: t});
        })
      });
  }
  Category.edit = function(area, id, title, description){
      return Category.find({
        where: {
          id: id,
          areaName: area
        }
      }).then(category => {
        if(category){
          return Category.upsert({
            id: category.id,
            uuid: category.uuid,
            title,
            description
          }).then(() => {
            return {
              id: category.id,
              title,
              description
            }
          })
        }
      })
  }
  Category.delete = function(area, id){
      return Category.destroy({
        where: {
          id: id,
          areaName: area
        }
      }).then(() => {
        return {area, id};
      })
  }

  return Category;
};
