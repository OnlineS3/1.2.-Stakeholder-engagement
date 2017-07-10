"use strict";

module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define("Area", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING
  });
  return Area;
};
