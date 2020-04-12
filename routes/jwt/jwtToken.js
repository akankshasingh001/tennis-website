const jwt = require('jsonwebtoken');
const config = require('config');

//Return jsonwebtoken
const payload = { user: { id: user.id } };

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
