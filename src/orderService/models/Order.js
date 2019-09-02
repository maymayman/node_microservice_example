'use strict';

const Sequelize = require('Sequelize');
module.exports = (sequelize) => {
  const model = sequelize.define('Orders', {
    id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
    userId: { type: Sequelize.BIGINT },
    status: { type: Sequelize.ENUM, values: ['created', 'confirmed', 'delivered', 'cancelled'] },
  });

  return model;
};