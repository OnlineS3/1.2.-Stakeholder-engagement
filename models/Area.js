"use strict";

module.exports = function(sequelize, DataTypes) {
  var Area = sequelize.define("Area", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  });
  return Area;
};
