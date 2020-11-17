const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
    {

        donation: {
            type: Number,
        },

        recipient: {
            type: Array,
        },
        
        anonname: {
            type: Array,
        },
    },
    { timestamps: true }
);


const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;