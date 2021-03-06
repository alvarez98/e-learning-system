'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    UserID: DataTypes.UUID,
    UserName: DataTypes.STRING,
    UserLastName: DataTypes.STRING,
    UserEmail: DataTypes.STRING,
    UserPassword: DataTypes.STRING,
    UserRol: DataTypes.ARRAY(DataTypes.STRING),
    UserActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};