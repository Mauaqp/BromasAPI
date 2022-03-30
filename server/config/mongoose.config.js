const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bromas", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => console.log("Se ha establacido la conexión a la base de datos"))
    .catch(err => console.log("Ocurrió un error al conectar a la base de datos", err));