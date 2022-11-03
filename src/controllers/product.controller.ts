import { Request, Response } from 'express';

import product from '../database/models/product';

const express = require('express');

const controllersproduct = express();

async function getAll(req: Request, res: Response) {
  try {
    const products = await product.findAll({ attributes: { exclute: ['updatedAt', 'createdAt'] } });
    res.send(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}
controllersproduct.get('/', getAll);

async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const products = await product.findAll({ where: { id } });
    res.send(JSON.stringify(products));
  } catch (error) {
    res.send('Not found!');
  }
}

controllersproduct.get('/:id', getById);

async function create(req: Request, res: Response) {
  try {
    const products = await product.create(req.query);
    res.send(JSON.stringify(products));
    console.log(JSON.stringify(products));
  } catch (error) {
    res.send('impossible create');
  }
}
controllersproduct.post('/', create);

async function updateById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const products = await product.update(req.query, { where: { id } });
    res.send(JSON.stringify(products));
  } catch (error) {
    res.send('Not found!');
  }
}
controllersproduct.patch('/:id', updateById);

export default controllersproduct;
