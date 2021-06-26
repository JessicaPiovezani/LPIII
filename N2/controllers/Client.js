const Client = require("../models/Client");

//Adicionar cadastro
exports.add = function (req, res, next) {
    Client.create(req.body).then(function(client){
        res.send(client);
    }).catch(next);
};

//Buscar cadastro por nome
exports.listClient = function (req, res) {
    Client.find({name: req.params.name}).then(function(client){
    res.send(client);
    });
};

//Listar todos os cadastros
exports.listClients = function (req, res) {
    Client.find({}).then(function(client){
    res.send(client);
    });
};

//Deletar cadastro por ID
exports.delete = function (req, res, next) {
    Client.findByIdAndRemove({_id: req.params.id}).then(function(client){
        res.send(client);
      }).catch(next);
};