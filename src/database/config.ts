import { connect } from "http2";

const { Sequelize } = require('sequelize');
require('dotenv').config() 

const sequelize = new Sequelize(process.env.mysql_password, process.env.mysql_login, process.env.mysql_db, {
  host: 'localhost',
  dialect: 'mysql',
});

async function connect(){
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
connect();
export default sequelize;
