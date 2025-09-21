const mongoose = require('mongoose');
const Hotel = require('../models/hotel');

// GET all hotels
const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// POST create hotel
const createHotel = async (req, res) => {
    try {
        if (!req.body.name || !req.body.address) {
            return res.status(400).json({ message: 'Name and Address are required' });
        }

        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
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
            return res.status(400).json({ message: 'Invalid Hotel ID' });
        }

        const updated = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.json(updated);
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
            return res.status(400).json({ message: 'Invalid Hotel ID' });
        }

        const deleted = await Hotel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.json({ message: 'Hotel deleted successfully' });
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
