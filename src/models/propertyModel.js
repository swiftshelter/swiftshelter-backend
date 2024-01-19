// Import mongoose
const mongoose = require('mongoose');

// Define the Property schema
const PropertySchema = new mongoose.Schema({
    location: String,
    size: Number,
    price: Number,
    affordabilityMetrics: Number,
    images: [String], // Array of image URLs for virtual tours
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the User model
});

// Create the models
const Property = mongoose.model('Property', PropertySchema);

// Export the models
module.exports = { Property };



// The Properties collection will store information about properties. 
// It will include fields for property details (location, size, price, etc.), affordability metrics, 
// images for virtual tours, owner details, and tenant details.