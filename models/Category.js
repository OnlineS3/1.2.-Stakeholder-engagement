"use strict";

module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });


  //REMOVE THIS IN PRODUCTION
  Category.sync().then(() => {
    Category.create({
      title: "Kategoria",
      description: "kuvaus"
    })
  });
  return Category;
};
