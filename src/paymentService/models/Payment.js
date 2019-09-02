'use strict';

const Sequelize = require('Sequelize');
module.exports = (sequelize) => {
  const model = sequelize.define('Payments', {
    id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
    orderId: { type: Sequelize.BIGINT },
    status: { type: Sequelize.ENUM, values: ['declined', 'confirmed']  },
    price: { type: Sequelize.DECIMAL(19, 4) },
  });

  return model;
};