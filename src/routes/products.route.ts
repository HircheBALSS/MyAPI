import {
  deleteById, updateById, getAll, getById, create,
} from '../controllers/product.controller';

const express = require('express');

const routeproducts = express.Router();

routeproducts.get('/products/', getAll);

routeproducts.get('/products/:id', getById);

routeproducts.post('/products/', create);

routeproducts.patch('/products/:id', updateById);

routeproducts.delete('/products/:id', deleteById);

export default routeproducts;
