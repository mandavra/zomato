
const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  type: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },


});

const categorie = mongoose.model("categorieSchema", categorieSchema);

module.exports = categorie;
