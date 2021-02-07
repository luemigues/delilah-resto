const OrderModel = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const OrderProduct = require('../models/OrderProdModel.js');
const User = require("../models/userModel");

module.exports = class OrderRepository{

    static async createOrder(order, products){

        const newOrder = await OrderModel.create(order,{fields: ['status', 'time', 'description', 'payment_amount', 'payment_method']});
        
        for(i=0; i < products.length; i++){
            const {amount, product_id} = products[i];
            const orderProd = {
                order_id: newOrder.id,
                product_id: product_id,
                amount: amount
            }
            await OrderProduct.create(orderProd);
        }

        const registeredOrder = await OrderModel.findOne({

            where: {
                id: newOrder.id
              },
              include: [
                {
                model: User,
                as: 'user',
                attributes: ['username', 'fullname', 'email', 'address', 'phone']
              },
              {
                model: Product,
                as: 'order_product',
                through:{
                  as: 'Ordered',
                  attributes: ['amount']
              },
                attributes:['name', 'price']
              }          
            ]
          });

        return registeredOrder
    }
  
      static async getOrders(){

          return await OrderModel.findAll({include: [
            {
            model: User,
            as: 'user',
            attributes: ['username', 'fullname', 'email', 'address', 'phone']
          },
          {
            model: Product,
            as: 'order_product',
            through:{
              as: 'Ordered',
              attributes: ['amount']
          },
            attributes:['name', 'price']
          }          
        ]})
      }
  
      static async getOrder(id){

          return await OrderModel.findByPk(id, {include: [
            {
            model: User,
            as: 'user',
            attributes: ['username', 'fullname', 'email', 'address', 'phone']
          },
          {
            model: Product,
            as: 'order_product',
            through:{
              as: 'Ordered',
              attributes: ['amount']
          },
            attributes:['name', 'price']
          }          
        ]})
      }
  
      static async updateOrder(id, orderUpdate){

          await OrderModel.update(orderUpdate, { where: { id: id } })
          const updatedOrder = await OrderModel.findByPk(id, {include: [
            {
            model: User,
            as: 'user',
            attributes: ['username', 'fullname', 'email', 'address', 'phone']
          },
          {
            model: Product,
            as: 'order_product',
            through:{
              as: 'Ordered',
              attributes: ['amount']
          },
            attributes:['name', 'price']
          }          
        ]})
          return updatedOrder;
      }
  
      static async deleteOrder(id){

          const deletedOrder = await OrderModel.findByPk(id, {include: [
            {
            model: User,
            as: 'user',
            attributes: ['username', 'fullname', 'email', 'address', 'phone']
          },
          {
            model: Product,
            as: 'order_product',
            through:{
              as: 'Ordered',
              attributes: ['amount']
          },
            attributes:['name', 'price']
          }          
        ]});

            await OrderModel.destroy({
            where: {
              id: id
            }
          });

          return deletedOrder;
      }
}

