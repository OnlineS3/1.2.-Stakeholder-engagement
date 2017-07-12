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
    description: DataTypes.STRING
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
    console.log(AreaName, title, description)
    return sequelize.transaction(function(t) {
      return Category.max('id', {where: {AreaName}}, {transaction: t})
      .then((id) => {
        if(isNaN(id)) id = 0;
        console.log(id);
        return Category.create({
            id: id+1,
            AreaName,
            title,
            description
          }, {transaction: t});
        })
      });
  }

  return Category;
};
