const { sequelize, DataTypes } = require('sequelize');

const db = require('../instance.ts ');

const product = db.define(
  'product',
  {
    Name: {
      type: DataTypes.STRING,
    },
    Price: {
      type: DataTypes.DECIMAL,
    },
    Description: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

export default product;
