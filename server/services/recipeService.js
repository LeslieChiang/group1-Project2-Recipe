// execute to DB model

const {
  User,
  Recipe,
  Ingredient,
  RecipeIngredientInter,
} = require("../models");

Recipe.sync({ alter: true }).then(() =>
  console.log("Recipe Database is ready")
);
Ingredient.sync({ alter: true }).then(() =>
  console.log("Ingredient Database is ready")
);
RecipeIngredientInter.sync({ alter: true }).then(() =>
  console.log("RecipeIngredient Database is ready")
);

module.exports = {
  add: async (userId, title, method, ingredientList) => {
    // the result object is where we will put the result to be sent to the client
    console.log("recipeService.add: {title}", title);
    let result = {
      message: null,
      status: null,
      data: null,
    };
    const newRecipe = await Recipe.create({
      userId: userId, // Needs to pull userID from User
      recipeTitle: title,
      cookingSteps: method,
    });
    return result;
  },

  edit: async (recipeId, userId, title, method, ingredientList) => {
    console.log("recipeService.edit: {recipeId, title}", recipe, title);
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };

    // Look for recipe in the database
    const recipe = await Recipe.findByPk(recipeId);

    if (!recipe) {
      result.message = `Recipe ID ${recipe.id} is not found!`;
      result.status = 404;
      return result;
    }
  },

  deleteRecipe: async (userId) => {
    // the result object is where we will put the result to be sent to the client
    let result = {
      message: null,
      status: null,
      data: null,
    };
    console.log(userId);
    const reciperemove = await Recipe.destroy({
      where: {
        userId: userId,
      },
    });

    result.message = `Recipe ${userId} is deleted!`;
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

    const resultIngredient = await Ingredient.findAll();
    console.log("\n attribute", JSON.stringify(resultIngredient));

    result.message = "Data fetched successfully from DB";
    result.status = 200;
    result.data = resultIngredient; // this would be all the ingredient from the DB
    console.log("Service result - showIngredient: ", result);

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
  },
};
