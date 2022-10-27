const { sequelize, DataTypes } = require('sequelize');

const db = require('../instance.ts ');

const User = db.define('User', {
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

// `sequelize.define` also returns the model
// console.log(Users === db.models.Users); // true

export default User;
