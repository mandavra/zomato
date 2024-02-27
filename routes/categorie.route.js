const express = require("express");
const validate = require("../middlewares/validate");
const { categorieValidation } = require("../validations");
const { categorieController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(categorieValidation.addcategorie), categorieController.addcategorie);
route.get("/get", categorieController.getcategorie);
route.delete("/delete/:id", categorieController.deletecategorie);
route.put('/update/:id', categorieController.updatecategorie)
module.exports = route;
