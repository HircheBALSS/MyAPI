import routecategories from './routes/categories.route';
import routeorders from './routes/orders.route';
import routeproducts from './routes/products.route';
import routeusers from './routes/users.route';

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
  res.send('Hello word');
});

app.post('/', (req: any, res: any) => {
  res.send('I am a POST request');
});

app.use(routeorders, (req: any, res: any) => {
  res.send('here is orders');
});

app.use(routeusers, (req: any, res: any) => {
  res.send('here is users');
});

app.use(routeproducts, (req: any, res: any) => {
  res.send('here is products');
});

app.use(routecategories, (req: any, res: any) => {
  res.send('here is categories');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
