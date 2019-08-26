const mongoose = require('mongoose');

const createDataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    cnumber: {
        type: Number,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});

module.exports = mongoose.model("CreateData", createDataSchema);