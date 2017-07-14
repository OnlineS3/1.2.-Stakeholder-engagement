"use strict";

module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define("Area", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    description: DataTypes.STRING
  });
  Area.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Area.hasMany(models.Permission, {
    });
    Area.hasMany(models.Category, {
    });
  }
  return Area;
};
