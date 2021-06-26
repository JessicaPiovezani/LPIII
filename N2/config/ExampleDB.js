const mongoose = require("mongoose");

//Para utilizar o aplciativo corretamente, altere a string de conexão e o nome deste arquivo para "db.js"

exports.connectionBD = function (){
    // Conexão com BD
    mongoose.connect("mongodb+srv:<yourstringconnection>"); //String de conexão
    mongoose.connection.on("connected", function () {
    console.log("Connected to Database");
    });

    // Mensagem de Erro
    mongoose.connection.on("error", (err) => {
    console.log("Database error "+err);
    });
}
