// Import mongoose
const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userType: String, // 'tenant' or 'owner'
    ratings: Number
});

// Create the models
const User = mongoose.model('User', UserSchema);

// Export the models
module.exports = { User }



// The Users collection will store information about both tenants and property owners. 
// It will include fields for user details (name, email, password, etc.), user type (tenant or owner), 
// and ratings.