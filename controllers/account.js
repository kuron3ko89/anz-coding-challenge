const Account = require("../models/account");

exports.getIndex = (req, res, next) => {
  Account.findAll()
    .then(accounts =>{
      res.render('index', {
        accounts: accounts,
        pageTitle: 'Account Index',
        path: '/index',
        editing: false
      });
    })
    .catch(err => {
      console.log(err)
    });
};