const express = require("express");
const routes = express.Router();
const userRoutes = require("./user.route");
const categorieRoutes = require("./categorie.route");
const itemlistRoutes = require("./itemlist.route");
const orderRoutes = require("./order.route");
const restroRoutes = require("./restro.route");



routes.use("/order", orderRoutes);
routes.use("/categorie", categorieRoutes);
routes.use("/itemlist", itemlistRoutes);
routes.use("/restro", restroRoutes);
routes.use("/user", userRoutes);


module.exports = routes;
    