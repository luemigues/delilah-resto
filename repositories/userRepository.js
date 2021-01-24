const UserModel = require('../models/userModel.js');

module.exports = class UserRepository{

    static createUser(user){
        return UserModel.create(user,{ fields: ['username', 'fullname', 'email', 'address', 'phone', 'password'] });
    }
}
