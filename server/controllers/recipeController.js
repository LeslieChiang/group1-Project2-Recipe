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

  async getAllUsers (req, res) {
    let Users = await users.findAll({})
    res.status(200).send(users)
  }
  



  async add(req, res, next) {
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
    const result = await userService.add(title, ingredient);

    console.log("controller result: ", result);
    res.redirect("/add");
    return;
  }

  async edit(req, res, next) {
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
    const result = await userService.edit(title, ingredient);

    console.log("controller result: ", result);
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
