const Joi = require("joi")

const addcategorie = {
  body: Joi.object().keys({
    type: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    name: Joi.string().required().trim(),
    
  }),
};

module.exports = { addcategorie};