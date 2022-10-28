const express = require('express');

const routeusers = express.Router();

routeusers.get('/users/', (req: any, res: any) => {
  res.send('Get all element of the resource');
});

routeusers.get('/users/:id', (req: any, res: any) => {
  res.send('Get an element of the resource');
});

routeusers.post('/users/', (req: any, res: any) => {
  res.send('Create an element of the resource');
});

routeusers.patch('/users/:id', (req: any, res: any) => {
  res.send('Update an element of the resource');
});

routeusers.delete('/users/:id', (req: any, res: any) => {
  res.send('Delete an element of the resource');
});

export default routeusers;
