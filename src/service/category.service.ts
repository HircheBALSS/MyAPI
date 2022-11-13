import { Request, Response } from 'express';

import category from '../database/models/category';

export async function createcategories(req: Request, res: Response) {
  const produit = await category.create(req.body);
  res.send(JSON.stringify(produit));
  await produit.save();
  return produit;
}

export async function updatecategories(req: Request, res: Response) {
  const { id } = req.params;
  const produit = await category.update(req.body, { where: { id } });
  res.send(JSON.stringify(produit));
  await produit.save();
  return produit;
}

export async function deletecategories(req: Request, res: Response) {
  const { id } = req.params;
  const produit = await category.destroy({ where: { id } });
  res.send(JSON.stringify(produit));
  await produit.save();
  return produit;
}
