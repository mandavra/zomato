const Joi = require("joi");
const { userController } = require("../controllers");

const addoreder = {
  body: Joi.object().keys({
    restroid: Joi.string().required().trim(),
    itemlistid: Joi.string().required().trim(),
    userid: Joi.string().required().trim(),
  }),
};

module.exports = { addoreder};


