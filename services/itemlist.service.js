const { itemlistSchema } = require("../models");

const additemlist = (body) => {
  return itemlistSchema.create(body);
};

const getitemlist = () => {
  return itemlistSchema.find().populate("categorie");
};

const deleteitemlist = (id) => {
  return itemlistSchema.findByIdAndDelete(id);
};

const updateitemlist = (body, id) => {

  return itemlistSchema.findByIdAndUpdate(id, { $set: body })

}


module.exports = { additemlist, getitemlist, deleteitemlist,updateitemlist};
