const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../Model/User');
const Profile = require('../../Model/Profile');

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

//@route    GET api/getUserProfile/me
//@desc     Get current user's profile
//@access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user'
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
