const express = require('express');
const ordersRouter = express.Router();

const orderController = require('../controllers/orderController.js');
const Middlewares = require('../middleware/orderMiddlewares.js');

ordersRouter.use(Middlewares.checkToken);

ordersRouter.post('/', orderController.createOrder);
ordersRouter.get('/:id', Middlewares.checkExistance, orderController.getOrder);

ordersRouter.get('/', Middlewares.validateAdmin, orderController.getOrders);

ordersRouter.use('/:id', Middlewares.validateAdmin, Middlewares.checkExistance)

ordersRouter.put('/:id', orderController.updateOrder);
ordersRouter.delete('/:id', orderController.deleteOrder);


module.exports = ordersRouter;