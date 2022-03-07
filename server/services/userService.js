// execute to DB model

// bcrpyt
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { User } = require("../models");
User.sync({ alter: true }).then(() => console.log("sqlite3 db is ready"));
console.log("User: ", User);

module.exports = {
  logout: async () => {
    let result = {
      message: "Logout successful",
      status: 200,
    };

    // // look for user in the database
    // const user = await User.findOne({
    //   where: { userName: username },
    // });

    req.logout();

    // Return results
    return res.json({ status: result.status, message: result.message });
  },

  login: async (req, res) => {
    let result = {
      message: null,
      status: null,
      //   jwt: null,
    };

    // look for user in the database
    const user = await User.findOne({
      where: { userName: req.body.username },
    });

    if (!user) {
      result.status = 400;
      result.message = "Please register a new user";
      return res.json({ status: result.status, message: result.message });
    }

    if (user) {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/users/" + req.user.username);
      });

      // Verify user password
      bcrypt.compare(req.body.password, user.passWord, (err, resultMatch) => {
        // console.log("resultMatch", resultMatch);
        if (err) {
          return res.json({
            error: "Server is not performing right now.",
            errorCode: "INTERNAL_ERROR",
          });
        }

        if (!resultMatch) {
          result.status = 400;
          result.message = "Password is invalid";
          return res.json({ status: result.status, message: result.message });
        } else {
          result.status = 200;
          result.message = "Login successful";

          //   // Create JWT
          //   jwt.sign(
          //     req.body,
          //     rs256Key,
          //     { algorithm: "RS256", expiresIn: "30d" },
          //     (err, jwToken) => {
          //       if (err) {
          //         console.log(err);
          //         return res.json({
          //           error: "Server is not performing right now.",
          //           errorCode: "INTERNAL_ERROR",
          //         });
          //       }
          //       // console.log("jwtoken: ",jwToken);
          //       result.status = 200;
          //       result.message = "Login successful";
          //       result.jwt = jwToken;
          //       return res.json({
          //         status: result.status,
          //         message: result.message,
          //         jwt: result.jwt,
          //       });
          //     }
          //   );
        }

        // console.log("Result in bcrypt: ", result);
        // return res.json({ status: result.status, message: result.message });
        // return result;
      });

      // console.log("results after bcrypt: ", result);
      // return result;
    }

    console.log("login: results after user found: ", result);
    // Return results
    return res.json({ status: result.status, message: result.message });
  },

  register: async (userName, emailAddress, passWord) => {
    console.log(
      "userName/emailAddress/passWord INPUT: ",
      userName,
      emailAddress,
      passWord
    ); // log input
    let result = {
      message: null,
      status: null,
    };

    // look for user in the database
    const user = await User.findOne({
      where: { userName: userName },
    });
    // console.log("user: ", user);

    if (!user) {
      // user.userName = req.body.username;
      bcrypt.hash(passWord, saltRounds, (err, hash) => {
        // A callback function called after hash() complete.
        if (err) {
          // console.error(err);
          return res.json({
            error: "Server is not performing right now.",
            errorCode: "INTERNAL_ERROR",
          });
        } else {
          console.log("Hash: ", hash);
          User.create({
            userName: userName,
            emailAddress: emailAddress,
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

    // const resultUser = await User.findAll();
    // console.log("\n attribute", JSON.stringify(resultUser));
   
    console.log("register_result", result);

    // Return results
    return result;
  },
};
