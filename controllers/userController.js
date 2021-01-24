const userRepository = require('../repositories/userRepository');

module.exports = class UserController {
    
    static async createUser(req, res){
            const newUser = {
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: req.body.password
            }
            let user = await userRepository.createUser(newUser);
            res.json(user)
    }

    static async getUsers(req, res){
        let users = await userRepository.getUsers()
        res.json(users)
    }

    static async getUser(req, res){
        let userId = req.params.id
        let user = await userRepository.getUser(userId)
        res.json(user)
    }

    static async updateUser(req, res){
        let userId = req.params.id
        let userUpdate = req.body
        let user = await userRepository.updateUser(userId, userUpdate)
        res.json(user)
    }

    static async deleteUser(req, res){
        let userId = req.params.id
        let user = await userRepository.deleteUser(userId)
        res.json(user)
        res.status(204)
    }
}


