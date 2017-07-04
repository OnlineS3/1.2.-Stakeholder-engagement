"use strict";

module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });


  //TODO: REMOVE THIS IN PRODUCTION
  Category.sync({force: true}).then(() => {
    Category.create({
      title: "Kategoria",
      description: "kuvaus"
    })
  });
  return Category;
};
