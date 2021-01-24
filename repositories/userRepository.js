const UserModel = require('../models/userModel.js');
const attributes = {attributes: ['username', 'fullname', 'email', 'address', 'phone']}
module.exports = class UserRepository{

    static async createUser(user){
      const newUser = await UserModel.create(user,{fields: ['username', 'fullname', 'email', 'address', 'phone', 'password']});
        return await UserModel.findByPk(newUser.id, attributes)
    }

    static async getUsers(){
        return await UserModel.findAll(attributes)
    }

    static async getUser(id){
        return await UserModel.findByPk(id, attributes)
    }

    static async updateUser(id, userUpdate){
        await UserModel.update(userUpdate, { where: { id: id } })
        const updatedUser = await UserModel.findByPk(id, attributes)
        return updatedUser;
    }

    static async deleteUser(id){
        const updatedUser = await UserModel.findByPk(id, attributes)
        await UserModel.update({ is_active: '0' }, { where: { id: id } })
        return updatedUser;
    }
}
