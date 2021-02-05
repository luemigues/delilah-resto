const userRepository = require('../repositories/userRepository');
const UserModel = require('../models/userModel.js');
const { signToken } = require('../auth/auth.js');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.CRYPTOKEY);

module.exports = class UserController {
    
    static async createUser(req, res){
        const {
            username,
            fullname,
            email,
            address,
            phone,
            password,
            is_admin
          } = req.body;

        if(username && fullname && email && address && phone && password){
            try{
                const hashedPass = cryptr.encrypt(password);
                console.log(is_admin)

                const newUser = {
                    username: username,
                    fullname: fullname,
                    email: email,
                    address: address,
                    phone: phone,
                    password: hashedPass,
                    is_admin: is_admin
                }

                let user = await userRepository.createUser(newUser);
                res.status(201).json(user)

            }catch(err){
                res.status(500).json('Server Error')
                console.log(err)
            }
        }else{
            res.status(400).json("Missing information");
        }
    }

    static async getUsers(req, res){
        try{
            let users = await userRepository.getUsers()
            res.json(users)

        }catch(err){
            res.status(500).json('Server Error')
                console.log(err)
        }
    }

    static async getUser(req, res){
        try{
            let userId = req.params.id
            let user = await userRepository.getUser(userId)
            res.status(200).json(user)

        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

    static async updateUser(req, res){
        try{
            let userId = req.params.id
            let userUpdate = req.body
            let user = await userRepository.updateUser(userId, userUpdate)
            res.status(200).json(user)
        }catch(err){
            res.status(500).json('Server Error')
            console.log(err)
        }
    }

    static async deleteUser(req, res){
        try{
            let userId = req.params.id
            let user = await userRepository.deleteUser(userId)
            res.json(user)
            res.status(204)
        }catch(err){
            res.status(500).json('Server Error')
             console.log(err)
        }
    }

    static async login(req, res){
        const { username, password } = req.body;
        if(username && password){
            try {
                const validUser = await UserModel.findOne({ 
                    where: { 
                        username: username
                    }
                });
                
                if (validUser) {
                    const decryPass = cryptr.decrypt(validUser.password);

                    if(password == decryPass){
                        const token = signToken(validUser.id, validUser.is_admin)
                        res.status(200).json(token)

                    }else{
                        res.status(400).json("Invalid password");
                    }


                } else {
                    res.status(400).json("Invalid Username");
                }
                
            } catch (err) {
                res.status(500).json('Server Error')
                console.log(err)
            }
        }else{
            res.status(400).json("Missing information");
        }
    }
}