const express = require('express');

const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);

app.listen(3000, () => console.log('ecommerce server listening'));