import product from './product';
import User from './user';

import db from '../instance';

const { sequelize, DataTypes } = require('sequelize');

const order = db.define(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Totalprice: {
      type: DataTypes.DECIMAL,
    },

    Quantity: {
      type: DataTypes.FLOAT,
    },
    Orderdate: {
      type: DataTypes.DATE,
    },
  },
  { sequelize },
);

order.hasMany(User);
User.belongsTo(order);

order.belongsToMany(product, { through: 'order_product' });
product.belongsToMany(order, { through: 'order_product' });

export default order;
