// Generate the app routes, init passport & session
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const passport = require("passport");
const session = require("express-session");

const generalRoutes = require("./generalRoutes");

const loginRoutes = require("./loginRoutes");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Set up session
app.use(
  session({
    secret: "This is secret.", // process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Set up passport
app.use(passport.initialize());
app.use(passport.session());

// // passport needs ability to serialize and unserialize users out of session
// passport.use(UserDetails.createStrategy());
// passport.serializeUser(UserDetails.serializeUser());
// passport.deserializeUser(UserDetails.deserializeUser());

app.use(generalRoutes);

app.use(loginRoutes);

module.exports = app;
