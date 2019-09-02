const createError = require('http-errors');
const OrderModel = require('../models/index').Order;
const PaymentService = require('../services/payment');
const schedule = require('../services/schedule');

module.exports = {
  create: async (req, res) => {
    let transaction;
    const data = req.body;
    const price = data.price;
    delete data.price;
    
    const order = await OrderModel.create(data, { transaction });
    
    let orderSatatus = '';
    try {
      const payment = await PaymentService.create({
        price: price,
        orderId: order.id
      });

      if (payment.status === 'confirmed') orderSatatus = 'confirmed';
      else if (payment.status === 'declined') orderSatatus = 'cancelled';
    } catch (e) {
      orderSatatus = 'cancelled';
      throw e;
    }

    order.set({ status: orderSatatus });
    const result = await order.save({transaction});

    if (orderSatatus === 'confirmed') schedule.deliveredOrder(result);

    res.json(result);
  },

  findById: async (req, res) => {
    const id = req.params.id;
    
    const order = await OrderModel.findByPk(id);

    res.json(order);
  },

  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
    const order = await OrderModel.findByPk(id);

    if (!order) throw new createError.NotFound('Order Not Found!');
    order.set(data);
    const result = await order.save();

    res.json(result);
  },
};