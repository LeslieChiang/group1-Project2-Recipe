// control logic and Return results from service.model
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;



// import service
const userService = require("../services/userService");

// establish the VehicleController first, then userService
class UserController {
  // POST /protected/onboard {driverId:1, vehicleId:1}
  async login(req, res, next) {
    // console.log(typeof req.body.driverId, typeof req.body.vehicleId);
    // if (
    //   typeof req.body.driverId !== "number" ||
    //   typeof req.body.vehicleId !== "number"
    // ) {
    //   res.status(400); // bad request
    //   return res.json({ message: "Incorrect request data" });
    // }

    // // use the service layer
    // // perform after UserController is working
    // const result = await userService.onboard(
    //   req.body.vehicleId,
    //   req.body.driverId
    // );
    // res.status(result.status);

    // // Return results from service
    // return res.json({ data: result.data, message: result.message });

    app.post(
      "/login",
      passport.authenticate("local", { failureRedirect: "/login" }),
      function (req, res) {
        res.redirect("/");
      }
    );
  }

  async logout(req, res, next) {
    // // use the service layer
    const result = await userService.logout(req, res);
    res.status(result.status);

    // // Return results from service
    return res.redirect("/login");
  }

  async register(req, res, next) {
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
    // res.status(result.status);

    // res.redirect("/login");

    console.log("controller result: ", result);
    // Return results from service
    return res.json({ status: result.status, message: result.message });
  }
}

module.exports = UserController;
