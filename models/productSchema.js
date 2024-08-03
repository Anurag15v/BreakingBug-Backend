const mongoose = require("mongoose")

const productSchema =  mongoose.Schema(
    {
        productName: {
            type: String
        },
        price: {
            mrp: {
                type: Number
            },
            cost: {
                type: Number
            },
            discountPercent: {
                type: Number
            }
        },
        subcategory: {
            type: String
        },
        productImage: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },
        tagline: {
            type: String
        },
        // quantity: {
        //     type: Number,
        //     default: 45 // Wrong default value 45 
        // },
        quantity: {
            type: Number,
            default:1 // Correct default value is 1
        },
        reviews: [
            {
                rating: {
                    type: Number,
                },
                comment: {
                    type: String,
                },
                reviewer: {
                    type: mongoose.Schema.Types.ObjectId,
                    // ref: "CUSTOMERS", // Incorrect: The reference should use the exact model name, which is typically capitalized
                    ref:"customer" // Correct: Using the exact and capitalized model name for reference
                },
                date: {
                    type: Date,
                    // default: Text, Error -> Text not defined
                    default: Date.now() // Default value is the current date/time 
                },
            },
        ],
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            // ref: 'seller' // Incorrect: The reference should use the exact model name, which is typically capitalized
            ref:'Seller' // Correct: Using the exact and capitalized model name for reference
        },
    }, { timestamps: false});

// module.exports = mongoose.mongoose("product", productSchema) // Incorrect: mongoose.mongoose is not a valid function
module.exports = mongoose.model("Product", productSchema) // Correct: mongoose.model is the correct function to create a model