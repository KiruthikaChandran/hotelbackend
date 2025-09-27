const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  phone: { type: String, required: true },
  description: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);
