// execute to DB model

const { Recipe, User } = require("../models");

module.exports = {
  onboard: async (vehicleId, driverId) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // look for vehicle and driver in the database
    const vehicle = await Vehicle.findByPk(vehicleId);
    const driver = await Driver.findByPk(driverId);

    // - check if driver and vehicle exists
    if (!vehicle) {
      result.message = `vehicle ID ${vehicleId} is not found!`;
      result.status = 404;
      return result;
    }

    // - check if driver has already onboarded the vehicle
    if (!driver) {
      result.message = `driver ID ${driverId} is not found!`;
      result.status = 404;
      return result;
    }

    // - if yes, return onboarded
    // - if no, assign driver's id to vehicle
    if (vehicle.driverId) {
      result.message = `Vehicle ID ${vehicle.id} is already in use.`;
      result.status = 400;
      return result;
    }

    vehicle.driverId = driver.id;
    await vehicle.save(); // update the vehicle
    // option 2: rerun query to find the vehicle and assign it to result.data
    // result.data = await Vehicle.findByPk(vehicleId);
    result.data = vehicle;
    result.status = 200;
    result.message = "Onboard successful";
    return result;
  },

  // Task 1 POST /protected/offboard
  offboard: async (vehicleId) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // look for vehicle in the database
    const vehicle = await Vehicle.findByPk(vehicleId);

    // - check if driver and vehicle exists
    if (!vehicle) {
      result.message = `vehicle ID ${vehicleId} is not found!`;
      result.status = 404;
      return result;
    }

    // if found vehicle has a driver
    if (vehicle.driverId) {
      result.message = `Vehicle ID ${vehicle.id} has driver ${vehicle.driverId} onboard. Offboarding driver!`;
      vehicle.driverId = null;
      await vehicle.save(); // update the vehicle
      result.data = vehicle;
      result.status = 200;
      return result;
    }

    // if found vehicle has no driver
    if (!vehicle.driverId) {
      result.message = `Vehicle ID ${vehicle.id} has no driver to offboard!`;
      result.status = 400;
      return result;
    }
  },

  // Task 2 PUT /protected/vehicle (type | car_plate_no)
  update: async (vehicleId, type, carPlateNo) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // look for vehicle in the database
    const vehicle = await Vehicle.findByPk(vehicleId);

    // - check if vehicle exists
    if (!vehicle) {
      result.message = `vehicle ID ${vehicle.id} is not found!`;
      result.status = 404;
      return result;
    }

    // if found vehicle (id | type | car_plate_no)
    if (vehicle) {
      vehicle.type = type;
      vehicle.carPlateNo = carPlateNo;
      await vehicle.save(); // update the vehicle
      result.message = `Updated Vehicle ID ${vehicle.id}!`;
      result.data = vehicle;
      result.status = 200;
      return result;
    }
  },

  // Task 3 DELETE /protected/driver/:driverId , ensure driver is not onboard any vehicle
  deleteDriver: async (driverId) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // check if driverId exist in database
    const driverExist = await Driver.findOne({
      where: { id: driverId },
    });

    if (!driverExist) {
      result.message = `Driver ID ${driverId} is not present in the database`;
      result.status = 404;
      return result;
    }

    if (driverExist) {
      // const vehicle = await Vehicle.findByPk(vehicleId);
      const vehicleOnboard = await Vehicle.findOne({
        where: { driverId: driverId },
      });

      // - check if driver and vehicle exists
      if (vehicleOnboard) {
        result.message = `Driver ID ${vehicleOnboard.driverId} is onboard on vehicle ID ${vehicleOnboard.id}!`;
        result.status = 404;
        return result;
      }

      // if driver is not onboard
      if (!vehicleOnboard) {
        result.message = `Driver ID ${driverId} is deleted from DB!`;
        const count = await Driver.destroy({ where: { id: driverId } });
        result.data = await Driver.findAll({});
        result.status = 200;
        return result;
      }
    }
  },

  // Task 4
  showAll: async () => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // connect to DB and query the list of vehicles
    const data = await Vehicle.findAll({
      include: [
        {
          model: Driver, // allows us to check the values of the Driver as well given the driver_id
        },
      ],
    });
    result.message = "Data fetched successfully from DB";
    result.status = 200;
    result.data = data; // this would be all the vehicles from the DB
    return result;
  },
};
