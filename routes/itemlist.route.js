const express = require("express");
const validate = require("../middlewares/validate");
const { itemlistValidation } = require("../validations");
const { itemlistController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(itemlistValidation.additemlist), itemlistController.additemlist);
route.get("/get", itemlistController.getitemlist);
route.delete("/delete/:id", itemlistController.deleteitemlist);
route.put('/update/:id', itemlistController.updateitemlist)
module.exports = route;
