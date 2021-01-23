const mongoose = require('mongoose');

const BeltSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [
            true,
            "A pirate mate must have a name, he be."
        ],
        minlength: [
            2,
            "A pirate name must be at least two characters long."
        ]
    },
    position: {
        type: String,
        required: [
            true,
            "Please enter your position on the boat!"
        ]
    },
    imageUrl: {
        type: String,
        required: [
            true,
            "Add a link to your picture me matey!"
        ],
        minlength: [
            6,
            "Your image URL must be at least 6 characters long!"
        ]
    },
    catchphrase: {
        type:String,
        required: [
            true,
            "Every good pirate has a catchphrase!"
        ],
        minlength: [
            3,
            "Your catchphrase must be at least 3 characters long!"
        ]
    },
    chests: {
        type: Number,
        required: [
            true,
            "Please enter the number of treasure chests you've collected!"
        ]
    },
    pegLeg: {
        type: Boolean,
        default: true,
    },
    eyePatch: {
        type: Boolean,
        default: true,
    },
    hookHand: {
        type: Boolean,
        default: true,
    }

}, {timestamps: true});

module.exports.Pirate = mongoose.model("Pirate", BeltSchema);