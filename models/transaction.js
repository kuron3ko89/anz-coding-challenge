const Sequelize = require ('sequelize');

const sequelize = require('../util/database');

const Transaction = sequelize.define('transaction', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  valueDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  debitAmount: {
    type: Sequelize.DOUBLE
  },
  creditAmount: {
    type: Sequelize.DOUBLE
  },
  debitCredit: {
    type: Sequelize.ENUM('Debit', 'Credit'),
    allowNull: false
  },
  transactionNarrative: {
    type: Sequelize.STRING
  }
});

module.exports = Transaction;