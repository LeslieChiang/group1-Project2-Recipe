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

      recipeName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "recipe_name",
      },


      // ingredients: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   field: "ingredients",
      // },

      // imageLink: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   field: "image_link",
      // },

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
