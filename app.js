require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();


const usersRouter = require('./routes/usersRouter');
const ordersRouter = require('./routes/ordersRouter');
const productsRouter = require('./routes/productsRouter');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000; 

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

app.listen(port, 'localhost', ()=>{
    console.log('Listening');
});