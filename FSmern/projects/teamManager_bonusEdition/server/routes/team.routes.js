const TeamController = require('../controllers/team.controller');

module.exports = function(app) {
    app.get('/api', TeamController.index)
    app.post('/api/team', TeamController.createTeam)
    app.get('/api/team', TeamController.getAllTeams)
    app.get('/api/team/:id', TeamController.getOneTeam)
    app.put('/api/team/:id', TeamController.updateTeam)
    app.delete('/api/team/:id', TeamController.deleteTeam)


}
