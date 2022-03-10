// control logic and Return results from service.model

// import service
const receipeService = require("../services/recipeService");

// establish the RecipeController first, then recipeService
class RecipeController {
  async logout(req, res, next) {
    // // // use the service layer
    // const result = await userService.logout(req, res);
    // res.status(result.status);

    // // // Return results from service
    // return res.redirect("/login");
    req.logout();
    res.redirect("/login");
  }

  async add(req, res, next) {
    const { title, method, ingredientList } = req.body;
    // Validate inputs
    console.log('RecipeController.add { title } =', title);
    console.log('RecipeController.add { method } =', method);
    console.log('RecipeController.add { ingredientList } =', ingredientList);
    if (
      typeof req.body.title !== "string" ||
      typeof req.body.method !== "string" ||
      typeof req.body.ingredientList !== "object"  
    ) {
      res.status(400); // bad request
      return res.json({
        message: "RecipeController.add: Incorrect inputs",
      });
    }

<<<<<<< Updated upstream
    // use the service layer
    const result = await userService.add(title, ingredient);

    console.log("controller result: ", result);
=======
    // Use the service layer
    const result = await recipeService.add(title, method, ingredientList);
    console.log('recipeController->add() result:', result);
>>>>>>> Stashed changes
    res.redirect("/add");
    return;
  }

  async edit(req, res, next) {
    const { recipeId } = req.params;
    const { title, ingredientList } = req.body;

    // test inputs
    if (
      typeof req.body.title !== "string" ||
      typeof req.body.ingredientList !== "object"
    ) {
      res.status(400); // bad request
      return res.json({
        message: "Incorrect inputs",
      });
    }

    // use the service layer
<<<<<<< Updated upstream
    const result = await userService.edit(title, ingredient);

    console.log("controller result: ", result);
=======
    const result = await recipeService.edit(recipeId, title, ingredientList);
    console.log("recipeController->edit() result: ", result);
>>>>>>> Stashed changes
    res.redirect("/edit");
    return;
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
    const result = await userService.delete(title, ingredient);

    console.log("controller result: ", result);
    res.redirect("/delete");
    return;
}

async showAll(req, res, next) {
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
  const result = await userService.showAll(title, ingredient);

  console.log("controller result: ", result);
  res.redirect("/showAll");
  return;
}

}

module.exports = RecipeController;
