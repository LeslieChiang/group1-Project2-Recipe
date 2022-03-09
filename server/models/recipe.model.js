const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Recipe extends Model {}

  Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
      },

      imageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "image_id",
      },

      recipeTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "recipe_title",
      },

      cuisineType: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "cuisine_type",
      },

      dishGroup: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "dish_group",
      },

      cookingSteps: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "cooking_steps",
      },

      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },

      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Recipe",
      tableName: "recipes",
    }
  );

  return Recipe;
};
