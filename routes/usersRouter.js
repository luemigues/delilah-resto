const express = require('express');
const usersRouter = express.Router();
const userController = require('../controllers/userController.js');
const Middlewares = require('../middleware/userMiddlewares.js');

usersRouter.post('/login', userController.login)
usersRouter.post('/', Middlewares.checkDataAvailability, userController.createUser);

usersRouter.use('/', Middlewares.validateToken)

usersRouter.get('/', Middlewares.validateAdmin, userController.getUsers);

usersRouter.use('/:id', Middlewares.validateIdOwnership, Middlewares.checkExistance);

usersRouter.get('/:id', userController.getUser);
usersRouter.put('/:id', userController.updateUser);
usersRouter.delete('/:id', userController.deleteUser);


module.exports = usersRouter;