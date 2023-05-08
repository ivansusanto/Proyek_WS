const Sequelize = require('sequelize');
const { db_name, user, password, host, port, dialect } = require('../config/config.json');

const sequelize = new Sequelize(
    db_name,
    user,
    password,
    {
        host: host,
        port: port,
        dialect: dialect,
        logging: false
    }
);

module.exports = sequelize;