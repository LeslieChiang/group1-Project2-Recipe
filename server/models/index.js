// Import sequelize
const { Sequelize } = require("sequelize");

// // DB Connection Configuration
// const sequelize = new Sequelize("project", "leslie", "", {
//   host: "localhost",
//   dialect: "postgres",
// });

const sequelize = new Sequelize("sqlite::memory:");


// Test connection function
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
}

// Import model(s)
const User = require("./user.model")(sequelize);
const Recipe = require("./recipe.model")(sequelize);
const Ingredient = require("./ingredient.model")(sequelize);
const RecipeIngredientInter = require("./recipe_ingredient_inter.model")(sequelize);
const Image = require("./image.model")(sequelize);

// Create associations *** Keith, Mani
Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

Recipe.belongsTo(Image, {
  foreignKey: "image_id",
});

RecipeIngredientInter.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});

RecipeIngredientInter.belongsTo(Ingredient, {
  foreignKey: "ingredient_id",
});

// Exports (enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  Recipe,
  User,
  Ingredient,
  RecipeIngredientInter,
  Image,
};
