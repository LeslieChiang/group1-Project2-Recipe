// control logic and Return results from service.model

// import service
const userService = require("../services/userService");

// establish the Controller first, then userService
class UserController {
  async register(req, res, next) {
    // { "email": "leslie@abc.com", "password": "abcd" }
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      res.status(400); // bad request
      return res.json({
        message: "Incorrect user inputs: email/password",
      });
    }

    // use the service layer
    const result = await userService.register(email, password);

    console.log("register controller result: ", result);
    res.redirect("/login");
    // res.json({ status: result.status, message: result.message });
    return;
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      res.status(400); // bad request
      return res.json({
        message: "Incorrect user inputs: email/password",
      });
    }

    // use the service layer
    const result = await userService.login(email, password);

    console.log("Login controller result: ", result);
    // res.redirect("/");

    // passport.authenticate("jwt", {
    //   successRedirect: "/",
    //   failureRedirect: "/register",
    //   failureFlash: true,
    // });

    res.json({ status: result.status, message: result.message });
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
}

module.exports = UserController;
