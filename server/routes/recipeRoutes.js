// call controller for respective routes

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

// Import Recipe controller
const RecipeController = require("../controllers/recipeController");
// Instantiate a new class instance
const recipeController = new RecipeController();

router.route("/recipe/showIngredient").get((req, res) => {
  recipeController
    .showIngredient()
    .then((showIngredient) => {
      res.status(200).json(showIngredient);
    })
    .catch((error) => {
      res.status(500).json({ message: "unable to retrieve data" });
    });
});

router.route("/recipe/showRecipe").get((req, res) => {
  recipeController.showRecipe()
  .then((showRecipe) => {
    res.status(200).json(showRecipe);
  }).catch((error) => {
    res.status(500).json({ message: "unable to retrieve data" });
  });
});

router.route("/recipe/showUserRecipe").get((req, res) => {
  recipeController.showUserRecipe()
  .then((showUserRecipe) => {
    res.status(200).json(showUserRecipe);
  }).catch((error) => {
    res.status(500).json({ message: "unable to retrieve data" });
  });
});
router
  .route("/recipe/add")
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
  .route("/recipe/edit/:recipeId")
  .get((request, response) => {
    response.send("You have called the EDIT route!");
  })
  .put(recipeController.edit);

router
  .route("/recipe/delete/:recipeId")
  .get((request, response) => {
    response.send("You have called the DELETE route!");
  })
  .delete(recipeController.deleteRecipe);

// router.delete("delete/:recipeID", RecipeController.DeleteRecipe);

// router.put("/protected/recipe", recipeController.update);
// router.delete("/protected/driver/:driverId", recipeController.deleteDriver);

module.exports = router;
