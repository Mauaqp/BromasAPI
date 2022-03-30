const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allTheJokes) => res.json({jokes: AllTheJokes}))
        .catch((err) => res.json({message : "Algo salió mal", error : err}));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((oneSingleJoke) => res.json({joke: oneSingleJoke}))
        .catch((err) => res.json({message: "Algo salió mal", error: err}));
};

module.exports.findRandomJoke = (req, res) => {
    Jokeaggregate([{ $sample: { size: 1 } }])
        .then((oneRandomJoke) => res.json({ joke: oneRandomJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
  
module.exports.createNewJoke = (req, res) => {
    Jokecreate(req.body)
        .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
  
module.exports.updateExistingJoke = (req, res) => {
    JokefindOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
  
module.exports.deleteAnExistingJoke = (req, res) => {
    JokedeleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};