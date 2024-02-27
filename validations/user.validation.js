const Joi = require("joi")

const adduser = {
  body: Joi.object().keys({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().required(),
    password : Joi.string().required(),
    role:Joi.string().required().trim(),
  }),
};

module.exports = { adduser};    