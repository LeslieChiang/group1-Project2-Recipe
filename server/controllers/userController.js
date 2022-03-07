// control logic and Return results from service.model
const passport = require("passport");
const LocalStrategy = require("passport-local");

// import service
const userService = require("../services/userService");


/* Configure password authentication strategy.
 * The `LocalStrategy` authenticates users by verifying a username and password.
 * The strategy parses the username and password from the request and calls the
 * `verify` function.
 *
 * The `verify` function queries the database for the user record and verifies
 * the password by hashing the password supplied by the user and comparing it to
 * the hashed password stored in the database.  If the comparison succeeds, the
 * user is authenticated; otherwise, not. */

passport.use(new LocalStrategy(userService.verifyLogin));

/* Configure session management.
 * When a login session is established, information about the user will be
 * stored in the session.  This information is supplied by the `serializeUser`
 * function, which is yielding the user ID and username.
 *
 * As the user interacts with the app, subsequent requests will be authenticated
 * by verifying the session.  The same user information that was serialized at
 * session establishment will be restored when the session is authenticated by
 * the `deserializeUser` function.
 *
 * Since every request to the app needs the user details,
 * that information is stored in the session. */
passport.serializeUser(function (user, callback) {
  process.nextTick(function () {
    callback(null, { id: user.id, userName: user.userName });
  });
});

passport.deserializeUser(function (user, callback) {
  process.nextTick(function () {
    return callback(null, user);
  });
});


// establish the Controller first, then userService
class UserController {

  
  async login(req, res, next) {
    if (
      typeof req.body.userName !== "string" ||
      typeof req.body.emailAddress !== "string" ||
      typeof req.body.passWord !== "string"
    ) {
      res.status(400); // bad request
      return res.json({
        message: "Incorrect user inputs: userName/emailAddress/passWord",
      });
    }

    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/register",
      failureFlash: true,
    });

    // res.json({ status: result.status, message: result.message });
    return;
  }

  async logout(req, res, next) {
    // // // use the service layer
    // const result = await userService.logout(req, res);
    // res.status(result.status);

    // // // Return results from service
    // return res.redirect("/login");
    req.logout();
    res.redirect("/login");
  }

  async register(req, res, next) {
    // { "userName": "Leslie", "emailAddress": "leslie@abc.com", "passWord": "abcd" }

    if (
      typeof req.body.userName !== "string" ||
      typeof req.body.emailAddress !== "string" ||
      typeof req.body.passWord !== "string"
    ) {
      res.status(400); // bad request
      return res.json({
        message: "Incorrect user inputs: userName/emailAddress/passWord",
      });
    }

    // use the service layer
    // perform after UserController is working
    const result = await userService.register(
      req.body.userName,
      req.body.emailAddress,
      req.body.passWord
    );

    console.log("controller result: ", result);
    res.redirect("/login");
    // res.json({ status: result.status, message: result.message });
    return;
  }
}

module.exports = UserController;
