const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
      .connect("mongodb+srv://man:123@cluster0.yxujymc.mongodb.net/zomato")
      .then(() => {
        console.log("db connect success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  module.exports = { connectDB };