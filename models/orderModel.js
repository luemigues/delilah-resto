const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');
const User = require('./userModel.js');
const Product = require('./productModel.js');
const OrderProduct = require('./orderProdModel');

const status = {
  new: 'New',
  confirmed: 'Confirmed',
  inProgress: 'In Progress',
  sent: 'Sent',
  recieved: 'Recieved',
  canceled: 'Canceled'
}

class Order extends Model {}

Order.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.STRING(25),
    allowNull: false,
    defaultValue: status.new
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  payment_amount: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  payment_method: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize,
  timestamps: false,  // We need to pass the connection instance
  modelName: 'Order', // We need to choose the model name
  tableName: 'orders'
});

Order.belongsTo(User, { as: 'user' });

User.hasMany(Order, {foreignKey: 'userId'});

Order.belongsToMany(Product, { as: 'order_product', through: OrderProduct, foreignKey: 'order_id' });

Product.belongsToMany(Order, { as: 'products', through: OrderProduct, foreignKey: 'product_id' });


// the defined model is the class itself
console.log(Order === sequelize.models.Order); // true

module.exports = Order;