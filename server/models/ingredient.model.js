const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Ingredient extends Model {}

  Ingredient.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      ingredientName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "ingredient_name",
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
      modelName: "Ingredient",
      tableName: "ingredients",
    }
  );

  return Ingredient;
};
