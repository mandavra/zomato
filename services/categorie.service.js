const { categorieSchema } = require("../models");

const addcategorie = (body) => {
  return categorieSchema.create(body);
};

const getcategorie = () => {
  return categorieSchema.find();
};

const deletecategorie = (id) => {
  return categorieSchema.findByIdAndDelete(id);
};

const updatecategorie = (body, id) => {

  return categorieSchema.findByIdAndUpdate(id, { $set: body })

}


module.exports = { addcategorie, getcategorie, deletecategorie,updatecategorie};
