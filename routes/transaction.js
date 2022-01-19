const express = require('express');

const transactionController = require('../controllers/transaction');

const router = express.Router();

router.get('/transactions/:accountId', transactionController.getTransaction);

module.exports = router;