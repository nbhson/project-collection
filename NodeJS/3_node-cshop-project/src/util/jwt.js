const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

const encodeToken = (userName) => {
  return jwt.sign(
    {
      iss: 'nbhson', // người phát hành
      sub: userName, // field userName trong DB
      iat: new Date().getTime(), // phát hành (timestamp)
      exp: new Date().setDate(new Date().getDate() + 3), // hết hạn - 3d sau (timestamp)
      // exp: new Date().getTime() + 60000 * 5, // hết hạn - 5m sau (timestamp)
    },
    JWT_SECRET,
  );
};
module.exports = {
  encodeToken,
};
