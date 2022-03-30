const express = require("express");
const app = express();

// Inicializará el mongoose.connect
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));


const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("El servidor está funcionando en el puerto"));
