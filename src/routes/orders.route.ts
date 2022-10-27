const express = require('express');

const routeorders = express.Router();

routeorders.get('/', (req: any, res:any) => {
  res.send('Get all element of the resource');
});

routeorders.get('/:id', (req: any, res:any) => {
  res.send('Get an element of the resource');
});

routeorders.post('/', (req: any, res:any) => {
  res.send('Create an element of the resource');
});

routeorders.patch('/:id', (req: any, res:any) => {
  res.send('Update an element of the resource');
});

routeorders.delete('/:id', (req: any, res:any) => {
  res.send('Delete an element of the resource');
});

export default routeorders;
