const jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const secret = "thiskeyissecret";

const createToken = (data) => {
  const accesstoken = jwt.sign({ data }, secret);
  return accesstoken;
};

const verifyToken = (accesstoken) => {
  return jwt.verify(accesstoken, secret);
};

const authanticate = (req, res, next) => {
  const accesstoken = req.cookie.accesstoken;
  console.log(accesstoken);
  if (!accesstoken) {
    res.status(400).json({
      message: "not login",
    });
  }
  
  req.user = user;
  next();
};

const restrict = ([...role]) => {
  return (req, res, next) => {
    const user = req.user;
    console.log(user, "res");
    if (role.includes(user.data.role)) {
      next();
    } else {
      res.status(400).json({ message: "you are unauthorised" });
    }
  };
};

module.exports = { createToken, verifyToken, authanticate, restrict}