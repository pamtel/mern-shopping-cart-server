require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection SUCCESSFUL");
    } catch (error) {
        console.error("MongoDB connection FAILED");
        process.exit(1);
    }
}

module.exports = connectDB;