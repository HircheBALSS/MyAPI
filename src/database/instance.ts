// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path from 'path';

const { Sequelize } = require('sequelize');

require('dotenv').config({ path: '/home/balss/my_api/group-990976/src/.env' });

// console.log(process.env, '\n', '\n');
// eslint-disable-next-line max-len
const db = new Sequelize(process.env.mysql_db, process.env.mysql_login, process.env.mysql_password, {
  host: 'localhost',
  dialect: 'mariadb',
});

export default db;
