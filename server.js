const express = require("express");
const { default: mongoose } = require("mongoose");
const { listenerCount } = require("./server/models/jokes.model");
const app = express();

// Inicializará el mongoose.connect
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));


const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listenerCount(8000, () => console.log("El servidor está funcionando en el puerto"));
