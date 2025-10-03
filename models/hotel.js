const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number },
  phone: { type: String, required: true },
  description: { type: String },
  hotel_id: { type: String, unique: true, default: () => new mongoose.Types.ObjectId() }
});

module.exports = mongoose.model("Hotel", hotelSchema);
