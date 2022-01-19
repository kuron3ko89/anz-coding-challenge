const Sequelize = require ('sequelize');

const sequelize = require('../util/database');

const Account = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  accountNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  accountName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accountType: {
    type: Sequelize.ENUM('Savings', 'Current'),
    allowNull: false
  },
  balanceDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  currency: {
    type: Sequelize.STRING,
    allowNull: false
  },
  openingAvailableBalance: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

module.exports = Account;