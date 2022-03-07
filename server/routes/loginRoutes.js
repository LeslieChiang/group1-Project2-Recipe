// call controller for respective routes

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

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

router
  .route("/logout")
  .get((request, response) => {
    response.send("You have called a logout route!");
  })
  .post(userController.logout);

router
  .route("/register")
  .get((request, response) => {
    response.send("You have called a register route!");
  })
  .post(userController.register);


  // router.put("/protected/recipe", recipeController.update);
// router.delete("/protected/driver/:driverId", recipeController.deleteDriver);

module.exports = router;
