const sequelize = require('../database');
const OrderModel = require('../models/Order')(sequelize);

module.exports = {
  Order: OrderModel
};
