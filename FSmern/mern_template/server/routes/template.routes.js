const TEMPLATE_CONTROLLER = require('../controllers/template.controller');

module.exports = function(app) {
    app.get('/api', TEMPLATE_CONTROLLER.index);
    
    // BUILD CONTROLLER FILE FIRST THEN MATCH WHATS IN THERE TO HERE
}