const Joi = require('@hapi/joi');
const createError = require('http-errors');

module.exports = {
  create: (req, res, next) => {
    const body = req.body;
    const schema = Joi.object().keys({
      userId: Joi.number().required(),
    });

    const { error } = Joi.validate(body, schema);
    
    if (error) return next(new createError.BadRequest(error.details[0].message));
    body.status = 'created';

    next();
  },

  update: (req, res, next) => {
    const body = req.body;
    const schema = Joi.object().keys({
      status: Joi.string().valid('confirmed', 'delivered', 'cancelled')
    });

    const { error } = Joi.validate(body, schema);
    
    if (error) return next(new createError.BadRequest(error));

    next();
  }
};
