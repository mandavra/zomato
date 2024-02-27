const Joi = require("joi")

const addrestro = {
  body: Joi.object().keys({
    type: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    name: Joi.string().required().trim(),
    number: Joi.string().required(),
    pincode: Joi.string().required(),
    
  }),
};

module.exports = { addrestro};