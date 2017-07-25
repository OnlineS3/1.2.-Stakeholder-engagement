"use strict";

module.exports = function(sequelize, DataTypes) {
  var Permission = sequelize.define("Permission", {
    admin: {
      type: DataTypes.BOOLEAN
    },
  });
  Permission.associate = function(models) {
    Permission.belongsTo(models.Area, {
    })
    Permission.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    })
  }

  return Permission;
};
