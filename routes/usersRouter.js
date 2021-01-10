const express = require('express');
const usersRouter = express.Router();
const userController = require('../controllers/userController.js')

usersRouter.post('/', async (req,res)=> {

    let newUser = {
        username: 'alice123',
      fullname: 'Alice Wonderland',
      email: 'alice123@gmail.com',
      address: 'Montevideo 552',
      phone: '541168651253',
      password: 1234
    };  
    let user = await userController.createUser(newUser);
    res.json(user)
});

module.exports = usersRouter;