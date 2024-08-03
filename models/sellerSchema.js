const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        // default: "seller" // Incorrect: Default values should match the correct capitalization or formatting
        default:"Seller" // Correct: Using the correct capitalization for the default value
    },
    shopName: {
        type: String,
        unique: true,
        required: true
    }
});

// Incorrect: 'moduleexports' is not a valid syntax; it should be 'module.exports'
// moduleexports = mongoose.model("seller", sellerSchema)

// Correct: Using 'module.exports' and capitalizing the model name for consistency
module.exports = mongoose.model("Seller", sellerSchema)