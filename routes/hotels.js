const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Routes for Hotels
router.get('/', hotelController.getAllHotels);        // GET all hotels
router.post('/', hotelController.createHotel);        // CREATE new hotel
router.put('/:id', hotelController.updateHotel);      // UPDATE hotel by ID
router.delete('/:id', hotelController.deleteHotel);   // DELETE hotel by ID

module.exports = router;
