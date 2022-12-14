const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct)
    app.get('/api/products/title/:title', ProductController.findTitle);
    app.put('/api/products/edit/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}