// call controller for respective routes

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

// require("passport");
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

  })
  .post(userController.login);
// .post((request, response) => {
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/register",
//     failureFlash: true,
//   });
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

  // pwd "Renton" / "abcd"

// passport = require("./passport");
// const User = require("../models");

// const passport = require("passport");
// const passportJwt = require("passport-jwt");
// const ExtractJwt = passportJwt.ExtractJwt;
// const StrategyJwt = passportJwt.Strategy;

// const fs = require("fs");
// const { User } = require("../models");
// // const key = fs.readFileSync(process.env.SECRET_KEY);
// const rs256Key = process.env.SECRET_KEY;
// const key = fs.readFileSync(rs256Key);

// passport.use(
//   new StrategyJwt(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: key,
//     },
//     // (jwtPayload, callback) => {
//     //   return User.findOne({ where: { id: jwtPayload.id } })
//     //     .then((user) => {
//     //       console.log(user);
//     //       return callback(null, user);
//     //     })
//     //     .catch((err) => {
//     //       console.log(err);
//     //       return callback(err);
//     //     });
//     // }
//     (jwtPayload, done) => {
//       return done(null, jwtPayload);
//   }
//   )
// );

// const authenticateWithJwt = (req, res, next) => {
//   passport.authenticate(
//     "jwt",
//     { session: false },
//     async (error, jwt_payload) => {
//       // if (error) {
//       //   return next(error);
//       // }

//       // User.findOne({ id: jwt_payload.id }, (err, user) => {
//       //   if (err || !user) {
//       //     return next(err || new Error("Could not find user"));
//       //   }
//       //   console.log("USER: ", user);
//       //   next(user);
//       // });
//       console.log("jwt_payload",jwt_payload);
//       if (error || !jwt_payload) {
//         res.status(401).json({ message: "Unauthorized" });
//       }
//       try {
//         const user = await User.findOne({
//           where: { id: jwt_payload.id },
//         });
//         req.user = user;
//         console.log("USER: ", user);
//       } catch (error) {
//         next(error);
//       }
//       next();
//     }
//   )(req, res, next);
// };

// router.get("/", authenticateWithJwt, (req, res) => {
//   res.status(200).json({ message: "it works!" });
// });

// router.route("/").get(
//   // passport.authenticate("jwt", { session: false }),
//   (request, response) => {
//     response.send("You have called the root route...test !");
//     // if (request.isAuthenticated()) {
//     //   response.send("You have called the root route!");
//     // } else {
//     //   response.redirect("/login");
//     // }
//   }
// );

module.exports = router;
