import db from '../instance';

const { sequelize, DataTypes } = require('sequelize');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
  },

  Number: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, { sequelize });

export default User;
