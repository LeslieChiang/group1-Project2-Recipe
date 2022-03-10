// control logic and Return results from service.model

// import service
const recipeService = require("../services/recipeService");

// establish the RecipeController first, then recipeService
class RecipeController {
  async add(req, res, next) {
    const { userId, title, method, ingredientList } = req.body;
    // Validate inputs
    console.log('RecipeController.add { userId } =', userId);
    console.log('RecipeController.add { title } =', title);
    console.log('RecipeController.add { method } =', method);
    console.log('RecipeController.add { ingredientList } =', ingredientList);
    if (
      typeof req.body.userId !== "number" ||
      typeof req.body.title !== "string" ||
      typeof req.body.method !== "string" ||
      typeof req.body.ingredientList !== "object"  
    ) {
      res.status(400); // bad request
      return res.json({
        message: "RecipeController.add: Incorrect inputs",
      });
    }

    // Use the service layer
    const result = await recipeService.add(userId, title, method, ingredientList);
    console.log('recipeController->add() result:', result);
    return res.json({
      message: `${title} recipe successfully added.`
    });
  }

  async edit(req, res, next) {
    const { recipeId } = req.params;
    const { userId, title, method, ingredientList } = req.body;

    // Validate inputs
    console.log('RecipeController.edit { userId } =', userId);
    console.log('RecipeController.edit { title } =', title);
    console.log('RecipeController.edit { method } =', method);
    console.log('RecipeController.edit { ingredientList } =', ingredientList);
    if (
      typeof req.body.userId !== "number" ||
      typeof req.body.title !== "string" ||
      typeof req.body.method !== "string" ||
      typeof req.body.ingredientList !== "object"  
    ) {
      res.status(400); // bad request
      return res.json({
        message: "RecipeController.edit: Incorrect inputs",
      });
    }

    // use the service layer
    const result = await recipeService.edit(recipeId, userId, title, method, ingredientList);
    console.log("recipeController->edit() result: ", result);
    return res.json({
      message: result.message
    });
  }

  async delete(req, res, next) {
    const { title, ingredient } = req.body;

    // test inputs
    if (
      typeof req.body.title !== "string" ||
      typeof req.body.ingredient !== "string"
    ) {
      res.status(400); // bad request
      return res.json({
        message: "Incorrect inputs",
      });
    }

    // use the service layer
    const result = await recipeService.delete(title, ingredient);

    console.log("controller result: ", result);
    res.redirect("/delete");
    return;
  }

  async showIngredient(req, res, next) {
    // use the service layer
    const result = await recipeService.showIngredient();

    console.log("controller result showIngredient: ", result);
    // return res.json({ status: result.status, message: result.message });
    return result;
  }

  async showRecipe(req, res, next) {
    // use the service layer
    const result = await recipeService.showRecipe();

    console.log("controller result showRecipe: ", result);

    return;
  }

  async showUserRecipe(req, res, next) {
    // use the service layer
    const result = await recipeService.showUserRecipe();

    console.log("controller result showUserRecipe: ", result);

    return;
  }

}



module.exports = RecipeController;
