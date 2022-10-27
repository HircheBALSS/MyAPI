import product from './product';

const { sequelize, DataTypes } = require('sequelize');

const db = require('../instance.ts ');

const category = db.define(
  'category',
  {
    Type: {
      type: DataTypes.STRING,
    },
    Author: {
      type: DataTypes.STRING,
    },

    Editors: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

category.hasMany(product);
product.belongsto(category);

export default category;
