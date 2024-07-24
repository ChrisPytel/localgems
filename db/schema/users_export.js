// userModel.js
const mongoose = require('mongoose');

// Define the schema for the users collection
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Create and export the model for the users collection
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;