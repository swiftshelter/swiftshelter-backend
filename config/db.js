// Import the mongoose module to interact with MongoDB
const mongoose = require('mongoose');
// Import the dotenv module to load environment variables from .env file
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Construct the MongoDB connection string for the production database
const prodDB = `mongodb://${process.env.PROD_DB_USER}:${process.env.PROD_DB_PASSWORD}@${process.env.PROD_DB_HOST}:${process.env.PROD_DB_PORT}/${process.env.PROD_DB_NAME}`;

// Construct the MongoDB connection string for the test database
const testDB = `mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASSWORD}@${process.env.TEST_DB_HOST}:${process.env.TEST_DB_PORT}/${process.env.TEST_DB_NAME}`;

// Define an asynchronous function to connect to the database
const connectDB = async (dbURL) => {
  try {
    // Attempt to establish a connection to the database
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    // Log a success message if the connection is successful
    console.log('DB connection successful!');
  } catch (err) {
    // Log the error message and terminate the process if the connection fails
    console.error(err.message);
    process.exit(1);
  }
};

// Export the connectDB function and the database connection strings
module.exports = { connectDB, prodDB, testDB };
