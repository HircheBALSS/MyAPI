import product from './product';

import db from '../instance';

const { sequelize, DataTypes } = require('sequelize');

const category = db.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Type: {
      type: DataTypes.STRING,
    },
    Author: {
      type: DataTypes.STRING,
    },

    Editors: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

category.hasMany(product);
product.belongsTo(category);

export default category;
