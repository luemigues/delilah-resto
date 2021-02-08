require('dotenv').config({ path: '../config.env' });
const mysql = require('mysql2/promise');
const {Sequelize} = require('sequelize');

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const password = process.env.DB_PASS
const user = process.env.DB_USER
const database = process.env.DB_NAME
const dialect = process.env.DB_DIALECT

// connect to db
const sequelize = new Sequelize(database, user, password, { dialect: `${dialect}` });

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // sync all models with database
    await sequelize.sync();
}

module.exports = sequelize;