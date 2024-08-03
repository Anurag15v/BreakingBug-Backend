const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
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
        default: "Customer"
    },
    cartDetails: [{
        productName: {
            type: String
        },
        price: {
            // mrp: {
                // type: String // wrong type
            // },
            mrp:{
                type: Number // Correct type is Number
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
        quantity: {
            type: Number
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            // ref: 'SELLER' // Incorrect: Model references should use the exact model name, typically capitalized
            ref:'seller' // Correct: Using the correct and capitalized model name for reference
        }, 
    }],
    shippingData: {
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        // country: {
        //     type: Number, // Correct type is Number
        // },
        country:{
            type: String // Correct type is String
        },
        pinCode: {
            type: Number,
        },
        phoneNo: {
            type: Number,
        },
    }
});

// module.exports = mongoose.model("customer", customerSchema) // Incorrect: The model name should be capitalized to follow the naming convention
module.exports = mongoose.model("Customer", customerSchema) // Correct: Model names are typically capitalized