const express = require('express');

const routeproducts = express.Router();

routeproducts.get('/products/', (req: any, res: any) => {
  res.send('Get all element of the resource');
});

routeproducts.get('/products/:id', (req: any, res: any) => {
  res.send('Get an element of the resource');
});

routeproducts.post('/products/', (req: any, res: any) => {
  res.send('Create an element of the resource');
});

routeproducts.patch('/products/:id', (req: any, res: any) => {
  res.send('Update an element of the resource');
});

routeproducts.delete('/products/:id', (req: any, res: any) => {
  res.send('Delete an element of the resource');
});

export default routeproducts;
