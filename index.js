const express = require('express');
const connectDB = require('./config/db_config');
const Hotel = require('./models/hotel');
const hotelsRoutes = require('./routes/hotels');

require('dotenv').config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
// Connect DB
connectDB();

// Routes
app.use('/api/hotels', hotelsRoutes);

// Port config
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
