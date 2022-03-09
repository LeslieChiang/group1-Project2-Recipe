// Generate the app routes, init passport & session
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// const passport = require("./passport");



// const session = require('express-session')
// const pgSession = require('connect-pg-simple')(session)


// const sequelize = require("../models");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// var sessionStore = new SequelizeStore({
//    db: sequelize,
//    checkExpirationInterval: 15 * 60 * 1000,
//    expiration: 7 * 24 * 60 * 60 * 1000
// });

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false, saveUninitialized: false,
//   store: sessionStore
// }));

// sessionStore.sync()


// const sessionConfig = {
//   store: new pgSession({
//       pool: sessionDBaccess,
//       tableName: 'session'
//   }),
//   name: 'SID',
//   secret: randomString.generate({
//       length: 14,
//       charset: 'alphanumeric'
//   }),
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//       aameSite: true,
//       secure: false // ENABLE ONLY ON HTTPS
//   }}










// const recipeRoutes = require("./recipeRoutes");
const loginRoutes = require("./loginRoutes");


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

// app.use(recipeRoutes);
app.use(loginRoutes);

module.exports = app;
