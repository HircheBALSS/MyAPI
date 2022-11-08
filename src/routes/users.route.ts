import {
  deleteById, updateById, getAll, getById, create,
} from '../controllers/users.controller';

const express = require('express');

const routeusers = express.Router();

routeusers.get('/users/', getAll);

routeusers.get('/users/:id', getById);

routeusers.post('/users/', create);

routeusers.patch('/users/:id', updateById);

routeusers.delete('/users/:id', deleteById);

export default routeusers;
