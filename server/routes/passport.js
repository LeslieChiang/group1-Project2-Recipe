const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const User = require("../models/user.model");

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
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
