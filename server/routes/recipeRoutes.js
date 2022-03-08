// call controller for respective routes

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

// Import Recipe controller
const RecipeController = require("../controllers/recipeController");
// Instantiate a new class instance
const recipeController = new RecipeController();

router
  .route("/")
  .get((request, response) => {
    response.send("You have called the root route!");
    // if (request.isAuthenticated()) {
    //   response.send("You have called the root route!");
    // } else {
    //   response.redirect("/login");
    // }
  })
  .get(recipeController.showAll);

router
  .route("/add")
  .get((request, response) => {
    response.send("You have called the ADD route!");
    // if (request.isAuthenticated()) {
    //   response.redirect("/");
    // } else {
    //   response.redirect("/login");
    // }
  })
  .post(recipeController.add);

router
  .route("/edit")
  .get((request, response) => {
    response.send("You have called the EDIT route!");
  })
  .put(recipeController.edit);

router
  .route("/delete")
  .get((request, response) => {
    response.send("You have called the DELETE route!");
  })
  .delete(recipeController.delete);

// router.put("/protected/recipe", recipeController.update);
// router.delete("/protected/driver/:driverId", recipeController.deleteDriver);

module.exports = router;
