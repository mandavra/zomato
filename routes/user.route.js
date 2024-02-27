const express = require("express");
const { userController } = require("../controllers");
const { restrict, authanticate } = require("../middlewares/auth");
const { userValidation } = require("../validations");
const validate = require("../middlewares/validate")

const route = express.Router();

route.post("/login",userController.loginUser);

route.post("/add", validate(userValidation.adduser), userController.addUser);
route.get("/get",authanticate,restrict(["user"]),userController.getuser);
route.delete("/delete/:id", userController.deleteuser);
route.put('/update/:id', userController.updateuser)
module.exports = route;