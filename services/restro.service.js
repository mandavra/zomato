const { restroSchema } = require("../models");

const addrestro = (body) => {
  return restroSchema.create(body);
};

const getrestro = () => {
  return restroSchema.find();
};

const deleterestro = (id) => {
  return restroSchema.findByIdAndDelete(id);
};

const updaterestro = (body, id) => {

  return restroSchema.findByIdAndUpdate(id, { $set: body })

}


module.exports = { addrestro, getrestro, deleterestro,updaterestro};
