const { userservice } = require("../services");
const { createToken, verifyToken } = require("../middlewares/auth");
const {send_Mail} = require("../services/email.service");


const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    

    const user = await userservice.addUser(body);

    if (user) {
      
      const email = await send_Mail(user.email);
      console.log("mail forwered ", email.envelope);
    }
    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
const loginUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userservice.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
  } else {
    if (password === findUser.password) {
      const token = createToken(findUser);
      res.cookie("accesstoken", token);

      res.status(200).json({

        message: "login success",
        data: findUser,
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }
};


const getuser = async (req, res) => {
  const token = req.cookies["accesstoken"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const user = await verifyToken(token);

  console.log(user, "user");

  res.status(200).json({ message: "user get success", user });
};



const deleteuser = async (req, res) => {


  let id = req.params.id;

  const user = await userservice.deleteuser(id);


  console.log(user, "delete");

  res.status(200).json({
    message: "user delete success",
    data: user,
  });
};
 
const updateuser = async (req, res) => {
  console.log(req.body)
  console.log(req.params);

  let body = req.body
  let { id } = req.params

  let user = await userservice.updateuser(body, id)

  res.status(200).json({
      message: "user updated success",
      user
  })


}

module.exports = { addUser, loginUser, getuser, deleteuser,updateuser};
