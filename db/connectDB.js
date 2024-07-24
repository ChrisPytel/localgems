require('dotenv').config();

const mongoose = require('mongoose');

const url = process.env.MONGO_CONNECTION_STRING;  // Make sure your connection string is accurate

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('----- Connected successfully to MongoDB cluster, YAY! -----');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

connectDB(); //Starts up our server yaay

module.exports = connectDB;