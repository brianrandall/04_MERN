const JobController = require('../controllers/job.controller');

module.exports = function(app) {
    app.get('/api', JobController.index);
    app.post('/api/jobs', JobController.createJob);
    app.get('/api/jobs', JobController.getAllJobs);
    app.get('/api/jobs/:id', JobController.getJob);
    app.put('/api/jobs/:id', JobController.updateJob);
    app.delete('/api/jobs/:id', JobController.deleteJob);
}
