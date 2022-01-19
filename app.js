const express = require('express');
const bodyParser = require('body-parser');

const Account = require('./models/account');
const Transaction = require('./models/transaction');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const sequelize = require('./util/database');

const accountRoutes = require('./routes/account');
const transactionRoutes = require('./routes/transaction');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(accountRoutes);
app.use(transactionRoutes);

Transaction.belongsTo(Account, {constraints: true, onDelete: 'Cascade'});
Account.hasMany(Transaction);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
