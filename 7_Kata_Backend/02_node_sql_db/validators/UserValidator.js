const { celebrate, Joi, Segments } = require('celebrate');
const { ENUM_ROLES } = require('../utils/consts');
// https://joi.dev/api/

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().alphanum().required(),
      last_name: Joi.string().alphanum().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      biography: Joi.string().required(),
      role: Joi.string().valid(...ENUM_ROLES).default('GUEST'),
    }),
  }), 
}
