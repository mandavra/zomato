
const mongoose = require("mongoose");

const restroSchema = mongoose.Schema({
  type: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },

  name: {
    type: String,
    trim: true,
  },

  number: {
    type: String,
    trim: true,
  },
  
  pincode: {
    type: String,
    trim: true,
  },
});

const restro = mongoose.model("restroSchema", restroSchema);

module.exports = restro;
