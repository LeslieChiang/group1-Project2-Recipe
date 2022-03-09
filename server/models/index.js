// Import sequelize
const { Sequelize } = require("sequelize");

// // DB Connection Configuration
// const sequelize = new Sequelize("project", "leslie", "", {
//   host: "localhost",
//   dialect: "postgres",
// });
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: "postgres",
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

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


//connect to heroku postgresql in local.
// (1) open terminal
// (2) heroku login
// (3) press any key open browser then key in credentials. Email: ch3group1@mail.com Password: ch3@group1
// (4) heroku pg:psql postgresql-amorphous-45283 --app ecookbook