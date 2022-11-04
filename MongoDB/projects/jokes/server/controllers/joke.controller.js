const Joke = require("../models/joke.model");


module.exports.index = (request, response) => {
    response.json({
        message: "welcome to joke city baby"
    });
}

module.exports.findAllJokes = (request, response) => {
    Joke.find()
        .then(allJokes => response.json({ jokes: allJokes }))
        .catch(err => response.json({ message: "something went wrong", error: err }));
}

module.exports.findOneJoke = (request, response) => {
    Joke.findOne({ _id: request.params.id })
        .then(oneJoke => response.json({ joke: oneJoke }))
        .catch(err => response.json({ message: "something went wrong", error: err }));
}

module.exports.createJoke = (request, response) => {
    console.log(request.body)
    Joke.create(request.body)
        .then(newJoke => response.json({ joke: newJoke }))   
        .catch(err => response.json({ message: "something went wrong", error: err }));
}

module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedJoke => response.json({ joke: updatedJoke }))
        .catch(err => response.json({ message: "something went wrong", error: err }));
}

module.exports.deleteJoke = (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "something went wrong", error: err }));
}

module.exports.exists = (request, response) => {
    Joke.exists({ setup: request.body.name })
        .then(jokeExists => {
            if (jokeExists) {
                return Promise.reject('joke already exists')
        }
        return Joke.create(request.body)
    })
    .then(saveResult => response.json(saveResult))
    .catch(err => response.json(err))
}
