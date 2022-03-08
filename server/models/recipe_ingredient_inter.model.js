const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class RecipeIngredientInter extends Model {}

  RecipeIngredientInter.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      recipeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "recipe_id",
      },

      ingredientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "ingredient_id",
      },

      ingredientQuantity: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "ingredient_quantity",
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
      modelName: "RecipeIngredientInter",
      tableName: "recipe_ingredient",
    }
  );

  return RecipeIngredientInter;
};
