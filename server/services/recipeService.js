// execute to DB model

const {
  User,
  Recipe,
  Ingredient,
  RecipeIngredientInter,
} = require("../models");

Recipe.sync({ alter: true }).then(() => console.log("Recipe Database is ready"));
Ingredient.sync({ alter: true }).then(() => console.log("Ingredient Database is ready"));
RecipeIngredientInter.sync({ alter: true }).then(() => console.log("RecipeIngredient Database is ready"));

module.exports = {
  // Add recipe
  add: async (userId, title, method, ingredientList) => {
    // the result object is where we will put the result to be sent to the client
    console.log('recipeService.add: {title}', title);
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const newRecipe = await Recipe.create({
      userId: userId,   
      recipeTitle: title,
      cookingSteps: method        
    });

    // Add items from ingredientList
    for (let item of ingredientList ) {
      await RecipeIngredientInter.create({
        recipeId: newRecipe.id,
        ingredientId: item.ingredientId,
        ingredientQuantity: item.quantity   
      })
    }

    result.status = 200;
    result.message = `Recipe added: ${title}`;
    console.log('recipeService.add: {result}', result);
    return result;
  },

  // Edit recipe
  edit: async (recipeId, userId, title, method, ingredientList) => {
    console.log('recipeService.edit: {recipeId, title}', recipeId, title);
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // Look for recipe in the database
    const recipe = await Recipe.findByPk(recipeId);
    console.log(`recipeService->edit(${recipeId})`);
    if (!recipe) {
      result.message = `recipeID ${recipeId} is not found!`;
      result.status = 404;
      return result;
    }

    // Edit recipe details when found 
    if (recipe) {
      recipe.userId = userId,   
      recipe.recipeTitle = title,
      recipe.cookingSteps = method        
      await recipe.save(); // update the vehicle

      result.message = `Updated recipeID ${recipeId}!`;
      result.data = recipe;
      result.status = 200;
      return result;
    }
  },

  // delete: async (driverId) => {
  //   // the result object is where we will put the result to be sent to the client
  //   let result = {
  //     message: null,
  //     status: null,
  //     data: null,
  //   };

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
  // },
  // },

  deleteRecipe: async (recipeId) => {
    // the result object is where we will put the result to be sent to the client
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const reciperemove = await Recipe.destroy(
    {
      where: 
      {
        id: recipeId
      }
    }
  );

  result.message = `Recipe ${recipeId} is deleted!`
  result.status = 200;

  return result;
},

  showIngredient: async () => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const resultUser = await User.findAll();
    console.log("\n attribute", JSON.stringify(resultUser));

    result.message = "Data fetched successfully from DB";
    result.status = 200;
    result.data = resultUser;

    return result;
  },

  showRecipe: async () => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const resultRecipe = await Recipe.findAll();
    console.log("\n attribute", JSON.stringify(resultRecipe));

    result.message = "Data fetched successfully from DB";
    result.status = 200;
    result.data = resultRecipe; // this would be all the Recipe from the DB
    console.log("Service result - showRecipe: ", JSON.stringify(result));

    return result;
    // // connect to DB and query the list of vehicles
    // const data = await Vehicle.findAll({
    //   include: [
    //     {
    //       model: Driver, // allows us to check the values of the Driver as well given the driver_id
    //     },
    //   ],
    // });
  },


  showUserRecipe: async () => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    const resultRecipe = await Recipe.findAll();
    console.log("\n attribute", JSON.stringify(resultRecipe));

    result.message = "Data fetched successfully from DB";
    result.status = 200;
    result.data = resultRecipe; // this would be all the Recipe from the DB
    console.log("Service result - showUserRecipe: ", JSON.stringify(result));

    return result;
  },






};
