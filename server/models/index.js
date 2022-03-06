// Import sequelize
const { Sequelize } = require("sequelize");

// DB Connection Configuration
const sequelize = new Sequelize("project", "leslie", "", {
  host: "localhost",
  dialect: "postgres",
});

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
// const Recipe = require("./recipe.model")(sequelize);
// const User = require("./user.model")(sequelize);


// Create associations *** Keith, Mani
Recipe.belongsTo(User, {
  foreignKey: "userId",
});


// Exports (enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  Recipe,
  User,
  Ingredient,
  RecipeIngredientInter,
};
