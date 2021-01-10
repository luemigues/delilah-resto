require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usersRouter = require('./routes/usersRouter');
const ordersRouter = require('./routes/ordersRouter');
const productsRouter = require('./routes/productsRouter');

const port = process.env.PORT || 3000; 

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

app.listen(port, 'localhost', ()=>{
    console.log('Listening');
});