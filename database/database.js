const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://127.0.0.1:3306/?user=root/delilah_resto');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch(error){
        console.error('Unable to connect to the database:', error)
    }
})();

module.exports = sequelize;