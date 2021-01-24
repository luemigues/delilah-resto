const express = require('express');
const usersRouter = express.Router();
const userController = require('../controllers/userController.js');


usersRouter.post('/', userController.createUser);

module.exports = usersRouter;