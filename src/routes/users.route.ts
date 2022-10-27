const express = require('express');

const routeusers = express.Router();

routeusers.get('/', (req: any, res: any) => {
  res.send('Get all element of the resource');
});

routeusers.get('/:id', (req: any, res: any) => {
  res.send('Get an element of the resource');
});

routeusers.post('/', (req: any, res: any) => {
  res.send('Create an element of the resource');
});

routeusers.patch('/:id', (req: any, res: any) => {
  res.send('Update an element of the resource');
});

routeusers.delete('/:id', (req: any, res: any) => {
  res.send('Delete an element of the resource');
});

export default routeusers;
