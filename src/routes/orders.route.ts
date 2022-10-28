const express = require('express');

const routeorders = express.Router();

routeorders.get('/orders/', (req: any, res:any) => {
  res.send('Get all element of the resource');
});

routeorders.get('/orders/:id', (req: any, res:any) => {
  res.send('Get an element of the resource');
});

routeorders.post('/orders/', (req: any, res:any) => {
  res.send('Create an element of the resource');
});

routeorders.patch('/orders/:id', (req: any, res:any) => {
  res.send('Update an element of the resource');
});

routeorders.delete('/orders/:id', (req: any, res:any) => {
  res.send('Delete an element of the resource');
});

export default routeorders;
