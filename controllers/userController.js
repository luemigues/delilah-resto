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

// const user1 = {
//     username: 'alice123',
//   fullname: 'Alice Wonderland',
//   email: 'alice123@gmail.com',
//   address: 'Montevideo 552',
//   phone: '541168651253',
//   password: 1234
// }
// const res = JSON.stringify(user1);
// console.log(res);
