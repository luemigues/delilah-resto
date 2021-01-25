const express = require('express');
const usersRouter = express.Router();
const userController = require('../controllers/userController.js');
const Middlewares = require('../middleware/userMiddlewares.js');


usersRouter.post('/', Middlewares.checkDataAvailability, userController.createUser);
usersRouter.get('/', userController.getUsers);

usersRouter.use('/:id', Middlewares.checkExistance)

usersRouter.get('/:id', userController.getUser);
usersRouter.put('/:id', userController.updateUser);
usersRouter.delete('/:id', userController.deleteUser);


module.exports = usersRouter;