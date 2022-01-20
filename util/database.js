const Sequelize = require('sequelize');

// require('dotenv').config();

 const sequelize = new Sequelize('bank', 'admin', 'Cybermew1!', {
    host: 'aa1bx8edifnzb9x.cqwk4h8lorda.us-east-1.rds.amazonaws.com',
    port: 3306,
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