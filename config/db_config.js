const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);//await wait the function
        console.log('✅Mongodb connected');
    } catch (error) {
        console.error('Error');
        process.exit(1);
    }
}
module.exports = connectDB;