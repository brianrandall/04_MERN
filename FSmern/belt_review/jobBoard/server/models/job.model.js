const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    company: {
        type: String,
        required: [true, "Company is required"],
        minlength: [3, "Company must be at least 3 characters"]
    },
    salary: {
        type: Number,
        required: [true, "Salary is required"],
        min: [0, "Salary must be at least 1... c'mon, you're not THAT broke"]
    },
    remote: {
        type: Boolean,
        default: null
    },
    applied: {
        type: Boolean,
        default: false
    }
}, 
{ timestamps: true });

module.exports.Job = mongoose.model("Job", JobSchema)