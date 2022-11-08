import { Request, Response } from 'express';

import user from '../database/models/user';

export async function getAll(req: Request, res: Response) {
  try {
    const users = await user.findAll({ attributes: { exclute: ['updatedAt', 'createdAt'] } });
    res.send(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const users = await user.findAll({ where: { id } });
    res.send(JSON.stringify(users));
  } catch (error) {
    res.send('Not found!');
  }
}

export async function create(req: Request, res: Response) {
  try {
    const users = await user.create(req.query);
    res.send(JSON.stringify(users));
    // console.log(JSON.stringify(products));
  } catch (error) {
    res.send('impossible create');
  }
}

export async function updateById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const users = await user.update(req.query, { where: { id } });
    res.send(JSON.stringify(users));
  } catch (error) {
    res.send('Not found!');
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const users = await user.destroy({ where: { id } });
    res.send(JSON.stringify(users));
  } catch (error) {
    res.send('impossible connexion');
  }
}

export default {
  getAll, getById, create, updateById, deleteById,
};
