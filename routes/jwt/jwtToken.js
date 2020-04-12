const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../Model/User');

//Return jsonwebtoken
const payload = { user: { id: User.id } };

jwt.sign(
  payload,
  config.get('jwtSecret'),
  { expiresIn: 360000 },
  (err, token) => {
    if (err) throw err;
    return token;
  }
);

module.exports = payload;
