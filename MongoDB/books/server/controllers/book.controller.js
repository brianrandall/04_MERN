const Book = require('../models/book.models');

module.exports.findAllBooks = (req, res) => {
    Book.find()
        .then(allBooks => res.json({ books: allBooks }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneBook = (req, res) => {
    Book.findOne({ _id: req.params.id })
        .then(oneBook => res.json({ book: oneBook }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createBook = (req, res) => {
    Book.create(req.body)
        .then(newBook => res.json({ book: newBook }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedBook => res.json({ book: updatedBook }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

