const Sequelize = require('sequelize');

require('dotenv').config();

 const sequelize = new Sequelize('mysql', process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions: {
        ssl:'Amazon RDS'
    },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en'
})

module.exports = sequelize;