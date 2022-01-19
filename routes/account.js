const express = require('express');

const accountController = require('../controllers/account');

const router = express.Router();

router.get('/', accountController.getIndex);

module.exports = router;