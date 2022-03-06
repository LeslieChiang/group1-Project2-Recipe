// call controller for respective routes

// Create a new set of routes for protected
const express = require("express");
const router = express.Router(); // create route

// // Import User controller
// const UserController = require("../controllers/userController");
// // Instantiate a new class instance
// const userController = new UserController();

// router.get("/protected", (request, response) => {
//   return response.send("You have called a protected route!");
// });

// router.post("/protected/onboard", recipeController.onboard);
// router.post("/protected/offboard", recipeController.offboard);
// router.put("/protected/recipe", recipeController.update);
// router.delete("/protected/driver/:driverId", recipeController.deleteDriver);

module.exports = router;
