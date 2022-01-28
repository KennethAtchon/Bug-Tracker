const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    members:{
        type: [String],
        required: true,
    },
    private:{
        type: Boolean,
        required: true,
    },
    id:{
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("Archived Projects", projectSchema)