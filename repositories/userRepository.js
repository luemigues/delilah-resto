const UserModel = require('../models/userModel.js');
const attributes = {attributes: ['username', 'fullname', 'email', 'address', 'phone']}
const Order = require('../models/orderModel');

module.exports = class UserRepository{

    static async createUser(user){
      const newUser = await UserModel.create(user,{fields: ['username', 'fullname', 'email', 'address', 'phone', 'password', 'is_admin']});
        return await UserModel.findByPk(newUser.id, attributes)
    }

    static async getUsers(){
        return await UserModel.findAll({
            include: [
              {
                model: Order,
                as: 'Orders',
              }]})
    }

    static async getUser(id){
        return await UserModel.findByPk(id, {
            attributes: attributes.attributes,
            include: [
              {
                model: Order,
                as: 'Orders',
              }]})
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
