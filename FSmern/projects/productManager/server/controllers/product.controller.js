const { Product } = require('../models/product.models');

module.exports.index = (req, res) => {
    res.json({
        message: "hell0 w0rld"
    });
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.exists({title :req.body.title})
        .then(productExists => {
            if (productExists) {
                return Promise.reject('product already exists')
            }
            return Product.create(req.body)
        })
        .then(saveResult => res.json(saveResult)) 
        .catch(err => res.status(400).json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findTitle = (req, res) => {
    Product.findOne({title: req.params.title})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}


module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

