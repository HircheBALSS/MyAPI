import { Request, Response } from 'express';

import product from '../database/models/product';
import { createProduct, updateProduct, deleteProduct } from '../service/product.service';

export async function getAll(req: Request, res: Response) {
  try {
    const products = await product.findAll();
    res.send(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const products = await product.findAll({ where: { id } });
    res.send(JSON.stringify(products));
  } catch (error) {
    res.send('Not found!');
  }
}

export async function create(req: Request, res: Response) {
  try {
    createProduct(req, res);
  } catch (error) {
    res.send('impossible create');
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    updateProduct(req, res);
  } catch (error) {
    res.send('Not found!');
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    deleteProduct(req, res);
  } catch (error) {
    res.send('impossible connexion');
  }
}

export default {
  getAll, getById,
};
