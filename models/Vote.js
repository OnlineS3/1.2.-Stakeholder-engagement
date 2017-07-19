"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    user_id: {
      type: DataTypes.STRING
    },

  });
  Vote.associate = function(models) {
    Vote.belongsTo(models.Comment, {
    })
  }

  return Vote;
};
