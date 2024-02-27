const { orderservice } = require("../services");

const addorder = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const order = await orderservice.addorder(body);
    console.log(req.body);
  
    res.status(201).json({
      message: "order Created success",  
      data: order,
    })
  
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const getorder = async (req, res) => {
  const token = req.cookies["access-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const order = await verifyToken(token);

  console.log(order, "order");

  res.status(200).json({ message: "order get success", order });
  };
  


  const deleteorder = async (req, res) => {

  
    let id = req.params.id;
  
    const order = await orderservice.deleteorder(id);
  
  
    console.log(order, "delete");
  
    res.status(200).json({
      message: "order delete success",
      data: order,
    });
  };  
  
const updateorder = async (req, res) => {
  console.log(req.body)
  console.log(req.params);

  let body = req.body
  let { id } = req.params

  let order = await orderservice.updateorder(body, id)

  res.status(200).json({
      message: "order updated success",
      order
  })


}
module.exports = { addorder,getorder,deleteorder,updateorder};
