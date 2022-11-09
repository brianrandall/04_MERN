const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'player name required'],
        minlength: [2, 'must be at least 2 characters']
    },
    position: {
        type: String,
        required: [true, 'position required']
    },
    status: []
},
{timestamps: true });

module.exports.Team = mongoose.model("Team", TeamSchema)