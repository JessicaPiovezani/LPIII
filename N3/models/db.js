const mongoose = require("mongoose");

exports.connectionBD = function (){
    // Conexão com BD
    mongoose.connect("mongodb+srv://LPIII:n3lpiii@n3.dfufy.mongodb.net/N3?retryWrites=true&w=majority");
    mongoose.connection.on("connected", function () {
    console.log("Connected to Database");
    });

    // Mensagem de Erro
    mongoose.connection.on("error", (err) => {
    console.log("Database error "+err);
    });
}
