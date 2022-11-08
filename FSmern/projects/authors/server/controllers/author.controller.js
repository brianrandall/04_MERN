const { Author } = require('../models/author.models'); 

module.exports.index = (req, res) => {
    res.json({
        message: 'hell0 w0rld'
    })
}

module.exports.createAuthor = (req, res) => {
    console.log(req.body)
    Author.exists({name :req.body.name})
        .then(authorExists => {
            if (authorExists) {
                return Promise.reject('author already exists')
            }
            return Author.create(req.body)
        })
        .then(saveResult => res.json(saveResult)) 
        .catch(err => res.status(400).json(err));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err));
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

