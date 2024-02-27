const { orderSchema } = require("../models");

const addorder = (body) => {
  return orderSchema.create(body);
};

const getorder = () => {
  return orderSchema.find().populate("restro").populate("user").populate("itemlist");
};

const deleteorder = (id) => {
  return orderSchema.findByIdAndDelete(id);
};

const updateorder = (body, id) => {

  return orderSchema.findByIdAndUpdate(id, { $set: body })

}


module.exports = { addorder, getorder, deleteorder,updateorder};
