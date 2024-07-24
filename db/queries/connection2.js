// app.js
const connectDB = require('../connectDB'); // Adjust the path as necessary
const User = require('../schema/users_export'); // Adjust the path as necessary
const mongoose = require('mongoose');

async function run() {
  // Connect to MongoDB
  await connectDB();

  // Query the users collection
  try {
    // Find all users
    const users = await User.find();
    console.log('All users:', users);

    // Find users by name
    const usersByName = await User.find({ name: 'Alice' });
    console.log('Users named Alice:', usersByName);

    // Find a single user by email
    const userByEmail = await User.findOne({ email: 'alice@example.com' });
    console.log('User with email alice@example.com:', userByEmail);

    // Find users older than 25
    const usersOlderThan25 = await User.find({ age: { $gt: 25 } });
    console.log('Users older than 25:', usersOlderThan25);
  } catch (error) {
    console.error('Error querying users collection:', error);
  } finally {
    
    // Close the connection to the MongoDB server
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

