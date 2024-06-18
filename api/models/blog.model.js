const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    headline: {
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

module.exports = mongoose.model("Blog", BlogSchema);