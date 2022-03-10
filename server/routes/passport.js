const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;



const fs = require("fs");
const User = require("../models");
const key = fs.readFileSync(process.env.SECRET_KEY);
passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: key,
    },
    (jwtPayload, callback) => {
      return User.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          console.log(user);
          return callback(null, user);
        })
        .catch((err) => {
          console.log(err);
          return callback(err);
        });
    }
  )
);

// module.exports = {
//   passport
// };
