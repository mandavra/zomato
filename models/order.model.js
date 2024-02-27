
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  restroid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restroSchema",
  },
  itemlistid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "itemlistSchema",
  },

  itemlistiditemlistid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderSchema",
  },
});

const order = mongoose.model("orderSchema", orderSchema);

module.exports = order;
