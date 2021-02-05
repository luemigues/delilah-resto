const express = require('express');
const productsRouter = express.Router();

const productController = require('../controllers/productController.js');
const Middlewares = require('../middleware/productMiddlewares.js');

productsRouter.use(Middlewares.checkToken);

productsRouter.get('/', productController.getProducts);
productsRouter.get('/:id', Middlewares.checkExistance, productController.getProduct);

productsRouter.post('/', Middlewares.validateAdmin, productController.createProduct);

productsRouter.use('/:id', Middlewares.validateAdmin, Middlewares.checkExistance)

productsRouter.put('/:id', productController.updateProduct);
productsRouter.delete('/:id', productController.deleteProduct);

module.exports = productsRouter;