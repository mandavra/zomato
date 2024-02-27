const { categorieservice } = require("../services");

const addcategorie = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const categorie = await categorieservice.addcategorie(body);
    console.log(req.body);
  
    res.status(201).json({
      message: "categorie Created success",  
      data: categorie,
    })
  
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const getcategorie = async (req, res) => {
  const token = req.cookies["access-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const categorie = await verifyToken(token);

  console.log(categorie, "categorie");

  res.status(200).json({ message: "categorie get success", categorie });
  };
  


  const deletecategorie = async (req, res) => {

  
    let id = req.params.id;
  
    const categorie = await categorieservice.deletecategorie(id);
  
  
    console.log(categorie, "delete");
  
    res.status(200).json({
      message: "categorie delete success",
      data: categorie,
    });
  };  
   
const updatecategorie = async (req, res) => {
  console.log(req.body)
  console.log(req.params);

  let body = req.body
  let { id } = req.params

  let categorie = await categorieservice.updatecategorie(body, id)

  res.status(200).json({
      message: "categorie updated success",
      categorie
  })


}
  
module.exports = { addcategorie,getcategorie,deletecategorie,updatecategorie};
