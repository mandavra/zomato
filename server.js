require("dotenv").config();
const http = require("http");
const express = require("express");
const { connectDB } = require("./db/db.connection");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cookieParser=require("cookie-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// ejs 
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("./login.ejs");
});

app.get("/register", (req, res) => {
  res.render("./register.ejs");
});


app.get("/order", (req, res) => {
  res.render("./order.ejs");
});
app.get("/itemlist", (req, res) => {
  res.render("./itemlist.ejs");
});

app.get("/categorie", (req, res) => {
  res.render("./categorie.ejs");
});
// cookie

app.use(cookieParser());
// Database connection file
connectDB();
app.use("/v1", routes);

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started",process.env.PORT);
}); 

