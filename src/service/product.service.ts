import { Request, Response } from 'express';

import product from '../database/models/product';

export async function createProduct(req: Request, res: Response) {
  const produit = await product.create(req.body);
  res.send(JSON.stringify(produit));
  await produit.save();
  return produit;
}

export async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  const produit = await product.update(req.body, { where: { id } });
  res.send(JSON.stringify(produit));
  await produit.save();
  return produit;
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  const produit = await product.destroy({ where: { id } });
  res.send(JSON.stringify(produit));
  await produit.save();
  return produit;
}
