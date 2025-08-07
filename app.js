const express = require("express");
const app = express();
const ejs = require("ejs");
require("dotenv").config();
const studentrouter = require("./app/router/studentrouter");

const dbConnection = require("./app/config/dbconnect");
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use(studentrouter);

app.listen(3001, () => {
  console.log("server port 3001 ");
});
