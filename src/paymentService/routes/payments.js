// const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const { asyncMiddleware } = require('../global/function');
const PaymentController = require('../controllers/PaymentController');
const paymentValidate = require('../validate/payments');

/* POST orders create. */
router.post('/', paymentValidate.create, asyncMiddleware(PaymentController.create));

module.exports = router;
