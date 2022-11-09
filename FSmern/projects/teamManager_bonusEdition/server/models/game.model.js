const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    number: {
        type: Number
    }
},
{timestamps: true });

module.exports.Game = mongoose.model("Game", GameSchema)