const { itemlistservice } = require("../services");

const additemlist = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const itemlist = await itemlistservice.additemlist(body);
    console.log(req.body);
  
    res.status(201).json({
      message: "itemlist Created success",  
      data: itemlist,
    })
  
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const getitemlist = async (req, res) => {
  const token = req.cookies["access-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const itemlist = await verifyToken(token);

  console.log(itemlist, "itemlist");

  res.status(200).json({ message: "itemlist get success", itemlist });
  };
  


  const deleteitemlist = async (req, res) => {

  
    let id = req.params.id;
  
    const itemlist = await itemlistservice.deleteitemlist(id);
  
  
    console.log(itemlist, "delete");
  
    res.status(200).json({
      message: "itemlist delete success",
      data: itemlist,
    });
  };  
   
const updateitemlist = async (req, res) => {
  console.log(req.body)
  console.log(req.params);

  let body = req.body
  let { id } = req.params

  let itemlist = await itemlistservice.updateitemlist(body, id)

  res.status(200).json({
      message: "itemlist updated success",
      itemlist
  })


}
module.exports = { additemlist,getitemlist,deleteitemlist,updateitemlist};
