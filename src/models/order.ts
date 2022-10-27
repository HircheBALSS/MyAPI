import product from './product';
import User from './user';

const { sequelize, DataTypes } = require('sequelize');

const db = require('../instance.ts ');

const order = db.define(
  'order',
  {
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
User.belongsto(order);

order.belongsToMany(product, { through: 'order_product' });
product.belongsToMany(order, { through: 'order_product' });

export default order;
