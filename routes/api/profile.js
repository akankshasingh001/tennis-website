const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const Profile = require('../../Model/Profile');

//@route    POST api/profile
//@desc     Create or Update user profile
//@access   Private
router.post('/', [auth], async (req, res) => {
  const {
    image,
    yearsPlayed,
    profession,
    interests,
    favPro,
    contactNumber
  } = req.body;

  const profileFields = {};

  profileFields.user = req.user.id;

  if (image) profileFields.image = image;
  if (yearsPlayed) profileFields.yearsPlayed = yearsPlayed;
  if (profession) profileFields.profession = profession;
  if (interests) profileFields.interests = interests;
  if (favPro) profileFields.favPro = favPro;
  if (contactNumber) profileFields.contactNumber = contactNumber;
  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    //Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
