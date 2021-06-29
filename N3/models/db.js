const mongoose = require("mongoose");

exports.connectionBD = function (){
    // Conexão com BD
    mongoose.connect("");
    mongoose.connection.on("connected", function () {
    console.log("Connected to Database");
    });

    // Mensagem de Erro
    mongoose.connection.on("error", (err) => {
    console.log("Database error "+err);
    });
}