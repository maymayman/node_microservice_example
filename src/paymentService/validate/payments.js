const Joi = require('@hapi/joi');
const createError = require('http-errors');

module.exports = {
  create: (req, res, next) => {
    const body = req.body;
    const schema = Joi.object().keys({
      orderId: Joi.number().required(),
      price: Joi.number().required(),
    });

    const { error } = Joi.validate(body, schema);
    
    if (error) return next(new createError.BadRequest(error.details[0].message));
    
    body.status = Math.floor(Math.random() * Math.floor(2))
      ? 'confirmed'
      : 'declined';

    return next();
  }
};
