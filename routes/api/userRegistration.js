const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../../Model/User');

// @route           POST api/registration
// @description     Register User
// @access          Public
router.post(
  '/',
  [
    check('firstName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('First name is required'),
    check('lastName')
      .not()
      .isEmpty()
      .withMessage('Last name is required'),
    check('email')
      .isEmail()
      .withMessage('Please enter valid email'),
    check('gender')
      .not()
      .isEmpty()
      .withMessage('Gender is required'),
    check('city')
      .not()
      .isEmpty()
      .withMessage('City is required'),
    check('zipcode')
      .not()
      .isEmpty()
      .isNumeric()
      .withMessage('Zip code is required'),
    check('password')
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage('Please enter a password with 6 or more characters')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      gender,
      city,
      zipcode,
      password
    } = req.body;

    try {
      //check if user/email already exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Email already in use' }] });
      }
      user = new User({
        firstName,
        lastName,
        email,
        gender,
        city,
        zipcode,
        password
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //Save in DB
      await user.save();

      //Return jsonwebtoken
      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
