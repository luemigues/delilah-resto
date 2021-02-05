const bodyParser = require('body-parser');
const UserModel = require('../models/userModel');
const { verifyToken } = require('../auth/auth.js');

module.exports = class Middlewares {

    static bodyParser(req, res, next){
    bodyParser.json()
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
            res.status(500).json('Server Error')
            console.log(err)
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
                res.status(500).json('Server Error')
                console.log(err)
            }
        }
    }

    static validateIdOwnership(req, res, next){
        try{
            const paramId = req.params.id
    
            const token = req.headers.authorization;
            const verifiedUser = verifyToken(token);
            const tokenId = verifiedUser.userId
    
            if(paramId == tokenId || verifiedUser.is_admin){
                next()
            }else{
                res.status(401).json("Unauthorized");
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


    static async validateToken(req, res, next){
        const token = req.headers.authorization;
        try {
            if(token){

                // Verify token
                const verifiedUser = verifyToken(token);
                // Verify with token if user exists
                const validUser = await UserModel.findOne({ where: { id: verifiedUser.userId } });
    
                if (validUser) {
                    next();
                } else {
                    res.status(400).json("Invalid access token");
                }
            }else{
                res.status(400).json("No access token provided");
            }
            
        } catch (err) {
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

}