const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../Model/User');

// @route        GET api/getUser
// @Description  Get user details if authentiacted
// @access       Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
