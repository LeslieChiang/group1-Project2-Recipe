// execute to DB model

// bcrpyt & jwt
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Private RS256 key
const rs256Key = process.env.SECRET_KEY;

const { User } = require("../models");
User.sync({ alter: true }).then(() => console.log("User Database is ready"));

module.exports = {
  //   logout: async (req, res) => {
  //     let result = {
  //       message: "Logout successful",
  //       status: 200,
  //     };

  //     req.logout();
  //     req.session.destroy();

  //     // Return results
  //     return res.json({ status: result.status, message: result.message });
  //   },

  register: async (email, password) => {
    console.log("user INPUT: ", email, password); // log input
    let result = {
      message: null,
      status: null,
    };

    // look for user in the database
    const isUser = await User.findOne({
      where: { emailAddress: email },
    });
    // console.log("user: ", user);

    if (!isUser) {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        // A callback function called after hash() complete.
        if (err) {
          console.error(err);
        } else {
          console.log("Hash: ", hash);
          await User.create({
            emailAddress: email,
            passWord: hash,
          });
          result.status = 200;
          result.message = "Registration successful";
        }
      });
    } else {
      result.status = 400;
      result.message = "User already exists! Please login with password";
    }

    const resultUser = await User.findAll();
    console.log("\n attribute", JSON.stringify(resultUser));
    console.log("register_result", result);

    return result;
  },

  login: async (email, password) => {
    // console.log("Login Inputs", email, password);
    let result = {
      data: null,
      message: null,
      status: null,
      jwt: null,
    };

    // look for user in the database
    const isUser = await User.findOne({
      where: { emailAddress: email },
    });

    if (!isUser) {
      result.status = 400;
      result.message = "Please register a new user";
      //   return result;
    }

    if (isUser) {
      // Verify user password

      const match = bcrypt.compareSync(password, isUser.passWord);
      if (!match) throw new Error("password does not match");

      const key = fs.readFileSync(rs256Key);
      const jwtToken = jwt.sign(
        { id: isUser.id, email: isUser.emailAddress },
        key,
        { algorithm: "RS256", expiresIn: "3d" }
      );

      result.status = 200;
      result.message = "Login successful";
      result.jwt = jwtToken;
      // bcrypt.compare(password, isUser.passWord, (err, resultMatch) => {
      //   // console.log("resultMatch", resultMatch);
      //   if (err) {
      //     console.error(err);
      //     //   return
      //   }

      //   if (!resultMatch) {
      //     result.status = 400;
      //     result.message = "Password is invalid";

      //     //   console.log("!resultMatch: ", result);
      //     //   return result;
      //   } else {
      //     // Create JWT
      //     const jwToken = jwt.sign(
      //       { id: isUser.id, email: isUser.emailAddress },
      //       rs256Key,
      //       { algorithm: "RS256", expiresIn: "3d" }
      //       // (err, jwToken) => {
      //       //   if (err) {
      //       //     console.error("jwt err: ", err);
      //       //   } else {
      //       //     result.status = 200;
      //       //     result.message = "Login successful";
      //       //     result.jwt = jwToken;
      //       //     //   console.log("log jwtsigned : ", result);
      //       //   }
      //       // }
      //     );

      //     result.status = 200;
      //     result.message = "Login successful";
      //     result.jwt = jwToken;

      //       console.log("Result in bcrypt: ", result);
      //       return
      //   }
      // });
      // console.log("results after bcrypt: ", result);
    }

    console.log("login results from userService: ", result);
    // Return results
    return result;
  },
};
