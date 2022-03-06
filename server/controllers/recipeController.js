// control logic and Return results from service.model

// import service
const receipeService = require("../services/recipeService");


// establish the VehicleController first, then vehicleService
class RecipeController {
  // POST /protected/onboard {driverId:1, vehicleId:1}
  // async onboard(req, res, next) {
  //   console.log(typeof req.body.driverId, typeof req.body.vehicleId);
  //   if (
  //     typeof req.body.driverId !== "number" ||
  //     typeof req.body.vehicleId !== "number"
  //   ) {
  //     res.status(400); // bad request
  //     return res.json({ message: "Incorrect request data" });
  //   }

  //   // use the service layer
  //   // perform after RecipeController is working
  //   const result = await vehicleService.onboard(
  //     req.body.vehicleId,
  //     req.body.driverId
  //   );
  //   res.status(result.status);

  //   // Return results from service
  //   return res.json({ data: result.data, message: result.message });
  // }

  // async offboard(req, res, next) {
  //   if (
  //     // typeof req.body.driverId !== "number" ||
  //     typeof req.body.vehicleId !== "number"
  //   ) {
  //     res.status(400); // bad request
  //     return res.json({ message: "Incorrect request data" });
  //   }

  //   // use the service layer
  //   // perform after RecipeController is working
  //   const result = await vehicleService.offboard(req.body.vehicleId);
  //   res.status(result.status);

  //   // Return results from service
  //   return res.json({ data: result.data, message: result.message });
  // }

  // async update(req, res, next) {
  //   console.log(req.body);
  //   if (
  //     typeof req.body.vehicleId !== "number" ||
  //     typeof req.body.type !== "string" ||
  //     typeof req.body.carPlateNo !== "string"
  //   ) {
  //     res.status(400); // bad request
  //     return res.json({ message: "Incorrect request data!" });
  //   }

  //   // use the service layer
  //   const result = await vehicleService.update(
  //     req.body.vehicleId,
  //     req.body.type,
  //     req.body.carPlateNo
  //   );
  //   res.status(result.status);

  //   // Return results from service
  //   return res.json({ data: result.data, message: result.message });
  // }

  // // delete driver by Id
  // async deleteDriver(req, res, next) {
  //   // console.log("Driver ID: ", typeof req.params.driverId);

  //   // use the service layer
  //   const result = await vehicleService.deleteDriver(req.params.driverId);
  //   res.status(result.status);
  //   // Return results from service
  //   return res.json({ data: result.data, message: result.message });
  // }

  // // create a function table inside the class called showAll to call the service showAll to get data
  // async showAll(req, res, next) {
  //   // no need for any req.body or req.params because we are showing full data
  //   const result = await vehicleService.showAll();
  //   res.status = result.status;
  //   return res.json({ data: result.data, message: result.message });
  // }
}

module.exports = RecipeController;
