import db from '../instance';

const { sequelize, DataTypes } = require('sequelize');

const product = db.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

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
