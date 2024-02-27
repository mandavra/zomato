const Joi = require("joi")

const additemlist = {
  body: Joi.object().keys({
    categoriesid: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    name: Joi.string().required().trim(),
    price: Joi.string().required().trim(),
  }),
};

module.exports = { additemlist};