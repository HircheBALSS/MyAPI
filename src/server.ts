// import routecategories from './routes/categories.route';
// import routeorders from './routes/orders.route';
// import routeproducts from './routes/products.route';
// import routeusers from './routes/users.route';

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
  res.send('Hello word');
});

app.post('/', (req: any, res: any) => {
  res.send('I am a POST request');
});

// app.use('/orders', routeorders);

// app.use('/users', routeusers);

// app.use('/products', routeproducts);

// app.use('/categories', routecategories);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
