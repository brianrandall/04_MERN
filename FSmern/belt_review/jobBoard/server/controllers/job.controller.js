const { Job } = require('../models/job.model');

module.exports.index = (req, res) => {
    res.json({
        message: "hell0 w0rld"
    });
}

module.exports.createJob = (req, res) => {
    console.log(req.body)
    Job.exists({title :req.body.title})
        .then(jobExists => {
            if (jobExists) {
                return Promise.reject('job already exists')
            }
            return Job.create(req.body)
        })
        .then(saveResult => res.json(saveResult)) 
        .catch(err => res.status(400).json(err));
}

module.exports.getAllJobs = (req, res) => {
    Job.find({})
        .then(jobs => res.json(jobs))
        .catch(err => res.json(err))
}

module.exports.getJob = (req, res) => {
    Job.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err => res.json(err))
}

module.exports.updateJob = (req, res) => {
    Job.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
        .then(updatedJob => res.json(updatedJob))
        .catch(err => res.json(err))
}

module.exports.deleteJob = (req, res) => {
    Job.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}



