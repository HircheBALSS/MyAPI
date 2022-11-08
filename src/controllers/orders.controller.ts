import { Request, Response } from 'express';

import order from '../database/models/order';

export async function getAll(req: Request, res: Response) {
  try {
    const orders = await order.findAll({ attributes: { exclute: ['updatedAt', 'createdAt'] } });
    res.send(JSON.stringify(orders));
  } catch (error) {
    console.log(error);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const orders = await order.findAll({ where: { id } });
    res.send(JSON.stringify(orders));
  } catch (error) {
    res.send('Not found!');
  }
}

export async function create(req: Request, res: Response) {
  try {
    const orders = await order.create(req.query);
    res.send(JSON.stringify(orders));
    // console.log(JSON.stringify(products));
  } catch (error) {
    res.send('impossible create');
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const orders = await order.update(req.query, { where: { id } });
    res.send(JSON.stringify(orders));
  } catch (error) {
    res.send('Not found!');
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const orders = await order.destroy({ where: { id } });
    res.send(JSON.stringify(orders));
  } catch (error) {
    res.send('impossible connexion');
  }
}

export default {
  getAll, getById, create, updateById, deleteById,
};
