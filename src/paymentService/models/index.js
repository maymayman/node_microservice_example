const sequelize = require('../database');
const PaymentModel = require('./Payment')(sequelize);

module.exports = {
  Payment: PaymentModel
};
