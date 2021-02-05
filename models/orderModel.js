const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');
const User = require('./userModel.js');

class Order extends Model {}

Order.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  status: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  payment_amount: {
    type: DataTypes.DECIMAL(2,0),
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

User.hasOne(Order, {
  foreignKey: {
    name: 'user_id', 
    allowNull: false
  }
});

// the defined model is the class itself
console.log(Order === sequelize.models.Order); // true

module.exports = Order;