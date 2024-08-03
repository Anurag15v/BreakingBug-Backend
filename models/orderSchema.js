const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.ObjectId,
            ref: "customer",
            required: true,
        },
        shippingData: {
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
            pinCode: {
                type: Number,
                required:true // required:true was missing
            },
            phoneNo: {
                type: Number,
                required: true,
            },
        },
        orderedProducts: [{
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
                //type: mongoose.Schema.Types.ObjectId,
                type:String
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
                ref: 'seller'
            },
        }],
        paymentInfo: {
            id: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
        },
        paidAt: {
            type: Date,
            required: true,
        },
        productsQuantity: {
            type: Number,
            required: true,
            default: 0,
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        // totalPrice: {
        //     type: Number,
        //     required: true,
        //     default: 20, // wrong default value
        // },
        totalPrice: {
            type: Number,
            required: true,
            default:0 // default value is 0
        },
        orderStatus: {
            type: String,
            required: true,
            default:'Processing' // default value was missing
        },
        deliveredAt: Date,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    });

// module.exports = mongoose.model("customer", orderSchema); // Incorrect: The model name should match the schema purpose, i.e., it should be "Order" instead of "customer"

module.exports = mongoose.model("Order", orderSchema); // Correct: The model name 'Order' matches the schema purpose