const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

class Product extends Model {}

Product.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
    // allowNull defaults to true
  },
  price: {
    type: DataTypes.DECIMAL(2,0),
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING(100)
  }
}, {
  // Other model options go here
  sequelize,
  timestamps: false,  // We need to pass the connection instance
  modelName: 'Product', // We need to choose the model name
  tableName: 'products'
});

// the defined model is the class itself
console.log(Product === sequelize.models.Product); // true

module.exports = Product;