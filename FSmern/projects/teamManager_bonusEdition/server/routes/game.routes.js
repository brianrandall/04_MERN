const GameController = require('../controllers/game.controller');

module.exports = function(app) {
    app.post('/api/game', GameController.createGame)
    app.get('/api/game', GameController.getAllGames)
    app.get('/api/game/:id', GameController.getOneGame)
    app.delete('/api/game/:id', GameController.deleteGame)
}
