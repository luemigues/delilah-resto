const orderRepository = require('../repositories/orderRepository');

module.exports = class OrderController {
    
    static async createOrder(req, res){
            const newOrder = {
                
            }
            let order = await orderRepository.createOrder(newOrder);
            res.json(order)
    }
}


