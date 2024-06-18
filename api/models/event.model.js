const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps})

module.exports = mongoose.model("Events", EventSchema);