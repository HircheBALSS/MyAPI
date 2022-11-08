import {
  deleteById, updateById, getAll, getById, create,
} from '../controllers/categories.controller';

const express = require('express');

const routecategories = express.Router();

routecategories.get('/categories/', getAll);

routecategories.get('/categories/:id', getById);

routecategories.post('/categories/', create);

routecategories.patch('/categories/:id', updateById);

routecategories.delete('/categories/:id', deleteById);

export default routecategories;
