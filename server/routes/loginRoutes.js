// call controller for respective routes
const passport = require("./passport");

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

// const passport = require("passport");
// const passportJwt = require("passport-jwt");
// const ExtractJwt = passportJwt.ExtractJwt;
// const StrategyJwt = passportJwt.Strategy;

// const fs = require("fs");
// const User = require("../models");
// const key = fs.readFileSync(process.env.SECRET_KEY);
// passport.use(
//   new StrategyJwt(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: key,
//     },
//     (jwtPayload, callback) => {
//       return User.findOne({ where: { id: jwtPayload.id } })
//         .then((user) => {
//           console.log(user);
//           return callback(null, user);
//         })
//         .catch((err) => {
//           console.log(err);
//           return callback(err);
//         });
//     }
//   )
// );

// Import User controller
const UserController = require("../controllers/userController");
// Instantiate a new class instance
const userController = new UserController();

router
  .route("/login")
  .get((request, response) => {
    response.send("You have called a login route!");
    // if (request.isAuthenticated()) {
    //   response.redirect("/");
    // } else {
    //   response.redirect("/login");
    // }
  })
  .post(userController.login)
  // .post((request, response) => {
  //   passport.authenticate("local", {
  //     successRedirect: "/",
  //     failureRedirect: "/register",
  //     failureFlash: true,
  //   });
  // });

// userRouter.post('/login', passport.authenticate('local', {session: false}), (req, res) => {
//   if(req.isAuthenticated()) {
//       const {_id, username, role} = req.user;
//       const token = signToken(_id);
//       res.cookie('access_token', token, {httpOnly: true, sameSite: true});
//       res.status(200).json({isAuthenticated: true, user: {username, role}})
//   }
// });

router
  .route("/logout")
  .get(
    // passport.authenticate("jwt", { session: false }),
    (request, response) => {
      response.clearCookie("access_token");
      response.send("You are logged out now!");
    }
  )
  .post(userController.logout);

router
  .route("/register")
  .get((request, response) => {
    response.send("You have called a register route!");
  })
  .post(userController.register);

router
  .route("/")
  .get(
    // passport.authenticate("jwt", { session: false }),
    (request, response) => {
      response.send("You have called the root route...test !");
      // if (request.isAuthenticated()) {
      //   response.send("You have called the root route!");
      // } else {
      //   response.redirect("/login");
      // }
    }
  );

const authenticateWithJwt = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, jwt_payload) => {
    if (error) {
      return next(error);
    }

    User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err || !user) {
        return next(err || new Error("Could not find user"));
      }

      next(user);
    });
  })(req, res);
};

router.get("/", authenticateWithJwt, (req, res) => {
  res.status(200).json({ message: "it works!" });
});

module.exports = router;
