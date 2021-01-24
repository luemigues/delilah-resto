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
}


