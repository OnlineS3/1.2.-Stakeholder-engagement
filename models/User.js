"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING
    }
  });

  User.refreshUser = function(username, user_id){
    return User.upsert({
      user_id,
      username
    });
  }

  return User;
};
