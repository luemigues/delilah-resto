require('dotenv').config({ path: '../config.env' });
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(`mysql://root:${process.env.DB_PASS}@127.0.0.1:3306/delilah_resto`);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        
    } catch(error){
        console.error('Unable to connect to the database:', error)
    }
})();

module.exports = sequelize;