const PaymentModel = require('../models/index').Payment;

module.exports = {
  create: async (req, res) => {
    const data = req.body;
    
    const payment = await PaymentModel.create(data);

    res.json(payment);
  }
};
