// execute to DB model

const { Recipe, Ingredient, RecipeIngredientInter } = require("../models");

// const { User } = require("../models");
// User.sync({ alter: true }).then(() => console.log("sqlite3 db is ready"));
// console.log("User: ", User);

module.exports = {
  
  // add: async (vehicleId) => { 
  add: async (title, method, ingredientList) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };
    console.log('recipeService.add: {title}', title);
    const newRecipe = await Recipe.create({
      userId: 3,   // Needs to pull userID from User
      imageId: '',
      recipeTitle: title,
      // cuisineType: '',
      // dishGroup: '',  
      cookingSteps: method  
    })
  },

  edit: async (recipeId, method, ingredientList) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // // look for vehicle in the database
    // const vehicle = await Vehicle.findByPk(vehicleId);

    // // - check if vehicle exists
    // if (!vehicle) {
    //   result.message = `vehicle ID ${vehicle.id} is not found!`;
    //   result.status = 404;
    //   return result;
    // }

    // // if found vehicle (id | type | car_plate_no)
    // if (vehicle) {
    //   vehicle.type = type;
    //   vehicle.carPlateNo = carPlateNo;
    //   await vehicle.save(); // update the vehicle
    //   result.message = `Updated Vehicle ID ${vehicle.id}!`;
    //   result.data = vehicle;
    //   result.status = 200;
    //   return result;
    // }
  },

  delete: async (driverId) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // // check if driverId exist in database
    // const driverExist = await Driver.findOne({
    //   where: { id: driverId },
    // });

    // if (!driverExist) {
    //   result.message = `Driver ID ${driverId} is not present in the database`;
    //   result.status = 404;
    //   return result;
    // }

    // if (driverExist) {
    //   // const vehicle = await Vehicle.findByPk(vehicleId);
    //   const vehicleOnboard = await Vehicle.findOne({
    //     where: { driverId: driverId },
    //   });

    //   // - check if driver and vehicle exists
    //   if (vehicleOnboard) {
    //     result.message = `Driver ID ${vehicleOnboard.driverId} is onboard on vehicle ID ${vehicleOnboard.id}!`;
    //     result.status = 404;
    //     return result;
    //   }

    //   // if driver is not onboard
    //   if (!vehicleOnboard) {
    //     result.message = `Driver ID ${driverId} is deleted from DB!`;
    //     const count = await Driver.destroy({ where: { id: driverId } });
    //     result.data = await Driver.findAll({});
    //     result.status = 200;
    //     return result;
    //   }
    // }
  },

  showAll: async () => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // // connect to DB and query the list of vehicles
    // const data = await Vehicle.findAll({
    //   include: [
    //     {
    //       model: Driver, // allows us to check the values of the Driver as well given the driver_id
    //     },
    //   ],
    // });
    result.message = "Data fetched successfully from DB";
    result.status = 200;
    result.data = data; // this would be all the vehicles from the DB
    return result;
  },
};
