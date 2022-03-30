const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes/new", JokeController.createNewJoke);
    app.get("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.get("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};