const express = require('express');
const router = express.Router();

const League = require('../../AdminModel/League');

// @route        GET adminApi/getLeagueDetails
// @Description  Get league details
// @access       Public

router.get('/', async (req, res) => {
  try {
    const league = await League.find();
    res.status(200).send(league);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
