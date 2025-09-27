const express = require('express');
const router = express.Router();
const {
  getAllHotels,
  createHotel,
  updateHotel,
  deleteHotel
} = require('../controllers/hotelController');

router.get('/', getAllHotels);         // GET all hotels
router.post('/', createHotel);         // POST create hotel
router.put('/:id', updateHotel);       // PUT update hotel
router.delete('/:id', deleteHotel);    // DELETE hotel

module.exports = router;
