const express = require("express");
const validate = require("../middlewares/validate");
const { restroValidation } = require("../validations");
const { restroController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(restroValidation.addrestro), restroController.addrestro);
route.get("/get", restroController.getrestro);
route.delete("/delete/:id", restroController.deleterestro);
route.put('/update/:id', restroController.updaterestro)
module.exports = route;
