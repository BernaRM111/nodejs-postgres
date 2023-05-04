'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Futbolista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Futbolista.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
    height_cm: DataTypes.INTEGER,
    weight_kg: DataTypes.FLOAT,
    club: DataTypes.STRING,
    position: DataTypes.STRING,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Futbolista',
  });
  return Futbolista;
};