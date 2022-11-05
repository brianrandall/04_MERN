const { Person } = require("../models/person.models");

module.exports.index = (req, res) => {
    res.json({
        message: "hell0 w0rld"
    });
}

module.exports.createPerson = (req, res) => {
    console.log(req.body)
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.json(err));
}

module.exports.deletePerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id: req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(people => res.json(people))
        .catch(err => res.json(err));
}

