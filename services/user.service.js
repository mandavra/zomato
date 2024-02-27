const { userSchema } = require("../models");

const addUser = (body) => {
  return userSchema.create(body);
};

const getuser = () => {
  return userSchema.find();
};

const deleteuser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

const findUser = (email) => {
  return userSchema.findOne({ email:email });
};

const updateuser = (body, id) => {

  return userSchema.findByIdAndUpdate(id, { $set: body })

}

module.exports = { addUser, getuser, deleteuser,findUser,updateuser};
