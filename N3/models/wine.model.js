const mongoose = require("mongoose");

// Wine Schema
var wineSchema = new mongoose.Schema({
    fixedAcidity: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    volatileAcidity: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    citricAcid: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    residualSugar: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    chlorides: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    freeSulfurDioxide: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    totalSulfurDioxide: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    density: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    ph: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    sulphates: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    alcohol: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
    quality: {
        type: String,
        required: [true, "*Campo obrigatório!"]
        },
});

mongoose.model('Wine', wineSchema);