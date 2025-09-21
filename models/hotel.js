const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel_id: {
        type: String,
        unique: true, // Optional, since Mongo already has _id
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    description: {
        type: String
    }
}, {
    timestamps: true // adds createdAt & updatedAt
});

module.exports = mongoose.model('Hotel', hotelSchema);
