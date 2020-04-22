const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  leagueName: { type: String, required: true },
  time: { type: String, required: true },
  deadline: { type: String, required: true },
  season: { type: String, required: true },
  matches: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = League = mongoose.model('league', LeagueSchema);
