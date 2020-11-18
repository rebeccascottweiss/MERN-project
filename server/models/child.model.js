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
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
        },
        city: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
        },
        state: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
        },
        zipCode: {
            type: Number,
            required: [true, "{PATH} is required."],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters"],
        },
        phone: {
            type: Number,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
        },
        shirtSize: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [1, "{PATH} must be at least {MINLENGTH} character"],
        },
        pantSize: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [1, "{PATH} must be at least {MINLENGTH} character"],
        },
        shoeSize: {
            type: Number,
            required: [true, "{PATH} is required."],
            minlength: [1, "{PATH} must be at least {MINLENGTH} character"],
        },
        items: {
            type: Array,
    
        },
        
        interest: {
            type: Array,
        
        wishlist: {
            type: String,

        isHelped: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
);


const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;
