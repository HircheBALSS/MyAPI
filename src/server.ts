import routecategories from './routes/categories.route';
import routeorders from './routes/orders.route';
import routeproducts from './routes/products.route';
import routeusers from './routes/users.route';

const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {
  res.send('Hello word');
});

app.post('/', (req: any, res: any) => {
  res.send('I am a POST request');
});

app.use('/', routeorders);

app.use('/', routeusers);

app.use('/', routeproducts);

app.use('/', routecategories);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
