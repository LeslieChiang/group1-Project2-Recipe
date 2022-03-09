const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Image extends Model {}

  Image.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      imagePrimary: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "image_primary",
      },

      imageSecondary: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "image_secondary",
      },

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
      modelName: "Image",
      tableName: "images",
    }
  );

  return Image;
};
