const ProductModel = require('../models/productModel');
const { verifyToken } = require('../auth/auth.js');

module.exports = class Middlewares {

    static async checkExistance(req, res, next){
        try{
            const id = req.params.id
            const product = await ProductModel.findByPk(id)
    
             if(product === null){
                    res.status(404).send('Product not found!')
            }else{
                next()
            }
        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    
    }

    static validateAdmin (req, res, next){

        try{
            const token = req.headers.authorization;
            const verifiedUser = verifyToken(token);
            const { is_admin } = verifiedUser;

            if(is_admin){
                next()
            }else {
                res.status(401).json("Unauthorized");
            }
        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }

    }

    static checkToken(req, res, next){
        const token = req.headers.authorization;
        if(token){
            next()
        }else{
            res.status(401).json("Unauthorized - Please login");
        }
    }
}