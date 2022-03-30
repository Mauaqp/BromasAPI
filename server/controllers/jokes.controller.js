const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json({jokes: allJokes}))
        .catch((err) => res(200).json({message : "Algo salió mal en find jokes", error : err}));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((oneSingleJoke) => res.json({joke: oneSingleJoke}))
        .catch((err) => res.json({message: "Algo salió mal en one single Joke", error: err}));
};


module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            const all = [...allJokes];
            const randomNumber = Math.floor(Math.random()*allJokes.length);
            const randomJoke = allJokes.length>0?allJokes[randomNumber]:[];
            res.json({joke: randomJoke})
        })
    .catch((err) => res.json({ message: "Algo salió mal con el random jokes", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Algo salió mal con el delete jokes", error: err }));
};