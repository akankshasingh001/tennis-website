const express = require('express');
const router = express.Router();

const User = require('../../Model/User');

// @route        GET api/searchUser
// @Description  Search other user details
// @access       Public
router.get('/', async (req, res) => {
  try {
    let { firstName, lastName } = req.query;

    let users = [];
    if (firstName && lastName) {
      users = await User.find({
        firstName,
        lastName
      }).select('-password');
    } else if (firstName) {
      users = await User.find({
        firstName
      }).select('-password');
    } else {
      users = await User.find({
        lastName
      }).select('-password');
    }

    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
