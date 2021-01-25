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
        try{
            const id = req.params.id
            const user = await UserModel.findByPk(id)
    
             if(user === null){
                    res.status(404).send('User not found!')
            }else{
                next()
            }
        }catch(err){
            new Error(err)
        }
    
    }

    static async checkDataAvailability(req, res, next){
        const {username, email} = req.body

        if(username && email){
            try{
                const validUsername = await UserModel.findOne({ where: { username: username } });
                const validEmail = await UserModel.findOne({ where: { email: email } });
    
                if(!validUsername && !validEmail){
                    next()
                }else{
                    res.status(400).json('Username or email already registered')
                }

            }catch(err){
                new Error(err)
            }
        }
    }

    static validateAdmin (req, res, next){

        try{
            const token = req.headers.authorization;
            const validatedUser = JWT.verify(token, signature);
            const { is_admin } = validatedUser;
            if(is_admin){
                req.is_admin = is_admin;
                next()
            }else {
                res.status(401).json("Unauthorized");
            }
        }catch(err){
            new Error(err);
        }

    }

    static async valiateUserCredentials(req, res, next){
        const { username, password } = req.body;
        try {
            const validUser = await UserModel.findOne({ where: { username: username } });
            if (validUser) {
            
                next();
            } else {
                res.status(400).json("Invalid Username");
            }
            
        } catch (err) {
            new Error(err)
        }
    }

}