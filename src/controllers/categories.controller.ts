import { Request, Response } from 'express';
import category from '../database/models/category';
import { createcategories, deletecategories, updatecategories } from '../service/category.service';

export async function getAll(req: Request, res: Response) {
  try {
    const categories = await category.findAll();
    res.send(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const categories = await category.findAll({ where: { id } });
    res.send(JSON.stringify(categories));
  } catch (error) {
    res.send('Not found!');
  }
}

export async function create(req: Request, res: Response) {
  try {
    // const categories = await category.create(req.query);
    // res.send(JSON.stringify(categories));
    // console.log(JSON.stringify(categories));
    createcategories(req, res);
  } catch (error) {
    res.send('impossible create');
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    // const { id } = req.params;
    // const categories = await category.update(req.query, { where: { id } });
    // res.send(JSON.stringify(categories));
    updatecategories(req, res);
  } catch (error) {
    res.send('Not found!');
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    // const { id } = req.params;
    // const categories = await category.destroy({ where: { id } });
    // res.send(JSON.stringify(categories));
    deletecategories(req, res);
  } catch (error) {
    res.send('impossible connexion');
  }
}

export default {
  getAll, getById,
};
