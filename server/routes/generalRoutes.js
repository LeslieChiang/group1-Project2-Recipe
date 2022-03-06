const express = require("express");
const router = express.Router();

// link the controller to the route
// const VehicleController = require("../controllers/vehicleController");
// const vehicleController = new VehicleController();

router.get("/general", (request, response) => {
  return response.send("You have called a general route!");
});

// create route for get /general/vehicles
// router.get("/general/vehicles", vehicleController.showAll);

module.exports = router;
