const mongoose = require('mongoose');
const Hotel = require('../models/hotel');

// GET all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST create hotel
const createHotel = async (req, res) => {
  try {
    const { name, location, rating, phone, description } = req.body;

    if (!name || !location || !phone) {
      return res.status(400).json({ message: 'Name, location, and phone are required' });
    }

    const hotel = new Hotel({ name, location, rating, phone, description });
    const saved = await hotel.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT update hotel
const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid hotel ID' });
    }

    const updated = await Hotel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE hotel
const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid hotel ID' });
    }

    const deleted = await Hotel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllHotels,
  createHotel,
  updateHotel,
  deleteHotel
};
