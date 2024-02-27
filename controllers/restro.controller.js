const { restroservice } = require("../services");

const addrestro = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const restro = await restroservice.addrestro(body);
    console.log(req.body);
  
    res.status(201).json({
      message: "restro Created success",  
      data: restro,
    })
  
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getrestro = async (req, res) => {
  const token = req.cookies["access-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const restro = await verifyToken(token);

  console.log(restro, "restro");

  res.status(200).json({ message: "restro get success", restro });
  };
  


  const deleterestro = async (req, res) => {

  
    let id = req.params.id;
  
    const restro = await restroservice.deleterestro(id);
  
  
    console.log(restro, "delete");
  
    res.status(200).json({
      message: "restro delete success",
      data: restro,
    });
  };  
   
const updaterestro = async (req, res) => {
  console.log(req.body)
  console.log(req.params);

  let body = req.body
  let { id } = req.params

  let restro = await restroservice.updaterestro(body, id)

  res.status(200).json({
      message: "restro updated success",
      restro
  })


}
module.exports = { addrestro,getrestro,deleterestro,updaterestro};
