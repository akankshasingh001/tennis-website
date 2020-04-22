const express = require('express');
const router = express.Router();

const League = require('../../AdminModel/League');

//@route    POST adminApi/league
//@desc     Post League Schedule/Details
//@access   Private
router.post('/', async (req, res) => {
  const { leagueName, time, deadline, season, matches, price } = req.body;
  try {
    let league = new League({
      leagueName,
      time,
      deadline,
      season,
      matches,
      price
    });
    await league.save();
    res.status(200).send('Submitted Successfully');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
