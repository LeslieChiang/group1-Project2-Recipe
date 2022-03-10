// Generate the app routes, init passport & session
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// const passport = require("./passport");

const recipeRoutes = require("./recipeRoutes");
// const loginRoutes = require("./loginRoutes");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["*"], //["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(recipeRoutes);
// app.use(loginRoutes);

module.exports = app;
