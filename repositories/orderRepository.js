const orderModel = require('../models/orderModel.js');

module.exports = class OrderRepository{

    static createOrder(order){
        return orderModel.create(order,{ fields: [] });
    }
}
