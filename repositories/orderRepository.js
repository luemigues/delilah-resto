const OrderModel = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const OrderProduct = require('../models/OrderProdModel.js');

module.exports = class OrderRepository{

    static async createOrder(order, products){
        console.log('hola')

        const newOrder = await OrderModel.create(order,{fields: ['user_id','status', 'time', 'description', 'payment_amount', 'payment_method' ]});
        
        for(i=0; i < products.length; i++){
            const {amount, product_id} = products[i];
            const orderProd = {
                order_id: newOrder.id,
                product_id: product_id,
                amount: amount
            }
            const orderAmount = await OrderProduct.create(orderProd)
        }

        const registeredOrder = await OrderModel.findOne({
            where: {
                id: newOrder.id
              },
            include: [{
              model: Product,
              as: 'order_product',
              attributes:['name', 'price']
            }]
          });

        return registeredOrder
    }
  
      static async getOrders(){
          return await OrderModel.findAll()
      }
  
      static async getOrder(id){
          return await OrderModel.findByPk(id)
      }
  
      static async updateOrder(id, orderUpdate){
          await OrderModel.update(orderUpdate, { where: { id: id } })
          const updatedOrder = await OrderModel.findByPk(id)
          return updatedOrder;
      }
  
      static async deleteOrder(id){
          const deletedOrder = await OrderModel.findByPk(id);
            await OrderModel.destroy({
            where: {
              id: id
            }
          });
          return deletedOrder;
      }
}

