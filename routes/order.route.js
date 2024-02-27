const express = require("express");
const validate = require("../middlewares/validate");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(orderValidation.addoreder), orderController.addorder);
route.get("/get", orderController.getorder);
route.delete("/delete/:id", orderController.deleteorder);
route.put('/update/:id', orderController.updateorder)
module.exports = route;
