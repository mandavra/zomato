
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // imageName: {
  //   type: String,
  //   required: true,
  // },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,


  },
  role: {
    type: String,
    enums: ["user", "admin"],
    default: "user"

  }
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
