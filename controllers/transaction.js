const Transaction = require('../models/transaction')

exports.getTransaction = (req, res, next) => {
  const accountId = req.params.accountId;
  Transaction.findAll({
    where: {
      accountId: accountId
    },
    include: [
     'account'
    ]
  })
    .then(transactions => {
      console.log(transactions[0].account);
      res.render('transaction', {
        transactions: transactions,
        pageTitle: "Account View",
        path: '/transactions'
      });
    })
    .catch(err => {
      console.log(err);
    })
};