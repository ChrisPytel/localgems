require('dotenv').config();

// getting-started.js
const mongoose = require('mongoose');
const url = process.env.MONGO_CONNECTION_STRING;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}





async function run() {
  // Connect to MongoDB
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected successfully to MongoDB');

  // Define a schema for the users collection
  const userSchema = new mongoose.Schema({
    name: String,
    location: String,
    favoriteFood: String
  });

  // Create a model for the users collection

  // const User = mongoose.model('users', userSchema);   <-doesnt work

  const User = mongoose.model('User', userSchema, 'users');

  // Query the users collection
  try {
    // Find all users
    const users = await User.find();
    console.log('All users:', users);

    // Find users by name
    const usersByName = await User.find({ name: 'Alice' });
    console.log('Users named Alice:', usersByName);

    // Find a single user by email
    const userByLocation = await User.findOne({ location: 'Chicago' });
    console.log('Users in chicago:', userByLocation);

  } catch (error) {
    console.error('Error querying users collection:', error);
  } finally {
    // Close the connection to the MongoDB server
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

run().catch(console.dir);