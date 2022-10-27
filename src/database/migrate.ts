// import { Model } from 'sequelize';
import db from './instance';
// import user from '../models/user';
// import product from '../models/product';
// import order from '../models/order';
// import category from '../models/category';

async function connect() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect();
// async function migrate(){
//   Model.sync{}
// }
