const mongoose = require('mongoose');
const Hotel = require('../models/hotel');

// GET all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
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
    const savedHotel = await hotel.save();

    res.status(201).json(savedHotel);
  } catch (error) {
    console.error(error);
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

    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedHotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json(updatedHotel);
  } catch (error) {
    console.error(error);
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

    const deletedHotel = await Hotel.findByIdAndDelete(id);

    if (!deletedHotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllHotels,
  createHotel,
  updateHotel,
  deleteHotel
};
