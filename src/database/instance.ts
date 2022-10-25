const { Sequelize } = require('sequelize');

require('dotenv').config();

// eslint-disable-next-line max-len
const db = new Sequelize(process.env.mysql_db, process.env.mysql_login, process.env.mysql_password, {
  host: 'localhost',
  dialect: 'mariadb',
});

export default db;
