const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const auth = require('../../middleware/auth');
const User = require('../../Model/User');

//@route    POST api/account
//@desc     Update user account
//@access   Private

router.post('/', [auth], async (req, res) => {
  const { firstName, lastName, city, zipcode, password } = req.body;

  const accountFields = {};
  //Encrypt password
  const salt = await bcrypt.genSalt(10);

  accountFields.user = req.user.id;

  if (firstName) accountFields.firstName = firstName;
  if (lastName) accountFields.lastName = lastName;
  if (city) accountFields.city = city;
  if (zipcode) accountFields.zipcode = zipcode;
  if (password) accountFields.password = await bcrypt.hash(password, salt);

  try {
    let account = await User.findById(req.user.id);
    if (account) {
      //Update
      account = await User.findByIdAndUpdate(
        req.user.id,
        { $set: accountFields },
        { new: true }
      );
      return res.json(account);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
