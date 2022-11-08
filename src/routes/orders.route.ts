import {
  deleteById, updateById, getAll, getById, create,
} from '../controllers/orders.controller';

const express = require('express');

const routeorders = express.Router();

routeorders.get('/orders/', getAll);

routeorders.get('/orders/:id', getById);

routeorders.post('/orders/', create);

routeorders.patch('/orders/:id', updateById);

routeorders.delete('/orders/:id', deleteById);

export default routeorders;
