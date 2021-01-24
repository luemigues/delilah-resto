const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database.js');

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: DataTypes.STRING(45),
    allowNull: false,
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),

  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: '0'
  }, 
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: '1'
  }
}, {
  // Other model options go here
  sequelize,
  timestamps: false,  // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'users'
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = User;