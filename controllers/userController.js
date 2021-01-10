const userRepository = require('../repositories/userRepository');

module.exports = class UserController {
    
    static createUser(user){
        return userRepository.createUser(user);
    }
}
