const bodyParser = require('body-parser');
const UserModel = require('../models/userModel');
const OrderModel = require('../models/orderModel');
const ProductModel = require('../models/productModel');

module.exports = class Middlewares {

    static bodyParser (req, res, next){
    bodyparser.json()
    next()
    }

    static async checkExistance(req, res, next){
        const id = req.params.id
        const user = await UserModel.findByPk(id)

         if(user === null){
                res.status(404).send('User not found!')
        }else{
             console.log('hola')
            next()
        }
    
    }
}