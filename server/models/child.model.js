const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
        },
        lastName: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
        },
        age: {
            type: Number,
            required: [true, "{PATH} is required."],
            minlength: [1, "{PATH} must be at least {MINLENGTH} characters"],
        },
        email: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
        },
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: Number,
        },
        phone: {
            type: Number,
        },
        shirtSize: {
            type: String,
        },
        pantSize: {
            type: String,
        },
        shoeSize: {
            type: Number,
        },

        items: {
            type: Array,
    
        },
        
        interest: {
            type: Array,
        }, 

        wishlist: {
            type: String,
        },
        isHelped: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;
