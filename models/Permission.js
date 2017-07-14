"use strict";

module.exports = function(sequelize, DataTypes) {
  var Permission = sequelize.define("Permission", {
    user_id: {
      type: DataTypes.STRING
    },
    admin: {
      type: DataTypes.BOOLEAN
    },
    /*
    AreaName: {
      type: DataTypes.STRING,
      references: {
        model: "Areas",
        key: "name"
      },
      primaryKey: true,
      allowNull: false
    }
    */
  });
  Permission.associate = function(models) {
    Permission.belongsTo(models.Area, {
    })
  }

  return Permission;
};
