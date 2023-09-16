// passport-jwt là 1 cách thức cho passport sử dụng
// nên nó được coi như là 1 third party
const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const localStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('../jwt');
const User = require('../../app/models/User');
const bcrypt = require('bcrypt');

passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
      secretOrKey: JWT_SECRET, // để biết được token do client gửi lên có phải là do server này tạo hay không => để giải mã được
    },
    (payload, done) => {
      // thành công thì có payload, done = next
      try {
        const user = User.findOne({ email: payload.sub });
        if (!user) {
          return done(error, false);
        }
        if (payload.exp < new Date().getTime()) {
          return done(error, false);
        }
        done(null, user); // done ở đây mới được trả sang hàm khác
      } catch (error) {
        done(error, false);
      }
    },
  ),
);

passport.use(
  new localStrategy(
    {
      usernameField: 'email',
    },
    (email, password, done) => {
      try {
        User.findOne({ userName: email }, (error, user) => {
          if (!user) {
            return done(null, false);
          }
          bcrypt.compare(password, user.password).then((isCorrectPassword) => {
            if (!isCorrectPassword) {
              return done(null, false);
            }
            done(null, user);
          });
        });
      } catch (error) {
        return done(null, false);
      }
    },
  ),
);

/**
  Payload {
    iss: 'nbhson',
    sub: 'hnghxc',
    iat: 1643531500964,
    exp: 1643531530964
  }
 */
