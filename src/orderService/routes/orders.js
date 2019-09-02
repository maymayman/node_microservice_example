// const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const { asyncMiddleware } = require('../global/function');
const OrderController = require('../controllers/OrderController');
const orderValidate = require('../validate/order');

/* GET order detail. */
router.get('/:id', asyncMiddleware(OrderController.findById));

/* POST orders create. */
router.post('/', orderValidate.create, asyncMiddleware(OrderController.create));

/* PUT orrder update. */
router.put('/:id', orderValidate.update, asyncMiddleware(OrderController.update));

module.exports = router;
