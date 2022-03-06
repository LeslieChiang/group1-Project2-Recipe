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

    //   userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     field: "user_id",
    //   },
    //   recipeName: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     field: "recipe_name",
    //   },

    //   cuisineType: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     field: "cuisine_type",
    //   },

    //   dishType: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     field: "dish_type",
    //   },

    //   ingredients: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     field: "ingredients",
    //   },

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
      tableName: "recipeIngredientInter",
    }
  );

  return RecipeIngredientInter;
};
