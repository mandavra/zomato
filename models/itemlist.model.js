
const mongoose = require("mongoose");

const itemlistSchema = mongoose.Schema({
    categoriesid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item-listSchema",
  },
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },
});

const itemlist = mongoose.model("itemlistSchema", itemlistSchema);

module.exports = itemlist;
