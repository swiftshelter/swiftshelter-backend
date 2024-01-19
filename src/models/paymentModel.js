// Import mongoose
const mongoose = require('mongoose');

// Define the Payment schema
const PaymentSchema = new mongoose.Schema({
    amount: Number,
    date: Date,
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' }, // Reference to the Property model
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
    paymentPlanDetails: String
});

// Create the models
const Payment = mongoose.model('Payment', PaymentSchema);

// Export the models
module.exports = { Payment };



// The Payments collection will store information about payments. 
// It will include fields for payment details (amount, date, etc.), property details, tenant details, 
// and payment plan details.