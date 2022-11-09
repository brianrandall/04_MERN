const { Team } = require('../models/team.model'); 

module.exports.index = (req, res) => {
    res.json({
        message: 'hell0 w0rld'
    })
}

module.exports.createTeam = (req, res) => {
    console.log(req.body)
    Team.exists({name :req.body.name})
        .then(teamExists => {
            if (teamExists) {
                return Promise.reject('player already exists')
            }
            return Team.create(req.body)
        })
        .then(saveResult => res.json(saveResult)) 
        .catch(err => res.status(400).json(err));
}

module.exports.getAllTeams = (req, res) => {
    Team.find({})
        .then(allTeams => res.json(allTeams))
        .catch(err => res.json(err));
}

module.exports.getOneTeam = (req, res) => {
    Team.findOne({_id: req.params.id})
        .then(oneTeam => res.json(oneTeam))
        .catch(err => res.json(err));
}

module.exports.updateTeam = (req, res) => {
    Team.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
        .then(updatedTeam => res.json(updatedTeam))
        .catch(err => res.json(err));
}

module.exports.deleteTeam = (req, res) => {
    Team.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

