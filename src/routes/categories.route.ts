const express = require('express');

const routecategories = express.Router();

routecategories.get('/', (req: any, res: any) => {
  res.send('Get all element of the resource');
});

routecategories.get('/:id', (req: any, res: any) => {
  res.send('Get an element of the resource');
});

routecategories.post('/', (req: any, res: any) => {
  res.send('Create an element of the resource');
});

routecategories.patch('/:id', (req: any, res: any) => {
  res.send('Update an element of the resource');
});

routecategories.delete('/:id', (req: any, res: any) => {
  res.send('Delete an element of the resource');
});

export default routecategories;
