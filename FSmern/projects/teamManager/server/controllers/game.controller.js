const { Game } = require('../models/game.model');

module.exports.createGame = (req, res) => {
    Game.create(req.body)
        .then(game => res.json(game))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllGames = (req, res) => {
    Game.find({})
        .then(games => res.json(games))
        .catch(err => res.json(err));
}

module.exports.getOneGame = (req, res) => {
    Game.findOne({_id: req.params.id})
        .then(game => res.json(game))
        .catch(err => res.json(err));
}

module.exports.deleteGame = (req, res) => {
    Game.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}