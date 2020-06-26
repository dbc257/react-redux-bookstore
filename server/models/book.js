'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    year: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};