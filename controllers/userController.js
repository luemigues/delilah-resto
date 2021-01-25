const userRepository = require('../repositories/userRepository');

module.exports = class UserController {
    
    static async createUser(req, res){
        const {
            username,
            fullname,
            email,
            address,
            phone,
            password,
          } = req.body;

        if(username && fullname && email && address && phone && password){
            try{
                const newUser = {
                    username: username,
                    fullname: fullname,
                    email: email,
                    address: address,
                    phone: phone,
                    password: password
                }

                let user = await userRepository.createUser(newUser);
                res.status(201).json(user)

            }catch(err){
                next(new Error(err));
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
            new Error(err)
        }
    }

    static async getUser(req, res){
        try{
            let userId = req.params.id
            let user = await userRepository.getUser(userId)
            res.json(user)

        }catch(err){
            new Error(err)
        }
    }

    static async updateUser(req, res){
        try{
            let userId = req.params.id
            let userUpdate = req.body
            let user = await userRepository.updateUser(userId, userUpdate)
            res.json(user)
        }catch(err){
            new Error(err)
        }
    }

    static async deleteUser(req, res){
        try{
            let userId = req.params.id
            let user = await userRepository.deleteUser(userId)
            res.json(user)
            res.status(204)
        }catch(err){
            new Error(err)
        }
    }
}


