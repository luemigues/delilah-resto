const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

class OrderProduct extends Model {}

OrderProduct.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // allowNull defaults to true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
  sequelize,
  timestamps: false,  // We need to pass the connection instance
  modelName: 'OrderProduct', // We need to choose the model name
});

// the defined model is the class itself
console.log(OrderProduct === sequelize.models.OrderProduct); // true

module.exports = OrderProduct;