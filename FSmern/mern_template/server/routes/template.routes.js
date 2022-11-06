const TEMPLATE_CONTROLLER = require('../controllers/template.controller');

module.exports = function(app) {
    app.get('/api', TEMPLATE_CONTROLLER.index);
    // app.get('/api/CHANGE_THIS', TEMPLATE_CONTROLLER.findAll);
    // app.get('/api/CHANGE_THIS/:id', TEMPLATE_CONTROLLER.findOne);
    // app.post('/api/CHANGE_THIS/new', TEMPLATE_CONTROLLER.create);
    // app.put('/api/CHANGE_THIS/update/:id', TEMPLATE_CONTROLLER.update);
    // app.delete('/api/CHANGE_THIS/delete/:id', TEMPLATE_CONTROLLER.delete);
}