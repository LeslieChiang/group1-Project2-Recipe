// call controller for respective routes

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

// Import Recipe controller
const RecipeController = require("../controllers/recipeController");
// Instantiate a new class instance
const recipeController = new RecipeController();

router.route("/recipe/showIngredient").get((request, response) => {
  recipeController.showIngredient();
  response.send("You have called the showIngredient route!");
});

router.route("/recipe/showRecipe").get((request, response) => {
  recipeController.showRecipe();
  response.send("You have called the showRecipe route!");
});

router.route("/recipe/showUserRecipe").get((request, response) => {
  recipeController.showUserRecipe();
  response.send("You have called the showUserRecipe route!");
});

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
