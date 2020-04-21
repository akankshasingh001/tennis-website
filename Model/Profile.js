const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  image: { type: String },
  yearsPlayed: { type: Number },
  profession: { type: String },
  interests: { type: String },
  favPro: { type: String },
  contactNumber: { type: Number }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
