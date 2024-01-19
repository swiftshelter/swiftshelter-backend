// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const { connectDB, prodDB, testDB } = require('./config/db');

// Load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Connect to the database
// Use prodDB for production and testDB for testing
connectDB(process.env.NODE_ENV === 'production' ? prodDB : testDB);

// Import routes
const userRoutes = require('./src/routes/userRoutes');
const propertyRoutes = require('./src/routes/propertyRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

// Define the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
