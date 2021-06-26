const Room = require("../models/Room");


//Adicionar cadastro
exports.add = function (req, res, next) {
    Room.create(req.body).then(function(room){
        res.send(room);
    }).catch(next);
};

//Listar todos os cadastros
exports.listClients = function (req, res) {
    Room.findById({_id: req.params.id}, req.body).then(function(room){
    res.send(room);
    });
};

//Atualização de cadastro
exports.update = function (req, res, next) {
    Room.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Room.findOne({_id: req.params.id}).then(function(room){
    res.send(room);
    });
    }).catch(next);
};
