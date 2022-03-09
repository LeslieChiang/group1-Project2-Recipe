const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      // userName: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   unique: true,
      //   field: "username",
      // },

      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
        field: "email_add",
      },

      passWord: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password",
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
      modelName: "User",
      tableName: "users",
    }
  );

  return User;
};
