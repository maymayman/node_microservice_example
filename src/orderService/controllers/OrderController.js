const createError = require('http-errors');
const OrderModel = require('../models/index').Order;

module.exports = {
  create: async (req, res) => {
    const data = req.body;
    
    const order = await OrderModel.create(data);

    res.json({ order });
  },

  findById: async (req, res) => {
    const id = req.params.id;
    
    const order = await OrderModel.findByPk(id);

    res.json({ order });
  },

  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
    const order = await OrderModel.findByPk(id);

    if (!order) throw new createError.NotFound('Order Not Found!');
    const result = await order.save(data);

    res.json({ order: result });
  },
};